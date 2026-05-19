import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour dirigeants et PDG | Protégez votre image executive | Reeact",
  description: "Votre nom Google est votre CV, votre contrat et votre valorisation. Surveillez chaque mention dans la presse, sur LinkedIn, Glassdoor et les réseaux sociaux. Réagissez avant la crise.",
  keywords: [
    "e-réputation dirigeant", "réputation PDG", "surveillance nom dirigeant", "e-réputation CEO",
    "Glassdoor réputation dirigeant", "gestion image dirigeant", "veille réputation patron",
    "réputation exécutive", "personal branding dirigeant",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-dirigeants" },
  openGraph: {
    title: "E-réputation pour dirigeants et PDG | Reeact",
    description: "Votre nom Google est votre valorisation. Surveillez chaque mention et réagissez avant la crise.",
    url: "https://reeact.io/pour-les-dirigeants",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "📰", title: "Un article de presse critique indexe et nuit pendant des années", body: "Un article négatif en première page Google lors d'une levée de fonds, un partenariat ou une nomination peut bloquer une transaction à lui seul. Vous devez être alerté avant vos investisseurs." },
  { icon: "💼", title: "Glassdoor et les anciens employés peuvent torpiller votre marque employeur", body: "Un avis Glassdoor mal géré décourage les talents et alerte vos partenaires RH. Les commentaires d'anciens collaborateurs restent visibles des années après leur départ." },
  { icon: "🎯", title: "Vos adversaires surveillent votre réputation pour vous affaiblir", body: "Dans un conseil d'administration, une offre publique ou une négociation, votre image personnelle est une ressource stratégique. Vos adversaires le savent — vous devez le savoir aussi." },
];

const FEATURES = [
  { icon: "📰", title: "Presse nationale et régionale", body: "Chaque article qui cite votre nom est détecté en temps réel. Le Monde, Les Échos, BFM, presse régionale — rien ne passe." },
  { icon: "💼", title: "LinkedIn & Glassdoor", body: "Surveillance des plateformes professionnelles où votre image d'employeur et votre crédibilité executive se forment." },
  { icon: "🔍", title: "Recherche Google de votre nom", body: "Simulez ce que vos partenaires, investisseurs et recruteurs voient quand ils vous googlen. Analysez et améliorez." },
  { icon: "🚨", title: "Alerte en cas de pic", body: "Tentative de dénigrement coordonné, article viral, polémique émergente : vous êtes alerté immédiatement." },
  { icon: "📊", title: "Score de réputation hebdomadaire", body: "Un indicateur quantitatif de l'évolution de votre image. À partager avec votre équipe communication ou vos conseils." },
  { icon: "⚖️", title: "Intervention légale sur demande", body: "Contenu diffamatoire ou mensonger ? Notre équipe juridique intervient pour demander le retrait ou engager une procédure." },
];

const FAQS = [
  { q: "Puis-je surveiller mon nom ET celui de mon entreprise ?", a: "Oui. Vous ajoutez autant de mots-clés que nécessaire — votre nom, le nom de votre société, votre titre, votre secteur. Tout est centralisé dans un seul tableau de bord." },
  { q: "Mes données sont-elles confidentielles ?", a: "Absolument. Reeact ne traite que des données publiques. Vos tableaux de bord et rapports ne sont accessibles qu'à vous. Nous ne revendons aucune donnée." },
  { q: "Reeact peut-il améliorer mon référencement Google positif ?", a: "Reeact est un outil de surveillance et d'alerte. Pour améliorer activement votre visibilité positive (SEO de réputation), nous pouvons vous mettre en relation avec nos partenaires spécialisés." },
];

export default function PourLesDirigeants() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>Dirigeants &amp; PDG</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              Votre nom Google est votre CV,{" "}
              <span style={{ color: O }}>votre contrat et votre valorisation</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Reeact surveille la presse, LinkedIn, Glassdoor et les réseaux sociaux pour que vous sachiez exactement ce que vos partenaires et investisseurs lisent sur vous.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner mon nom</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que redoutent les dirigeants</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que Reeact fait pour les leaders</h2>
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
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Gérez votre image executive</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre leadership mérite une réputation solide</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes</p>
            <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
