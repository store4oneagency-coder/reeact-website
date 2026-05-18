"use client";

import { useRef, useEffect, useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const TEAL       = "#27475A";
const TEAL_DEEP  = "#1B3645";
const TEAL_LIGHT = "#3A6378";
const CREAM      = "#F1ECE3";
const PAPER      = "#FBF8F2";
const INK        = "#15242D";
const ORANGE     = "#FF7A3A";
const GREEN      = "#3FB37F";
const BLUE       = "#3D8BE0";
const RED        = "#E94E4E";

// ─── Font helpers ─────────────────────────────────────────────────────────────
const DISPLAY = '"Archivo Black", "Arial Black", sans-serif';
const BODY    = '"Inter Tight", system-ui, sans-serif';
const MONO    = '"JetBrains Mono", "Courier New", monospace';

// ─── Primitives ───────────────────────────────────────────────────────────────
const Wordmark = ({ height = 36, color = TEAL }: { height?: number; color?: string }) => {
  const ratio = 1374 / 473;
  return (
    <div style={{
      height, width: height * ratio, display: "inline-block",
      backgroundColor: color,
      WebkitMaskImage: "url(/reeact-logo.png)", maskImage: "url(/reeact-logo.png)",
      WebkitMaskSize: "contain", maskSize: "contain",
      WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
      WebkitMaskPosition: "center", maskPosition: "center",
    }} />
  );
};

const Monogram = ({ size = 80, color = TEAL }: { size?: number; color?: string }) => {
  const ratio = 1325 / 731;
  return (
    <div style={{
      height: size, width: size * ratio, display: "inline-block",
      backgroundColor: color,
      WebkitMaskImage: "url(/ee-mono-tight.png)", maskImage: "url(/ee-mono-tight.png)",
      WebkitMaskSize: "contain", maskSize: "contain",
      WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
      WebkitMaskPosition: "center", maskPosition: "center",
    }} />
  );
};

const Btn = ({
  children, href = "#", primary = false, dark = false, size = "lg", icon = "→", onClick,
}: {
  children: React.ReactNode; href?: string; primary?: boolean; dark?: boolean;
  size?: "lg" | "sm"; icon?: string | null; onClick?: () => void;
}) => {
  const pad = size === "lg" ? "18px 28px" : "12px 20px";
  const fs  = size === "lg" ? 18 : 15;
  const bg  = primary ? ORANGE : (dark ? "transparent" : "#fff");
  const fg  = primary ? "#fff" : (dark ? CREAM : TEAL);
  const border = primary ? "none" : `1.5px solid ${dark ? "rgba(241,236,227,0.25)" : "rgba(20,30,40,0.12)"}`;
  return (
    <a href={href} onClick={onClick} style={{
      display: "inline-flex", alignItems: "center", gap: 10,
      padding: pad, borderRadius: 999,
      background: bg, color: fg, border,
      fontFamily: BODY, fontWeight: 600, fontSize: fs,
      textDecoration: "none", whiteSpace: "nowrap",
      transition: "transform .15s ease, box-shadow .15s ease",
      cursor: "pointer",
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
      if (primary) (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 24px -10px rgba(255,122,58,0.5)";
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      (e.currentTarget as HTMLElement).style.boxShadow = "none";
    }}>
      {children}
      {icon && <span style={{ fontSize: fs + 2 }}>{icon}</span>}
    </a>
  );
};

const Chip = ({
  children, color = TEAL, mono = true,
}: { children: React.ReactNode; color?: string; mono?: boolean }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: 8,
    padding: "7px 14px", borderRadius: 999,
    border: `1.5px solid ${color}55`,
    background: "transparent", color,
    fontFamily: mono ? MONO : BODY,
    fontSize: 13, fontWeight: 600,
    letterSpacing: mono ? "0.1em" : "0",
    textTransform: mono ? "uppercase" : "none",
  }}>{children}</span>
);

