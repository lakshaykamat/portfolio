import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Common/Footer";
import ScrollProgress from "./components/Common/ScrollProgress";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE = {
  name: "Lakshay Kamat",
  role: "AI Engineer",
  url: "https://lakshaykamat.netlify.app",
  description:
    "AI Engineer building production LLM systems — voice agents, RAG pipelines, and agentic automation serving 10k+ requests a day. LangChain, LangGraph, FastAPI, NestJS, vector search, and MLOps.",
  locale: "en_US",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  generator: "Next.js",
  keywords: [
    "Lakshay Kamat",
    "AI Engineer",
    "GenAI Developer",
    "LLM Engineer",
    "Voice Agents",
    "RAG",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "FastAPI",
    "NestJS",
    "Vector Search",
    "MLOps",
    "Portfolio",
    "India",
  ],
  category: "Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.role}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.role}`,
    description: SITE.description,
    creator: "@Lakshaykamat",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.role,
  description: SITE.description,
  image: `${SITE.url}/pic.png`,
  sameAs: [
    "https://github.com/lakshaykamat",
    "https://www.linkedin.com/in/lakshaykamat",
    "https://twitter.com/Lakshaykamat",
  ],
  address: { "@type": "PostalAddress", addressCountry: "IN" },
  knowsAbout: [
    "Large Language Models",
    "Retrieval-Augmented Generation",
    "Voice Agents",
    "AI Agents",
    "LangChain",
    "LangGraph",
    "Python",
    "TypeScript",
    "FastAPI",
    "NestJS",
    "PostgreSQL",
    "Vector Search",
    "MLOps",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-ink text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
