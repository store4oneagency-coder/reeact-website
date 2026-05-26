import type { Metadata } from "next";
import { Archivo_Black, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter-tight",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://reeact.io"),

  title: {
    default: "Reeact — Maîtrisez votre e-réputation en ligne",
    template: "%s | Reeact",
  },

  description:
    "Reeact surveille Google, les réseaux sociaux et la presse 24h/24. Analyse IA de chaque mention, alertes temps réel et interventions légales — tout en un.",

  keywords: [
    "e-réputation",
    "réputation en ligne",
    "monitoring réputation",
    "veille marque",
    "surveillance Google",
    "gestion réputation",
    "mentions web",
    "alertes réputation",
    "droit à l'oubli",
    "suppression contenu",
  ],

  authors: [{ name: "Reeact", url: "https://reeact.io" }],
  creator: "Reeact",
  publisher: "Reeact",

  alternates: {
    canonical: "https://reeact.io",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://reeact.io",
    siteName: "Reeact",
    locale: "fr_FR",
    title: "Reeact — Maîtrisez votre e-réputation en ligne",
    description:
      "Surveillance IA 24h/24, alertes temps réel et interventions légales. Protégez votre image sur Google, les réseaux et la presse.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Reeact — Plateforme française d'e-réputation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reeact — Maîtrisez votre e-réputation en ligne",
    description:
      "Surveillance IA 24h/24, alertes temps réel et interventions légales. Protégez votre image sur Google, les réseaux et la presse.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${archivoBlack.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
