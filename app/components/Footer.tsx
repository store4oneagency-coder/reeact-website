"use client";

const TEAL      = "#27475A";
const TEAL_DEEP = "#1B3645";
const CREAM     = "#F1ECE3";
const ORANGE    = "#FF7A3A";
const BODY      = '"Inter Tight", system-ui, sans-serif';
const MONO      = '"JetBrains Mono", "Courier New", monospace';

const SECTORS = [
  { label: "Avocats & cabinets",       href: "/pour-les-avocats" },
  { label: "Agences RP",               href: "/pour-les-agences-rp" },
  { label: "Médecins & praticiens",     href: "/pour-les-medecins" },
  { label: "Cliniques esthétiques",     href: "/pour-les-cliniques-esthetiques" },
  { label: "Restaurants",               href: "/pour-les-restaurants" },
  { label: "Franchises",                href: "/pour-les-franchises" },
  { label: "E-commerce",                href: "/pour-le-ecommerce" },
  { label: "Dirigeants & PDG",          href: "/pour-les-dirigeants" },
  { label: "Politiques & élus",         href: "/pour-les-politiques" },
  { label: "Célébrités & influenceurs", href: "/pour-les-celebrites" },
];

export default function Footer() {
  return (
    <footer style={{ background: TEAL_DEEP, color: CREAM, padding: "64px 40px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 48, marginBottom: 56 }}>
          {/* Brand */}
          <div>
            <div style={{
              height: 32, width: 32 * (1374 / 473), display: "inline-block",
              backgroundColor: CREAM,
              WebkitMaskImage: "url(/reeact-logo.png)", maskImage: "url(/reeact-logo.png)",
              WebkitMaskSize: "contain", maskSize: "contain",
              WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
              marginBottom: 16,
            }} />
            <p style={{ fontFamily: BODY, fontSize: 14, color: "rgba(241,236,227,0.6)", lineHeight: 1.6, maxWidth: 220, margin: 0 }}>
              Surveillance IA de votre réputation en ligne. Google, réseaux, presse — tout en un.
            </p>
          </div>

          {/* Produit */}
          <div>
            <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(241,236,227,0.4)", marginBottom: 16, marginTop: 0 }}>Produit</p>
            {[
              ["Fonctionnalités", "/#features"],
              ["Tarifs", "/#pricing"],
              ["Scanner gratuit", "https://app.reeact.io/PublicScanner"],
              ["Se connecter", "https://app.reeact.io/login"],
              ["S'inscrire", "https://app.reeact.io/register"],
            ].map(([l, h]) => (
              <a key={h} href={h} style={{ display: "block", color: "rgba(241,236,227,0.65)", textDecoration: "none", fontSize: 14, fontFamily: BODY, marginBottom: 10 }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = CREAM}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(241,236,227,0.65)"}
              >{l}</a>
            ))}
          </div>

          {/* Secteurs */}
          <div>
            <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(241,236,227,0.4)", marginBottom: 16, marginTop: 0 }}>Solutions par secteur</p>
            {SECTORS.map(s => (
              <a key={s.href} href={s.href} style={{ display: "block", color: "rgba(241,236,227,0.65)", textDecoration: "none", fontSize: 14, fontFamily: BODY, marginBottom: 10 }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = CREAM}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(241,236,227,0.65)"}
              >{s.label}</a>
            ))}
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(241,236,227,0.4)", marginBottom: 16, marginTop: 0 }}>Commencer</p>
            <p style={{ fontFamily: BODY, fontSize: 14, color: "rgba(241,236,227,0.6)", lineHeight: 1.6, marginBottom: 20, marginTop: 0 }}>
              Essai gratuit, sans carte bancaire.
            </p>
            <a href="https://app.reeact.io/register" style={{
              display: "inline-block", padding: "12px 22px", borderRadius: 999,
              background: ORANGE, color: "#fff", fontFamily: BODY, fontWeight: 600,
              fontSize: 15, textDecoration: "none",
            }}>Démarrer gratuitement</a>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(241,236,227,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ fontFamily: BODY, fontSize: 13, color: "rgba(241,236,227,0.4)", margin: 0 }}>
            © {new Date().getFullYear()} Reeact. Tous droits réservés.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              ["Mentions légales", "/mentions-legales"],
              ["Confidentialité", "/confidentialite"],
              ["CGV / CGU", "https://app.reeact.io/TermsAndConditions"],
            ].map(([l, h]) => (
              <a key={h} href={h} style={{ color: "rgba(241,236,227,0.4)", textDecoration: "none", fontSize: 13, fontFamily: BODY }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
