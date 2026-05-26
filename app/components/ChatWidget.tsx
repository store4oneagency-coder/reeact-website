'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

// ── Design tokens (identiques à page.tsx et Nav.tsx) ──────────────────────────
const TEAL_DEEP  = '#1B3645';
const TEAL       = '#27475A';
const ORANGE     = '#FF7A3A';
const CREAM      = '#F1ECE3';
const PAPER      = '#FBF8F2';
const GREEN      = '#3FB37F';
const BODY_FONT  = '"Inter Tight", system-ui, sans-serif';
const MONO_FONT  = '"JetBrains Mono", monospace';

// ── Types ─────────────────────────────────────────────────────────────────────
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// ── Helpers session ───────────────────────────────────────────────────────────
function getOrCreateVisitorId(): string {
  if (typeof window === 'undefined') return '';
  let id = sessionStorage.getItem('reeact_visitor_id');
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem('reeact_visitor_id', id);
  }
  return id;
}

function getStoredConversationId(): string | null {
  if (typeof window === 'undefined') return null;
  return sessionStorage.getItem('reeact_conversation_id');
}

function storeConversationId(id: string): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem('reeact_conversation_id', id);
}

// ── Monogramme Reeact ─────────────────────────────────────────────────────────
function Monogram({ size = 28, color = CREAM }: { size?: number; color?: string }) {
  return (
    <div
      style={{
        width: size,
        height: size * (731 / 1325),
        background: color,
        WebkitMask: 'url(/ee-mono-tight.png) center/contain no-repeat',
        mask: 'url(/ee-mono-tight.png) center/contain no-repeat',
        flexShrink: 0,
      }}
    />
  );
}

// ── Icône Send ────────────────────────────────────────────────────────────────
function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13" /><path d="M22 2 15 22 11 13 2 9l20-7z" />
    </svg>
  );
}

// ── Icône MessageCircle ───────────────────────────────────────────────────────
function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

