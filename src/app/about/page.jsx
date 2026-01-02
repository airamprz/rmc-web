"use client";

import Link from "next/link";
import Script from "next/script";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------- Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
  const prefersReduced = useReducedMotion();

  // JSON-LD específico (About). Refuerza entidad + contexto para buscadores/IA.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "Quiénes somos | Real Motion Cartel",
        url: "https://realmotioncartel.com/about",
        isPartOf: {
          "@type": "WebSite",
          name: "Real Motion Cartel",
          url: "https://realmotioncartel.com",
        },
        about: {
          "@type": "Organization",
          name: "Real Motion Cartel",
          alternateName: "RMC",
          url: "https://realmotioncartel.com",
        },
      },
      {
        "@type": "Organization",
        name: "Real Motion Cartel",
        alternateName: "RMC",
        url: "https://realmotioncartel.com",
        logo: "https://realmotioncartel.com/logo.png",
        image: "https://realmotioncartel.com/og-image.png",
        description:
          "Sello musical independiente y colectivo creativo con base en Madrid y conexión Canarias. Dirección creativa unificada para música urbana contemporánea.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Madrid",
          addressCountry: "ES",
        },
      },
    ],
  };

  return (
    <>
      <Navbar />

      <Script
        id="rmc-about-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <MotionConfig
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }
        }
      >
        {/* HERO */}
        <section className="relative overflow-hidden bg-black border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-10 md:pb-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-center"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.09em] text-zinc-300">
                Quiénes somos
              </p>

              {/* ✅ H1 único, con intención SEO clara */}
              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Real Motion Cartel (RMC) — sello musical independiente y colectivo creativo
              </h1>

              <p className="mt-4 text-zinc-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                RMC desarrolla y publica proyectos con dirección creativa unificada.
                Base en <span className="text-white/90 font-semibold">Madrid</span> y
                conexión operativa con <span className="text-white/90 font-semibold">Canarias</span>.
                Catálogo curado, narrativa controlada y enfoque a largo plazo.
              </p>

              {/* ✅ Internal links (SEO + UX) */}
              <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                  href="/releases"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Ver catálogo (Releases)
                </Link>
                <Link
                  href="/artists"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Ver roster (Artists)
                </Link>
                <Link
                  href="/news"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Comunicados (News)
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTENT */}
        <section aria-labelledby="about-content-title">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
            {/* (H2) Identidad */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2
                id="about-content-title"
                className="text-xl sm:text-2xl font-semibold text-white"
              >
                Identidad y propósito
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Real Motion Cartel existe para estructurar talento y publicar música con criterio.
                No operamos como “feed”: construimos un{" "}
                <span className="text-white/90 font-semibold">catálogo</span> donde sonido,
                imagen y narrativa responden a una misma visión.
              </p>
            </motion.div>

            {/* (H2) Qué hacemos */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Qué hace RMC
              </h2>

              <ul className="mt-4 space-y-3 text-zinc-300 text-sm sm:text-base leading-relaxed">
                <li>
                  <span className="text-white/90 font-semibold">Lanzamientos:</span>{" "}
                  singles y EPs con planificación, assets y ejecución.
                </li>
                <li>
                  <span className="text-white/90 font-semibold">Desarrollo artístico:</span>{" "}
                  identidad, posicionamiento y coherencia de marca.
                </li>
                <li>
                  <span className="text-white/90 font-semibold">Visuales:</span>{" "}
                  dirección estética para portadas, piezas y comunicación.
                </li>
              </ul>

              <p className="mt-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
                El foco está en música urbana contemporánea: trap, Detroit trap y reggaetón moderno/alternativo,
                sin depender de fórmulas efímeras.
              </p>
            </motion.div>

            {/* (H2) Territorio */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Madrid · Canarias
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                La base operativa está en <span className="text-white/90 font-semibold">Madrid</span>,
                con conexión directa con <span className="text-white/90 font-semibold">Canarias</span>,
                especialmente <span className="text-white/90 font-semibold">Lanzarote</span>.
                Esta doble presencia nos permite actuar como puente operativo y creativo entre territorios.
              </p>
            </motion.div>

            {/* (H2) Filosofía */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Filosofía
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Coherencia y control creativo. Prioridad al largo plazo: catálogo sólido,
                identidad reconocible y comunicación precisa. Menos ruido, más ejecución.
              </p>
            </motion.div>

            {/* (H2) Contacto */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Contacto
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Prensa, verificación de catálogo y propuestas:
              </p>

              <p className="mt-2 text-sm sm:text-base text-white font-semibold">
                info@realmotioncartel.com
              </p>

              <p className="mt-4 text-xs sm:text-sm text-zinc-400">
                Si necesitas referencias oficiales, revisa{" "}
                <Link href="/news" className="text-white/80 hover:text-white transition">
                  News
                </Link>{" "}
                y el catálogo en{" "}
                <Link href="/releases" className="text-white/80 hover:text-white transition">
                  Releases
                </Link>
                .
              </p>
            </motion.div>
          </div>
        </section>
      </MotionConfig>

      <Footer />
    </>
  );
}
