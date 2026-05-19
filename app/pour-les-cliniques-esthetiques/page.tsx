import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour cliniques esthétiques | Protégez votre image médicale | Reeact",
  description: "Surveillez les avis patients, les mentions sur Instagram et les forums de chirurgie esthétique. Détectez les crises, protégez votre réputation médicale et celle de votre clinique.",
  keywords: [
    "e-réputation clinique esthétique", "avis chirurgie esthétique", "réputation médecine esthétique",
    "surveillance avis patients clinique", "bad buzz clinique esthétique", "gestion réputation chirurgien esthétique",
    "avis négatifs médecine esthétique", "protection réputation clinique beauté",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-cliniques-esthetiques" },
  openGraph: {
    title: "E-réputation pour cliniques esthétiques | Reeact",
    description: "Un seul bad buzz médical peut effacer une réputation construite en 10 ans. Protégez-vous avec Reeact.",
    url: "https://reeact.io/pour-les-cliniques-esthetiques",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "💉", title: "Un avis de patient mécontent sur Instagram peut devenir viral", body: "Un \"résultat raté\" photographié et partagé sur les réseaux peut générer des milliers de vues en quelques heures. Dans un secteur aussi visuel que l'esthétique, l'image se joue en ligne." },
  { icon: "📝", title: "Les forums spécialisés cumulent des témoignages pendant des années", body: "Forum-chirurgie, beauté.net, RealSelf : ces plateformes indexées par Google accumulent des avis qui restent visibles pendant des années. Vous devez les surveiller en continu." },
  { icon: "⚕️", title: "La frontière entre avis négatif et diffamation est vite franchie", body: "Un patient mécontent peut dépasser les limites légales. Sans surveillance, ces contenus s'indexent et nuisent à de nouveaux patients potentiels avant que vous ne les ayez vus." },
];

const FEATURES = [
  { icon: "📱", title: "Instagram & TikTok surveillés", body: "Les réseaux visuels sont le terrain de jeu des crises esthétiques. Chaque mention de votre clinique ou de votre nom est détectée." },
  { icon: "💬", title: "Forums médicaux & beauté", body: "Surveillance des forums spécialisés où les patientes échangent sur les praticiens et les résultats." },
  { icon: "⭐", title: "Google & Doctolib", body: "Alertes sur chaque nouvel avis. Répondez rapidement, avant que l'algorithme n'en tienne compte négativement." },
  { icon: "🔒", title: "Détection de contenu diffamatoire", body: "L'IA distingue l'avis négatif légitime du contenu diffamatoire. Notre équipe peut engager des procédures de retrait." },
  { icon: "📄", title: "Export de preuves", body: "Constituez votre dossier de preuves en cas de procédure. Chaque mention est archivée avec URL et date." },
  { icon: "📊", title: "Score de réputation médical", body: "Un indicateur synthétique de l'image de votre clinique, à surveiller chaque semaine." },
];

const FAQS = [
  { q: "Reeact respecte-t-il le secret médical et le RGPD ?", a: "Reeact surveille uniquement les contenus publics sur internet — ce qui est déjà visible de tous. Aucune donnée patient n'est traitée. La plateforme est conforme RGPD." },
  { q: "Peut-on surveiller plusieurs praticiens au sein de la même clinique ?", a: "Oui. Vous ajoutez autant de mots-clés que nécessaire : nom de la clinique, noms des praticiens, spécialités. Le plan Agences permet des dossiers illimités." },
  { q: "Que faire si un contenu est clairement diffamatoire ?", a: "Reeact peut déclencher une procédure d'intervention légale. Notre équipe vous accompagne pour la demande de retrait amiable ou la procédure judiciaire si nécessaire." },
];

export default function PourLesCliniques() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>Cliniques esthétiques &amp; Médecine esthétique</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              Un bad buzz médical peut effacer{" "}
              <span style={{ color: O }}>une réputation construite en 10 ans</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Instagram, forums spécialisés, Google — Reeact surveille chaque mention de votre clinique et vous alerte avant qu&apos;un avis négatif ne devienne une crise.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner ma clinique</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que craignent les praticiens</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Une protection adaptée au secteur médical</h2>
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
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Protégez votre pratique</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre expertise mérite une réputation à sa hauteur</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes</p>
            <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