// ── Indicateur de frappe ──────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div style={{ display: 'flex', gap: 4, padding: '12px 16px', alignItems: 'center' }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: TEAL,
            opacity: 0.4,
            animation: `chatBounce 1.2s ease-in-out ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ── Composant principal ───────────────────────────────────────────────────────
export default function ChatWidget() {
  const [isOpen, setIsOpen]               = useState(false);
  const [messages, setMessages]           = useState<Message[]>([]);
  const [input, setInput]                 = useState('');
  const [isLoading, setIsLoading]         = useState(false);
  const [showCta, setShowCta]             = useState(false);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  // Message d'accueil initial (injecté sans appel API)
  const WELCOME: Message = {
    role: 'assistant',
    content: 'Bonjour ! Je suis l\'assistant Reeact. Posez-moi vos questions sur nos fonctionnalités, nos tarifs ou nos offres sectorielles. Comment puis-je vous aider ?',
  };

  // Init : récupérer la conversation existante depuis sessionStorage
  useEffect(() => {
    const storedConvId = getStoredConversationId();
    if (storedConvId) setConversationId(storedConvId);
  }, []);

  // Scroll vers le bas à chaque nouveau message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Focus sur l'input à l'ouverture
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setHasNewMessage(false);
      // Injecter le message d'accueil si c'est la première ouverture
      if (messages.length === 0) {
        setMessages([WELCOME]);
      }
    }
  }, [isOpen]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: text }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          visitorId: getOrCreateVisitorId(),
          conversationId,
          pageOrigin: typeof window !== 'undefined' ? window.location.pathname : '/',
        }),
      });

      const data = await res.json();

      if (!conversationId && data.conversationId) {
        storeConversationId(data.conversationId);
        setConversationId(data.conversationId);
      }

      const reply = data.reply || 'Désolé, je n\'ai pas pu traiter votre demande.';
      setMessages((prev) => [...prev, { role: 'assistant', content: reply }]);

      if (data.shouldShowCta) setShowCta(true);

      // Badge de nouveau message si widget fermé
      if (!isOpen) setHasNewMessage(true);

    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Désolé, je rencontre une difficulté technique. Réessayez dans un instant.' },
      ]);
    }

    setIsLoading(false);
  }, [input, isLoading, conversationId, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* ── Styles animés ─────────────────────────────────────────── */}
      <style>{`
        @keyframes chatBounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.4; }
          40% { transform: translateY(-6px); opacity: 1; }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes chatFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .chat-panel {
          animation: chatSlideUp 0.25s ease forwards;
        }
        .chat-message {
          animation: chatFadeIn 0.2s ease forwards;
        }
        .chat-input:focus {
          outline: none;
          border-color: ${TEAL} !important;
        }
        .chat-send-btn:hover {
          background: ${ORANGE}dd !important;
        }
        .chat-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .chat-close-btn:hover {
          background: rgba(255,255,255,0.15) !important;
        }
        .chat-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 8px 32px rgba(255, 122, 58, 0.5) !important;
        }
      `}</style>

      {/* ── Bouton flottant ───────────────────────────────────────── */}
      <div style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
      }}>
        {/* Bulle message */}
        {!isOpen && (
          <div style={{
            background: '#fff',
            color: TEAL_DEEP,
            fontFamily: BODY_FONT,
            fontSize: 13,
            fontWeight: 600,
            padding: '9px 14px',
            borderRadius: 20,
            boxShadow: '0 4px 16px rgba(27,54,69,0.13)',
            border: `1px solid ${TEAL}18`,
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}>
            Je suis là pour vous renseigner
          </div>
        )}

        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Ouvrir l'assistant Reeact"
          className="chat-fab"
          style={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            background: ORANGE,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            boxShadow: '0 4px 20px rgba(255, 122, 58, 0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            flexShrink: 0,
          }}
        >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <>
            <ChatIcon />
            {hasNewMessage && (
              <span style={{
                position: 'absolute',
                top: 10,
                right: 10,
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: GREEN,
                border: '2px solid #fff',
              }} />
            )}
          </>
        )}
      </button>
      </div>

      {/* ── Panel du chat ─────────────────────────────────────────── */}
      {isOpen && (
        <div
          className="chat-panel"
          style={{
            position: 'fixed',
            bottom: 96,
            right: 28,
            zIndex: 9998,
            width: 360,
            maxWidth: 'calc(100vw - 40px)',
            height: 520,
            maxHeight: 'calc(100vh - 120px)',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            overflow: 'hidden',
            boxShadow: '0 24px 64px rgba(27, 54, 69, 0.22), 0 4px 16px rgba(0,0,0,0.08)',
            border: `1px solid ${TEAL}22`,
          }}
        >
          {/* Header */}
          <div style={{
            background: TEAL_DEEP,
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            flexShrink: 0,
          }}>
            <Monogram size={26} color={CREAM} />
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: '"Archivo Black", system-ui, sans-serif',
                color: CREAM,
                fontSize: 14,
                letterSpacing: '0.02em',
              }}>
                Assistant Reeact
              </div>
              <div style={{
                fontFamily: MONO_FONT,
                color: `${CREAM}70`,
                fontSize: 10,
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                marginTop: 2,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: GREEN, display: 'inline-block' }} />
                En ligne
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="chat-close-btn"
              style={{
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: `${CREAM}80`,
                padding: '4px 6px',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 0.15s',
              }}
              aria-label="Fermer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            background: PAPER,
            padding: '12px 12px 4px',
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className="chat-message"
                style={{
                  display: 'flex',
                  justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div style={{
                  maxWidth: '82%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'user'
                    ? '16px 16px 4px 16px'
                    : '16px 16px 16px 4px',
                  background: msg.role === 'user' ? TEAL_DEEP : '#fff',
                  color: msg.role === 'user' ? CREAM : TEAL,
                  fontFamily: BODY_FONT,
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  boxShadow: msg.role === 'assistant' ? `0 1px 4px ${TEAL}12` : 'none',
                  border: msg.role === 'assistant' ? `1px solid ${TEAL}12` : 'none',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Indicateur de frappe */}
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  background: '#fff',
                  borderRadius: '16px 16px 16px 4px',
                  border: `1px solid ${TEAL}12`,
                  boxShadow: `0 1px 4px ${TEAL}12`,
                }}>
                  <TypingIndicator />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* CTA inscription */}
          {showCta && (
            <div style={{
              background: `${ORANGE}12`,
              borderTop: `1px solid ${ORANGE}30`,
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexShrink: 0,
            }}>
              <div style={{ flex: 1 }}>
                <p style={{
                  fontFamily: BODY_FONT,
                  fontSize: 12.5,
                  color: TEAL,
                  margin: 0,
                  marginBottom: 3,
                  fontWeight: 600,
                }}>
                  Envie de surveiller votre réputation ?
                </p>
                <p style={{
                  fontFamily: BODY_FONT,
                  fontSize: 11.5,
                  color: `${TEAL}80`,
                  margin: 0,
                }}>
                  Essai gratuit, sans carte bancaire.
                </p>
              </div>
              <a
                href="https://app.reeact.io/register"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: ORANGE,
                  color: '#fff',
                  fontFamily: BODY_FONT,
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '8px 14px',
                  borderRadius: 10,
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                Créer un compte →
              </a>
            </div>
          )}

          {/* Input */}
          <div style={{
            background: '#fff',
            borderTop: `1px solid ${TEAL}12`,
            padding: '10px 12px',
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            flexShrink: 0,
          }}>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Posez votre question…"
              disabled={isLoading}
              className="chat-input"
              style={{
                flex: 1,
                border: `1.5px solid ${TEAL}22`,
                borderRadius: 12,
                padding: '9px 14px',
                fontFamily: BODY_FONT,
                fontSize: 13.5,
                color: TEAL_DEEP,
                background: PAPER,
                transition: 'border-color 0.15s',
                outline: 'none',
              }}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="chat-send-btn"
              aria-label="Envoyer"
              style={{
                width: 38,
                height: 38,
                borderRadius: 12,
                background: ORANGE,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                flexShrink: 0,
                transition: 'background 0.15s, opacity 0.15s',
              }}
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
