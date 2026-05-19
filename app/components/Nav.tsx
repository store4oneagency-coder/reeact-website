"use client";

import { useState, useRef, useEffect } from "react";

const TEAL      = "#27475A";
const TEAL_DEEP = "#1B3645";
const CREAM     = "#F1ECE3";
const PAPER     = "#FBF8F2";
const ORANGE    = "#FF7A3A";
const BODY      = '"Inter Tight", system-ui, sans-serif';
const MONO      = '"JetBrains Mono", "Courier New", monospace';

const SECTORS = [
  { label: "Avocats & cabinets",          href: "/pour-les-avocats" },
  { label: "Agences RP",                  href: "/pour-les-agences-rp" },
  { label: "Médecins & praticiens",        href: "/pour-les-medecins" },
  { label: "Cliniques esthétiques",        href: "/pour-les-cliniques-esthetiques" },
  { label: "Restaurants",                  href: "/pour-les-restaurants" },
  { label: "Franchises",                   href: "/pour-les-franchises" },
  { label: "E-commerce",                   href: "/pour-le-ecommerce" },
  { label: "Dirigeants & PDG",             href: "/pour-les-dirigeants" },
  { label: "Politiques & élus",            href: "/pour-les-politiques" },
  { label: "Célébrités & influenceurs",    href: "/pour-les-celebrites" },
];

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

export default function Nav({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobile]   = useState(false);
  const [dropOpen, setDropOpen]   = useState(false);
  const [mobileSub, setMobileSub] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  const bg = scrolled
    ? "rgba(251,248,242,0.95)"
    : dark ? "transparent" : "transparent";
  const linkColor = (scrolled || !dark) ? TEAL_DEEP : CREAM;

  const linkStyle = {
    color: linkColor, textDecoration: "none", fontSize: 15, fontWeight: 500,
    fontFamily: BODY, opacity: 0.82, transition: "opacity .15s", cursor: "pointer",
    background: "none", border: "none", padding: 0,
  } as const;

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: bg,
      backdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
      WebkitBackdropFilter: scrolled ? "saturate(180%) blur(12px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(20,30,40,0.06)" : "1px solid transparent",
      transition: "all .25s ease",
    }}>
      <div style={{
        maxWidth: 1400, margin: "0 auto",
        padding: scrolled ? "12px 40px" : "20px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }} className="nav-inner">

        {/* Logo */}
        <a href="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none" }}>
          <Wordmark height={36} color={scrolled || !dark ? TEAL : CREAM} />
        </a>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden-mobile">

          {/* Secteurs dropdown */}
          <div ref={dropRef} style={{ position: "relative" }}>
            <button
              onClick={() => setDropOpen(p => !p)}
              style={{ ...linkStyle, display: "flex", alignItems: "center", gap: 5 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
              onMouseLeave={e => { if (!dropOpen) (e.currentTarget as HTMLElement).style.opacity = "0.82"; }}
            >
              Solutions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{
                transform: dropOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s",
              }}>
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {dropOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 14px)", left: "50%",
                transform: "translateX(-50%)",
                background: "#fff",
                border: `1px solid ${TEAL}18`,
                borderRadius: 16,
                boxShadow: "0 20px 40px -10px rgba(20,30,40,0.14), 0 0 0 1px rgba(20,30,40,0.04)",
                padding: "10px 8px",
                minWidth: 260,
                zIndex: 200,
              }}>
                <p style={{
                  fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em",
                  color: TEAL, opacity: 0.5, padding: "4px 12px 8px",
                  margin: 0, textTransform: "uppercase",
                }}>Par secteur</p>
                {SECTORS.map(s => (
                  <a key={s.href} href={s.href} onClick={() => setDropOpen(false)} style={{
                    display: "block", padding: "9px 12px", borderRadius: 10,
                    color: TEAL_DEEP, textDecoration: "none",
                    fontSize: 14, fontWeight: 500, fontFamily: BODY,
                    transition: "background .12s",
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = `${TEAL}08`}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {[
            ["Fonctionnalités", "/#features"],
            ["Tarifs", "/#pricing"],
            ["Scanner gratuit", "https://app.reeact.io/PublicScanner"],
          ].map(([l, h]) => (
            <a key={h} href={h} style={linkStyle}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "0.82"}>
              {l}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }} className="hidden-mobile">
          <a href="https://app.reeact.io/login" style={{ ...linkStyle, opacity: 0.7 }}>Connexion</a>
          <a href="https://app.reeact.io/register" style={{
            padding: "10px 20px", borderRadius: 999, background: ORANGE,
            color: "#fff", fontFamily: BODY, fontWeight: 600, fontSize: 15,
            textDecoration: "none", transition: "transform .15s, box-shadow .15s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 22px -8px rgba(255,122,58,0.5)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}>
            Démarrer gratuitement
          </a>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMobile(p => !p)} className="show-mobile" style={{
          background: "none", border: "none", cursor: "pointer", padding: 8,
          color: scrolled || !dark ? TEAL_DEEP : CREAM,
        }} aria-label="Menu">
          {mobileOpen
            ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            : <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          }
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(251,248,242,0.98)", backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${TEAL}11`,
          padding: "16px 24px 28px",
          display: "flex", flexDirection: "column", gap: 2,
          maxHeight: "85vh", overflowY: "auto",
        }}>
          {/* Solutions accordion */}
          <button onClick={() => setMobileSub(p => !p)} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "12px 8px", background: "none", border: "none", cursor: "pointer",
            color: TEAL_DEEP, fontSize: 15, fontWeight: 500, fontFamily: BODY, textAlign: "left",
          }}>
            Solutions par secteur
            <svg width="14" height="14" viewBox="0 0 12 12" fill="none" style={{
              transform: mobileSub ? "rotate(180deg)" : "rotate(0)", transition: "transform .2s",
            }}>
              <path d="M2 4l4 4 4-4" stroke={TEAL_DEEP} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {mobileSub && SECTORS.map(s => (
            <a key={s.href} href={s.href} onClick={() => setMobile(false)} style={{
              padding: "10px 8px 10px 24px", color: TEAL_DEEP, textDecoration: "none",
              fontSize: 14, fontWeight: 500, fontFamily: BODY,
              borderLeft: `2px solid ${TEAL}22`, marginLeft: 16,
            }}>
              {s.label}
            </a>
          ))}

          {[
            ["Fonctionnalités", "/#features"],
            ["Tarifs", "/#pricing"],
            ["Scanner gratuit", "https://app.reeact.io/PublicScanner"],
          ].map(([l, h]) => (
            <a key={h} href={h} onClick={() => setMobile(false)} style={{
              padding: "12px 8px", color: TEAL_DEEP, textDecoration: "none",
              fontSize: 15, fontWeight: 500, fontFamily: BODY,
            }}>{l}</a>
          ))}

          <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
            <a href="https://app.reeact.io/login" style={{
              textAlign: "center", padding: "13px",
              border: `1.5px solid ${TEAL}22`, borderRadius: 12,
              color: TEAL_DEEP, textDecoration: "none", fontSize: 15, fontWeight: 500, fontFamily: BODY,
            }}>Connexion</a>
            <a href="https://app.reeact.io/register" style={{
              textAlign: "center", padding: "13px",
              background: ORANGE, borderRadius: 12,
              color: "#fff", textDecoration: "none", fontSize: 15, fontWeight: 600, fontFamily: BODY,
            }}>Démarrer gratuitement</a>
          </div>
        </div>
      )}
    </nav>
  );
}
