import type { Metadata } from "next";
import { Archivo_Black, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Reeact — Maîtrisez votre réputation en ligne",
  description:
    "Reeact surveille Google, les réseaux et la presse 24h/24, analyse chaque mention par IA, et déclenche les bonnes interventions — avant que ça parte.",
  keywords: ["réputation en ligne", "monitoring", "e-réputation", "mentions", "veille"],
  openGraph: {
    title: "Reeact — Maîtrisez votre réputation en ligne",
    description: "Surveillance IA, alertes temps réel et interventions légales — tout-en-un.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${archivoBlack.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ fontFamily: "var(--font-inter-tight), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
