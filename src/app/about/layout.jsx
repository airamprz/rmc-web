export const metadata = {
  metadataBase: new URL("https://realmotioncartel.com"),
  title: "Quiénes somos | Real Motion Cartel",
  description:
    "Real Motion Cartel es un sello musical y colectivo creativo con base en Madrid y conexión Canarias. Identidad, control narrativo y visión a largo plazo.",
  alternates: {
    canonical: "https://realmotioncartel.com/about",
  },
  openGraph: {
    title: "Quiénes somos | Real Motion Cartel",
    description:
      "Sello musical y colectivo creativo con base en Madrid y conexión Canarias. Identidad, control narrativo y visión a largo plazo.",
    url: "https://realmotioncartel.com/about",
    siteName: "Real Motion Cartel",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Real Motion Cartel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes somos | Real Motion Cartel",
    description:
      "Sello musical y colectivo creativo con base en Madrid y conexión Canarias. Identidad, control narrativo y visión a largo plazo.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
