export const metadata = {
  metadataBase: new URL("https://realmotioncartel.com"),
  title: "Drop | Real Motion Cartel",
  description:
    "Página de drop de Real Motion Cartel. Acceso por etapas y disponibilidad limitada.",
  alternates: { canonical: "https://realmotioncartel.com/drop" },
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
  openGraph: {
    title: "Drop | Real Motion Cartel",
    description: "Página de drop de Real Motion Cartel. Disponibilidad limitada.",
    url: "https://realmotioncartel.com/drop",
    siteName: "Real Motion Cartel",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Real Motion Cartel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drop | Real Motion Cartel",
    description: "Página de drop de Real Motion Cartel. Disponibilidad limitada.",
    images: ["/og-image.png"],
  },
};

export default function DropLayout({ children }) {
  return <>{children}</>;
}
