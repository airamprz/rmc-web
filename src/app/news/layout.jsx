export const metadata = {
  metadataBase: new URL("https://realmotioncartel.com"),
  title: "Noticias y comunicados | Real Motion Cartel",
  description:
    "Comunicados oficiales, anuncios y actualizaciones de Real Motion Cartel. Movimientos clave del sello, fichajes y novedades del catálogo.",
  alternates: {
    canonical: "https://realmotioncartel.com/news",
  },
  openGraph: {
    title: "Noticias y comunicados | Real Motion Cartel",
    description:
      "Comunicados oficiales, anuncios y actualizaciones del sello. Fichajes, catálogo y movimientos clave.",
    url: "https://realmotioncartel.com/news",
    siteName: "Real Motion Cartel",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Real Motion Cartel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias y comunicados | Real Motion Cartel",
    description:
      "Comunicados oficiales, anuncios y actualizaciones del sello. Fichajes, catálogo y movimientos clave.",
    images: ["/og-image.png"],
  },
};

export default function NewsLayout({ children }) {
  return <>{children}</>;
}
