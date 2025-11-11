"use client";
import Image from "next/image";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center gap-5">
          {/* Logo */}
          <Link href="/" className="relative h-12 w-12 sm:h-14 sm:w-14">
            <Image
              src="/logo.png"
              alt="RMC Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Texto descriptivo */}
          <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
            RMC es un colectivo creativo con base en Madrid que une música,
            moda y producción audiovisual.  
            Movimiento real, sin postureo.
          </p>

          {/* Instagram */}
          <a
            href="https://instagram.com/realmotioncartel"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 h-9 text-sm
                       text-zinc-200 hover:text-white hover:bg-white/10 transition"
            aria-label="Instagram @realmotioncartel"
            title="@realmotioncartel"
          >
            <SiInstagram size={18} />
            <span className="font-medium">@realmotioncartel</span>
          </a>

          {/* Aviso de idioma */}
          <p className="text-xs text-zinc-500 mt-2">
            Traducción disponible más adelante.
          </p>
        </div>
      </div>

      {/* Inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-center text-xs text-zinc-500">
          © {new Date().getFullYear()} <span className="text-zinc-300 ml-1">RMC</span>. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
