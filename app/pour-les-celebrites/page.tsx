import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour célébrités et influenceurs | Surveillance image publique | Reeact",
  description: "Une rumeur se propage plus vite que votre service de presse. Surveillez chaque mention sur Instagram, TikTok, la presse people et les forums en temps réel. Réagissez avant que la crise ne dégénère.",
  keywords: [
    "e-réputation célébrité", "surveillance réputation personnalité publique",
    "gestion réputation influenceur", "réputation artiste", "veille presse people",
    "surveillance réseaux sociaux célébrité", "bad buzz personnalité",
    "monitoring mentions influenceur", "e-réputation personnalité médiatique",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-celebrites" },
  openGraph: {
    title: "E-réputation pour célébrités et influenceurs | Reeact",
    description: "Une rumeur se propage plus vite que votre service de presse. Surveillez et réagissez en temps réel.",
    url: "https://reeact.io/pour-les-celebrites",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "📱", title: "Une rumeur se propage plus vite que votre service de presse ne peut réagir", body: "TikTok, Twitter/X, Instagram : un contenu négatif peut atteindre des millions de personnes en quelques heures. Chaque minute de retard dans la réponse amplifie l'impact." },
  { icon: "📸", title: "Les deep fakes et photos manipulées menacent directement votre image", body: "Les technologies de génération d'images permettent de vous mettre en scène dans des situations que vous n'avez jamais vécues. Ces contenus se propagent avant même que vous les ayez vus." },
  { icon: "🗞️", title: "La presse tabloïd indexe et la vérité rattrape rarement le mensonge", body: "Un article de tabloïd reste référencé pendant des années. Même avec un démenti, le titre original continue d'apparaître en premier sur Google et de forger les opinions." },
];

const FEATURES = [
  { icon: "📱", title: "Instagram, TikTok, YouTube", body: "Surveillance des plateformes visuelles où les rumeurs naissent et explosent. Chaque mention de votre nom est détectée." },
  { icon: "🗞️", title: "Presse people et médias", body: "Voici, Closer, BFMTV, Pure People, Yahoo Actualités — chaque article qui vous cite est alerté en temps réel." },
  { icon: "💬", title: "Forums et communautés de fans", body: "Les communautés de fans comme les groupes de détracteurs sont surveillées. Vous savez ce qui se dit avant que ça ne déborde." },
  { icon: "🔍", title: "Surveillance des contenus générés par IA", body: "Détection des contenus suspects — images retouchées, citations sorties de contexte, comptes d'imitation." },
  { icon: "🚨", title: "Alerte crise en temps réel", body: "Pic anormal de mentions négatives ? Vous êtes alerté immédiatement pour activer votre cellule de crise." },
  { icon: "📄", title: "Preuves archivées", body: "Chaque mention diffamatoire est archivée avec son URL et sa date. Prête pour votre avocat si nécessaire." },
];

const FAQS = [
  { q: "Puis-je surveiller également ma marque et mes partenariats ?", a: "Oui. Vous ajoutez autant de mots-clés que nécessaire : votre nom, vos pseudos, vos marques, vos projets en cours. Tout est centralisé." },
  { q: "Reeact peut-il agir sur les contenus diffamatoires ?", a: "Oui. Notre équipe d'intervention peut engager des procédures de retrait auprès des plateformes ou vous accompagner dans une action en justice pour les cas graves." },
  { q: "La surveillance est-elle confidentielle ?", a: "Totalement. Votre compte et vos alertes sont strictement privés. Reeact ne publie, ne partage et ne revend aucune donnée vous concernant." },
];

export default function PourLesCelebrites() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>Célébrités &amp; Influenceurs</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              Une rumeur se propage plus vite{" "}
              <span style={{ color: O }}>que votre service de presse</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Reeact surveille Instagram, TikTok, la presse people et les forums en temps réel. Vous êtes alerté avant que la rumeur ne vous dépasse.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner mon nom</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que redoutent les personnalités publiques</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>La surveillance que votre image mérite</h2>
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
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Protégez votre image</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre notoriété mérite d&apos;être protégée</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes</p>
            <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
