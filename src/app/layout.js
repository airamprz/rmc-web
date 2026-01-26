import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Script from "next/script";
import WhatsappButton from "@/components/WhatsappButton";
import TopAnnouncementBar from "@/components/TopAnnouncementBar";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://realmotioncartel.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Real Motion Cartel (RMC) — Sello musical y colectivo creativo",
    template: "%s — Real Motion Cartel (RMC)",
  },
  description:
    "Real Motion Cartel (RMC) es un sello musical independiente y colectivo creativo con base en Madrid y conexión directa con Canarias.",
  applicationName: "Real Motion Cartel (RMC)",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Real Motion Cartel",
    "RMC",
    "sello musical",
    "sello independiente",
    "colectivo creativo",
    "Madrid",
    "Canarias",
    "música urbana",
    "trap",
    "reggaetón",
    "merch",
    "streetwear",
  ],
  authors: [{ name: "Real Motion Cartel", url: SITE_URL }],
  creator: "Real Motion Cartel",
  publisher: "Real Motion Cartel",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/logo.png" }],
    apple: [{ url: "/logo.png" }],
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
  openGraph: {
    title: "Real Motion Cartel (RMC) — Sello musical y colectivo creativo",
    description:
      "Sello musical independiente y colectivo creativo con base en Madrid y conexión directa con Canarias.",
    url: SITE_URL,
    siteName: "Real Motion Cartel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Motion Cartel (RMC)",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Motion Cartel (RMC) — Sello musical y colectivo creativo",
    description:
      "Sello musical independiente y colectivo creativo con base en Madrid y conexión directa con Canarias.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Real Motion Cartel",
    alternateName: "RMC",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    sameAs: ["https://instagram.com/realmotioncartel"],
    description:
      "Sello musical independiente y colectivo creativo con base en Madrid y conexión directa con Canarias.",
    areaServed: ["ES", "Canarias", "Madrid"],
  };

  return (
    <html lang="es" className={robotoMono.variable}>
      <head>
        <Script
          id="rmc-org-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>

      <body className="bg-black text-white antialiased font-sans">
        <TopAnnouncementBar />

        <div className="min-h-dvh pt-[calc(4rem+2.25rem)]">
          {children}
          <WhatsappButton />
        </div>
      </body>
    </html>
  );
}
