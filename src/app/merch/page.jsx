"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "rmc-merch-01",
    name: "RMC Merch · First Drop",
    status: "coming_soon",
    image: "/merch/merch1.png",
    desc: "Primer drop oficial de Real Motion Cartel. Unidades limitadas. Calidad premium. Diseño alineado con el ADN del movimiento.",
  },
];

function StatusPill() {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-zinc-200">
      Próximamente
    </span>
  );
}

export default function MerchPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-gradient-to-b from-black via-black to-zinc-950">
        {/* Glow suave */}
        <div className="pointer-events-none absolute inset-x-0 top-32 mx-auto h-64 max-w-4xl rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
          {/* Header */}
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Real Motion Cartel · Merch
            </p>

            <h1 className="text-3xl sm:text-4xl font-semibold text-white">
              Merch oficial
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-zinc-300">
              Drops limitados. Cada pieza forma parte del universo Real Motion Cartel.
              El primer lanzamiento se anunciará muy pronto.
            </p>
          </header>

          {/* LISTA DE PRODUCTOS */}
          <section className="divide-y divide-white/10 rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02]">
            {products.map((product) => (
              <article
                key={product.id}
                className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 p-6 sm:p-8"
              >
                {/* Imagen */}
                <div className="relative aspect-square w-full max-w-[280px]">
                  <Image
                    src="/merch/merch1.png"
                    alt={product.name}
                    fill
                    className="object-cover rounded-2xl border border-white/10"
                    sizes="280px"
                    unoptimized
                    priority
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h2 className="text-xl sm:text-2xl font-semibold text-white">
                        {product.name}
                      </h2>
                      <StatusPill />
                    </div>

                    <p className="text-sm sm:text-base text-zinc-300 max-w-xl">
                      {product.desc}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/10 bg-white/5 text-zinc-500 cursor-not-allowed"
                    >
                      Disponible próximamente
                    </button>

                    <a
                      href="https://instagram.com/realmotioncartel"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm text-zinc-100 border border-white/15 hover:bg-white/10 transition"
                    >
                      Seguir drops en Instagram
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </section>

          {/* Footer */}
          <footer className="pt-6 text-center text-xs text-zinc-500">
            <p>
              La fecha y el link de compra se anunciarán en @realmotioncartel.
            </p>
            <p className="mt-2">
              © {new Date().getFullYear()} Real Motion Cartel.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
