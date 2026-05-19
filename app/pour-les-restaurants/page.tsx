import type { Metadata } from "next";
import SectorPageClient, { type SectorData } from "../components/SectorPageClient";

export const metadata: Metadata = {
  title: "E-réputation pour restaurants | Gérez vos avis Google et TripAdvisor | Reeact",
  description: "Surveillez vos avis Google Maps, TripAdvisor et les réseaux sociaux en temps réel. Détectez les faux avis, répondez aux crises et remplissez votre salle toute l'année.",
  keywords: [
    "e-réputation restaurant", "avis Google Maps restaurant", "gérer avis négatifs restaurant",
    "TripAdvisor réputation", "surveillance avis restaurant", "faux avis restaurant",
    "mauvais avis restaurant solution", "réputation restaurateur",
  ],
  alternates: { canonical: "https://reeact.io/pour-les-restaurants" },
  openGraph: {
    title: "E-réputation pour restaurants | Reeact",
    description: "Détectez les faux avis, gérez votre image sur Google Maps et TripAdvisor. Remplissez votre salle en protégeant votre réputation.",
    url: "https://reeact.io/pour-les-restaurants",
  },
};

const data: SectorData = {
  sector: "Restaurateurs",
  h1: ["Un faux avis peut remplir", "ou vider votre salle"],
  subtitle: "Reeact surveille Google Maps, TripAdvisor et les réseaux sociaux 24h/24. Détectez les faux avis et réagissez avant que la crise ne coûte des couverts.",
  ctaPrimary: "Démarrer gratuitement →",
  ctaSecondary: "Scanner mon restaurant",
  scannerUrl: "https://app.reeact.io/PublicScanner",
  mentions: [
    { src: "google.fr", txt: "\"Table exceptionnelle, service irréprochable\"", sent: "pos", age: "à l'instant", star: 5 },
    { src: "tripadvisor", txt: "\"Cadre agréable, cuisine soignée\"", sent: "pos", age: "il y a 12 min", star: 4 },
    { src: "google.fr", txt: "\"Insecte dans mon assiette, scandaleux\"", sent: "neg", age: "il y a 47 min", star: 1 },
    { src: "instagram.com", txt: "Post viral : photo plat raté · 14K vues", sent: "neg", age: "il y a 2h" },
    { src: "trustpilot", txt: "\"Service lent mais cuisine correcte\"", sent: "neu", age: "il y a 4h", star: 3 },
  ],
  painEyebrow: "CE QUE REDOUTENT LES RESTAURATEURS",
  painTitle: ["La note qui vide", "votre salle."],
  painLead: "92 % des clients lisent les avis avant de réserver. Une seule crise non détectée peut anéantir des mois de bouche-à-oreille.",
  pains: [
    { title: "4,1 ou 4,8 étoiles : la salle pleine ou vide.", body: "92 % des clients consultent les avis avant de réserver. Une note dégradée de 0,2 point peut réduire votre trafic de 20 %. Chaque étoile compte.", stat: "92% vérifient avant de réserver" },
    { title: "Les faux avis de concurrents jaloux existent.", body: "Comptes créés la veille, adresses inconnues : les attaques coordonnées sont une réalité de la restauration. Vous devez les détecter et les signaler avant qu'elles s'accumulent.", stat: "Détection anomalie < 1h" },
    { title: "Un post viral peut exploser en quelques heures.", body: "Une photo d'un plat raté, une histoire sur le service : le bad buzz gastronomique se propage exactement quand vous avez le plus de monde. Sans alerte, vous gérez trop tard.", stat: "Alerte immédiate" },
  ],
  featEyebrow: "FONCTIONNALITÉS",
  featTitle: ["Conçu pour", "les restaurateurs exigeants."],
  features: [
    { symbol: "◉", tag: "TEMPS RÉEL", title: "Google Maps en direct", lead: "Chaque avis détecté immédiatement", body: "Positif, négatif ou neutre — vous êtes alerté avant vos concurrents. Répondez dans l'heure pour montrer votre réactivité." },
    { symbol: "⊕", tag: "PLATEFORMES", title: "TripAdvisor & The Fork", lead: "Toutes les plateformes gastronomiques", body: "Surveillance complète des sites d'avis gastronomiques. Aucune critique ne reste sans réponse trop longtemps." },
    { symbol: "◐", tag: "IA", title: "Analyse de sentiment IA", lead: "Avis légitime ou attaque coordonnée ?", body: "L'IA distingue la critique constructive, l'avis émotionnel et l'attaque organisée. Vous agissez avec discernement." },
    { symbol: "✦", tag: "ALERTE", title: "Alerte anti-crise", lead: "Pic de négatif ? Vous le savez en 5 min", body: "Flux soudain d'avis négatifs, post viral, article de presse : l'alerte prioritaire vous permet d'activer votre réponse immédiatement." },
    { symbol: "▦", tag: "DATA", title: "Score hebdomadaire", lead: "Évolution de votre image sur 7 jours", body: "Un indicateur synthétique à partager avec votre équipe ou vos investisseurs. Mesurez l'impact de vos actions." },
    { symbol: "☷", tag: "RAPPORT", title: "Rapport mensuel PDF", lead: "Tendances, mots-clés, score", body: "Export professionnel à présenter à vos associés, franchiseur ou investisseurs. Score, tendances, mots-clés dominants." },
  ],
  faqs: [
    { q: "Reeact peut-il supprimer les avis négatifs ?", a: "Reeact surveille et alerte. Pour les contenus clairement diffamatoires ou faux, notre équipe d'intervention légale peut agir pour demander la suppression." },
    { q: "Puis-je surveiller plusieurs établissements ?", a: "Oui. Vous ajoutez autant de mots-clés que nécessaire. Pour plusieurs établissements, le plan Agences & Avocats offre des dossiers illimités." },
    { q: "Combien de temps pour voir les premiers résultats ?", a: "Le premier scan affiche vos mentions existantes en 2 à 3 minutes. Les nouvelles alertes arrivent en temps réel dès l'activation." },
  ],
  ctaFinalTitle: "Votre salle mérite une réputation 5 étoiles.",
  ctaFinalSub: "Essai gratuit · Aucune carte bancaire · Résultats en 2 minutes",
};

export default function PourLesRestaurants() {
  return <SectorPageClient data={data} />;
}
