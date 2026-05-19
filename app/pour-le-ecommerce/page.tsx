import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour e-commerce | Gérez vos avis Trustpilot et Google Shopping | Reeact",
  description: "Une étoile de moins sur Trustpilot peut faire chuter votre taux de conversion de 15%. Surveillez vos avis en temps réel, détectez les attaques de concurrents et protégez vos ventes.",
  keywords: [
    "e-réputation ecommerce", "avis Trustpilot boutique en ligne", "réputation Google Shopping",
    "gérer avis négatifs ecommerce", "faux avis concurrents ecommerce", "surveillance réputation boutique",
    "améliorer note Trustpilot", "e-réputation vente en ligne",
  ],
  alternates: { canonical: "https://reeact.io/pour-le-ecommerce" },
  openGraph: {
    title: "E-réputation pour e-commerce | Reeact",
    description: "Protégez vos ventes. Surveillez Trustpilot, Google et les réseaux sociaux en temps réel.",
    url: "https://reeact.io/pour-le-ecommerce",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "⭐", title: "Une étoile de moins sur Trustpilot = -15 % de taux de conversion", body: "Les acheteurs en ligne sont les consommateurs les plus exigeants qui soient. Une note dégradée sur Trustpilot, Avis Vérifiés ou Google Shopping coûte des milliers d'euros de CA chaque mois." },
  { icon: "🤥", title: "Les concurrents font poster de faux avis négatifs", body: "Comptes créés la veille, adresses inconnues, commandes jamais passées : les attaques d'avis coordonnés sont une réalité de l'e-commerce. Vous devez les détecter et les signaler rapidement." },
  { icon: "💥", title: "Un bad buzz sur les réseaux peut exploser pendant une promo", body: "Black Friday, soldes, sortie produit : les mauvaises nouvelles circulent exactement quand vous avez le plus de trafic. Sans alerte temps réel, vous payez la crise au prix fort." },
];

const FEATURES = [
  { icon: "⭐", title: "Trustpilot & Avis Vérifiés", body: "Chaque nouvel avis est détecté et analysé. Positif à amplifier ou négatif à traiter — vous le savez en temps réel." },
  { icon: "🛒", title: "Google Shopping & Maps", body: "Vos fiches produits et votre fiche établissement sont surveillées. Aucun avis négatif ne passe inaperçu." },
  { icon: "📱", title: "Réseaux sociaux", body: "Instagram, TikTok, Facebook, Twitter/X — chaque mention de votre marque est trackée et analysée par l'IA." },
  { icon: "📦", title: "Surveillance des retours produits", body: "Pics de mentions liées à des problèmes de livraison ou de qualité ? Une alerte vous permet de réagir avant que la vague d'avis négatifs n'arrive." },
  { icon: "🔍", title: "Détection d'attaques concurrentes", body: "L'IA identifie les pics anormaux d'avis négatifs — signature d'une attaque coordonnée — et vous alerte pour déclencher la procédure de signalement." },
  { icon: "📊", title: "Dashboard conversion & réputation", body: "Corrélation entre score de réputation et performances commerciales. Montrez à vos associés que l'image impacte directement le CA." },
];

const FAQS = [
  { q: "Reeact peut-il demander la suppression des faux avis ?", a: "Oui. Notre équipe peut engager des procédures de signalement auprès de Trustpilot, Google et les autres plateformes. Pour les cas graves (campagne organisée), une intervention légale est disponible." },
  { q: "Puis-je surveiller plusieurs marques ou boutiques ?", a: "Oui. Vous ajoutez autant de mots-clés que nécessaire. Pour plusieurs boutiques ou marques distinctes, le plan Agences permet des dossiers illimités." },
  { q: "Combien de sources sont surveillées ?", a: "Plus de 20 sources : Google, Trustpilot, Avis Vérifiés, Amazon, TikTok, Instagram, Facebook, forums de consommateurs, comparateurs de prix et presse." },
];

export default function PourLeEcommerce() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>E-commerce &amp; Boutiques en ligne</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              Une étoile de moins sur Trustpilot,{" "}
              <span style={{ color: O }}>c&apos;est -15 % de taux de conversion</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Reeact surveille tous vos canaux d&apos;avis en temps réel. Chaque attaque de concurrent, chaque mauvais avis viral est détecté avant d&apos;impacter vos ventes.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner ma boutique</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que redoutent les e-commerçants</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Conçu pour les marchands qui vendent sérieusement</h2>
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
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Protégez vos ventes</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre boutique mérite une réputation 5 étoiles</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes</p>
            <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
