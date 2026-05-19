import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

export const metadata: Metadata = {
  title: "E-réputation pour avocats et cabinets juridiques | Reeact",
  description: "Surveiller les avis Google, les mentions médias et les publications diffamatoires sur votre cabinet. Créez des dossiers clients, exportez des preuves légales et revendez le service à vos clients.",
  keywords: [
    "e-réputation avocat", "réputation cabinet avocat", "avis avocat Google",
    "surveillance réputation juridique", "gestion avis avocat", "diffamation avocat",
    "veille réputation juriste", "outil veille cabinet droit", "preuves diffamation internet",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-avocats" },
  openGraph: {
    title: "E-réputation pour avocats et cabinets juridiques | Reeact",
    description: "Surveillance IA, dossiers clients, export de preuves légales. La plateforme que les cabinets revendent à leurs clients.",
    url: "https://reeact.io/pour-les-avocats",
  },
};

const data: SectorData = {
  sector: "Avocats & Cabinets juridiques",
  h1: ["Votre réputation se joue", "avant le premier rendez-vous"],
  subtitle: "Reeact surveille Google, la presse et les réseaux 24h/24 — et vous permet d'exporter des preuves légales pour vos dossiers.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner mon cabinet",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "google.fr", txt: "\"Maître Dupont, conseil précieux et très disponible\"", sent: "pos", age: "il y a 3 min", star: 5 },
    { src: "trustpilot", txt: "\"Dossier traité avec rigueur, je recommande\"", sent: "pos", age: "il y a 41 min", star: 4 },
    { src: "twitter.com", txt: "\"Ce cabinet a perdu mon affaire à cause de leur négligence\"", sent: "neg", age: "il y a 2h", star: 1 },
    { src: "linkedin.com", txt: "Article : Top 10 des cabinets parisiens 2026", sent: "pos", age: "il y a 5h" },
    { src: "forum-juridique.fr", txt: "\"Honoraires excessifs, procédure interminable\"", sent: "neg", age: "il y a 1j" },
  ],
  painEyebrow: "CE QUE CRAIGNENT LES AVOCATS",
  painTitle: ["Ce que vos clients", "voient avant vous."],
  painLead: "Avant le premier rendez-vous, vos prospects vous googlen. Un seul contenu négatif peut coûter des mandats entiers.",
  pains: [
    { title: "Un avis négatif en première page Google.", body: "92 % des prospects vérifient la réputation d'un avocat avant de le contacter. Un commentaire d'un plaideur mécontent suffit à faire fuir dix clients potentiels.", stat: "92% googlen avant d'appeler" },
    { title: "Vos adversaires fouillent votre passé.", body: "Articles de presse, discussions de forum, anciens dossiers médiatisés : tout ce qui existe sur vous peut être utilisé contre vous ou vos clients lors d'une négociation.", stat: "Détection en < 5 min" },
    { title: "Le bad buzz juridique se propage en heures.", body: "Un tweet sur une décision défavorable, un post d'un ancien client : sans alerte temps réel, vous gérez la crise a posteriori — quand il est trop tard.", stat: "Alerte immédiate" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les professionnels du droit."],
  features: [
    { symbol: "▦", tag: "DOSSIER", title: "Dossier par client", lead: "Un espace dédié à chaque client", body: "Centralisez toutes les mentions, documents et l'historique de scans. Rien ne se mélange entre vos dossiers." },
    { symbol: "⚖", tag: "JURIDIQUE", title: "Preuves légales exportables", lead: "Format PIÈCE N° officiel", body: "Chaque mention exportée est un constat numérique horodaté, formaté comme une pièce de procédure. Prêt pour vos conclusions." },
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Surveillance 24h/24", lead: "Google, presse, réseaux, forums", body: "Chaque nouvelle mention de votre cabinet est détectée et classée. Positive, neutre ou négative — vous le savez en premier." },
    { symbol: "✦", tag: "ALERTE", title: "Alertes instantanées", lead: "E-mail dès qu'une mention critique", body: "Notifications immédiates sur les contenus à risque. Configurez les seuils selon l'intensité que vous souhaitez surveiller." },
    { symbol: "◐", tag: "IA", title: "Analyse de sentiment IA", lead: "Diffamatoire ou critique légitime ?", body: "Notre modèle distingue l'avis négatif de l'accusation diffamatoire. Vous agissez avec discernement, pas dans la précipitation." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport PDF cabinet", lead: "En-tête et logo de votre cabinet", body: "Export mensuel avec score, tendances et mots-clés. À partager avec vos associés ou avec vos clients pour justifier votre veille." },
  ],
  agencySection: {
    eyebrow: "PLAN AGENCES & AVOCATS",
    title: ["Un outil que vous intégrez", "à vos honoraires."],
    subtitle: "Illimité, revendable, brandé à votre nom. Rentable dès le premier client.",
    args: [
      { symbol: "◈", title: "Refacturez le service à vos clients", body: "Le plan Agences est illimité en mots-clés et dossiers. Incluez la surveillance dans vos honoraires ou facturez-la en ligne dédiée." },
      { symbol: "⊕", title: "Gérez plusieurs clients depuis un seul compte", body: "Un tableau de bord, autant de dossiers que de clients. Chaque client a ses mots-clés, ses mentions et ses documents. Rien ne se mélange." },
      { symbol: "⊞", title: "Vous vendez déjà de la gestion du risque", body: "La e-réputation est un risque juridique et patrimonial. En proposant Reeact, vous enrichissez votre offre avec un service récurrent à forte valeur perçue." },
      { symbol: "❋", title: "Des preuves exportables pour vos dossiers", body: "Chaque mention exportée est un constat numérique horodaté au format PIÈCE N°. Constituez vos preuves en quelques clics." },
    ],
  },
  faqs: [
    { q: "Puis-je créer un compte distinct pour chaque client ?", a: "Non, c'est plus simple : un seul compte, autant de dossiers que de clients. Chaque dossier a ses propres mots-clés, documents et historique." },
    { q: "Les PDF de preuves sont-ils recevables en procédure ?", a: "Nos exports constituent un constat électronique horodaté. Pour une valeur probante maximale, nous recommandons de les compléter par un constat d'huissier lors de litiges formels." },
    { q: "Quel est le tarif du plan Agences & Avocats ?", a: "399 €/mois TTC, mots-clés et sources illimités, dossiers clients illimités. Un seul abonnement pour tout votre cabinet." },
  ],
  ctaFinalTitle: "Protégez la réputation de votre cabinet.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesAvocats() {
  return <SectorPageClient data={data} />;
}