// Reveal on scroll
function Reveal({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setShown(true); }, { threshold: 0.12 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{
      opacity: shown ? 1 : 0,
      transform: shown ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity .7s ease ${delay}ms, transform .7s cubic-bezier(.2,.7,.3,1) ${delay}ms`,
    }}>{children}</div>
  );
}

const SectionHeader = ({
  eyebrow, title, lead, dark = false, align = "left",
}: {
  eyebrow: string; title: React.ReactNode; lead?: string; dark?: boolean; align?: "left" | "center";
}) => (
  <div style={{
    maxWidth: 980, marginInline: align === "center" ? "auto" : 0,
    textAlign: align, color: dark ? CREAM : INK,
  }}>
    <Chip color={dark ? CREAM : TEAL}>{eyebrow}</Chip>
    <h2 style={{
      fontFamily: DISPLAY, fontWeight: 900,
      fontSize: "clamp(48px, 6.5vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.04em",
      margin: "24px 0 16px",
    }}>{title}</h2>
    {lead && <p style={{
      fontFamily: BODY, fontSize: 22, lineHeight: 1.45,
      color: dark ? "rgba(241,236,227,0.78)" : "rgba(20,30,40,0.68)",
      margin: 0, maxWidth: 720,
    }}>{lead}</p>}
  </div>
);

// ─── Nav ──────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? "14px 40px" : "22px 40px",
      background: scrolled ? "rgba(251,248,242,0.92)" : "transparent",
      backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(20,30,40,0.06)" : "1px solid transparent",
      transition: "all .25s ease",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      <a href="#hero" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
        <Wordmark height={40} color={TEAL} />
      </a>

      {/* Desktop links */}
      <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden-mobile">
        {[
          ["Fonctionnalités", "#features"],
          ["Tableau de bord", "#dashboard"],
          ["Tarifs", "#pricing"],
          ["Comment ça marche", "#how"],
        ].map(([l, h]) => (
          <a key={h} href={h} style={{
            color: TEAL_DEEP, textDecoration: "none", fontSize: 15, fontWeight: 500,
            fontFamily: BODY, opacity: 0.78, transition: "opacity .15s",
          }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "0.78"}>
            {l}
          </a>
        ))}
      </div>

      {/* Desktop CTA */}
      <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="hidden-mobile">
        <a href="/app" style={{ color: TEAL_DEEP, textDecoration: "none", fontSize: 15, fontWeight: 500, opacity: 0.78 }}>Connexion</a>
        <Btn href="/subscription" primary size="sm">Essai gratuit</Btn>
      </div>

      {/* Mobile burger */}
      <button
        onClick={() => setOpen(!open)}
        className="show-mobile"
        style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: TEAL_DEEP }}
        aria-label="Menu"
      >
        {open
          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        }
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(251,248,242,0.97)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${TEAL}11`, padding: "16px 24px 24px",
          display: "flex", flexDirection: "column", gap: 4,
        }}>
          {[["Fonctionnalités","#features"],["Tableau de bord","#dashboard"],["Tarifs","#pricing"],["Comment ça marche","#how"]].map(([l, h]) => (
            <a key={h} href={h} onClick={() => setOpen(false)} style={{
              color: TEAL_DEEP, textDecoration: "none", fontSize: 15, fontWeight: 500,
              padding: "10px 8px", borderRadius: 8, fontFamily: BODY,
            }}>{l}</a>
          ))}
          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="/app" style={{ textAlign: "center", padding: "12px", border: `1.5px solid ${TEAL}22`, borderRadius: 12, color: TEAL_DEEP, textDecoration: "none", fontSize: 15, fontWeight: 500 }}>Connexion</a>
            <a href="/subscription" style={{ textAlign: "center", padding: "12px", background: ORANGE, borderRadius: 12, color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600 }}>Essai gratuit</a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Mention Feed ─────────────────────────────────────────────────────────
function HeroMentionFeed() {
  const mentions = [
    { src: "google.fr",     txt: "\"Service impeccable, je recommande à 100%\"",                sent: "pos", age: "à l'instant", star: 5 },
    { src: "tiktok.com",    txt: "\"Vidéo qui parle du produit · 12K vues en 24h\"",            sent: "neu", age: "il y a 7 min" },
    { src: "trustpilot",    txt: "\"Livraison à revoir, sinon RAS\"",                            sent: "neu", age: "il y a 18 min", star: 3 },
    { src: "facebook.com",  txt: "\"Fuyez, expérience catastrophique.\"",                        sent: "neg", age: "il y a 41 min", star: 1 },
    { src: "lemonde.fr",    txt: "Article mentionnant la marque dans rubrique éco",              sent: "pos", age: "il y a 2 h" },
  ];
  const sentColor: Record<string, string> = { pos: GREEN, neu: BLUE, neg: RED };
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{
      background: TEAL_DEEP, color: CREAM, borderRadius: 28,
      padding: 28, position: "relative", overflow: "hidden",
      boxShadow: "0 30px 60px -30px rgba(20,30,40,0.5), 0 0 0 1px rgba(255,255,255,0.04)",
    }}>
      {/* header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 10, height: 10, borderRadius: 999, background: RED, display: "inline-block", animation: "pulse 1.6s ease-in-out infinite" }} />
          <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.12em", color: "rgba(241,236,227,0.7)" }}>LIVE · MONITORING</span>
        </div>
        <span style={{ fontFamily: MONO, fontSize: 12, color: "rgba(241,236,227,0.5)" }}>5 mentions / 1h</span>
      </div>

      {/* score strip */}
      <div style={{
        background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: "14px 18px",
        display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18,
      }}>
        <div>
          <div style={{ fontFamily: MONO, fontSize: 11, opacity: 0.6, letterSpacing: "0.1em" }}>SCORE DE RÉPUTATION</div>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontFamily: DISPLAY, fontSize: 38, lineHeight: 1, letterSpacing: "-0.03em" }}>74</span>
            <span style={{ opacity: 0.5 }}>/100</span>
            <span style={{ color: GREEN, fontSize: 14, marginLeft: 8 }}>↑ +6 cette semaine</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 14, fontSize: 13 }}>
          <span><span style={{ color: GREEN }}>●</span> 48</span>
          <span><span style={{ color: BLUE }}>●</span> 105</span>
          <span><span style={{ color: RED }}>●</span> 9</span>
        </div>
      </div>

      {/* feed */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {mentions.map((m, i) => (
          <div key={`${tick}-${i}`} style={{
            background: i === 0 ? "rgba(255,255,255,0.07)" : "rgba(255,255,255,0.025)",
            borderRadius: 14, padding: "12px 14px",
            borderLeft: `3px solid ${sentColor[m.sent]}`,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
              <span style={{ fontFamily: MONO, fontSize: 11, opacity: 0.6, letterSpacing: "0.05em" }}>{m.src}</span>
              <span style={{ fontSize: 11, opacity: 0.45 }}>{m.age}</span>
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.4 }}>{m.txt}</div>
            {m.star && (
              <div style={{ marginTop: 4, color: sentColor[m.sent], fontSize: 11 }}>
                {"★".repeat(m.star)}<span style={{ opacity: 0.3 }}>{"★".repeat(5 - m.star)}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* scanning line */}
      <div style={{
        position: "absolute", left: 0, right: 0, top: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`,
        animation: "scan 3.5s ease-in-out infinite",
      }} />
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" style={{
      background: PAPER, color: INK, minHeight: "100vh",
      padding: "160px 40px 80px", position: "relative", overflow: "hidden",
    }}>
      {/* faded monogram */}
      <div style={{ position: "absolute", right: -180, top: 80, opacity: 0.04, pointerEvents: "none" }}>
        <Monogram size={680} color={TEAL} />
      </div>

      <div style={{
        maxWidth: 1400, margin: "0 auto",
        display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 64, alignItems: "center",
        position: "relative",
      }} className="hero-grid">
        <div>
          <Reveal>
            <Chip color={TEAL}>● Nouvelle vague · e-réputation 2026</Chip>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{
              fontFamily: DISPLAY, fontWeight: 900,
              fontSize: "clamp(64px, 8.6vw, 140px)", lineHeight: 0.9, letterSpacing: "-0.05em",
              margin: "28px 0 24px", color: TEAL_DEEP,
            }}>
              Découvrez<br />
              ce qu&apos;on{" "}
              <span style={{ display: "inline-block", position: "relative" }}>
                dit
                <svg viewBox="0 0 100 14" preserveAspectRatio="none" style={{
                  position: "absolute", left: 0, right: 0, bottom: "-8%",
                  width: "100%", height: "0.18em",
                }}>
                  <path d="M2 8 Q 50 0 98 8" fill="none" stroke={ORANGE} strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              <br />
              de <span style={{ color: ORANGE }}>vous</span>.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{
              fontFamily: BODY, fontSize: 22, lineHeight: 1.45,
              color: "rgba(20,30,40,0.72)", margin: "0 0 36px", maxWidth: 560,
            }}>
              Reeact surveille Google, les réseaux et la presse 24h/24, analyse chaque mention par IA, et déclenche les bonnes interventions — avant que ça parte.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <Btn primary href="/subscription">Démarrer l&apos;essai gratuit</Btn>
              <Btn href="#how" icon="↓">Voir comment ça marche</Btn>
            </div>
            <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 18, color: "rgba(20,30,40,0.55)", fontSize: 14, flexWrap: "wrap" }}>
              <span>✓ 14 jours offerts</span>
              <span>✓ Sans CB</span>
              <span>✓ Hébergement français</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} y={32}>
          <HeroMentionFeed />
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)",
        color: "rgba(20,30,40,0.4)", fontFamily: MONO, fontSize: 11, letterSpacing: "0.15em",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
      }}>
        <span>DÉROULEZ</span>
        <span style={{ animation: "bounce 2s ease-in-out infinite" }}>↓</span>
      </div>
    </section>
  );
}

// ─── Sources Marquee ──────────────────────────────────────────────────────────
function Sources() {
  const sources = [
    "Google","Facebook","Instagram","TikTok","X / Twitter",
    "LinkedIn","YouTube","Trustpilot","TripAdvisor","Reddit",
    "Le Monde","Le Figaro","BFM","PagesJaunes",
  ];
  return (
    <section style={{ background: PAPER, padding: "60px 0 40px", borderTop: `1px solid ${TEAL}11`, overflow: "hidden" }}>
      <div style={{
        textAlign: "center", fontFamily: MONO, fontSize: 12,
        letterSpacing: "0.18em", color: "rgba(20,30,40,0.45)",
        marginBottom: 28, textTransform: "uppercase",
      }}>
        On surveille 200+ plateformes pour vous
      </div>
      <div style={{
        display: "flex", gap: 64,
        animation: "marquee 38s linear infinite",
        whiteSpace: "nowrap", width: "max-content",
      }}>
        {[...sources, ...sources].map((s, i) => (
          <span key={i} style={{
            fontFamily: DISPLAY, fontSize: 38, letterSpacing: "-0.04em",
            color: TEAL, opacity: 0.45,
          }}>{s}</span>
        ))}
      </div>
    </section>
  );
}

// ─── How it works ─────────────────────────────────────────────────────────────
const StepIcon = ({ kind, color }: { kind: string; color: string }) => {
  const s = 56;
  if (kind === "scan") return (
    <svg width={s} height={s} viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="20" stroke={color} strokeWidth="3" strokeDasharray="3 4" />
      <circle cx="28" cy="28" r="6" fill={color} />
      <line x1="28" y1="2" x2="28" y2="10" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
  if (kind === "brain") return (
    <svg width={s} height={s} viewBox="0 0 56 56" fill="none">
      <rect x="6" y="14" width="44" height="28" rx="6" stroke={color} strokeWidth="3" />
      <circle cx="18" cy="28" r="3" fill={color} />
      <circle cx="28" cy="28" r="3" fill={color} />
      <circle cx="38" cy="28" r="3" fill={color} />
    </svg>
  );
  return (
    <svg width={s} height={s} viewBox="0 0 56 56" fill="none">
      <path d="M28 6 L48 14 V28 C48 40 28 50 28 50 C28 50 8 40 8 28 V14 L28 6 Z" stroke={color} strokeWidth="3" strokeLinejoin="round" />
      <path d="M20 28 L26 34 L38 22" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

function How() {
  const steps = [
    { n: "01", title: "On scanne, sans relâche.", body: "Vous nous donnez un mot-clé — votre marque, votre nom, votre produit. Reeact balaie le web 24h/24 : moteurs, réseaux, forums, presse, plateformes d'avis.", stat: "200+ sources", icon: "scan" },
    { n: "02", title: "L'IA trie le bruit du signal.", body: "Chaque mention est analysée : positive, neutre, négative. Vous recevez une alerte e-mail dès qu'un contenu mérite votre attention.", stat: "Sentiment temps réel", icon: "brain" },
    { n: "03", title: "Vous reprenez la main.", body: "Réponse, signalement, droit à l'oubli, déréférencement légal : Reeact vous outille pour réagir — et déclenche l'intervention juridique si besoin.", stat: "Action en 48h", icon: "shield" },
  ];
  return (
    <section id="how" style={{ background: "#EAE3D6", color: INK, padding: "140px 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Comment ça marche"
          title={<>Trois étapes.<br />Zéro angle mort.</>}
          lead="Reeact simplifie la veille e-réputation en un cycle continu : détecter, analyser, agir. Aucune action ne se perd entre les outils."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 80 }} className="steps-grid">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div style={{
                background: i === 2 ? TEAL : "#fff",
                color: i === 2 ? CREAM : INK,
                borderRadius: 24, padding: 36, minHeight: 480, boxSizing: "border-box",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                position: "relative", overflow: "hidden",
                boxShadow: i === 2 ? "0 30px 60px -30px rgba(20,30,40,0.4)" : "0 1px 0 rgba(0,0,0,0.04), 0 16px 40px -24px rgba(20,30,40,0.18)",
              }}>
                <div>
                  <div style={{ fontFamily: MONO, fontSize: 13, opacity: 0.55, letterSpacing: "0.15em" }}>ÉTAPE {s.n}</div>
                  <h3 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 38, lineHeight: 0.95, letterSpacing: "-0.03em", margin: "16px 0 18px" }}>{s.title}</h3>
                  <p style={{ fontSize: 17, lineHeight: 1.5, opacity: 0.85, margin: 0 }}>{s.body}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ fontFamily: MONO, fontSize: 13, color: i === 2 ? ORANGE : TEAL, fontWeight: 700, letterSpacing: "0.04em" }}>{s.stat}</div>
                  <StepIcon kind={s.icon} color={i === 2 ? CREAM : TEAL} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
function Features() {
  const features = [
    { icon: "◉", title: "Surveillance Google",    lead: "Détection 24h/24 en temps réel",    body: "Chaque nouvelle page indexée mentionnant votre marque vous est remontée. Position SERP, type de site, snippet.", tag: "TEMPS RÉEL" },
    { icon: "◐", title: "Analyse de sentiment IA", lead: "Positif · neutre · négatif",         body: "Notre modèle classe chaque mention en moins de 200 ms. Filtres avancés sur l'intensité, l'audience, la portée.", tag: "IA" },
    { icon: "✦", title: "Alertes instantanées",    lead: "E-mail dès qu'une mention apparaît", body: "Notifications immédiates : nouveau pic, contenu critique, vague suspecte. Configurable par seuil et canal.", tag: "NOTIF" },
    { icon: "▦", title: "Tableau de bord complet", lead: "Rapports, stats, historique",         body: "Score de réputation, courbes 7/30/90 jours, export PDF. Partage en lecture seule pour votre équipe ou direction.", tag: "DATA" },
    { icon: "☷", title: "Multi mots-clés & sources",lead: "1 inclus, illimités à la carte",    body: "Surveillez votre marque, vos produits, vos dirigeants, vos concurrents. Ajoutez des plateformes à la demande.", tag: "EXTENSIBLE" },
    { icon: "⚖", title: "Interventions légales",   lead: "Suppression de contenus nuisibles",  body: "Cabinet partenaire pour le déréférencement, le droit à l'oubli, les retraits LCEN. Dès 500 € TTC l'intervention.", tag: "JURIDIQUE" },
  ];
  return (
    <section id="features" style={{ background: PAPER, color: INK, padding: "140px 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Fonctionnalités"
          title={<>Tout ce qu&apos;il faut.<br />Rien de plus.</>}
          lead="Six modules pensés pour les marques qui n'ont pas le temps de jongler entre dix outils."
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 72 }} className="feat-grid">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <article style={{
                background: "#fff", borderRadius: 22, padding: 32, minHeight: 340, boxSizing: "border-box",
                display: "flex", flexDirection: "column",
                border: `1px solid ${TEAL}11`,
                transition: "transform .2s ease, box-shadow .2s ease",
                cursor: "default",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 48px -28px rgba(20,30,40,0.25)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: TEAL, color: CREAM, fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center" }}>{f.icon}</div>
                  <span style={{ fontFamily: MONO, fontSize: 10, color: ORANGE, letterSpacing: "0.15em", fontWeight: 700, background: `${ORANGE}11`, padding: "4px 8px", borderRadius: 6 }}>{f.tag}</span>
                </div>
                <h3 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 26, lineHeight: 1, letterSpacing: "-0.03em", margin: "0 0 6px", color: TEAL_DEEP }}>{f.title}</h3>
                <div style={{ fontSize: 14, color: ORANGE, fontWeight: 600, marginBottom: 14 }}>{f.lead}</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(20,30,40,0.7)", margin: 0 }}>{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Dashboard Mock ────────────────────────────────────────────────────────────
function DashboardMock() {
  return (
    <div style={{
      background: "#F1ECE3", borderRadius: 22, color: INK,
      fontFamily: BODY, overflow: "hidden",
      display: "grid", gridTemplateColumns: "220px 1fr", minHeight: 540,
    }} className="dash-mock">
      <aside style={{ background: "#fff", padding: "20px 16px", borderRight: `1px solid ${TEAL}10` }}>
        <Wordmark height={34} color={TEAL} />
        <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 4 }}>
          {[
            ["Tableau de bord", true],
            ["Scanner", false],
            ["Analyse de sentiment", false],
            ["Rapports", false],
            ["Alertes", false],
            ["Interventions légales", false, "1"],
          ].map(([l, active, badge], i) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "8px 10px", borderRadius: 8,
              background: active ? TEAL : "transparent",
              color: active ? CREAM : "rgba(20,30,40,0.7)",
              fontSize: 12, fontWeight: active ? 600 : 500,
            }}>
              <span>{l as string}</span>
              {badge && <span style={{ background: RED, color: "#fff", fontSize: 9, fontWeight: 700, padding: "1px 5px", borderRadius: 999 }}>{badge}</span>}
            </div>
          ))}
        </div>
      </aside>
      <main style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: DISPLAY, fontSize: 24, letterSpacing: "-0.02em", color: TEAL_DEEP }}>Bonjour, Admin Reeact 👋</div>
            <div style={{ fontSize: 12, opacity: 0.6 }}>Vue d&apos;ensemble de votre réputation en ligne</div>
          </div>
          <div style={{ background: ORANGE, color: "#fff", padding: "8px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>+ Ajouter mots-clés</div>
        </div>
        <div style={{ background: "#fff", borderRadius: 14, padding: 18 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: TEAL_DEEP }}>Évolution 7 derniers jours</div>
              <div style={{ fontSize: 11, opacity: 0.55 }}>Vue d&apos;ensemble de votre réputation en ligne</div>
            </div>
            <div style={{ background: TEAL, color: CREAM, padding: "4px 10px", borderRadius: 999, fontSize: 11 }}>◉ 60/100</div>
          </div>
          <svg viewBox="0 0 600 100" style={{ width: "100%", height: 80, marginTop: 14 }}>
            <polyline points="20,70 110,68 200,72 290,55 380,40 470,28 560,40" fill="none" stroke={TEAL} strokeWidth="2" />
            <circle cx="470" cy="28" r="5" fill={GREEN} />
            <circle cx="560" cy="40" r="6" fill={INK} />
            {["M","M","J","V","S","D","L"].map((d, i) => (
              <text key={i} x={20 + i * 90} y="95" fontSize="10" fill="rgba(20,30,40,0.4)" textAnchor="middle">{d}</text>
            ))}
          </svg>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.1em", opacity: 0.55, fontFamily: MONO }}>SCORE DE RÉPUTATION</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontFamily: DISPLAY, fontSize: 36, letterSpacing: "-0.03em" }}>60</span>
                <span style={{ opacity: 0.5, fontSize: 14 }}>/100</span>
              </div>
              <div style={{ color: GREEN, fontSize: 11 }}>↑ +10 pts sur 7 jours</div>
            </div>
            <div style={{ display: "flex", gap: 18, fontSize: 11, alignItems: "flex-end" }}>
              <div style={{ textAlign: "center" }}><div style={{ color: GREEN, fontSize: 10 }}>● Positif</div><b style={{ fontSize: 20, color: TEAL_DEEP }}>48</b></div>
              <div style={{ textAlign: "center" }}><div style={{ color: BLUE, fontSize: 10 }}>● Neutre</div><b style={{ fontSize: 20, color: TEAL_DEEP }}>105</b></div>
              <div style={{ textAlign: "center" }}><div style={{ color: RED, fontSize: 10 }}>● Négatif</div><b style={{ fontSize: 20, color: TEAL_DEEP }}>9</b></div>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {[
            { lbl: "TOTAL MENTIONS", v: "162", sub: "+10% vs sem. dernière", color: TEAL_DEEP },
            { lbl: "MOTS-CLÉS SURVEILLÉS", v: "3", sub: "mots-clés actifs", color: TEAL_DEEP },
            { lbl: "ALERTES CRITIQUES", v: "3", sub: "dernières 48h", color: RED, border: true },
          ].map((m, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: 12, padding: "12px 14px", border: m.border ? `1.5px solid ${RED}` : "none" }}>
              <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.1em", opacity: 0.55 }}>{m.lbl}</div>
              <div style={{ fontFamily: DISPLAY, fontSize: 32, color: m.color, letterSpacing: "-0.02em", marginTop: 4 }}>{m.v}</div>
              <div style={{ fontSize: 10, opacity: 0.6 }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function DashboardSection() {
  return (
    <section id="dashboard" style={{ background: TEAL, color: CREAM, padding: "140px 40px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: -180, bottom: -120, opacity: 0.05, pointerEvents: "none" }}>
        <Monogram size={620} color={CREAM} />
      </div>
      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <SectionHeader
          eyebrow="Aperçu produit" dark
          title={<>Votre réputation,<br />en un seul écran.</>}
          lead="Score, mentions, sentiment, alertes critiques, interventions en cours — toute votre veille au même endroit, sans onglet à ouvrir."
        />
        <Reveal delay={120} y={48}>
          <div style={{ marginTop: 64, background: "#fff", borderRadius: 28, padding: 8, boxShadow: "0 60px 100px -40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)" }}>
            <DashboardMock />
          </div>
        </Reveal>
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="stats-grid">
          {[
            { num: "24/7",   lbl: "Veille continue" },
            { num: "< 5 min",lbl: "Délai d'alerte" },
            { num: "200+",   lbl: "Sources scannées" },
            { num: "48h",    lbl: "Intervention rapide" },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 80}>
              <div style={{ borderTop: `1px solid rgba(241,236,227,0.18)`, paddingTop: 18 }}>
                <div style={{ fontFamily: DISPLAY, fontSize: 56, lineHeight: 1, letterSpacing: "-0.04em", color: ORANGE }}>{s.num}</div>
                <div style={{ fontSize: 16, opacity: 0.78, marginTop: 8 }}>{s.lbl}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" style={{ background: PAPER, color: INK, padding: "140px 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Tarifs"
          title="Simple. Sans engagement."
          lead="Démarrez à 29 € par mois pour un mot-clé surveillé. Ajoutez des mots-clés et des plateformes à la carte — vous ne payez que ce que vous utilisez."
        />
        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 20 }} className="pricing-grid">
          {/* Main card */}
          <Reveal>
            <div style={{
              background: TEAL, color: CREAM, borderRadius: 28, padding: 44,
              display: "flex", flexDirection: "column", gap: 24,
              position: "relative", overflow: "hidden",
              boxShadow: "0 30px 60px -30px rgba(20,30,40,0.4)",
              boxSizing: "border-box",
            }}>
              <div style={{ position: "absolute", right: -40, top: -40, opacity: 0.07, pointerEvents: "none" }}>
                <Monogram size={280} color={CREAM} />
              </div>
              <div style={{ position: "relative" }}>
                <Chip color={ORANGE}>OFFRE STANDARD</Chip>
                <h3 style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 44, lineHeight: 1, letterSpacing: "-0.03em", margin: "20px 0 10px" }}>Surveillance complète</h3>
                <p style={{ fontSize: 17, opacity: 0.78, margin: 0 }}>Tout ce qu&apos;il faut pour piloter votre e-réputation au quotidien.</p>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <span style={{ fontFamily: DISPLAY, fontSize: 96, lineHeight: 0.9, letterSpacing: "-0.04em", color: ORANGE }}>29</span>
                <span style={{ fontSize: 32, color: ORANGE }}>€</span>
                <span style={{ fontSize: 18, opacity: 0.7, marginLeft: 8 }}>/ mois</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15 }}>
                {["1 mot-clé ou URL surveillé inclus","Analyse de sentiment IA illimitée","Alertes e-mail temps réel","Tableau de bord & rapports","Historique 12 mois","Support e-mail"].map((l, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 22, height: 22, borderRadius: 999, background: ORANGE, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span>{l}</span>
                  </div>
                ))}
              </div>
              <Btn primary href="/subscription">Démarrer 14 jours gratuits</Btn>
              <div style={{ fontSize: 13, opacity: 0.65, textAlign: "center", marginTop: -8 }}>Sans carte bancaire · résiliable en 1 clic</div>
            </div>
          </Reveal>

          {/* Add-ons + legal */}
          <Reveal delay={120}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#fff", borderRadius: 22, padding: 32, border: `1px solid ${TEAL}11`, flex: 1 }}>
                <Chip color={TEAL}>OPTIONS À LA CARTE</Chip>
                <h4 style={{ fontFamily: DISPLAY, fontSize: 28, letterSpacing: "-0.03em", margin: "14px 0 22px", color: TEAL_DEEP }}>Étendez quand vous voulez.</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[
                    { lbl: "Mot-clé supplémentaire", desc: "Marque, dirigeant, produit, concurrent…", price: "+ 10 €", unit: "/ mois / mot-clé" },
                    { lbl: "Réseau social supplémentaire", desc: "TikTok, X, LinkedIn, Reddit, presse internationale…", price: "+ 15 €", unit: "/ mois / réseau" },
                  ].map((a, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "14px 18px", background: PAPER, borderRadius: 14 }}>
                      <div>
                        <div style={{ fontWeight: 700, color: TEAL_DEEP }}>{a.lbl}</div>
                        <div style={{ fontSize: 13, opacity: 0.6, marginTop: 2 }}>{a.desc}</div>
                      </div>
                      <div style={{ textAlign: "right", minWidth: 100 }}>
                        <div style={{ fontFamily: DISPLAY, fontSize: 20, color: ORANGE, letterSpacing: "-0.02em" }}>{a.price}</div>
                        <div style={{ fontSize: 11, opacity: 0.55 }}>{a.unit}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: TEAL_DEEP, color: CREAM, borderRadius: 22, padding: 28, display: "flex", alignItems: "center", gap: 22 }}>
                <div style={{ width: 58, height: 58, borderRadius: 14, background: ORANGE, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>⚖</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em", opacity: 0.65 }}>INTERVENTION LÉGALE</div>
                  <div style={{ fontWeight: 700, fontSize: 18, marginTop: 2 }}>Suppression de contenu nuisible</div>
                  <div style={{ fontSize: 13, opacity: 0.7, marginTop: 2 }}>Droit à l&apos;oubli, déréférencement, retrait LCEN — par notre cabinet partenaire.</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: DISPLAY, fontSize: 30, color: ORANGE, letterSpacing: "-0.02em", lineHeight: 1 }}>dès 500 €</div>
                  <div style={{ fontSize: 11, opacity: 0.65 }}>TTC / dossier</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section style={{ background: "#EAE3D6", color: INK, padding: "140px 40px 120px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "50%", top: "40%", transform: "translate(-50%, -50%)", opacity: 0.05, pointerEvents: "none" }}>
        <Monogram size={760} color={TEAL} />
      </div>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <Reveal><Chip color={TEAL}>*it&apos;s time to react</Chip></Reveal>
        <Reveal delay={80}>
          <h2 style={{
            fontFamily: DISPLAY, fontWeight: 900,
            fontSize: "clamp(56px, 8vw, 132px)", lineHeight: 0.92, letterSpacing: "-0.05em",
            margin: "24px 0 24px", color: TEAL_DEEP,
          }}>
            Votre réputation<br />
            se joue <span style={{ color: ORANGE }}>maintenant</span>.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: 22, lineHeight: 1.45, opacity: 0.7, maxWidth: 700, margin: "0 auto 36px" }}>
            14 jours offerts, sans carte bancaire. Installation en 90 secondes — une URL, un mot-clé, et vous savez tout.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Btn primary href="/subscription">Démarrer l&apos;essai gratuit</Btn>
            <Btn href="mailto:contact@reeact.io">Parler à l&apos;équipe</Btn>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: TEAL_DEEP, color: CREAM, padding: "64px 40px 32px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 40, paddingBottom: 48, borderBottom: "1px solid rgba(241,236,227,0.12)" }} className="footer-grid">
          <div>
            <Wordmark height={48} color={CREAM} />
            <p style={{ fontSize: 15, opacity: 0.65, lineHeight: 1.55, marginTop: 18, maxWidth: 320 }}>
              La plateforme française d&apos;e-réputation. Surveillance, analyse, intervention — au même endroit.
            </p>
          </div>
          {[
            { t: "Produit",    l: ["Fonctionnalités","Tableau de bord","Tarifs","API","Changelog"] },
            { t: "Ressources", l: ["Documentation","Centre d'aide","Cas clients","Blog","Glossaire"] },
            { t: "Société",    l: ["À propos","Mentions légales","CGU","Confidentialité","Contact"] },
          ].map(col => (
            <div key={col.t}>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.15em", opacity: 0.5, marginBottom: 14 }}>{col.t.toUpperCase()}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {col.l.map(l => (
                  <a key={l} href="#" style={{ color: CREAM, textDecoration: "none", fontSize: 15, opacity: 0.8 }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "0.8"}>{l}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 28, fontFamily: MONO, fontSize: 12, opacity: 0.55, flexWrap: "wrap", gap: 12 }}>
          <span>© 2026 Reeact · Tous droits réservés</span>
          <span>Made in 🇫🇷 · Hébergement OVH Roubaix</span>
        </div>
      </div>
    </footer>
  );
}

// ─── Animations CSS ───────────────────────────────────────────────────────────
const CSS = `
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes scan { 0%,100% { opacity:0; top:0; } 50% { opacity:1; } 100% { top:100%; opacity:0; } }
  @keyframes pulse { 0%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(233,78,78,0.4); } 50% { transform:scale(1.15); box-shadow:0 0 0 6px rgba(233,78,78,0); } }
  @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }

  .hidden-mobile { display: flex !important; }
  .show-mobile   { display: none !important; }

  @media (max-width: 900px) {
    .hero-grid    { grid-template-columns: 1fr !important; }
    .steps-grid   { grid-template-columns: 1fr !important; }
    .feat-grid    { grid-template-columns: 1fr 1fr !important; }
    .pricing-grid { grid-template-columns: 1fr !important; }
    .stats-grid   { grid-template-columns: repeat(2, 1fr) !important; }
    .footer-grid  { grid-template-columns: 1fr 1fr !important; }
    .dash-mock    { grid-template-columns: 1fr !important; }
    .dash-mock aside { display: none; }
    section[id]   { padding-left: 24px !important; padding-right: 24px !important; }
    .hidden-mobile { display: none !important; }
    .show-mobile   { display: flex !important; }
    nav { padding-left: 24px !important; padding-right: 24px !important; }
  }

  @media (max-width: 560px) {
    .feat-grid    { grid-template-columns: 1fr !important; }
    .stats-grid   { grid-template-columns: repeat(2, 1fr) !important; }
    .footer-grid  { grid-template-columns: 1fr !important; }
    section[id]   { padding-left: 16px !important; padding-right: 16px !important; padding-top: 80px !important; padding-bottom: 80px !important; }
  }
`;

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{ background: PAPER, minHeight: "100vh", overflowX: "hidden" }}>
        <Nav />
        <Hero />
        <Sources />
        <How />
        <Features />
        <DashboardSection />
        <Pricing />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
