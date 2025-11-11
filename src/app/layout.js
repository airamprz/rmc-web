import "./globals.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "RMC — Real Motion Cartel",
  description: "MVP frontend de RMC con Next.js + Tailwind.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={robotoMono.variable}>
      <body className="bg-black text-white antialiased font-sans">
        {/* Navbar fijo, compensado con padding superior */}
        <div className="min-h-dvh pt-16">{children}</div>
      </body>
    </html>
  );
}
