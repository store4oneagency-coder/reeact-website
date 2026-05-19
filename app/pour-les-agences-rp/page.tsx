import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

export const metadata: Metadata = {
  title: "Outil e-réputation pour agences RP | Surveillance marque et veille médias | Reeact",
  description: "Offrez à vos clients une veille e-réputation professionnelle. Surveillez leur image en temps réel, créez un dossier par client, exportez des rapports brandés et revendez le service.",
  keywords: [
    "outil e-réputation agence RP", "veille médias agence relations publiques",
    "surveillance marque agence", "logiciel réputation agence communication",
    "veille e-réputation agence", "monitoring marque agence PR", "outil veille presse agence",
    "white label réputation agence",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-agences-rp" },
  openGraph: {
    title: "Outil e-réputation pour agences RP | Reeact",
    description: "Créez un dossier par client, exportez des rapports pros et revendez la surveillance. L'outil que les agences RP attendent.",
    url: "https://reeact.io/pour-les-agences-rp",
  },
};

const data: SectorData = {
  sector: "Agences RP & Communication",
  h1: ["L'outil de veille que", "vous revendez à vos clients"],
  subtitle: "Reeact offre aux agences RP un accès illimité à la surveillance e-réputation. Un dossier par client, des rapports brandés, une ligne de facturation récurrente.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Voir le plan Agences",
  scannerUrl: "https://app.reeact.io/AgencyOffer",
  mentions: [
    { src: "lesechos.fr", txt: "Interview exclusive : [client] dévoile sa stratégie 2026", sent: "pos", age: "il y a 6 min" },
    { src: "twitter.com", txt: "Polémique autour de la prise de parole de [client] hier soir", sent: "neg", age: "il y a 52 min" },
    { src: "linkedin.com", txt: "\"[Client] remporte le prix RSE de l'année\"", sent: "pos", age: "il y a 1h30" },
    { src: "puremedias.com", txt: "Retombée presse : 14 articles ce matin sur [client]", sent: "pos", age: "il y a 3h" },
    { src: "twitter.com", txt: "Boycott appelé par un compte influent — 3K retweets", sent: "neg", age: "il y a 5h" },
  ],
  painEyebrow: "CE QUE REDOUTENT LES AGENCES RP",
  painTitle: ["Votre client apprend la crise", "avant vous."],
  painLead: "Sans outil de veille dédié, vous réagissez après vos clients. Reeact vous donne l'avantage de l'alerte avant eux — et une nouvelle source de revenus récurrents.",
  pains: [
    { title: "Votre client voit la crise sur Twitter avant votre alerte.", body: "Les outils de veille gratuits ont des délais. Reeact détecte et classe chaque mention en temps réel, avant que votre client ne vous appelle en urgence pour une gestion de crise non budgétée.", stat: "Alerte < 5 min" },
    { title: "Impossible de monitorer 10 clients avec des outils gratuits.", body: "Google Alerts, recherches manuelles : la veille manuelle s'arrête à 2 ou 3 clients. Reeact offre des dossiers illimités depuis un seul compte, avec un tableau de bord par client.", stat: "Dossiers illimités" },
    { title: "La veille e-réputation n'est pas encore dans vos livrables.", body: "Les clients demandent de plus en plus de mesurer l'impact de leurs campagnes en termes d'image. Sans outil dédié, vous perdez ce budget au profit d'agences plus équipées.", stat: "Revenus récurrents" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les agences qui veulent faire plus."],
  features: [
    { symbol: "▦", tag: "DOSSIER", title: "Un dossier par client", lead: "Mots-clés, sources, historique dédié", body: "Chaque client a ses propres mots-clés, ses sources surveillées et son historique de mentions. Rien ne se mélange. Tout est exportable." },
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Surveillance presse & réseaux", lead: "Retombées en direct, 24h/24", body: "Chaque retombée presse, chaque mention sur les réseaux est captée et classée. Vous avez toujours l'information avant votre client." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapports brandés exportables", lead: "Logo client, PDF professionnel", body: "Générez des rapports mensuels personnalisés avec le logo de votre agence ou celui de votre client. Parfait pour les bilans de campagne." },
    { symbol: "◐", tag: "IA", title: "Analyse de sentiment IA", lead: "Tonalité de chaque mention", body: "Chaque mention est classée positif, neutre ou négatif en millisecondes. Filtres par intensité, source et audience pour aller à l'essentiel." },
    { symbol: "✦", tag: "ALERTE", title: "Alertes crise client", lead: "Vous prévenez votre client en premier", body: "Dès qu'un pic négatif ou un contenu à risque est détecté, l'alerte vous parvient immédiatement. Vous restez le premier informé." },
    { symbol: "⊕", tag: "FACTURATION", title: "Service revendable à vos clients", lead: "Intégrez dans vos prestations", body: "Le plan Agences est conçu pour être refacturé. Incluez la veille dans vos contrats de retainer ou proposez-la en ligne dédiée." },
  ],
  agencySection: {
    eyebrow: "PLAN AGENCES & AVOCATS",
    title: ["Un outil que vous intégrez", "à vos prestations."],
    subtitle: "Illimité, revendable, brandé à votre nom. Rentable dès le premier client.",
    args: [
      { symbol: "◈", title: "Refacturez le service à vos clients", body: "Le plan Agences est illimité en mots-clés et dossiers. Intégrez la surveillance dans vos contrats de retainer ou facturez-la en ligne dédiée." },
      { symbol: "⊕", title: "Gérez tous vos clients depuis un seul compte", body: "Un tableau de bord, autant de dossiers que de clients. Chaque client a ses mots-clés, ses mentions et ses rapports. Rien ne se mélange." },
      { symbol: "⊞", title: "Rapports brandés à votre nom ou à celui du client", body: "Générez des rapports PDF professionnels avec le logo de votre agence ou celui de votre client. Parfait pour les bilans de campagne et les comités de direction." },
      { symbol: "❋", title: "Une nouvelle ligne de revenus récurrents", body: "399 €/mois pour un nombre illimité de clients. Refacturé à 99–299 €/client/mois, le ROI est immédiat dès le deuxième client." },
    ],
  },
  faqs: [
    { q: "Puis-je proposer Reeact à mes clients sous ma propre marque ?", a: "Les rapports sont exportables avec le logo de votre agence ou de votre client. Une version white-label complète est disponible sur devis pour les partenariats avancés." },
    { q: "Combien de clients puis-je gérer avec le plan Agences ?", a: "Le plan Agences & Avocats (399 €/mois) est illimité en dossiers et en mots-clés. Vous pouvez gérer autant de clients que vous le souhaitez depuis un seul compte." },
    { q: "Reeact remplace-t-il des outils comme Mention ou Meltwater ?", a: "Reeact est plus abordable et conçu pour la revendabilité. Il ne remplace pas les plateformes de relations presse avancées, mais il couvre la surveillance e-réputation complète à un coût sans équivalent." },
  ],
  ctaFinalTitle: "Votre agence mérite un outil à la hauteur.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesAgencesRP() {
  return <SectorPageClient data={data} />;
}
