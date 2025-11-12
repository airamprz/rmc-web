import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import WhatsappButton from "@/components/WhatsappButton"; // 👈 Importamos el componente

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "RMC — Real Motion Cartel",
  description:
    "Real Motion Cartel (RMC) colectivo creativo multidisciplinar enfocado en música, moda y dirección artística. Innovación, estilo y autenticidad unidos bajo una misma visión.",
  icons: { icon: "/logo.png" },
  keywords: [
    "RMC",
    "Real Motion Cartel",
    "colectivo musical",
    "moda urbana",
    "producción musical",
    "dirección creativa",
    "artistas emergentes",
    "RMC Select",
  ],
  authors: [{ name: "Real Motion Cartel", url: "https://realmotioncartel.vercel.app" }],
  openGraph: {
    title: "RMC — Real Motion Cartel",
    description:
      "Colectivo creativo multidisciplinar que fusiona música, moda y dirección artística. Un movimiento real, sin postureo.",
    url: "https://realmotioncartel.vercel.app",
    siteName: "Real Motion Cartel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Motion Cartel — RMC",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="es" className={robotoMono.variable}>
      <body className="bg-black text-white antialiased font-sans">
        {/* Navbar fijo, compensado con padding superior */}
        <div className="min-h-dvh pt-16">
          {children}
          <WhatsappButton /> {/* 👈 Botón flotante de WhatsApp */}
        </div>
      </body>
    </html>
  );
}

