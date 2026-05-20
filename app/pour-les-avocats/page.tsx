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
  ctaSecondary: "Voir le plan Legal Pro",
  scannerUrl: "https://app.reeact.io/LegalProOffer",
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
  legalProSection: {
    eyebrow: "PLAN LEGAL PRO",
    title: ["Pour les cabinets", "qui traitent le volume."],
    subtitle: "990 €/mois tout inclus. Mots-clés illimités, sources illimitées, interventions légales directement depuis l'app. Le plan pour les structures qui gèrent des dizaines de clients simultanément.",
    features: [
      { symbol: "∞", label: "Mots-clés illimités" },
      { symbol: "◉", label: "Sources illimitées — 200+ plateformes" },
      { symbol: "⚖", label: "Demandes d'intervention légale incluses" },
      { symbol: "▦", label: "Gestion multi-clients (dossiers séparés)" },
      { symbol: "✦", label: "Alertes temps réel prioritaires" },
      { symbol: "☷", label: "Rapports PDF à votre branding" },
    ],
    extraTitle: "Ce que le plan Legal Pro ajoute.",
    extras: [
      {
        symbol: "⚖",
        title: "Interventions légales depuis l'app",
        body: "Déposez des demandes d'intervention directement depuis Reeact pour chaque mention problématique. Un avocat partenaire instruit le dossier, vous gérez le suivi depuis votre tableau de bord.",
      },
      {
        symbol: "▦",
        title: "Dossiers clients illimités",
        body: "Créez autant de dossiers que de clients, chacun avec ses propres mots-clés, sources et historique de mentions. Gérez 10, 50 ou 200 clients depuis un seul compte sans friction.",
      },
      {
        symbol: "❋",
        title: "Support prioritaire & onboarding dédié",
        body: "Un onboarding accompagné par notre équipe, un accès support prioritaire et un suivi de compte personnalisé. Vous êtes opérationnel dès la première semaine.",
      },
    ],
  },

  faqs: [
    {
      q: "Quelle est la différence entre le plan Agency et le plan Legal Pro ?",
      a: "Le plan Agences & Avocats (399 €/mois) donne accès à des mots-clés et sources illimités pour autant de clients que vous en avez. Le plan Legal Pro (990 €/mois) inclut tout cela, plus les demandes d'intervention légale directement depuis l'app, un support prioritaire et un onboarding accompagné — conçu pour les cabinets gérant un volume élevé.",
    },
    {
      q: "Les exports de preuves sont-ils recevables en procédure ?",
      a: "Nos exports constituent un constat électronique structuré (URL, date, heure, contenu). Pour une valeur probante maximale dans les litiges formels, nous recommandons de les compléter par un constat d'huissier — Reeact prépare le terrain.",
    },
    {
      q: "Comment facturer ce service à mes clients ?",
      a: "Libre à vous : inclusion dans les honoraires de conseil, ligne dédiée dans votre retainer, ou forfait mensuel autonome. Les plans à 399 € et 990 €/mois sont conçus pour être refacturés — rentables dès le deuxième client au plan Agency, dès le premier au Legal Pro.",
    },
    {
      q: "Puis-je passer du plan Agency au plan Legal Pro sans résiliation ?",
      a: "Oui, l'upgrade se fait en un clic depuis votre espace compte. Le prorata est calculé automatiquement : vous ne payez que la différence pour les jours restants du mois en cours.",
    },
  ],
  ctaFinalTitle: "Défendez vos clients dès le premier signal numérique.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesAvocats() {
  return <SectorPageClient data={data} />;
}
