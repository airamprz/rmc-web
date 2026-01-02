"use client";

import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Image from "next/image";

/* ---------------- DATA ---------------- */

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
  // JSON-LD: Merch como CollectionPage + ItemList de Products
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Merch oficial | Real Motion Cartel",
        url: "https://realmotioncartel.com/merch",
        description:
          "Drops limitados de merch oficial de Real Motion Cartel. Piezas seleccionadas como extensión del universo RMC.",
        isPartOf: {
          "@type": "WebSite",
          name: "Real Motion Cartel",
          url: "https://realmotioncartel.com",
        },
      },
      {
        "@type": "ItemList",
        name: "Productos de merch — Real Motion Cartel",
        itemListOrder: "http://schema.org/ItemListOrderAscending",
        numberOfItems: products.length,
        itemListElement: products.map((p, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          item: {
            "@type": "Product",
            name: p.name,
            description: p.desc,
            image: p.image ? `https://realmotioncartel.com${p.image}` : undefined,
            brand: { "@type": "Brand", name: "Real Motion Cartel" },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/PreOrder",
              priceCurrency: "EUR",
              url: "https://realmotioncartel.com/merch",
            },
          },
        })),
      },
    ],
  };

  return (
    <>
      <Navbar />

      <Script
        id="rmc-merch-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative min-h-screen bg-gradient-to-b from-black via-black to-zinc-950">
        {/* Glow suave */}
        <div className="pointer-events-none absolute inset-x-0 top-32 mx-auto h-64 max-w-4xl rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-12">
          {/* Header */}
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Real Motion Cartel · Merch
            </p>

            {/* ✅ H1 único y claro */}
            <h1 className="text-3xl sm:text-4xl font-semibold text-white">
              Merch oficial de Real Motion Cartel
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-zinc-300">
              Drops limitados. Piezas seleccionadas como extensión del universo RMC.
              El primer lanzamiento se anunciará pronto.
            </p>

            {/* ✅ Internal links (SEO + UX) */}
            <div className="pt-3 flex flex-col sm:flex-row gap-3">
              <Link
                href="/releases"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Ver catálogo (Releases)
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Comunicados (News)
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Sobre RMC
              </Link>
            </div>
          </header>

          {/* ✅ H2 para estructura */}
          <section aria-labelledby="merch-list-title" className="space-y-4">
            <h2 id="merch-list-title" className="sr-only">
              Productos de merch disponibles próximamente
            </h2>

            {/* LISTA DE PRODUCTOS */}
            <div className="divide-y divide-white/10 rounded-3xl border border-white/10 overflow-hidden bg-white/[0.02]">
              {products.map((product, idx) => (
                <article
                  key={product.id}
                  className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-6 p-6 sm:p-8"
                >
                  {/* Imagen */}
                  <div className="relative aspect-square w-full max-w-[280px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-2xl border border-white/10"
                      // ✅ tamaños realistas para que Next entregue buena resolución
                      sizes="(max-width: 768px) 70vw, 280px"
                      // ✅ prioridad solo al primer item
                      priority={idx === 0}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex flex-col justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center flex-wrap gap-3">
                        <h3 className="text-xl sm:text-2xl font-semibold text-white">
                          {product.name}
                        </h3>
                        <StatusPill />
                      </div>

                      <p className="text-sm sm:text-base text-zinc-300 max-w-xl">
                        {product.desc}
                      </p>

                      <p className="text-xs text-zinc-500 max-w-xl">
                        Nota: el link de compra y la fecha se anuncian vía canales oficiales.
                        Sin preventas abiertas por ahora.
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
                        href="https://www.instagram.com/realmotioncartel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm text-zinc-100 border border-white/15 hover:bg-white/10 transition"
                      >
                        Seguir drops en Instagram
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-6 text-center text-xs text-zinc-500">
            <p>La fecha y el link de compra se anunciarán en @realmotioncartel.</p>
            <p className="mt-2">
              © {new Date().getFullYear()} Real Motion Cartel.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
