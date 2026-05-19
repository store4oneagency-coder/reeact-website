import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

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

const data: SectorData = {
  sector: "Cliniques esthétiques",
  h1: ["Un bad buzz médical efface", "10 ans de réputation"],
  subtitle: "Reeact surveille Google, Instagram, les forums beauté et la presse santé 24h/24. Détectez chaque mention avant qu'elle ne dévaste votre patientèle.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner ma clinique",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "google.fr", txt: "\"Résultat naturel, chirurgien à l'écoute\"", sent: "pos", age: "il y a 8 min", star: 5 },
    { src: "instagram.com", txt: "Before/after partagé avec votre tag — 6,2K likes", sent: "pos", age: "il y a 35 min" },
    { src: "doctissimo.fr", txt: "\"Résultat catastrophique, rhinoplastie ratée\"", sent: "neg", age: "il y a 1h30" },
    { src: "google.fr", txt: "\"Consultation bâclée, très déçu de l'accueil\"", sent: "neg", age: "il y a 3h", star: 1 },
    { src: "presse-medicale.fr", txt: "Reportage : les dérives de la chirurgie esthétique low-cost", sent: "neg", age: "il y a 5h" },
  ],
  painEyebrow: "CE QUE REDOUTENT LES CLINIQUES",
  painTitle: ["La confiance médicale", "se brise en un post."],
  painLead: "En médecine esthétique, la réputation est tout. Un forum, une story Instagram négative, un article de presse — et des mois de patientèle s'évaporent.",
  pains: [
    { title: "Un avant/après qui tourne mal sur Instagram.", body: "Les réseaux sociaux amplifient les mauvais résultats à une vitesse incontrôlable. Une seule photo non consentie ou un témoignage viral peut déclencher une crise en quelques heures.", stat: "Détection post viral < 30 min" },
    { title: "Les forums beauté sont des pièges à réputation.", body: "Doctissimo, forums esthétiques, groupes Facebook privés : les patients insatisfaits échangent loin de votre radar. Reeact surveille ces espaces souvent oubliés.", stat: "200+ sources surveillées" },
    { title: "Un article de presse peut tout bloquer.", body: "Santé Magazine, Femme Actuelle, reportages TV : un seul article négatif peut couper vos nouvelles demandes de consultation pendant des mois. Vous devez le savoir dès la publication.", stat: "Alerte presse immédiate" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les professionnels de la beauté médicale."],
  features: [
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Surveillance Instagram & TikTok", lead: "Posts, stories, tags en direct", body: "Chaque mention de votre clinique sur les réseaux visuels est détectée — tag, mention, story. Réagissez avant que ça devienne viral." },
    { symbol: "◐", tag: "IA", title: "Analyse de sentiment IA", lead: "Témoignage ou attaque organisée ?", body: "L'IA distingue l'avis émotionnel post-opératoire de la campagne de dénigrement coordonnée. Vous agissez avec discernement." },
    { symbol: "▦", tag: "FORUMS", title: "Surveillance forums beauté", lead: "Doctissimo, groupes Facebook, Reddit", body: "Les forums sont souvent le premier endroit où un patient insatisfait s'exprime. Reeact surveille ces espaces loin de votre radar habituel." },
    { symbol: "✦", tag: "ALERTE", title: "Alerte presse santé", lead: "Article publié ? Vous le savez en 5 min", body: "Presse nationale, régionale, blogs santé et beauté : chaque publication mentionnant votre établissement déclenche une alerte immédiate." },
    { symbol: "⚖", tag: "JURIDIQUE", title: "Intervention légale rapide", lead: "Contenu diffamatoire ? On agit.", body: "Pour les témoignages faux ou diffamatoires, notre cabinet partenaire peut demander le retrait ou engager une procédure. Dès 500 € TTC." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport de réputation clinique", lead: "Score, tendances, mots-clés patients", body: "Export mensuel avec les indicateurs clés de votre image. À partager avec votre direction ou vos investisseurs." },
  ],
  faqs: [
    { q: "Peut-on surveiller plusieurs praticiens d'une même clinique ?", a: "Oui. Vous créez un mot-clé par praticien et un pour la clinique. Tous les résultats sont centralisés dans un seul tableau de bord." },
    { q: "Reeact couvre-t-il les groupes Facebook et forums privés ?", a: "Reeact surveille les contenus publics. Pour les groupes entièrement privés, la surveillance est limitée. Nous couvrons en revanche tous les forums et pages publiques." },
    { q: "Puis-je faire retirer un témoignage faux sur Google ?", a: "Notre équipe d'intervention légale peut initier une procédure de retrait. Pour les avis Google, nous accompagnons le signalement et, si nécessaire, la mise en demeure." },
  ],
  ctaFinalTitle: "Protégez la réputation de votre clinique.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesCliniquesEsthetiques() {
  return <SectorPageClient data={data} />;
}
