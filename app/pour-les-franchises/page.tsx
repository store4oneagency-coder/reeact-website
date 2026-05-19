import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

export const metadata: Metadata = {
  title: "E-réputation pour franchises et réseaux | Surveillance multi-points de vente | Reeact",
  description: "Un franchisé mal noté contamine tout votre réseau. Surveillez l'image de chaque point de vente, détectez les crises locales avant qu'elles deviennent nationales et protégez votre marque.",
  keywords: [
    "e-réputation franchise", "réputation réseau franchise", "surveillance multi-points de vente",
    "avis franchisé", "image réseau franchise", "bad buzz franchise", "franchiseur e-réputation",
    "gestion réputation réseau", "veille marque franchise",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-franchises" },
  openGraph: {
    title: "E-réputation pour franchises | Reeact",
    description: "Surveillez chaque point de vente de votre réseau. Un franchisé mal noté ne doit plus vous prendre par surprise.",
    url: "https://reeact.io/pour-les-franchises",
  },
};

const data: SectorData = {
  sector: "Franchises & Réseaux",
  h1: ["Un franchisé mal noté détruit", "des années de marque"],
  subtitle: "Reeact surveille simultanément tous vos points de vente. Chaque crise locale est détectée avant de devenir un problème national.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner mon réseau",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "google.fr", txt: "\"Franchise X Paris 8e — excellent accueil\"", sent: "pos", age: "il y a 5 min", star: 5 },
    { src: "google.fr", txt: "\"Franchise X Lyon 6e — service catastrophique\"", sent: "neg", age: "il y a 32 min", star: 1 },
    { src: "facebook.com", txt: "\"Attention la franchise de Bordeaux est nulle\"", sent: "neg", age: "il y a 1h" },
    { src: "trustpilot", txt: "\"Franchise X en général, très satisfait\"", sent: "pos", age: "il y a 3h", star: 4 },
    { src: "presse-locale.fr", txt: "Reportage : polémique autour du franchisé de Nantes", sent: "neg", age: "il y a 6h" },
  ],
  painEyebrow: "CE QUE REDOUTENT LES FRANCHISEURS",
  painTitle: ["Une crise locale devient", "nationale en 48h."],
  painLead: "La réputation d'un seul point de vente peut contaminer toute votre enseigne. Sans surveillance centralisée, vous l'apprenez trop tard.",
  pains: [
    { title: "Un franchisé avec 2 étoiles contamine tout le réseau.", body: "Un restaurant, une agence ou un magasin franchisé mal noté n'abîme pas seulement sa propre réputation — il détruit la confiance dans toute votre enseigne.", stat: "Impact réseau immédiat" },
    { title: "Impossible de tout surveiller manuellement.", body: "10, 50, 200 adresses ? Aucune équipe ne peut vérifier manuellement chaque fiche Google, chaque mention presse, chaque post réseaux. Il faut un système automatisé.", stat: "Couverture 100% du réseau" },
    { title: "Les prospects regardent les pires scores, pas la moyenne.", body: "Une moyenne nationale masque des disparités locales catastrophiques. Reeact vous aide à identifier en temps réel les franchisés qui fragilisent le réseau.", stat: "Alerte par point de vente" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Surveillance totale", "de votre réseau."],
  features: [
    { symbol: "▦", tag: "DOSSIER", title: "Un dossier par franchisé", lead: "Mots-clés, mentions, score individuel", body: "Créez une entrée par point de vente avec ses propres mots-clés (nom + ville), ses mentions et son score de réputation local." },
    { symbol: "◉", tag: "RÉSEAU", title: "Vue consolidée réseau", lead: "Comparez tous vos franchisés", body: "Score de réputation de chaque franchisé visible en un coup d'œil. Identifiez les meilleurs et les plus fragiles instantanément." },
    { symbol: "✦", tag: "ALERTE", title: "Alerte franchiseur", lead: "Crise locale → alerte immédiate", body: "Dès qu'un franchisé déclenche un pic de mentions négatives, vous êtes alerté avant que la crise ne dépasse le niveau local." },
    { symbol: "◐", tag: "IA", title: "Analyse de sentiment IA", lead: "Critique légitime ou attaque ?", body: "L'IA classe chaque mention et distingue la critique constructive de l'attaque coordonnée ou du faux avis de concurrent." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport réseau mensuel", lead: "Vue d'ensemble pour la direction", body: "Export de l'état de l'image réseau. À partager en comité de direction ou avec vos actionnaires." },
    { symbol: "⊕", tag: "MARQUE", title: "Surveillance marque nationale", lead: "Presse, forums, réseaux sociaux", body: "En plus des points de vente, surveillez les mentions de votre marque nationale dans les médias et sur les réseaux." },
  ],
  faqs: [
    { q: "Peut-on donner un accès à chaque franchisé ?", a: "Le compte est géré par la tête de réseau. Chaque franchisé peut recevoir un rapport mensuel de son propre point de vente sans accéder aux données des autres." },
    { q: "Combien de points de vente peut-on surveiller ?", a: "Avec le plan Agences & Avocats (399 €/mois), mots-clés et dossiers sont illimités. Surveillez autant de points de vente que vous souhaitez." },
    { q: "Reeact peut-il surveiller les comparateurs et annuaires locaux ?", a: "Oui — Google Maps, Yelp, TripAdvisor, PagesJaunes et les principaux réseaux sociaux sont inclus dans la surveillance standard." },
  ],
  ctaFinalTitle: "Votre réseau mérite une surveillance à sa hauteur.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesFranchises() {
  return <SectorPageClient data={data} />;
}
