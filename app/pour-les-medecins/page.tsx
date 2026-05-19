import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour médecins et praticiens | Protégez votre réputation médicale | Reeact",
  description: "Un patient mécontent sur Doctolib peut vous coûter 30 nouveaux patients. Surveillez vos avis en temps réel, détectez les contenus diffamatoires et protégez votre réputation de praticien.",
  keywords: [
    "e-réputation médecin", "avis Doctolib réputation", "réputation praticien",
    "surveillance avis médecin", "diffamation patient médecin", "avis négatifs docteur",
    "gestion réputation chirurgien", "e-réputation praticien santé", "avis Google médecin",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-medecins" },
  openGraph: {
    title: "E-réputation pour médecins et praticiens | Reeact",
    description: "Protégez votre réputation médicale. Surveillez Doctolib, Google et les forums patients en temps réel.",
    url: "https://reeact.io/pour-les-medecins",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "🏥", title: "Un avis Doctolib négatif peut faire fuir 30 nouveaux patients", body: "Plus de 60 % des patients choisissent leur médecin sur internet. Un commentaire mal géré sur Doctolib, Google ou un forum de santé coûte des mois de patientèle." },
  { icon: "⚕️", title: "La diffamation par un patient existe et nuit durablement", body: "Certains patients franchissent la limite légale en publiant des accusations fausses ou exagérées. Ces contenus s'indexent sur Google et influencent de nouveaux patients avant même leur premier rendez-vous." },
  { icon: "💻", title: "Les forums de patients alimentent des fausses rumeurs sans vous en informer", body: "PatientsLikeMe, forums spécialisés, groupes Facebook de patients : des discussions sur votre pratique peuvent exister depuis des années sans que vous le sachiez." },
];

const FEATURES = [
  { icon: "📋", title: "Doctolib & Santé Navigo", body: "Chaque nouvel avis sur votre profil Doctolib est détecté et analysé. Répondez vite pour signaler votre présence et votre sérieux." },
  { icon: "🔍", title: "Google & Maps", body: "Votre fiche Google My Business est surveillée. Avis, questions, mentions dans les résultats — rien n'est manqué." },
  { icon: "💬", title: "Forums de patients et réseaux santé", body: "Surveillance des communautés de patients où se forment des opinions sur les praticiens — souvent bien avant qu'elles atteignent les grandes plateformes." },
  { icon: "⚖️", title: "Détection de diffamation", body: "L'IA distingue la critique légitime du contenu potentiellement diffamatoire. Notre équipe peut engager une procédure de retrait." },
  { icon: "📄", title: "Export de preuves légales", body: "Chaque contenu problématique est archivé avec URL, date et capture. Votre dossier juridique est constitué automatiquement." },
  { icon: "📊", title: "Score de réputation médical", body: "Suivez l'évolution de votre image semaine après semaine. Mesurez l'impact de vos actions sur votre réputation." },
];

const FAQS = [
  { q: "Reeact respecte-t-il le secret médical ?", a: "Reeact ne traite que des contenus publics — les avis, articles et posts que tout le monde peut lire. Aucune donnée patient n'est collectée ou traitée par la plateforme." },
  { q: "Que faire face à un avis clairement diffamatoire ?", a: "Reeact archive les preuves et notre équipe peut engager une procédure de retrait auprès de la plateforme. Pour les cas graves, nous vous accompagnons dans la procédure judiciaire en lien avec un avocat spécialisé." },
  { q: "Puis-je surveiller plusieurs spécialités ou plusieurs cabinets ?", a: "Oui. Vous ajoutez autant de mots-clés que nécessaire. Pour plusieurs praticiens ou plusieurs sites, le plan Agences & Avocats offre des dossiers illimités." },
];

export default function PourLesMedecins() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>Médecins &amp; Praticiens</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              Un avis Doctolib négatif peut vous coûter{" "}
              <span style={{ color: O }}>30 nouveaux patients</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Reeact surveille Doctolib, Google, les forums de patients et la presse médicale en temps réel. Chaque avis, chaque mention — vous êtes alerté avant vos confrères.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner mon nom</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que redoutent les praticiens</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Conçu pour les professionnels de santé</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre réputation médicale mérite une protection sérieuse</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes</p>
            <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
