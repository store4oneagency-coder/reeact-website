import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour franchises et réseaux | Surveillance multi-points de vente | Reeact",
  description: "Un franchisé mal noté contamine tout votre réseau. Surveillez l'image de chaque point de vente, détectez les crises locales avant qu'elles deviennent nationales et protégez votre marque.",
  keywords: [
    "e-réputation franchise", "réputation réseau franchise", "surveillance multi-points de vente",
    "avis franchisé", "image réseau franchise", "bad buzz franchise", "franchiseur e-réputation",
    "gestion réputation réseau", "veille marque franchise",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-franchises" },
  openGraph: {
    title: "E-réputation pour franchises | Reeact",
    description: "Surveillez chaque point de vente de votre réseau. Un franchisé mal noté ne doit plus vous prendre par surprise.",
    url: "https://reeact.io/pour-les-franchises",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "🏪", title: "Un franchisé négatif devient votre problème national", body: "Un restaurant franchisé avec 2 étoiles Google n'abîme pas seulement sa propre réputation : il détruit la confiance dans toute votre enseigne. Vous devez détecter ces situations avant vos clients." },
  { icon: "🌍", title: "Impossible de tout surveiller manuellement sur des dizaines de points de vente", body: "10, 50, 200 adresses ? Aucune équipe ne peut manuellement vérifier chaque fiche Google, chaque mention presse, chaque post réseaux. Il faut un système automatisé." },
  { icon: "📉", title: "La réputation globale d'un réseau se joue sur les plus mauvais scores", body: "Les prospects regardent les pires avis avant les meilleurs. Une moyenne nationale masque des disparités locales catastrophiques que Reeact vous aide à identifier en temps réel." },
];

const FEATURES = [
  { icon: "🗂️", title: "Un dossier par point de vente", body: "Créez une entrée par franchisé avec ses propres mots-clés (nom + ville), ses mentions et son score individuel." },
  { icon: "📊", title: "Vue consolidée réseau", body: "Comparez les scores de réputation entre franchisés. Identifiez les meilleurs et les plus fragiles d'un seul regard." },
  { icon: "🚨", title: "Alerte franchiseur", body: "Dès qu'un franchisé déclenche un pic de mentions négatives, le franchiseur est alerté avant que la crise ne dépasse le niveau local." },
  { icon: "📄", title: "Rapports par enseigne", body: "Export mensuel de l'état de l'image réseau. À partager en comité de direction ou avec vos actionnaires." },
  { icon: "🔍", title: "Surveillance marque nationale", body: "En plus des points de vente, surveillez les mentions de votre marque nationale dans la presse, les forums et les réseaux sociaux." },
  { icon: "⚡", title: "Réactivité 24h/24", body: "Une crise peut démarrer la nuit ou le week-end. Les alertes Reeact ne dorment pas." },
];

const FAQS = [
  { q: "Peut-on donner un accès à chaque franchisé ?", a: "Le compte est géré par la tête de réseau. Chaque franchisé peut recevoir un rapport mensuel de son propre point de vente sans accéder aux données des autres." },
  { q: "Combien de points de vente peut-on surveiller ?", a: "Avec le plan Agences & Avocats (399 €/mois), les mots-clés et dossiers sont illimités. Vous pouvez surveiller autant de points de vente que vous souhaitez." },
  { q: "Reeact peut-il surveiller les comparateurs et annuaires locaux ?", a: "Oui — Google Maps, Yelp, TripAdvisor, PagesJaunes et les principaux réseaux sociaux sont inclus dans la surveillance standard." },
];

export default function PourLesFranchises() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>Franchises &amp; Réseaux</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              Un franchisé mal noté détruit{" "}
              <span style={{ color: O }}>des années de construction de marque</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Reeact surveille simultanément tous vos points de vente. Chaque crise locale est détectée avant de devenir un problème national.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner mon réseau</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que redoutent les franchiseurs</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {PAINS.map((p, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 20, padding: "32px 28px", border: `1px solid ${T}10`, boxShadow: "0 2px 20px -8px rgba(20,30,40,0.08)" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontFamily: DI, fontSize: 20, lineHeight: 1.1, color: TD, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{p.title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.6, color: `${T}99`, margin: 0 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ padding: "80px 40px", background: `${TD}06` }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: T }}>Fonctionnalités</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Pensé pour les têtes de réseau</h2>
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

        <section style={{ padding: "80px 40px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: T }}>FAQ</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1, letterSpacing: "-0.03em", color: I, margin: "16px 0 40px" }}>Questions fréquentes</h2>
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

        <section style={{ padding: "96px 40px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", background: `linear-gradient(135deg, ${TD} 0%, ${T} 100%)`, borderRadius: 28, padding: "64px 48px" }}>
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Protégez votre réseau</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre marque mérite une surveillance à la hauteur de votre réseau</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes</p>
            <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
