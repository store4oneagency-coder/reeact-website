import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

export const metadata: Metadata = {
  title: "E-réputation pour médecins et praticiens | Protégez votre réputation médicale | Reeact",
  description: "Un patient mécontent sur Doctolib peut vous coûter 30 nouveaux patients. Surveillez vos avis en temps réel, détectez les contenus diffamatoires et protégez votre réputation de praticien.",
  keywords: [
    "e-réputation médecin", "avis Doctolib réputation", "réputation praticien",
    "surveillance avis médecin", "diffamation patient médecin", "avis négatifs docteur",
    "gestion réputation chirurgien", "e-réputation praticien santé", "avis Google médecin",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-medecins" },
  openGraph: {
    title: "E-réputation pour médecins et praticiens | Reeact",
    description: "Protégez votre réputation médicale. Surveillez Doctolib, Google et les forums patients en temps réel.",
    url: "https://reeact.io/pour-les-medecins",
  },
};

const data: SectorData = {
  sector: "Médecins & Praticiens",
  h1: ["Un avis patient peut vider", "votre agenda"],
  subtitle: "Reeact surveille Doctolib, Google, les forums patients et la presse médicale 24h/24. Détectez chaque contenu nuisible avant qu'il ne dévaste votre patientèle.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner mon cabinet",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "doctolib.fr", txt: "\"Médecin très à l'écoute, explications claires\"", sent: "pos", age: "il y a 7 min", star: 5 },
    { src: "google.fr", txt: "\"Cabinet propre, personnel aimable, délai raisonnable\"", sent: "pos", age: "il y a 40 min", star: 4 },
    { src: "doctolib.fr", txt: "\"Consultation de 5 minutes, aucune écoute, inacceptable\"", sent: "neg", age: "il y a 1h15", star: 1 },
    { src: "forum-sante.fr", txt: "\"Le Dr X m'a prescrit quelque chose de dangereux\"", sent: "neg", age: "il y a 3h" },
    { src: "google.fr", txt: "\"Très bonne expérience, je recommande ce praticien\"", sent: "pos", age: "il y a 6h", star: 5 },
  ],
  painEyebrow: "CE QUE REDOUTENT LES PRATICIENS",
  painTitle: ["Ce que vos futurs patients", "lisent avant d'appeler."],
  painLead: "Avant de prendre un rendez-vous, vos patients googlen votre nom. Un seul avis diffamatoire peut bloquer des dizaines de nouvelles consultations.",
  pains: [
    { title: "Un avis négatif sur Doctolib bloque les nouvelles prises de rendez-vous.", body: "92 % des patients consultent les avis avant de choisir un praticien. Un seul avis extrême — même faux — peut dépasser 10 avis positifs en termes d'impact sur la décision.", stat: "92% lisent avant de réserver" },
    { title: "Les forums patients diffusent des informations fausses.", body: "Doctissimo, groupe Facebook, forum spécialisé : les témoignages de patients mécontents circulent loin de votre radar. Ils peuvent nuire à votre réputation sans que vous le sachiez.", stat: "200+ sources surveillées" },
    { title: "La diffamation médicale est difficile à détecter sans outil.", body: "Un faux témoignage sur un forum, une accusation sur les réseaux : sans veille active, vous n'en entendez parler que lorsque les dégâts sont déjà faits. Reeact alerte dès la première mention.", stat: "Alerte en < 5 min" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les praticiens qui soignent leur image."],
  features: [
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Surveillance Doctolib & Google", lead: "Chaque avis patient détecté", body: "Positif, neutre ou négatif — chaque nouvel avis sur Doctolib, Google ou Healthgrades vous est remonté immédiatement." },
    { symbol: "◐", tag: "IA", title: "Analyse de sentiment IA", lead: "Critique légitime ou diffamation ?", body: "Notre modèle distingue le témoignage d'un patient insatisfait de l'accusation diffamatoire. Vous agissez avec le bon niveau de réponse." },
    { symbol: "▦", tag: "FORUMS", title: "Surveillance forums patients", lead: "Doctissimo, groupes Facebook, Reddit", body: "Les témoignages négatifs naissent souvent hors des plateformes officielles. Reeact surveille ces espaces oubliés en continu." },
    { symbol: "✦", tag: "ALERTE", title: "Alertes instantanées", lead: "Contenu à risque → alerte e-mail", body: "Notifications immédiates dès qu'un contenu potentiellement nuisible est détecté. Configurez les seuils selon votre sensibilité." },
    { symbol: "⚖", tag: "JURIDIQUE", title: "Intervention légale rapide", lead: "Diffamation médicale : on agit", body: "Notre cabinet partenaire peut demander le retrait d'un avis faux ou diffamatoire. Procédure LCEN ou mise en demeure selon le cas. Dès 500 € TTC." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport de réputation mensuel", lead: "Score, tendances, sources", body: "Export PDF mensuel avec l'évolution de votre image et les mentions clés. À conserver dans votre dossier ou à partager avec votre équipe." },
  ],
  faqs: [
    { q: "Puis-je surveiller plusieurs cabinets ou plusieurs praticiens ?", a: "Oui. Créez un dossier par praticien et par cabinet. Chaque dossier a ses propres mots-clés et son historique. Tout est centralisé dans un seul compte." },
    { q: "Reeact peut-il faire retirer un faux avis sur Doctolib ?", a: "Reeact détecte et documente les avis suspects. Notre équipe légale peut ensuite initier un signalement auprès de Doctolib ou une procédure de retrait pour les contenus clairement diffamatoires." },
    { q: "La surveillance est-elle conforme au secret médical ?", a: "Reeact surveille uniquement les contenus publics mentionnant votre nom ou votre cabinet. Aucune donnée patient n'est collectée. Le service est conforme au RGPD et hébergé en France." },
  ],
  ctaFinalTitle: "Protégez la réputation de votre cabinet médical.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesMedecins() {
  return <SectorPageClient data={data} />;
}
