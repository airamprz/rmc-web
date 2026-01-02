"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useReducedMotion } from "framer-motion";

/* ===========================
   DATA
=========================== */

// 🛍️ Productos (Stripe TEST)
const PRODUCTS = [
  {
    id: "rolex",
    name: "Rolex",
    price: 100,
    img: "/products/rolex.jpg",
    paymentLink: "https://buy.stripe.com/bJe7sNgrkdYS7nQ6Up5os02",
  },
  {
    id: "cinturon-gucci",
    name: "Cinturón Gucci",
    price: 30,
    img: "/products/cinturongucci.jpg",
    paymentLink: "https://buy.stripe.com/fZu5kFdf8aMG0Zs92x5os01",
  },
];

/* ---------- Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};
const gridParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0)",
    transition: { type: "spring", stiffness: 140, damping: 18, mass: 0.8 },
  },
};
const imageReveal = {
  hidden: { scale: 1.04, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ===========================
   PAGE
=========================== */

export default function ShopPage() {
  const prefersReduced = useReducedMotion();
  const hoverLift = prefersReduced ? {} : { y: -3 };
  const hoverScale = prefersReduced ? {} : { scale: 1.01 };

  /* ===========================
     SEO: JSON-LD (ItemList + Product)
     Nota: esta página es "use client", por eso inyectamos con <Script>.
  =========================== */
  const jsonLd = useMemo(() => {
    const baseUrl = "https://realmotioncartel.com";
    const pageUrl = `${baseUrl}/shop`;

    const listItems = PRODUCTS.map((p, idx) => {
      const imageUrl = `${baseUrl}${p.img.startsWith("/") ? p.img : `/${p.img}`}`;

      return {
        "@type": "ListItem",
        position: idx + 1,
        url: `${pageUrl}#${encodeURIComponent(p.id)}`,
        item: {
          "@type": "Product",
          name: p.name,
          image: imageUrl,
          brand: { "@type": "Brand", name: "RMC Select" },
          url: `${pageUrl}#${encodeURIComponent(p.id)}`,
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: String(p.price),
            url: p.paymentLink || pageUrl,
            availability: "https://schema.org/InStock",
          },
        },
      };
    });

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: "RMC Select | Real Motion Cartel",
          description:
            "Curación de piezas seleccionadas por RMC. Stock limitado. Compra directa mediante checkout.",
          isPartOf: {
            "@type": "WebSite",
            "@id": `${baseUrl}#website`,
            url: baseUrl,
            name: "Real Motion Cartel",
          },
        },
        {
          "@type": "ItemList",
          "@id": `${pageUrl}#itemlist`,
          name: "RMC Select — Piezas disponibles",
          itemListOrder: "https://schema.org/ItemListOrderAscending",
          numberOfItems: listItems.length,
          itemListElement: listItems,
        },
      ],
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* JSON-LD */}
      <Script
        id="rmc-shop-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* HEADER */}
          <header className="text-center mb-10">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              Shop · Real Motion Cartel
            </motion.p>

            {/* ✅ H1 único */}
            <motion.h1
              className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              RMC Select
            </motion.h1>

            <motion.p
              className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.06 }}
            >
              Curación de piezas seleccionadas por RMC. Stock limitado. Compra
              directa mediante checkout.
            </motion.p>

            {/* ✅ Internal links */}
            <nav
              aria-label="Enlaces clave"
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Inicio
              </Link>
              <Link
                href="/merch"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Merch
              </Link>
              <Link
                href="/releases"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Releases
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                News
              </Link>
            </nav>
          </header>

          {/* ✅ H2: Catálogo */}
          <section aria-labelledby="shop-catalog-title">
            <motion.h2
              id="shop-catalog-title"
              className="text-xl sm:text-2xl font-semibold tracking-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Piezas disponibles
            </motion.h2>

            <motion.p
              className="mt-2 text-sm text-zinc-400 max-w-3xl"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Selección limitada: piezas puntuales, sin saturar catálogo. Si un
              producto desaparece, no garantizamos restock.
            </motion.p>

            {/* Grid */}
            <motion.div
              className="mt-6 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
              variants={gridParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {PRODUCTS.map((p) => (
                <motion.div key={p.id} variants={cardVariant}>
                  <ProductCard
                    product={p}
                    hoverLift={hoverLift}
                    hoverScale={hoverScale}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ✅ Nota / Confianza */}
          <section className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h2 className="text-base font-semibold">Información</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Checkout gestionado mediante Stripe. Enlace de pago directo por
              producto. Para incidencias o soporte:{" "}
              <span className="text-zinc-200 font-medium">
                info@realmotioncartel.com
              </span>
              .
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ===========================
   COMPONENTS
=========================== */

function ProductCard({ product, hoverLift, hoverScale }) {
  const prefersReduced = useReducedMotion();
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const { id, name, price, img, paymentLink } = product;

  const goCheckout = () => {
    if (!paymentLink) return;
    setLoading(true);
    window.location.href = paymentLink;
  };

  return (
    <motion.article
      id={id} // ✅ ancla estable
      className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent
                 hover:from-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-white/10"
      whileHover={hoverLift}
      transition={{ type: "spring", stiffness: 160, damping: 18 }}
    >
      {/* Imagen */}
      <motion.div
        className="relative aspect-[4/5] overflow-hidden rounded-t-2xl"
        whileHover={hoverScale}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
      >
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 bg-zinc-900/60">
            <motion.div
              className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
            />
          </div>
        )}

        {imgError ? (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-white/10 to-transparent text-zinc-200">
            <span className="text-sm">Imagen no disponible</span>
          </div>
        ) : (
          <motion.div
            className="absolute inset-0"
            variants={imageReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              src={img}
              alt={`RMC Select — ${name}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
              onLoadingComplete={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          </motion.div>
        )}

        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute -inset-[30%] rotate-12 bg-gradient-to-tr from-white/10 via-transparent to-transparent mix-blend-screen" />
        </div>

        {/* Precio */}
        <motion.span
          className="absolute top-2 left-2 rounded-full bg-black/70 backdrop-blur px-2 py-1 text-[12px] font-medium text-white border border-white/10"
          initial={{ y: -6, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.25 }}
        >
          {formatPrice(price)}
        </motion.span>
      </motion.div>

      {/* Info */}
      <div className="p-5 flex flex-col items-center text-center">
        {/* ✅ H3 por tarjeta (correcto debajo de H2) */}
        <motion.h3
          className="font-semibold text-base sm:text-lg leading-tight mt-1"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>

        <p className="mt-2 text-sm text-zinc-400">
          Pieza seleccionada por RMC. Disponibilidad limitada.
        </p>

        <ShopButton
          onClick={goCheckout}
          loading={loading}
          className="mt-4 w-full sm:w-auto"
          aria-label={`Comprar ${name}`}
        />
      </div>
    </motion.article>
  );
}

/* ===========================
   BUTTON
=========================== */

function ShopButton({ loading = false, className, ...rest }) {
  const prefersReduced = useReducedMotion();
  const press = prefersReduced ? {} : { scale: 0.98 };
  const hover = prefersReduced ? {} : { scale: 1.03, y: -1 };

  const base =
    "inline-flex items-center justify-center rounded-full px-6 h-10 text-sm font-medium transition-all outline-none " +
    "focus-visible:ring-2 focus-visible:ring-white/30 bg-white text-black hover:bg-zinc-200 " +
    "shadow-md hover:shadow-white/10 disabled:opacity-70 disabled:cursor-not-allowed";

  return (
    <motion.button
      className={`${base} relative ${className || ""}`}
      aria-busy={loading || undefined}
      disabled={loading}
      whileHover={hover}
      whileTap={press}
      {...rest}
    >
      {loading && (
        <span className="absolute left-3 inline-block h-4 w-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
      )}
      <span className={`${loading ? "opacity-80 pl-4" : ""}`}>
        {loading ? "Redirigiendo…" : "Comprar ahora"}
      </span>
    </motion.button>
  );
}

/* ===========================
   PRICE FORMAT
=========================== */

function formatPrice(n) {
  try {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    }).format(Number(n));
  } catch {
    return `${n} €`;
  }
}
