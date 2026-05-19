import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "E-réputation pour restaurants | Gérez vos avis Google et TripAdvisor | Reeact",
  description: "Surveillez vos avis Google Maps, TripAdvisor et les réseaux sociaux en temps réel. Détectez les faux avis, répondez aux crises et remplissez votre salle toute l'année.",
  keywords: [
    "e-réputation restaurant", "avis Google Maps restaurant", "gérer avis négatifs restaurant",
    "TripAdvisor réputation", "surveillance avis restaurant", "faux avis restaurant",
    "mauvais avis restaurant solution", "réputation restaurateur",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-restaurants" },
  openGraph: {
    title: "E-réputation pour restaurants | Reeact",
    description: "Détectez les faux avis, gérez votre image sur Google Maps et TripAdvisor. Remplissez votre salle en protégeant votre réputation.",
    url: "https://reeact.io/pour-les-restaurants",
  },
};

const T=  "#27475A"; const TD = "#1B3645"; const O = "#FF7A3A"; const P = "#FBF8F2";
const C = "#F1ECE3"; const I = "#15242D"; const G = "#3FB37F";
const DI = '"Archivo Black", "Arial Black", sans-serif';
const BO = '"Inter Tight", system-ui, sans-serif';
const MO = '"JetBrains Mono", "Courier New", monospace';

const PAINS = [
  { icon: "⭐", title: "4,1 étoiles ou 4,8 : la différence peut remplir ou vider votre salle", body: "92 % des clients regardent les avis en ligne avant de choisir un restaurant. Une note en baisse de 0,2 point peut réduire votre trafic de 20 %. Chaque avis compte." },
  { icon: "🤥", title: "Les faux avis de concurrents jaloux existent et font des dégâts", body: "Bourrage de faux avis négatifs, signalements massifs, comptes créés la veille : les attaques coordonnées contre les restaurants sont en forte hausse. Vous devez les détecter vite." },
  { icon: "📱", title: "Un post TikTok ou Instagram peut devenir viral en quelques heures", body: "Une photo d'un plat raté, une histoire sur le service : le bad buzz gastronomique se propage à une vitesse que vous ne pouvez pas maîtriser sans alerte temps réel." },
];

const FEATURES = [
  { icon: "🗺️", title: "Google Maps en temps réel", body: "Chaque nouvel avis sur votre fiche Google est détecté immédiatement. Positif, négatif ou neutre — vous êtes alerté avant vos concurrents." },
  { icon: "🍽️", title: "TripAdvisor & The Fork", body: "Surveillance complète des plateformes gastronomiques. Ne laissez aucune critique sans réponse trop longtemps." },
  { icon: "📊", title: "Score de réputation hebdomadaire", body: "Un indicateur synthétique qui mesure l'évolution de votre image. À partager avec votre équipe ou vos investisseurs." },
  { icon: "🔔", title: "Alerte anti-crise", body: "Pic de mentions négatives ? Vous recevez une alerte prioritaire avant que la situation ne dégénère." },
  { icon: "🤖", title: "Analyse IA du sentiment", body: "L'IA distingue la critique constructive, l'avis émotionnel et l'attaque coordonnée. Vous agissez avec discernement." },
  { icon: "📄", title: "Export rapport mensuel", body: "Un PDF pro à présenter à vos associés, franchiseurs ou investisseurs. Score, tendances, mots-clés dominants." },
];

const FAQS = [
  { q: "Reeact peut-il supprimer les avis négatifs ?", a: "Reeact surveille et vous alerte. Pour les contenus clairement diffamatoires ou faux, notre équipe d'intervention légale peut agir en votre nom pour demander la suppression auprès de la plateforme ou engager une procédure." },
  { q: "Puis-je surveiller plusieurs établissements ?", a: "Oui. Vous ajoutez autant de mots-clés (nom de votre restaurant, adresse, chef) que nécessaire. Pour plusieurs établissements, le plan Agences & Avocats offre des dossiers illimités." },
  { q: "Combien de temps pour voir les premiers résultats ?", a: "Le premier scan affiche vos mentions existantes en 2 à 3 minutes. Les nouvelles alertes arrivent en temps réel dès l'activation." },
];

export default function PourLesRestaurants() {
  return (
    <>
      <Nav />
      <main style={{ background: P, fontFamily: BO }}>
        <section style={{ background: `linear-gradient(160deg, ${TD} 0%, ${T} 60%, #2d5a70 100%)`, padding: "160px 40px 100px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: "linear-gradient(rgba(241,236,227,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(241,236,227,.5) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
            <span style={{ display: "inline-block", fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, border: `1px solid ${O}55`, padding: "6px 14px", borderRadius: 999, marginBottom: 28 }}>Restaurateurs</span>
            <h1 style={{ fontFamily: DI, fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 28px", maxWidth: 900 }}>
              Un faux avis peut remplir ou <span style={{ color: O }}>vider votre salle</span>
            </h1>
            <p style={{ fontSize: "clamp(17px, 2vw, 22px)", lineHeight: 1.5, color: "rgba(241,236,227,0.75)", maxWidth: 640, margin: "0 0 44px" }}>
              Reeact surveille Google Maps, TripAdvisor, Instagram et la presse gastronomique 24h/24 pour que vous réagissiez avant que l'image de votre établissement ne soit abîmée.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="https://app.reeact.io/register" style={{ padding: "16px 30px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
              <a href="https://app.reeact.io/PublicScanner" style={{ padding: "16px 30px", borderRadius: 999, border: "1.5px solid rgba(241,236,227,0.25)", color: C, fontFamily: BO, fontWeight: 600, fontSize: 17, textDecoration: "none" }}>Scanner mon restaurant</a>
            </div>
          </div>
        </section>

        <section style={{ padding: "96px 40px", maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: O }}>Les douleurs du secteur</span>
          <h2 style={{ fontFamily: DI, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Ce que redoutent les restaurateurs</h2>
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
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: I, margin: "16px 0 48px", maxWidth: 700 }}>Tout ce qu&apos;un restaurateur exigeant attend</h2>
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
            <span style={{ fontFamily: MO, fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: O, display: "block", marginBottom: 20 }}>Commencez dès aujourd&apos;hui</span>
            <h2 style={{ fontFamily: DI, fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 0.95, letterSpacing: "-0.04em", color: C, margin: "0 0 20px" }}>Votre salle mérite une réputation 5 étoiles</h2>
            <p style={{ fontSize: 17, color: "rgba(241,236,227,0.7)", margin: "0 0 36px", lineHeight: 1.5 }}>Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes</p>
            <a href="https://app.reeact.io/register" style={{ padding: "16px 32px", borderRadius: 999, background: O, color: "#fff", fontFamily: BO, fontWeight: 700, fontSize: 17, textDecoration: "none" }}>Démarrer gratuitement →</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
