import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

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

const data: SectorData = {
  sector: "Célébrités & Influenceurs",
  h1: ["Une rumeur voyage plus vite", "que votre service de presse"],
  subtitle: "Reeact surveille Instagram, TikTok, la presse people et les forums 24h/24. Détectez chaque rumeur et bad buzz avant qu'ils ne détruisent vos partenariats.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner mon profil",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "instagram.com", txt: "Story mentionnant votre collaboration avec [marque] — 180K vues", sent: "pos", age: "à l'instant" },
    { src: "twitter.com", txt: "\"Cancel culture : les fans appellent au boycott de [prénom]\"", sent: "neg", age: "il y a 22 min" },
    { src: "purepeople.com", txt: "Rumeur : rupture et brouille avec [partenaire]", sent: "neg", age: "il y a 55 min" },
    { src: "tiktok.com", txt: "Duet viral moquant votre dernière publication — 400K vues", sent: "neg", age: "il y a 2h" },
    { src: "voici.fr", txt: "Article positif : portrait de l'année pour [prénom]", sent: "pos", age: "il y a 4h" },
  ],
  painEyebrow: "CE QUE REDOUTENT LES PERSONNALITÉS PUBLIQUES",
  painTitle: ["Le bad buzz detruit", "les partenariats en 24h."],
  painLead: "Vos partenariats de marque sont directement liés à votre image en ligne. Un bad buzz non détecté peut coûter des contrats signés.",
  pains: [
    { title: "Un tweet sort de contexte et c'est l'incendie.", body: "Une ancienne publication ressortie, une citation tronquée, un deepfake : les campagnes de dénigrement contre les personnalités publiques sont sophistiquées. Reeact les détecte dès le premier signal.", stat: "Détection dès 1er signal" },
    { title: "Les partenaires de marque surveillent votre réputation.", body: "Avant de signer, vos partenaires commanditaires font une due diligence de votre image. Une mauvaise note de réputation peut faire capoter une collaboration, même après signature.", stat: "Image vérifiée par 9 marques/10" },
    { title: "La presse people s'emballe en quelques heures.", body: "Voici, Purepeople, Closer : une rumeur publiée le matin devient virale l'après-midi. Sans alerte immédiate, votre attaché de presse gère la crise quand elle est déjà hors de contrôle.", stat: "Alerte presse < 10 min" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les personnalités qui protègent leur image."],
  features: [
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Instagram, TikTok & YouTube", lead: "Mentions, tags, commentaires viraux", body: "Chaque mention de votre nom sur les réseaux sociaux visuels est capturée et classée. Réagissez avant que la vidéo ou le post n'explose." },
    { symbol: "◐", tag: "IA", title: "Analyse de sentiment IA", lead: "Buzz positif ou crise émergente ?", body: "L'IA distingue l'engouement positif de la polémique naissante. Vous recevez uniquement les alertes qui méritent l'attention de votre équipe." },
    { symbol: "✦", tag: "ALERTE", title: "Alerte bad buzz express", lead: "Signal faible → alerte immédiate", body: "Dès que les premiers signaux d'un bad buzz sont détectés, votre attaché de presse ou votre agent reçoit l'alerte avec les données brutes." },
    { symbol: "▦", tag: "PRESSE", title: "Surveillance presse people", lead: "Voici, Purepeople, Closer, Gala", body: "Chaque article mentionnant votre nom dans la presse magazine et en ligne est détecté dès sa publication. Anticipez les retombées." },
    { symbol: "⚖", tag: "JURIDIQUE", title: "Retrait de contenus nuisibles", lead: "Deepfake, rumeur, diffamation", body: "Notre cabinet partenaire peut agir pour le retrait de contenus diffamatoires, de deepfakes ou de rumeurs non fondées. Dès 500 € TTC." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport image mensuel", lead: "Score, tendances, partenaires", body: "Export mensuel avec l'évolution de votre score de réputation. Idéal pour valoriser votre image auprès de vos partenaires de marque." },
  ],
  faqs: [
    { q: "Peut-on surveiller plusieurs réseaux pour une même personnalité ?", a: "Oui. Vous pouvez ajouter autant de réseaux sociaux et de sources que nécessaire. Instagram, TikTok, YouTube, presse people, forums : tout est centralisé." },
    { q: "Reeact peut-il faire retirer un article de presse people ?", a: "Notre équipe légale peut contacter les rédactions et demander le retrait ou la rectification d'un article diffamatoire. Les procédures varient selon la publication." },
    { q: "Mon agent ou attaché de presse peut-il avoir accès au tableau de bord ?", a: "Oui. Vous pouvez partager un accès en lecture à votre équipe ou configurer des alertes e-mail dédiées pour votre agent et votre attaché de presse." },
  ],
  ctaFinalTitle: "Protégez votre image et vos partenariats.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesCelebrites() {
  return <SectorPageClient data={data} />;
}
