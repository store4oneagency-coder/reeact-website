import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Outil e-réputation pour agences RP | Surveillance marque et veille médias | Reeact",
  description: "Offrez à vos clients une veille e-réputation professionnelle. Surveillez leur image en temps réel, créez un dossier par client, exportez des rapports brandés et revendez le service.",
  keywords: [
    "outil e-réputation agence RP", "veille médias agence relations publiques",
    "surveillance marque agence", "logiciel réputation agence communication",
    "veille e-réputation agence", "monitoring marque agence PR", "outil veille presse agence",
    "white label réputation agence",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-agences-rp" },
  openGraph: {
    title: "Outil e-réputation pour agences RP | Reeact",
    description: "Créez un dossier par client, exportez des rapports pros et revendez la surveillance. L'outil que les agences RP attendent.",
    url: "https://reeact.io/pour-les-agences-rp",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "⚡", title: "Vos clients attendent une réactivité 24h/24 — impossible manuellement", body: "Un bad buzz peut démarrer la nuit, le week-end ou pendant vos vacances. Sans outil automatisé, vous apprenez la crise de votre client — pas avant lui." },
  { icon: "📊", title: "Les reporting de veille manuelle prennent des heures chaque semaine", body: "Compiler des captures d'écran, copier des URLs, rédiger des synthèses : le temps passé en veille manuelle n'est pas facturé à sa juste valeur. Il mérite un outil professionnel." },
  { icon: "💶", title: "La veille e-réputation est un service récurrent que vous ne proposez pas encore", body: "Vos clients paient pour des relations presse, des événements, de la création de contenu. Ajouter la surveillance de réputation à votre offre est la ligne de revenus récurrents que vous cherchez." },
];

const FEATURES = [
  { icon: "📁", title: "Un dossier par client", body: "Centralisez toutes les mentions, documents et rapports d'un client dans un espace dédié. Rien ne se mélange entre vos comptes." },
  { icon: "📄", title: "Rapports PDF exportables", body: "Générez des rapports brandés avec en-tête de votre agence ou de votre client. Prêts à envoyer en fin de mois." },
  { icon: "💶", title: "Revendez le service", body: "Facturez la surveillance à vos clients comme une ligne de service. Le plan Agences est illimité — votre marge est votre valeur ajoutée." },
  { icon: "🔔", title: "Alertes temps réel", body: "Dès qu'une mention critique apparaît, vous et votre client êtes alertés. Vous réagissez en premier." },
  { icon: "🌐", title: "Toutes sources incluses", body: "Presse, Google, réseaux sociaux, forums, avis — plus de 20 sources surveillées par IA sans paramétrage complexe." },
  { icon: "📎", title: "Import de documents", body: "Ajoutez des briefs, des revues de presse, des archives ou des pièces au dossier client directement depuis la plateforme." },
];

const AGENCY_ARGS = [
  { icon: "💶", title: "Marges récurrentes sur chaque client", body: "Vous payez 399 €/mois pour un accès illimité. Vous facturez la surveillance à chaque client à votre tarif. C'est un service récurrent à forte valeur perçue." },
  { icon: "👥", title: "Autant de clients que vous voulez", body: "Un dossier par client, des mots-clés illimités. 5 clients ou 50 — c'est le même abonnement." },
  { icon: "📊", title: "Des rapports que vos clients attendent", body: "Un rapport mensuel PDF professionnel, exporté en 10 secondes. Vos clients voient la valeur de votre prestation à chaque envoi." },
  { icon: "⚡", title: "Réactivité qui renforce votre positioning", body: "Vous alertez votre client avant qu'il ne découvre lui-même la crise. C'est votre différence concurrentielle." },
];

const FAQS = [
  { q: "Puis-je mettre le logo de mon agence sur les rapports PDF ?", a: "Avec le plan Agences & Avocats, vous uploadez le logo et les coordonnées de votre cabinet. Les PDF exportés portent votre entête — pas celui de Reeact." },
  { q: "Mes clients peuvent-ils voir leur tableau de bord ?", a: "Le compte est géré par votre agence. Vous exportez et partagez les rapports que vous souhaitez. Un accès client direct est en cours de développement." },
  { q: "Quel est le positionnement tarifaire recommandé ?", a: "La plupart des agences positionnent la surveillance entre 150 et 400 €/mois par client selon leur secteur et le nombre de mots-clés. Avec Reeact à 399 €/mois illimité, la marge est immédiate dès le 2ème client." },
];

export default function PourLesAgencesRp() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>Agences RP &amp; Communication</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              Offrez à vos clients une veille{" "}
              <span style={{ color: O }}>digne d&apos;une grande agence</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Reeact donne à votre agence les capacités d&apos;une salle de veille professionnelle — sans les coûts. Un dossier par client, des rapports PDF brandés, un service que vous revendez.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/AgencyOffer" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Voir le plan Agences →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner un client</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que vivent les agences RP</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Conçu pour les agences multi-clients</h2>
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

        <section style={{ padding: "96px 40px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Plan Agences &amp; Avocats — 399 €/mois</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 12px", maxWidth: 800 }}>Un investissement rentable dès le 2ème client</h2>
            <p style={{ fontSize: 18, lineHeight: 1.55, color: `${T}88`, margin: "0 0 48px", maxWidth: 620 }}>Illimité, brandé à votre nom, revendable à votre tarif.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
              {AGENCY_ARGS.map((a, i) => (
                <div key={i} style={{ background: `linear-gradient(135deg, ${TD} 0%, ${T} 100%)`, borderRadius: 20, padding: "32px 28px", color: C }}>
                  <div style={{ fontSize: 32, marginBottom: 16 }}>{a.icon}</div>
                  <h3 style={{ fontFamily: DI, fontSize: 19, lineHeight: 1.1, color: C, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{a.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(241,236,227,0.72)", margin: 0 }}>{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ padding: "80px 40px", background: `${TD}06` }}>
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
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Développez votre offre</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre agence mérite un outil à sa hauteur</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Plan Agences & Avocats · Illimité · Revendable</p>
            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/AgencyOffer" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Voir le plan Agences →</a>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.3)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Essai gratuit</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
