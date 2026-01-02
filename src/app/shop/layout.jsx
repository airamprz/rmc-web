export const metadata = {
  metadataBase: new URL("https://realmotioncartel.com"),
  title: "Tienda online | Real Motion Cartel",
  description:
    "Compra productos oficiales de Real Motion Cartel. Drops activos, ediciones limitadas y piezas seleccionadas del universo RMC.",
  alternates: {
    canonical: "https://realmotioncartel.com/shop",
  },
  openGraph: {
    title: "Tienda online | Real Motion Cartel",
    description:
      "Productos oficiales de Real Motion Cartel. Drops activos, ediciones limitadas y piezas seleccionadas.",
    url: "https://realmotioncartel.com/shop",
    siteName: "Real Motion Cartel",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Real Motion Cartel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda online | Real Motion Cartel",
    description:
      "Productos oficiales de Real Motion Cartel. Drops activos, ediciones limitadas y piezas seleccionadas.",
    images: ["/og-image.png"],
  },
};

export default function ShopLayout({ children }) {
  return <>{children}</>;
}
