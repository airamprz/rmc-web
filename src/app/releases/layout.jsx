export const metadata = {
  metadataBase: new URL("https://realmotioncartel.com"),
  title: "Catálogo oficial de lanzamientos | Real Motion Cartel",
  description:
    "Catálogo oficial de lanzamientos publicados bajo Real Motion Cartel. Singles, EPs y colaboraciones.",

  alternates: {
    canonical: "https://realmotioncartel.com/releases",
  },

  openGraph: {
    title: "Catálogo oficial de lanzamientos | Real Motion Cartel",
    description:
      "Catálogo oficial de lanzamientos publicados bajo Real Motion Cartel. Singles, EPs y colaboraciones.",
    url: "https://realmotioncartel.com/releases",
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
    title: "Catálogo oficial de lanzamientos | Real Motion Cartel",
    description:
      "Catálogo oficial de lanzamientos publicados bajo Real Motion Cartel. Singles, EPs y colaboraciones.",
    images: ["/og-image.png"],
  },
};

export default function ReleasesLayout({ children }) {
  return <>{children}</>;
}
