import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour politiques et élus | Surveillance campagne et mentions | Reeact",
  description: "En campagne électorale ou en mandat, chaque mention compte. Surveillez la presse, les réseaux sociaux, les forums politiques. Détectez la désinformation et les attaques adverses avant qu'elles ne s'amplifient.",
  keywords: [
    "e-réputation politique", "surveillance réputation candidat", "veille électorale",
    "réputation élu", "monitoring campagne politique", "désinformation politique",
    "surveillance mentions politicien", "gestion réputation parti politique",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-politiques" },
  openGraph: {
    title: "E-réputation pour politiques et élus | Reeact",
    description: "En campagne, chaque mention compte. Détectez les attaques adverses et la désinformation en temps réel.",
    url: "https://reeact.io/pour-les-politiques",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "📅", title: "Un tweet de 2014 peut ressortir pendant votre campagne", body: "Les algorithmes de recherche n'oublient pas. Une déclaration passée, un vote controversé, une photo mal interprétée : vos adversaires fouillent, vous devez savoir ce qu'ils trouvent." },
  { icon: "📢", title: "La désinformation se propage 6x plus vite que le démenti", body: "Une fausse information bien construite fait le tour des réseaux en quelques heures. Chaque heure de retard dans la réponse amplifie les dommages. L'alerte temps réel est critique." },
  { icon: "🎯", title: "Les attaques adverses sont coordonnées et difficiles à repérer", body: "Faux comptes, articles de complaisance, mèmes viraux : les attaques politiques modernes sont orchestrées. Reeact détecte les pics anormaux de mentions négatives qui signalent une campagne coordonnée." },
];

const FEATURES = [
  { icon: "📰", title: "Presse nationale et locale", body: "Chaque article qui vous cite est détecté en temps réel — interview, compte-rendu de séance, tribune d'opposant." },
  { icon: "📱", title: "Réseaux sociaux", body: "Twitter/X, Facebook, Instagram, TikTok — chaque mention de votre nom, de votre parti ou de vos prises de position." },
  { icon: "💬", title: "Forums politiques et citoyens", body: "Reddit, forums locaux, groupes Facebook : là où se forment les opinions avant même qu'elles n'atteignent les médias." },
  { icon: "🚨", title: "Alerte désinformation", body: "Pic soudain de mentions négatives, contenu identique posté depuis plusieurs comptes : les signaux d'attaque coordonnée sont détectés automatiquement." },
  { icon: "📊", title: "Baromètre d'opinion numérique", body: "Suivez l'évolution de votre score de réputation au fil de la campagne. Mesurez l'impact de vos prises de position." },
  { icon: "📄", title: "Archivage des preuves", body: "Chaque mention diffamatoire est archivée avec URL et date. Constituez votre dossier avant que le contenu soit supprimé." },
];

const FAQS = [
  { q: "Reeact peut-il surveiller les mentions de mes adversaires aussi ?", a: "Oui. Vous pouvez ajouter autant de mots-clés que nécessaire — les vôtres, ceux de vos adversaires, les thèmes clés de votre campagne." },
  { q: "La plateforme est-elle confidentielle ?", a: "Totalement. Vos tableaux de bord et alertes ne sont visibles que par vous. Reeact ne publie ni ne partage aucune donnée." },
  { q: "Reeact peut-il agir sur les contenus diffamatoires ?", a: "Oui. Pour les contenus clairement diffamatoires ou faux, notre équipe peut engager une procédure de retrait ou vous accompagner dans une action en justice." },
];

export default function PourLesPolitiques() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>Politiques &amp; Élus</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              En campagne, chaque mention compte.{" "}
              <span style={{ color: O }}>Même celle d&apos;il y a 5 ans.</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Reeact surveille la presse, les réseaux sociaux et les forums politiques 24h/24. Détectez la désinformation et les attaques adverses avant qu&apos;elles ne s&apos;amplifient.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner mon nom</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que redoutent les élus et candidats</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Une veille politique professionnelle</h2>
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
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Prenez le contrôle de votre image</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre mandat mérite une veille à la hauteur</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes</p>
            <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
