"use client";
import Image from "next/image";
import Link from "next/link";
import { SiInstagram } from "react-icons/si";

// Año calculado de forma estable (misma salida en SSR y cliente)
const YEAR = new Date().getUTCFullYear();

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
      {/* Hairline superior con gradiente */}
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center gap-5">
          {/* Logo (enlace a Home) */}
          <Link href="/" className="block" aria-label="Inicio">
            <span className="relative block h-12 w-12 sm:h-14 sm:w-14">
              <Image src="/logo.png" alt="RMC Logo" fill className="object-contain" priority />
            </span>
          </Link>

          {/* Descripción breve */}
          <p className="max-w-md text-sm leading-relaxed text-zinc-400">
            RMC es un colectivo creativo con base en Madrid que une música, moda y producción audiovisual.
            Movimiento real, sin postureo.
          </p>

          {/* Botón Instagram (una sola línea de clases) */}
          <a
            href="https://instagram.com/realmotioncartel"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-3 h-9 text-sm text-zinc-200 ring-1 ring-white/10 hover:text-white hover:bg-white/10 transition"
            aria-label="Instagram @realmotioncartel"
            title="@realmotioncartel"
          >
            <SiInstagram size={18} />
            <span className="font-medium">@realmotioncartel</span>
          </a>

          {/* Aviso de idioma */}
          <p className="mt-1 text-xs text-zinc-500">Traducción disponible más adelante.</p>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex h-12 max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
          © <span className="mx-1 text-zinc-300">{YEAR}</span> RMC. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
