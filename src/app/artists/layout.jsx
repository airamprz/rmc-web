export const metadata = {
  metadataBase: new URL("https://realmotioncartel.com"),
  title: "Artistas del sello | Real Motion Cartel",
  description:
    "Roster de Real Motion Cartel: artistas y equipo del sello. Propuesta urbana contemporánea con base en Madrid y conexión Canarias.",
  alternates: {
    canonical: "https://realmotioncartel.com/artists",
  },
  openGraph: {
    title: "Artistas del sello | Real Motion Cartel",
    description:
      "Roster de Real Motion Cartel: artistas y equipo del sello. Base en Madrid y conexión Canarias.",
    url: "https://realmotioncartel.com/artists",
    siteName: "Real Motion Cartel",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Motion Cartel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistas del sello | Real Motion Cartel",
    description:
      "Roster de Real Motion Cartel: artistas y equipo del sello. Base en Madrid y conexión Canarias.",
    images: ["/og-image.png"],
  },
};

export default function ArtistsLayout({ children }) {
  return <>{children}</>;
}
