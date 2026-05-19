import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Service email non configuré." }, { status: 500 });
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender:  { name: "Formulaire Reeact", email: "contact@reeact.io" },
        to:      [{ email: "contact@reeact.io", name: "Équipe Reeact" }],
        replyTo: { email: email.trim(), name: name.trim() },
        subject: `[Contact] ${subject?.trim() || "Demande depuis reeact.io"} — ${name.trim()}`,
        htmlContent: `
          <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
            <div style="background: #1B3645; padding: 24px 28px; border-radius: 12px 12px 0 0;">
              <p style="color: #F1ECE3; font-size: 12px; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 8px; opacity: 0.6;">NOUVEAU MESSAGE</p>
              <h1 style="color: #F1ECE3; margin: 0; font-size: 22px; font-weight: 700;">Formulaire de contact Reeact</h1>
            </div>
            <div style="background: #fff; border: 1px solid #E2E8F0; border-top: none; padding: 28px; border-radius: 0 0 12px 12px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; width: 130px; font-weight: 600;">Nom</td>
                  <td style="padding: 12px 0; color: #1B3645; font-weight: 600;">${name.trim()}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-weight: 600;">Email</td>
                  <td style="padding: 12px 0;"><a href="mailto:${email.trim()}" style="color: #FF7A3A;">${email.trim()}</a></td>
                </tr>
                ${subject?.trim() ? `
                <tr style="border-bottom: 1px solid #F1F5F9;">
                  <td style="padding: 12px 0; color: #64748B; font-weight: 600;">Sujet</td>
                  <td style="padding: 12px 0; color: #1B3645;">${subject.trim()}</td>
                </tr>` : ""}
                <tr>
                  <td style="padding: 12px 0; color: #64748B; font-weight: 600; vertical-align: top;">Message</td>
                  <td style="padding: 12px 0; color: #1B3645; line-height: 1.6; white-space: pre-wrap;">${message.trim()}</td>
                </tr>
              </table>
              <div style="margin-top: 24px; padding: 14px 18px; background: #FBF8F2; border-radius: 8px; font-size: 12px; color: #64748B;">
                Envoyé depuis <strong>reeact.io</strong> · Répondez directement à cet email pour contacter ${name.trim()}.
              </div>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error((err as { message?: string }).message || `Brevo error ${res.status}`);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact route]", err);
    return NextResponse.json({ error: (err as Error).message || "Erreur serveur" }, { status: 500 });
  }
}
