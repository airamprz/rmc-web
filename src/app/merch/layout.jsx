export const metadata = {
  metadataBase: new URL("https://realmotioncartel.com"),
  title: "Merch oficial | Real Motion Cartel",
  description:
    "Drops limitados y piezas oficiales de Real Motion Cartel. Merch seleccionado, acceso anticipado y lanzamientos por etapas.",
  alternates: {
    canonical: "https://realmotioncartel.com/merch",
  },
  openGraph: {
    title: "Merch oficial | Real Motion Cartel",
    description:
      "Drops limitados y piezas oficiales de Real Motion Cartel. Merch seleccionado y lanzamientos por etapas.",
    url: "https://realmotioncartel.com/merch",
    siteName: "Real Motion Cartel",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Real Motion Cartel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merch oficial | Real Motion Cartel",
    description:
      "Drops limitados y piezas oficiales de Real Motion Cartel. Merch seleccionado y lanzamientos por etapas.",
    images: ["/og-image.png"],
  },
};

export default function MerchLayout({ children }) {
  return <>{children}</>;
}
