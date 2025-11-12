"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useReducedMotion } from "framer-motion";


// 🛍️ Productos reales (con Payment Links de Stripe TEST)
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
  {
    id: "bolso-lv",
    name: "Bolso LV",
    price: 55,
    img: "/products/bolsolv.jpg",
    paymentLink: "https://buy.stripe.com/aFabJ3fng1c68rUemR5os00",
  },
];

/* ---------- Variants reutilizables ---------- */
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

export default function ShopPage() {
  const prefersReduced = useReducedMotion();
  const hoverLift = prefersReduced ? {} : { y: -3 };
  const hoverScale = prefersReduced ? {} : { scale: 1.01 };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-24 pb-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado */}
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              RMC Select
            </h1>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Ropa importada curada por RMC. Calidad y estilo real, sin postureo.
            </p>
          </motion.div>

          {/* Grid de productos */}
          <motion.div
            className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={gridParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {PRODUCTS.map((p) => (
              <motion.div key={p.id} variants={cardVariant}>
                <ProductCard product={p} hoverLift={hoverLift} hoverScale={hoverScale} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* -------------------- Componentes -------------------- */

function ProductCard({ product, hoverLift, hoverScale }) {
  const prefersReduced = useReducedMotion();
  const [loading, setLoading] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const { name, price, img, paymentLink } = product;

  const goCheckout = () => {
    if (!paymentLink) return;
    setLoading(true);
    window.location.href = paymentLink; // redirección al checkout de Stripe
  };

  return (
    <motion.article
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
        {/* Skeleton shimmer mientras carga */}
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

        {/* Imagen o fallback */}
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
              alt={name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 30vw"
              priority={false}
              onLoadingComplete={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          </motion.div>
        )}

        {/* Glare sutil en hover */}
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
        <motion.h3
          className="font-semibold text-base sm:text-lg leading-tight mt-1"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.3 }}
        >
          {name}
        </motion.h3>

        <ShopButton onClick={goCheckout} loading={loading} className="mt-4 w-full sm:w-auto" />
      </div>
    </motion.article>
  );
}

/* -------------------- Botón -------------------- */

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

/* -------------------- Formato precio -------------------- */

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
