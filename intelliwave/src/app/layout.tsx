import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Intelliwave • Agence d’automatisation AI & n8n",
  description:
    "Intelliwave conçoit et déploie des chatbots n8n sur mesure pour automatiser vos process et offrir un support client intelligent.",
  keywords: [
    "Intelliwave",
    "agence automatisation",
    "n8n",
    "chatbot sur mesure",
    "IA conversationnelle",
    "workflow automation",
  ],
  openGraph: {
    title: "Intelliwave • Agence d’automatisation AI & n8n",
    description:
      "Chatbots personnalisés et automatisations n8n pour accélérer votre croissance.",
    url: "https://agentic-c212d0d2.vercel.app",
    siteName: "Intelliwave",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelliwave • Agence d’automatisation AI & n8n",
    description:
      "Chatbots personnalisés et automatisations n8n pour accélérer votre croissance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
