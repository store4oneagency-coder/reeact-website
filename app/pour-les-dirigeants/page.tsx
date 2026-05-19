import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

export const metadata: Metadata = {
  title: "E-réputation pour dirigeants et PDG | Protégez votre image executive | Reeact",
  description: "Votre nom Google est votre CV, votre contrat et votre valorisation. Surveillez chaque mention dans la presse, sur LinkedIn, Glassdoor et les réseaux sociaux. Réagissez avant la crise.",
  keywords: [
    "e-réputation dirigeant", "réputation PDG", "surveillance nom dirigeant", "e-réputation CEO",
    "Glassdoor réputation dirigeant", "gestion image dirigeant", "veille réputation patron",
    "réputation exécutive", "personal branding dirigeant",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-dirigeants" },
  openGraph: {
    title: "E-réputation pour dirigeants et PDG | Reeact",
    description: "Votre nom Google est votre valorisation. Surveillez chaque mention et réagissez avant la crise.",
    url: "https://reeact.io/pour-les-dirigeants",
  },
};

const data: SectorData = {
  sector: "Dirigeants & PDG",
  h1: ["Votre nom Google est", "votre valorisation"],
  subtitle: "Reeact surveille la presse économique, LinkedIn, Glassdoor et les réseaux 24h/24. Chaque mention de votre nom est analysée avant qu'elle n'affecte vos levées ou vos mandats.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner mon nom",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "lesechos.fr", txt: "Interview : CEO de l'année — portrait de M. Martin", sent: "pos", age: "il y a 12 min" },
    { src: "linkedin.com", txt: "\"Excellent dirigeant, vision claire et équipe soudée\"", sent: "pos", age: "il y a 45 min", star: 5 },
    { src: "glassdoor.fr", txt: "\"Management toxique, turnover record, fuyez\"", sent: "neg", age: "il y a 2h", star: 1 },
    { src: "twitter.com", txt: "Thread : les décisions controversées du PDG de [marque]", sent: "neg", age: "il y a 4h" },
    { src: "bfmbusiness.com", txt: "Décryptage : le plan social annoncé suscite l'émoi", sent: "neg", age: "il y a 7h" },
  ],
  painEyebrow: "CE QUE REDOUTENT LES DIRIGEANTS",
  painTitle: ["Ce que les investisseurs", "googlisent avant de signer."],
  painLead: "Avant un board, une levée de fonds ou une nomination, votre réputation numérique est scrutée. Un article ou un avis Glassdoor peut tout bloquer.",
  pains: [
    { title: "Glassdoor peut torpiller votre prochaine levée.", body: "Les investisseurs vérifient systématiquement la réputation managériale des fondateurs. Un taux d'approbation bas sur Glassdoor ou des avis d'anciens salariés peuvent freiner une due diligence.", stat: "Vérifié par 8 investisseurs/10" },
    { title: "Un article négatif reste indexé des années.", body: "Presse économique, blogs, forums — un contenu négatif bien référencé apparaît en première page Google pendant des années. Vous devez le détecter et le contrer dès sa publication.", stat: "Durée de vie : 3 ans en moyenne" },
    { title: "Les réseaux amplifient les polémiques en heures.", body: "Un thread Twitter, un post LinkedIn viral sur une décision contestée : sans alerte temps réel, vous gérez la crise quand elle est déjà hors de contrôle.", stat: "Alerte en < 5 min" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les dirigeants qui anticipent."],
  features: [
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Surveillance presse éco", lead: "Les Echos, BFM, Challenges, Bloomberg", body: "Chaque article mentionnant votre nom dans la presse économique nationale et internationale est détecté immédiatement." },
    { symbol: "◐", tag: "IA", title: "Analyse de sentiment IA", lead: "Positif, neutre ou à risque ?", body: "Notre modèle classe chaque mention par tonalité et risque potentiel. Vous recevez uniquement les alertes qui méritent votre attention." },
    { symbol: "▦", tag: "GLASSDOOR", title: "Surveillance Glassdoor & avis", lead: "Réputation managériale en direct", body: "Chaque nouvel avis sur Glassdoor, Indeed ou LinkedIn est détecté et analysé. Mesurez l'évolution de votre image employeur." },
    { symbol: "✦", tag: "ALERTE", title: "Alertes crisis management", lead: "Polémique détectée → vous êtes prévenu", body: "Dès qu'une mention à fort risque apparaît, vous êtes alerté par e-mail avec le contexte et les premières données d'impact." },
    { symbol: "⚖", tag: "JURIDIQUE", title: "Intervention légale rapide", lead: "Diffamation ou dénigrement ?", body: "Notre cabinet partenaire peut agir pour le déréférencement ou la suppression d'un contenu portant atteinte à votre image. Dès 500 € TTC." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport confidentiel mensuel", lead: "Score de réputation executive", body: "Rapport personnalisé avec l'évolution de votre image en ligne sur 30 jours. Confidentiel, livré en PDF sécurisé." },
  ],
  faqs: [
    { q: "Peut-on surveiller plusieurs dirigeants d'une même entreprise ?", a: "Oui. Chaque dirigeant (CEO, CFO, DG…) peut avoir ses propres mots-clés dans un dossier dédié. Tout est géré depuis un seul compte." },
    { q: "Reeact surveille-t-il les Dark Web et fuites de données ?", a: "Reeact se concentre sur les sources web indexées (presse, réseaux, forums, avis). La surveillance du dark web est une prestation distincte sur devis." },
    { q: "Comment sont protégées mes données personnelles ?", a: "Vos données sont hébergées en France chez OVH, conformément au RGPD. Aucune donnée n'est revendue ou partagée. Accès restreint à votre seul compte." },
  ],
  ctaFinalTitle: "Protégez votre image de dirigeant.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesDirigeants() {
  return <SectorPageClient data={data} />;
}
