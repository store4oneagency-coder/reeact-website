"use client";

import { useRef, useEffect, useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";

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
const DISPLAY = '"Archivo Black", "Arial Black", sans-serif';
const BODY    = '"Inter Tight", system-ui, sans-serif';
const MONO    = '"JetBrains Mono", "Courier New", monospace';

// ─── Types ────────────────────────────────────────────────────────────────────
export interface SectorData {
  sector: string;
  h1: [string, string];
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scannerUrl: string;

  mentions: Array<{
    src: string; txt: string;
    sent: "pos" | "neu" | "neg";
    age: string; star?: number;
  }>;

  painEyebrow: string;
  painTitle: [string, string];
  painLead: string;
  pains: Array<{ title: string; body: string; stat: string }>;

  featEyebrow: string;
  featTitle: [string, string];
  features: Array<{
    symbol: string; tag: string;
    title: string; lead: string; body: string;
  }>;

  agencySection?: {
    eyebrow: string;
    title: [string, string];
    subtitle: string;
    args: Array<{ symbol: string; title: string; body: string }>;
  };

  legalProSection?: {
    eyebrow: string;
    title: [string, string];
    subtitle: string;
    features: Array<{ symbol: string; label: string }>;
    extraTitle: string;
    extras: Array<{ symbol: string; title: string; body: string }>;
  };

  faqs: Array<{ q: string; a: string }>;

  ctaFinalTitle: string;
  ctaFinalSub: string;
}

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CSS = `
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes scan { 0%,100% { opacity:0; top:0; } 50% { opacity:1; } 100% { top:100%; opacity:0; } }
  @keyframes pulse { 0%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(233,78,78,0.4); } 50% { transform:scale(1.15); box-shadow:0 0 0 6px rgba(233,78,78,0); } }
  @keyframes bounce { 0%,100% { transform:translateY(0); } 50% { transform:translateY(6px); } }
  @keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }

  .sp-hidden-mobile { display: flex !important; }
  .sp-show-mobile   { display: none !important; }

  @media (max-width: 900px) {
    .sp-hero-grid     { grid-template-columns: 1fr !important; }
    .sp-steps-grid    { grid-template-columns: 1fr !important; }
    .sp-feat-grid     { grid-template-columns: 1fr 1fr !important; }
    .sp-stats-grid    { grid-template-columns: repeat(2, 1fr) !important; }
    .sp-agency-grid   { grid-template-columns: 1fr 1fr !important; }
    .sp-dash-mock     { grid-template-columns: 1fr !important; }
    .sp-dash-mock aside { display: none; }
    .sp-hidden-mobile { display: none !important; }
    .sp-show-mobile   { display: flex !important; }
    /* Hero responsive */
    .sp-hero-section  { padding: 100px 20px 60px !important; min-height: auto !important; }
    /* Score strip compact */
    .sp-score-trend   { display: none !important; }
    /* DashboardMock stat grid */
    .sp-dash-stat-grid { grid-template-columns: 1fr 1fr !important; }
    /* Section padding */
    .sp-section-pad   { padding: 60px 20px !important; }
    /* h2 clamp override */
    .sp-h2            { font-size: clamp(36px, 9vw, 64px) !important; }
  }

  @media (max-width: 560px) {
    .sp-feat-grid     { grid-template-columns: 1fr !important; }
    .sp-stats-grid    { grid-template-columns: repeat(2, 1fr) !important; }
    .sp-agency-grid   { grid-template-columns: 1fr !important; }
    .sp-hero-section  { padding: 90px 16px 50px !important; }
    .sp-section-pad   { padding: 50px 16px !important; }
  }
`;

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

// ─── HeroMentionFeed ──────────────────────────────────────────────────────────
function HeroMentionFeed({ mentions }: { mentions: SectorData["mentions"] }) {
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

// ─── DashboardMock ────────────────────────────────────────────────────────────
function DashboardMock() {
  return (
    <div style={{
      background: "#F1ECE3", borderRadius: 22, color: INK,
      fontFamily: BODY, overflow: "hidden",
      display: "grid", gridTemplateColumns: "220px 1fr", minHeight: 540,
    }} className="sp-dash-mock">
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

// ─── StepIcon SVGs ────────────────────────────────────────────────────────────
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

// ─── Section 1 — Hero ─────────────────────────────────────────────────────────
function SectorHero({ data }: { data: SectorData }) {
  return (
    <section style={{
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
      }} className="sp-hero-grid">
        <div>
          <Reveal>
            <Chip color={TEAL}>{data.sector}</Chip>
          </Reveal>
          <Reveal delay={80}>
            <h1 style={{
              fontFamily: DISPLAY, fontWeight: 900,
              fontSize: "clamp(48px, 6.4vw, 104px)", lineHeight: 0.92, letterSpacing: "-0.05em",
              margin: "28px 0 24px", color: TEAL_DEEP,
            }}>
              {data.h1[0]}<br />
              <span style={{ color: ORANGE }}>{data.h1[1]}</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{
              fontFamily: BODY, fontSize: 22, lineHeight: 1.45,
              color: "rgba(20,30,40,0.72)", margin: "0 0 36px", maxWidth: 560,
            }}>
              {data.subtitle}
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "18px 28px", borderRadius: 999,
                background: ORANGE, color: "#fff", border: "none",
                fontFamily: BODY, fontWeight: 600, fontSize: 18,
                textDecoration: "none", whiteSpace: "nowrap",
              }}>{data.ctaPrimary}</a>
              <a href={data.scannerUrl} style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "18px 28px", borderRadius: 999,
                background: "#fff", color: TEAL,
                border: `1.5px solid rgba(20,30,40,0.12)`,
                fontFamily: BODY, fontWeight: 600, fontSize: 18,
                textDecoration: "none", whiteSpace: "nowrap",
              }}>{data.ctaSecondary}</a>
            </div>
            <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 18, color: "rgba(20,30,40,0.55)", fontSize: 14, flexWrap: "wrap" }}>
              <span>✓ Premier scan gratuit</span>
              <span>✓ Sans engagement</span>
              <span>✓ Hébergement français</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={300} y={32}>
          <HeroMentionFeed mentions={data.mentions} />
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

