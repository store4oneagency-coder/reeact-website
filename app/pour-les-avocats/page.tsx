import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour avocats et cabinets juridiques | Reeact",
  description: "Surveiller les avis Google, les mentions médias et les publications diffamatoires sur votre cabinet. Créez des dossiers clients, exportez des preuves légales et revendez le service à vos clients.",
  keywords: [
    "e-réputation avocat", "réputation cabinet avocat", "avis avocat Google",
    "surveillance réputation juridique", "gestion avis avocat", "diffamation avocat",
    "veille réputation juriste", "outil veille cabinet droit", "preuves diffamation internet",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-avocats" },
  openGraph: {
    title: "E-réputation pour avocats et cabinets juridiques | Reeact",
    description: "Surveillance IA, dossiers clients, export de preuves légales. La plateforme que les cabinets revendent à leurs clients.",
    url: "https://reeact.io/pour-les-avocats",
  },
};

const T  = "#27475A";
const TD = "#1B3645";
const O  = "#FF7A3A";
const G  = "#3FB37F";
const P  = "#FBF8F2";
const C  = "#F1ECE3";
const I  = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  {
    icon: "⚖️",
    title: "Un seul avis négatif sur Google peut décourager 10 prospects",
    body: "Avant même le premier rendez-vous, vos clients googlen votre nom. Un commentaire injurieux, une ancienne affaire médiatisée ou un avis de plaideur mécontent peut effacer des années de réputation.",
  },
  {
    icon: "🔍",
    title: "Vos adversaires cherchent votre passé en ligne",
    body: "Articles de presse, discussions de forum, contenus diffamatoires : tout ce qui existe sur vous peut être utilisé contre vous ou vos clients. Vous devez le savoir avant eux.",
  },
  {
    icon: "⏱️",
    title: "Le bad buzz juridique se propage en heures, pas en jours",
    body: "Un tweet sur une décision défavorable, un post LinkedIn d'un ancien client : sans alerte temps réel, vous gérez la crise a posteriori — souvent trop tard.",
  },
];

const FEATURES = [
  { icon: "📁", title: "Dossier par client", body: "Créez un espace dédié à chaque client. Centralisez les mentions, les documents et l'historique des scans." },
  { icon: "📄", title: "Export de preuves légales", body: "Générez des documents PDF au format PIÈCE N° — constat officiel, mentions horodatées, prêts pour vos conclusions." },
  { icon: "📎", title: "Import de documents", body: "Joignez captures d'écran, correspondances, pièces adverses directement au dossier client." },
  { icon: "🔔", title: "Alertes temps réel", body: "Notification immédiate dès qu'une nouvelle mention apparaît — Google, presse, réseaux, avis." },
  { icon: "📊", title: "Rapport de réputation", body: "Export PDF professionnel avec en-tête cabinet, score de réputation et analyse par mot-clé." },
  { icon: "🌐", title: "Toutes les sources", body: "Google, TripAdvisor, Trustpilot, Linkedin, presse nationale, forums juridiques — surveillance complète." },
];

const AGENCY_ARGS = [
  {
    icon: "💶",
    title: "Refacturez le service à vos clients",
    body: "Le plan Agences & Avocats est illimité. Vous pouvez créer autant de dossiers que vous avez de clients et inclure la surveillance dans vos honoraires ou en facturer une ligne dédiée.",
  },
  {
    icon: "👥",
    title: "Gérez plusieurs clients depuis un seul compte",
    body: "Un tableau de bord, plusieurs dossiers. Chaque client a ses mots-clés, ses sources, son historique de scans et ses documents. Rien ne se mélange.",
  },
  {
    icon: "🏷️",
    title: "Vous vendez déjà de la gestion du risque",
    body: "La e-réputation est un risque juridique et patrimonial. En proposant Reeact, vous enrichissez votre offre avec un service récurrent qui valorise votre accompagnement.",
  },
  {
    icon: "📋",
    title: "Des preuves exportables pour vos dossiers",
    body: "Chaque mention exportée est un constat numérique horodaté, formaté comme une pièce de procédure. Gagnez du temps sur la constitution de vos preuves.",
  },
];

const FAQS = [
  {
    q: "Puis-je créer un compte distinct pour chaque client ?",
    a: "Non, c'est plus simple : vous gérez tout depuis votre compte. Vous créez un 'dossier client' par client dans Reeact, avec ses propres mots-clés, sources et documents. Un seul abonnement, autant de clients que vous souhaitez.",
  },
  {
    q: "Les PDF de preuves sont-ils recevables en procédure ?",
    a: "Nos exports constituent un constat électronique horodaté. Ils sont produits comme pièce dans vos procédures. Pour une valeur probante maximale, nous recommandons de les compléter par un constat d'huissier en cas de litige formel.",
  },
  {
    q: "Quel est le tarif du plan Agences & Avocats ?",
    a: "399 €/mois TTC, mots-clés et sources illimités, dossiers clients illimités. Un abonnement unique pour tout votre cabinet.",
  },
];

