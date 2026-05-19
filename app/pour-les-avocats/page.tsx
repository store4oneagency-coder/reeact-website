import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

export const metadata: Metadata = {
  title: "Reeact pour avocats | Défendez la e-réputation de vos clients",
  description: "Surveillez la réputation en ligne de vos clients, constituez des preuves numériques horodatées, détectez la diffamation avant le dépôt de plainte. Refacturez le service dans vos honoraires.",
  keywords: [
    "outil veille avocat", "réputation client avocat", "preuve diffamation internet",
    "veille e-réputation cabinet droit", "surveillance mentions client avocat",
    "outil juridique e-réputation", "constat numérique diffamation",
    "avocat gestion réputation client", "refacturer veille réputation",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-avocats" },
  openGraph: {
    title: "Reeact pour avocats | Défendez la e-réputation de vos clients",
    description: "L'outil que les avocats intègrent à leurs honoraires pour surveiller, documenter et défendre la réputation en ligne de leurs clients.",
    url: "https://reeact.io/pour-les-avocats",
  },
};

const data: SectorData = {
  sector: "Avocats & Cabinets juridiques",
  h1: ["Défendez vos clients", "avant qu'ils vous appellent"],
  subtitle: "Reeact vous permet de surveiller la réputation en ligne de chacun de vos clients, de constituer des preuves numériques recevables et de refacturer ce service dans vos honoraires.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Voir le plan Avocats",
  scannerUrl: "https://app.reeact.io/AgencyOffer",
  mentions: [
    { src: "twitter.com", txt: "\"[Client A] : arnaque confirmée — thread avec 340 RTs\"", sent: "neg", age: "il y a 8 min" },
    { src: "google.fr", txt: "\"Dr. [Client B] — incompétent, a failli me tuer\"", sent: "neg", age: "il y a 42 min", star: 1 },
    { src: "purepeople.com", txt: "Rumeur non vérifiée impliquant [Client C] dans une fraude", sent: "neg", age: "il y a 1h15" },
    { src: "linkedin.com", txt: "\"[Client D] — partenaire sérieux, excellent track record\"", sent: "pos", age: "il y a 3h" },
    { src: "forum-juridique.fr", txt: "Discussion : coordonnées et accusations contre [Client E]", sent: "neg", age: "il y a 6h" },
  ],
  painEyebrow: "CE QUE VOS CLIENTS SUBISSENT SANS LE SAVOIR",
  painTitle: ["La diffamation en ligne détruit", "avant que vous puissiez plaider."],
  painLead: "Vos clients vous contactent quand les dégâts sont déjà faits : avis faux, accusations sur les réseaux, articles diffamatoires. Avec Reeact, vous intervenez avant eux — au premier signal.",
  pains: [
    {
      title: "Votre client découvre la diffamation quand elle est virale.",
      body: "Un contenu diffamatoire détecté en 5 minutes peut être retiré ou contesté rapidement. Détecté après une semaine, il a déjà été partagé des centaines de fois. La preuve numérique est plus solide si elle est capturée tôt.",
      stat: "Détection < 5 min",
    },
    {
      title: "Sans preuve horodatée, le dossier est fragile.",
      body: "Une capture d'écran ne suffit pas. Reeact génère pour chaque mention un export structuré avec URL, date, heure et contexte — utilisable comme base de dossier avant l'huissier.",
      stat: "Preuves exportables",
    },
    {
      title: "Vous vendez déjà de la gestion du risque.",
      body: "La e-réputation est un risque juridique et patrimonial. En ajoutant Reeact à votre offre, vous proposez à vos clients une veille préventive — et vous intervenez avant le contentieux, pas après.",
      stat: "Revenus récurrents",
    },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les avocats qui anticipent."],
  features: [
    {
      symbol: "▦",
      tag: "DOSSIER",
      title: "Un dossier par client",
      lead: "Tous les clients centralisés",
      body: "Créez un dossier distinct pour chaque client avec ses propres mots-clés, sources surveillées et historique. Rien ne se mélange, tout est exportable.",
    },
    {
      symbol: "⚖",
      tag: "PREUVES",
      title: "Preuves numériques horodatées",
      lead: "Format dossier · PIÈCE N°",
      body: "Chaque mention exportée est un constat numérique structuré : URL, date, heure, contenu, source. Prêt à être joint à vos conclusions ou transmis à un huissier.",
    },
    {
      symbol: "◉",
      tag: "SURVEILLANCE",
      title: "Surveillance 24h/24 multi-clients",
      lead: "Presse, réseaux, forums, Google",
      body: "Reeact surveille en continu toutes les mentions de vos clients sur plus de 200 sources. Vous êtes alerté avant eux — et vous agissez en premier.",
    },
    {
      symbol: "◐",
      tag: "IA",
      title: "Analyse IA : diffamation détectée",
      lead: "Critique légitime ou infraction ?",
      body: "Notre modèle classe chaque contenu selon sa gravité : avis négatif, allégation diffamatoire, dénigrement commercial. Vous orientez la procédure avec les bons éléments.",
    },
    {
      symbol: "✦",
      tag: "ALERTE",
      title: "Alerte premier signal",
      lead: "Contenu à risque → vous d'abord",
      body: "Dès qu'un contenu potentiellement préjudiciable est détecté pour un client, vous recevez l'alerte immédiatement. Vous pouvez le contacter avant qu'il n'en soit informé.",
    },
    {
      symbol: "☷",
      tag: "RAPPORT",
      title: "Rapport client exportable",
      lead: "Avec vos coordonnées, logo, branding",
      body: "Générez des rapports PDF mensuels personnalisés à votre nom ou celui du client. Parfait pour un suivi régulier intégré dans vos prestations de conseil.",
    },
  ],
  agencySection: {
    eyebrow: "PLAN AGENCES & AVOCATS",
    title: ["Un outil que vous intégrez", "à vos honoraires."],
    subtitle: "399 €/mois. Illimité en clients, en mots-clés et en sources. Refacturable dès le premier dossier.",
    args: [
      {
        symbol: "◈",
        title: "Refacturez le service à vos clients",
        body: "Intégrez la veille e-réputation dans vos honoraires de conseil ou facturez-la en ligne dédiée. À 99–299 €/client/mois, le ROI est immédiat dès le deuxième client.",
      },
      {
        symbol: "⊕",
        title: "Gérez tous vos clients depuis un seul compte",
        body: "Un tableau de bord unique, autant de dossiers que de clients. Chaque dossier a ses mots-clés, ses mentions, ses preuves et son historique. Rien ne se mélange.",
      },
      {
        symbol: "⊞",
        title: "Vous vendez déjà du risque — ajoutez le risque numérique",
        body: "La e-réputation est un risque patrimonial. En proposant Reeact, vous enrichissez votre offre avec une prestation préventive récurrente à forte valeur perçue.",
      },
      {
        symbol: "❋",
        title: "Importez des documents au dossier",
        body: "Ajoutez vos propres pièces à chaque dossier client : captures d'écran, constats d'huissier, courriers. Tout est centralisé dans Reeact avec les mentions détectées.",
      },
    ],
  },
  faqs: [
    {
      q: "Puis-je surveiller des dizaines de clients simultanément ?",
      a: "Oui. Le plan Agences & Avocats est illimité en dossiers. Ajoutez autant de clients que vous en avez, chacun avec ses propres mots-clés et ses sources. Tout est centralisé dans un seul compte.",
    },
    {
      q: "Les exports de preuves sont-ils recevables en procédure ?",
      a: "Nos exports constituent un constat électronique structuré (URL, date, heure, contenu). Pour une valeur probante maximale dans les litiges formels, nous recommandons de les compléter par un constat d'huissier — Reeact prépare le terrain.",
    },
    {
      q: "Comment facturer ce service à mes clients ?",
      a: "Libre à vous : inclusion dans les honoraires de conseil, ligne dédiée dans votre engagement de retainer, ou forfait mensuel autonome. Le plan à 399 €/mois est conçu pour être refacturé à l'unité — rentable dès le deuxième client.",
    },
  ],
  ctaFinalTitle: "Défendez vos clients dès le premier signal numérique.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesAvocats() {
  return <SectorPageClient data={data} />;
}