// ─── Section 2 — Sources Marquee ──────────────────────────────────────────────
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

// ─── Section 3 — Pain Points ──────────────────────────────────────────────────
function PainPoints({ data }: { data: SectorData }) {
  return (
    <section style={{ background: "#EAE3D6", color: INK, padding: "140px 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionHeader
          eyebrow={data.painEyebrow}
          title={<>{data.painTitle[0]}<br />{data.painTitle[1]}</>}
          lead={data.painLead}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 80 }} className="sp-steps-grid">
          {data.pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div style={{
                background: i === 2 ? TEAL : "#fff",
                color: i === 2 ? CREAM : INK,
                borderRadius: 24, padding: 36, minHeight: 480, boxSizing: "border-box",
                display: "flex", flexDirection: "column", justifyContent: "space-between",
                position: "relative", overflow: "hidden",
                boxShadow: i === 2
                  ? "0 30px 60px -30px rgba(20,30,40,0.4)"
                  : "0 1px 0 rgba(0,0,0,0.04), 0 16px 40px -24px rgba(20,30,40,0.18)",
              }}>
                <div>
                  <div style={{ fontFamily: MONO, fontSize: 13, opacity: 0.55, letterSpacing: "0.15em" }}>
                    {`0${i + 1}`}
                  </div>
                  <h3 style={{
                    fontFamily: DISPLAY, fontWeight: 900, fontSize: 38, lineHeight: 0.95,
                    letterSpacing: "-0.03em", margin: "16px 0 18px",
                  }}>{p.title}</h3>
                  <p style={{ fontSize: 17, lineHeight: 1.5, opacity: 0.85, margin: 0 }}>{p.body}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{
                    fontFamily: MONO, fontSize: 13,
                    color: i === 2 ? ORANGE : TEAL,
                    fontWeight: 700, letterSpacing: "0.04em",
                  }}>{p.stat}</div>
                  <StepIcon kind={i === 0 ? "scan" : i === 1 ? "brain" : "shield"} color={i === 2 ? CREAM : TEAL} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4 — Features ─────────────────────────────────────────────────────
function Features({ data }: { data: SectorData }) {
  return (
    <section style={{ background: PAPER, color: INK, padding: "140px 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionHeader
          eyebrow={data.featEyebrow}
          title={<>{data.featTitle[0]}<br />{data.featTitle[1]}</>}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 72 }} className="sp-feat-grid">
          {data.features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <article style={{
                background: "#fff", borderRadius: 22, padding: 32, minHeight: 340, boxSizing: "border-box",
                display: "flex", flexDirection: "column",
                border: `1px solid ${TEAL}11`,
                transition: "transform .2s ease, box-shadow .2s ease",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 48px -28px rgba(20,30,40,0.25)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14, background: TEAL, color: CREAM,
                    fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{f.symbol}</div>
                  <span style={{
                    fontFamily: MONO, fontSize: 10, color: ORANGE,
                    letterSpacing: "0.15em", fontWeight: 700,
                    background: `${ORANGE}11`, padding: "4px 8px", borderRadius: 6,
                  }}>{f.tag}</span>
                </div>
                <h3 style={{
                  fontFamily: DISPLAY, fontWeight: 900, fontSize: 26, lineHeight: 1,
                  letterSpacing: "-0.03em", margin: "0 0 6px", color: TEAL_DEEP,
                }}>{f.title}</h3>
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

// ─── Section 5 — Dashboard ────────────────────────────────────────────────────
function DashboardSection() {
  return (
    <section style={{ background: TEAL, color: CREAM, padding: "140px 40px", position: "relative", overflow: "hidden" }}>
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
        <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="sp-stats-grid">
          {[
            { num: "24/7",    lbl: "Veille continue" },
            { num: "< 5 min", lbl: "Délai d'alerte" },
            { num: "200+",    lbl: "Sources scannées" },
            { num: "48h",     lbl: "Intervention rapide" },
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

// ─── Section 6 — Agency ──────────────────────────────────────────────────────
function AgencySection({ ag }: { ag: NonNullable<SectorData["agencySection"]> }) {
  return (
    <section style={{ background: "#EAE3D6", color: INK, padding: "140px 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionHeader
          eyebrow={ag.eyebrow}
          title={<>{ag.title[0]}<br />{ag.title[1]}</>}
          lead={ag.subtitle}
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, marginTop: 72 }} className="sp-agency-grid">
          {ag.args.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 80}>
              <div style={{
                background: `linear-gradient(135deg, ${TEAL_DEEP} 0%, ${TEAL} 100%)`,
                color: CREAM, borderRadius: 24, padding: 36,
                position: "relative", overflow: "hidden",
                boxShadow: "0 30px 60px -30px rgba(20,30,40,0.4)",
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, background: "rgba(255,255,255,0.08)",
                  color: ORANGE, fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 20,
                }}>{a.symbol}</div>
                <h3 style={{
                  fontFamily: DISPLAY, fontWeight: 900, fontSize: 26, lineHeight: 1,
                  letterSpacing: "-0.03em", margin: "0 0 12px", color: CREAM,
                }}>{a.title}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.55, color: "rgba(241,236,227,0.78)", margin: 0 }}>{a.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6b — Legal Pro ───────────────────────────────────────────────────
function LegalProSection({ lp }: { lp: NonNullable<SectorData["legalProSection"]> }) {
  return (
    <section style={{ background: INK, color: CREAM, padding: "140px 40px", position: "relative", overflow: "hidden" }}>
      {/* watermark */}
      <div style={{ position: "absolute", right: -200, top: -120, opacity: 0.04, pointerEvents: "none" }}>
        <Monogram size={680} color={CREAM} />
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <Reveal>
          <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap", marginBottom: 8 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "7px 14px", borderRadius: 999,
              border: `1.5px solid ${CREAM}33`,
              fontFamily: MONO, fontSize: 13, fontWeight: 600,
              letterSpacing: "0.1em", textTransform: "uppercase" as const,
              color: "rgba(241,236,227,0.7)",
            }}>{lp.eyebrow}</span>
            <span style={{
              background: ORANGE, color: "#fff",
              padding: "7px 16px", borderRadius: 999,
              fontFamily: MONO, fontSize: 13, fontWeight: 700, letterSpacing: "0.06em",
            }}>990 €/mois TTC</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h2 style={{
            fontFamily: DISPLAY, fontWeight: 900,
            fontSize: "clamp(48px, 6.5vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.04em",
            margin: "24px 0 16px", color: CREAM,
          }}>
            {lp.title[0]}<br />
            <span style={{ color: ORANGE }}>{lp.title[1]}</span>
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p style={{
            fontFamily: BODY, fontSize: 22, lineHeight: 1.45,
            color: "rgba(241,236,227,0.68)", margin: "0 0 72px", maxWidth: 720,
          }}>{lp.subtitle}</p>
        </Reveal>

        {/* Feature checklist + pricing card side by side */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }} className="sp-steps-grid">
          {/* Left — feature list */}
          <Reveal delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {lp.features.map((f, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 18,
                  padding: "18px 24px", borderRadius: 18,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}>
                  <span style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: "rgba(255,255,255,0.07)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 22, color: ORANGE,
                  }}>{f.symbol}</span>
                  <span style={{ fontFamily: BODY, fontSize: 18, fontWeight: 600, color: CREAM }}>{f.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right — pricing card */}
          <Reveal delay={200}>
            <div style={{
              background: TEAL_DEEP,
              border: `1px solid rgba(255,255,255,0.08)`,
              borderRadius: 28, padding: 40,
              boxShadow: "0 40px 80px -30px rgba(0,0,0,0.6)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(255,122,58,0.06)" }} />
              <div style={{ fontFamily: MONO, fontSize: 12, color: ORANGE, letterSpacing: "0.15em", textTransform: "uppercase" as const, marginBottom: 8 }}>PLAN LEGAL PRO</div>
              <div style={{ fontFamily: DISPLAY, fontSize: 64, lineHeight: 1, letterSpacing: "-0.04em", color: CREAM, margin: "12px 0 4px" }}>990 €</div>
              <div style={{ fontFamily: BODY, fontSize: 16, color: "rgba(241,236,227,0.55)", marginBottom: 28 }}>par mois · TTC · tout inclus</div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, marginBottom: 28 }}>
                {[
                  "Mots-clés illimités",
                  "Sources illimitées",
                  "Toutes plateformes incluses",
                  "Demandes d'intervention légale",
                  "Gestion multi-clients (dossiers)",
                  "Rapports PDF à votre nom",
                  "Preuves numériques exportables",
                  "Support prioritaire",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", fontFamily: BODY, fontSize: 15, color: "rgba(241,236,227,0.85)" }}>
                    <span style={{ color: ORANGE, fontSize: 16, flexShrink: 0 }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
              <a href="https://app.reeact.io/LegalProOffer" style={{
                display: "block", textAlign: "center" as const,
                padding: "18px 24px", borderRadius: 999,
                background: ORANGE, color: "#fff",
                fontFamily: BODY, fontWeight: 700, fontSize: 17,
                textDecoration: "none", letterSpacing: "-0.01em",
              }}>
                Découvrir le plan Legal Pro →
              </a>
              <div style={{ textAlign: "center" as const, marginTop: 14, fontFamily: MONO, fontSize: 12, color: "rgba(241,236,227,0.35)" }}>
                Sans engagement · Prorata si upgrade
              </div>
            </div>
          </Reveal>
        </div>

        {/* Extras — distinguishing features */}
        {lp.extras.length > 0 && (
          <>
            <Reveal delay={80}>
              <div style={{ fontFamily: DISPLAY, fontWeight: 900, fontSize: 36, letterSpacing: "-0.03em", color: CREAM, margin: "100px 0 40px", lineHeight: 1 }}>
                {lp.extraTitle}
              </div>
            </Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="sp-steps-grid">
              {lp.extras.map((e, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: 22, padding: 32,
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: "rgba(255,255,255,0.07)",
                      color: ORANGE, fontSize: 26,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 18,
                    }}>{e.symbol}</div>
                    <h3 style={{
                      fontFamily: DISPLAY, fontWeight: 900, fontSize: 24, lineHeight: 1,
                      letterSpacing: "-0.03em", margin: "0 0 12px", color: CREAM,
                    }}>{e.title}</h3>
                    <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(241,236,227,0.65)", margin: 0 }}>{e.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// ─── Section 7 — FAQ ─────────────────────────────────────────────────────────
function FAQ({ data }: { data: SectorData }) {
  return (
    <section style={{ background: PAPER, color: INK, padding: "140px 40px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions<br />fréquentes.</>}
        />
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 72, maxWidth: 860 }}>
          {data.faqs.map((f, i) => (
            <Reveal key={i} delay={i * 60}>
              <div style={{
                background: "#fff", borderRadius: 22, padding: "28px 32px",
                border: `1px solid ${TEAL}11`,
              }}>
                <h3 style={{
                  fontFamily: DISPLAY, fontWeight: 900, fontSize: 22, lineHeight: 1.1,
                  letterSpacing: "-0.02em", margin: "0 0 12px", color: TEAL_DEEP,
                }}>{f.q}</h3>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(20,30,40,0.7)", margin: 0 }}>{f.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 8 — Final CTA ────────────────────────────────────────────────────
function FinalCTA({ data }: { data: SectorData }) {
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
            {data.ctaFinalTitle}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p style={{ fontSize: 22, lineHeight: 1.45, opacity: 0.7, maxWidth: 700, margin: "0 auto 36px" }}>
            {data.ctaFinalSub}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://app.reeact.io/register" style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "18px 28px", borderRadius: 999,
              background: ORANGE, color: "#fff",
              fontFamily: BODY, fontWeight: 600, fontSize: 18,
              textDecoration: "none",
            }}>Démarrer gratuitement →</a>
            <a href={`https://app.reeact.io/PublicScanner`} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "18px 28px", borderRadius: 999,
              background: "#fff", color: TEAL,
              border: `1.5px solid rgba(20,30,40,0.12)`,
              fontFamily: BODY, fontWeight: 600, fontSize: 18,
              textDecoration: "none",
            }}>Scanner maintenant</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────
export default function SectorPageClient({ data }: { data: SectorData }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div style={{ background: PAPER, minHeight: "100vh", overflowX: "hidden" }}>
        <Nav />
        <SectorHero data={data} />
        <Sources />
        <PainPoints data={data} />
        <Features data={data} />
        <DashboardSection />
        {data.agencySection && <AgencySection ag={data.agencySection} />}
        {data.legalProSection && <LegalProSection lp={data.legalProSection} />}
        <FAQ data={data} />
        <FinalCTA data={data} />
        <Footer />
      </div>
    </>
  );
}