export default function PourLesAvocats() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section style={{
          background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`,
          padding: "160px 40px 100px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Grid watermark */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.03,
            backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)",
            backgroundSize: "48px 48px",
          }} />

          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{
              display: "inline-block", fontFamily: MO, fontSize: 11,
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: O, border: `1px solid ${O}55`,
              padding: "6px 14px", borderRadius: 999, marginBottom: 28,
            }}>Avocats &amp; Cabinets juridiques</span>

            <h1 style={{
              fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)",
              lineHeight: 0.95, letterSpacing: "-0.04em",
              color: C, margin: "0 0 28px", maxWidth: 900,
            }}>
              Votre réputation d&apos;avocat se joue{" "}
              <span style={{ color: O }}>avant le premier rendez-vous</span>
            </h1>

            <p style={{
              fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5,
              color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px",
            }}>
              Reeact surveille Google, la presse et les réseaux sociaux pour détecter chaque mention de votre cabinet — et vous permet d'exporter des preuves légales en un clic.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{
                padding: "16px 30px", borderRadius: 999, background: O, color: "#fff",
                fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none",
              }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{
                padding: "16px 30px", borderRadius: 999,
                border: "1.5px solid rgba(241,236,227,0.25)", color: C,
                fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none",
              }}>Scanner mon cabinet</a>
            </div>
          </div>
        </section>

        {/* ── Douleurs ─────────────────────────────────────────────────────── */}
        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>
            Ce que craignent les avocats chaque matin
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {PAINS.map((p, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: 20, padding: "32px 28px",
                border: `1px solid ${T}10`,
                boxShadow: "0 2px 20px -8px rgba(20,30,40,0.08)",
              }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontFamily: DI, fontSize: 20, lineHeight: 1.1, color: TD, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: `${T}99`, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Fonctionnalités ───────────────────────────────────────────────── */}
        <section style={{ padding: "80px 40px", background: `${TD}06` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: T }}>Ce que fait Reeact pour vous</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>
              Conçu pour les professionnels du droit
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px 22px", border: `1px solid ${T}10` }}>
                  <span style={{ fontSize: 28, display: "block", marginBottom: 12 }}>{f.icon}</span>
                  <h3 style={{ fontFamily: BO, fontWeight: 700, fontSize: 16, color: TD, margin: "0 0 8px" }}>{f.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: `${T}88`, margin: 0 }}>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Offre Agences & Avocats ───────────────────────────────────────── */}
        <section style={{ padding: "96px 40px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Offre Agences &amp; Avocats</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 12px", maxWidth: 800 }}>
              Un outil professionnel pensé pour les cabinets
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: `${T}88`, margin: "0 0 48px", maxWidth: 620 }}>
              Pas un simple abonnement : une infrastructure de surveillance que vous intégrez à votre pratique et que vous facturez à vos clients.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
              {AGENCY_ARGS.map((a, i) => (
                <div key={i} style={{
                  background: `linear-gradient(135deg, ${TD} 0%, ${T} 100%)`,
                  borderRadius: 20, padding: "32px 28px", color: C,
                }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{a.icon}</div>
                  <h3 style={{ fontFamily: DI, fontSize: 19, lineHeight: 1.1, color: C, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{a.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(241,236,227,0.72)", margin: 0 }}>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────────── */}
        <section style={{ padding: "80px 40px", background: `${TD}06` }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: T }}>FAQ</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1, letterSpacing: "-0.03em", color: I, margin: "16px 0 40px" }}>
              Questions fréquentes
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {FAQS.map((f, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: 16, padding: "24px 26px", border: `1px solid ${T}10` }}>
                  <h3 style={{ fontFamily: BO, fontWeight: 700, fontSize: 16, color: TD, margin: "0 0 10px" }}>{f.q}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: `${T}88`, margin: 0 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA final ────────────────────────────────────────────────────── */}
        <section style={{ padding: "96px 40px" }}>
          <div style={{
            maxWidth: 800, margin: "0 auto", textAlign: "center",
            background: `linear-gradient(135deg, ${TD} 0%, ${T} 100%)`,
            borderRadius: 28, padding: "64px 48px",
          }}>
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Commencez dès aujourd&apos;hui</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>
              Protégez la réputation de votre cabinet
            </h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>
              Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes
            </p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{
                padding: "16px 32px", borderRadius: 999, background: O, color: "#fff",
                fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none",
              }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/AgencyOffer" style={{
                padding: "16px 32px", borderRadius: 999,
                border: "1.5px solid rgba(241,236,227,0.3)", color: C,
                fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none",
              }}>Voir le plan Agences</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
