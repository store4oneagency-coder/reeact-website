import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { supabaseServer } from '@/app/lib/supabaseServerClient';
import { KNOWLEDGE_BASE } from '@/app/lib/chatKnowledgeBase';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { message, visitorId, conversationId, pageOrigin } = await req.json();

    if (!message?.trim()) {
      return NextResponse.json({ error: 'Message vide.' }, { status: 400 });
    }
    if (!visitorId) {
      return NextResponse.json({ error: 'visitorId requis.' }, { status: 400 });
    }

    // ── Rate limiting : max 20 messages utilisateur / heure / visiteur ────────
    const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
    const { data: recentConvs } = await supabaseServer
      .from('chat_conversations')
      .select('id')
      .eq('visitor_id', visitorId)
      .gte('created_at', oneHourAgo);

    if (recentConvs && recentConvs.length > 0) {
      const convIds = recentConvs.map((c: { id: string }) => c.id);
      const { count } = await supabaseServer
        .from('chat_messages')
        .select('id', { count: 'exact', head: true })
        .eq('role', 'user')
        .in('conversation_id', convIds);

      if ((count ?? 0) >= 20) {
        return NextResponse.json(
          { error: 'Limite de messages atteinte. Réessayez dans une heure.' },
          { status: 429 }
        );
      }
    }

    // ── Résoudre ou créer la conversation ────────────────────────────────────
    let convId: string = conversationId;
    let currentCount = 0;
    let ctaAlreadyShown = false;

    if (!convId) {
      const { data, error } = await supabaseServer
        .from('chat_conversations')
        .insert({
          visitor_id: visitorId,
          page_origin: pageOrigin ?? null,
        })
        .select('id')
        .single();

      if (error || !data) {
        console.error('Erreur création conversation:', error);
        return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
      }
      convId = data.id;
    } else {
      // Récupérer l'état actuel de la conversation
      const { data: conv } = await supabaseServer
        .from('chat_conversations')
        .select('message_count, cta_shown')
        .eq('id', convId)
        .single();

      currentCount = conv?.message_count ?? 0;
      ctaAlreadyShown = conv?.cta_shown ?? false;
    }

    // ── Récupérer l'historique (20 derniers messages = 10 échanges) ───────────
    const { data: history } = await supabaseServer
      .from('chat_messages')
      .select('role, content')
      .eq('conversation_id', convId)
      .order('created_at', { ascending: false })
      .limit(20);

    const messages = [
      ...((history ?? []) as { role: string; content: string }[]).reverse(),
      { role: 'user' as const, content: message.trim() },
    ];

    // ── Appel OpenAI GPT-4o mini ──────────────────────────────────────────────
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      max_tokens: 600,
      temperature: 0.7,
      messages: [
        { role: 'system', content: KNOWLEDGE_BASE },
        ...messages,
      ],
    });

    const reply = completion.choices[0]?.message?.content ?? '';
    const tokensUsed = completion.usage?.total_tokens ?? 0;

    // ── Sauvegarder les deux messages ─────────────────────────────────────────
    await supabaseServer.from('chat_messages').insert([
      {
        conversation_id: convId,
        role: 'user',
        content: message.trim(),
      },
      {
        conversation_id: convId,
        role: 'assistant',
        content: reply,
        tokens_used: tokensUsed,
      },
    ]);

    // ── Mettre à jour le compteur + décider du CTA ────────────────────────────
    const newCount = currentCount + 2;
    const shouldShowCta = newCount >= 4 && !ctaAlreadyShown;

    await supabaseServer
      .from('chat_conversations')
      .update({
        message_count: newCount,
        ...(shouldShowCta ? { cta_shown: true } : {}),
      })
      .eq('id', convId);

    return NextResponse.json({
      reply,
      conversationId: convId,
      shouldShowCta,
    });

  } catch (err) {
    console.error('Erreur chatbot:', err);
    return NextResponse.json(
      { reply: 'Désolé, je rencontre une difficulté technique. Réessayez dans un instant.', error: true },
      { status: 200 } // 200 pour afficher le message d'erreur dans le widget
    );
  }
}
