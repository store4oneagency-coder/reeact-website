import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

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

const data: SectorData = {
  sector: "E-commerce & Boutiques en ligne",
  h1: ["Votre note Trustpilot", "décide de vos ventes"],
  subtitle: "Reeact surveille Trustpilot, Google Shopping, les réseaux et les forums 24h/24. Détectez les attaques de concurrents et préservez votre taux de conversion.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner ma boutique",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "trustpilot", txt: "\"Livraison rapide, produit conforme — parfait\"", sent: "pos", age: "il y a 4 min", star: 5 },
    { src: "google.fr", txt: "\"Très bon rapport qualité/prix, je recommande\"", sent: "pos", age: "il y a 28 min", star: 4 },
    { src: "trustpilot", txt: "\"Colis jamais reçu, service client inexistant\"", sent: "neg", age: "il y a 1h10", star: 1 },
    { src: "twitter.com", txt: "Thread : arnaque ou réelle boutique ? 87 RTs", sent: "neg", age: "il y a 3h" },
    { src: "reddit.com", txt: "\"Produit reçu non conforme à la description\"", sent: "neg", age: "il y a 6h", star: 2 },
  ],
  painEyebrow: "CE QUE REDOUTENT LES E-COMMERÇANTS",
  painTitle: ["Une note dégradée", "coupe vos conversions."],
  painLead: "Les acheteurs en ligne décident en 8 secondes. Une mauvaise note ou une polémique sur les réseaux peut effacer des mois de SEA et de SEO.",
  pains: [
    { title: "Une chute de 0,5 étoile sur Trustpilot coûte 15% de conversions.", body: "Les acheteurs en ligne lisent les avis avant d'acheter. Une dégradation de votre note moyenne, même légère, se traduit directement en panier abandonné et en ventes perdues.", stat: "-15% conversions / -0,5 étoile" },
    { title: "Les attaques de concurrents sont réelles et coordonnées.", body: "Comptes créés la veille, avis négatifs groupés sur 24h : les campagnes de dénigrement existent dans le e-commerce. Reeact détecte les anomalies de flux avant qu'elles s'accumulent.", stat: "Anomalie détectée < 1h" },
    { title: "Un thread viral peut bloquer une campagne entière.", body: "Un post Twitter sur une livraison ratée, un thread Reddit sur votre SAV : le bad buzz e-commerce se propage exactement lors de vos pics de trafic. Sans alerte, vous gérez trop tard.", stat: "Alerte < 5 min" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les marchands qui vendent plus."],
  features: [
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Trustpilot & Google Shopping", lead: "Chaque avis détecté immédiatement", body: "Positif, négatif ou suspect — vous êtes alerté en temps réel. Répondez aux avis critiques avant que votre note ne dégringole." },
    { symbol: "◐", tag: "IA", title: "Détection faux avis IA", lead: "Avis authentique ou attaque ?", body: "Notre modèle identifie les patterns d'avis coordonnés : comptes récents, timing suspect, formulations répétitives. Signalez en un clic." },
    { symbol: "✦", tag: "ALERTE", title: "Alerte pic négatif", lead: "Flux suspect ? Alerte prioritaire", body: "Dès qu'un pic d'avis négatifs anormal est détecté, vous recevez une alerte avec les données brutes. Activez votre réponse avant que ça s'amplifie." },
    { symbol: "▦", tag: "RÉSEAUX", title: "Surveillance réseaux & forums", lead: "Twitter, Reddit, groupes Facebook", body: "Les polémiques e-commerce naissent souvent hors des plateformes d'avis. Reeact surveille aussi les réseaux et les forums de consommateurs." },
    { symbol: "⊕", tag: "CONCURRENTS", title: "Veille concurrentielle", lead: "Surveillez aussi vos rivaux", body: "Ajoutez les noms de vos concurrents comme mots-clés. Suivez leur réputation et anticipez les mouvements de marché." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport mensuel e-commerce", lead: "Score, tendances, mots-clés clients", body: "Export mensuel avec les indicateurs clés de votre image marchande. À partager avec votre équipe marketing ou vos investisseurs." },
  ],
  faqs: [
    { q: "Reeact peut-il m'aider à signaler des faux avis sur Trustpilot ?", a: "Reeact identifie les avis suspects et vous fournit les données pour étayer votre signalement auprès de Trustpilot ou Google. Notre équipe légale peut intervenir pour les cas les plus graves." },
    { q: "Puis-je surveiller plusieurs boutiques en même temps ?", a: "Oui. Chaque boutique peut avoir son propre dossier avec ses mots-clés et ses sources. Le plan Agences & Avocats est idéal pour gérer plusieurs marques." },
    { q: "Reeact surveille-t-il aussi Amazon et les marketplaces ?", a: "Nous surveillons les sources web publiques. Les avis Amazon sont accessibles via leur API publique — nous pouvons les intégrer sur demande pour les plans avancés." },
  ],
  ctaFinalTitle: "Protégez vos ventes et votre réputation en ligne.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLeEcommerce() {
  return <SectorPageClient data={data} />;
}
