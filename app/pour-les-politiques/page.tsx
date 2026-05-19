import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

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

const data: SectorData = {
  sector: "Politiques & Élus",
  h1: ["En campagne, chaque mention", "peut tout changer"],
  subtitle: "Reeact surveille la presse, les réseaux sociaux et les forums politiques 24h/24. Détectez la désinformation et les attaques adverses avant qu'elles ne s'amplifient.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner mon profil",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "lemonde.fr", txt: "Portrait : le profil atypique du candidat Martin en vue des élections", sent: "pos", age: "il y a 10 min" },
    { src: "twitter.com", txt: "\"Fake news sur le vote du député — à corriger d'urgence\"", sent: "neg", age: "il y a 38 min" },
    { src: "facebook.com", txt: "Partage viral : photo sortie de contexte — 12K partages", sent: "neg", age: "il y a 1h20" },
    { src: "lefigaro.fr", txt: "Sondage : côte de confiance en hausse de 4 points", sent: "pos", age: "il y a 3h" },
    { src: "forum-politique.fr", txt: "\"Ce député ne tient jamais ses promesses de campagne\"", sent: "neg", age: "il y a 8h" },
  ],
  painEyebrow: "CE QUE REDOUTENT LES ÉLUS",
  painTitle: ["La désinformation se propage", "avant votre démenti."],
  painLead: "En campagne ou en mandat, une fake news peut causer des dégâts électoraux durables. Vous devez la détecter et la contrer dans les premières minutes.",
  pains: [
    { title: "Une fake news circule 6 fois plus vite qu'un démenti.", body: "Les études montrent que les informations fausses se propagent plus vite que les corrections. Sans détection immédiate, votre équipe de communication court après l'incendie.", stat: "Détection en < 5 min" },
    { title: "Les adversaires exploitent les sujets en dehors des plateformes officielles.", body: "Forums politiques, groupes Telegram, comptes anonymes : les attaques adverses naissent dans des espaces que vos équipes ne surveillent pas. Reeact couvre ces angles morts.", stat: "200+ sources surveillées" },
    { title: "Un bad buzz en campagne peut changer le résultat.", body: "Une photo sortie de contexte, une citation tronquée : diffusées au bon moment, ces attaques peuvent influencer l'opinion juste avant un vote. Il faut réagir en quelques minutes.", stat: "Alerte immédiate" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les équipes de campagne qui anticipent."],
  features: [
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Veille presse & réseaux", lead: "Mentions détectées 24h/24", body: "Chaque article, tweet, post Facebook ou vidéo mentionnant votre nom ou vos positions est détecté et classé en temps réel." },
    { symbol: "◐", tag: "IA", title: "Détection désinformation IA", lead: "Fake news vs critique légitime", body: "Notre modèle identifie les contenus suspects : tonalité anormale, diffusion coordonnée, incohérences factuelles. Vous réagissez avec discernement." },
    { symbol: "✦", tag: "ALERTE", title: "Alerte crise électorale", lead: "Attaque détectée → alerte immédiate", body: "Dès qu'un pic de mentions négatives est détecté, votre équipe est alertée avec le contexte, les sources et les premiers chiffres d'audience." },
    { symbol: "▦", tag: "FORUMS", title: "Surveillance forums politiques", lead: "Angles morts couverts", body: "Forums de militants, groupes Telegram publics, Reddit politique : les attaques naissent ici avant d'atteindre la presse. Reeact surveille en premier." },
    { symbol: "⚖", tag: "JURIDIQUE", title: "Intervention légale rapide", lead: "Diffamation électorale : on agit", body: "Notre cabinet partenaire peut agir pour la suppression de contenus diffamatoires ou la mise en demeure de comptes anonymes. Dès 500 € TTC." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport de campagne hebdomadaire", lead: "Thermomètre de votre image publique", body: "Un rapport synthétique chaque semaine : évolution du sentiment, pics, mots-clés dominants. Partageable avec votre équipe de communication." },
  ],
  faqs: [
    { q: "Peut-on surveiller aussi les mentions de mon parti ?", a: "Oui. Vous pouvez créer plusieurs mots-clés : votre nom, le nom du parti, vos positions clés. Tout est centralisé dans le même tableau de bord." },
    { q: "Reeact peut-il détecter les campagnes de faux comptes ?", a: "Reeact identifie les pics de mentions anormaux et les patterns de diffusion coordonnés. Pour une analyse forensique approfondie, nous collaborons avec des experts en cybersécurité sur devis." },
    { q: "Les données sont-elles confidentielles ?", a: "Toutes vos données sont hébergées en France chez OVH, chiffrées et conformes au RGPD. Aucune donnée n'est partagée ou revendue. Accès restreint à votre équipe." },
  ],
  ctaFinalTitle: "Prenez le contrôle de votre image politique.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesPolitiques() {
  return <SectorPageClient data={data} />;
}
