"use client";

import Link from "next/link";
import Script from "next/script";
import Image from "next/image";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------- Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const heroFade = {
  hidden: { opacity: 0, y: 8, scale: 0.98, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 18, mass: 0.8 },
  },
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
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 140, damping: 18, mass: 0.8 },
  },
};

/* ---------- Reusable UI ---------- */
function CTAButton({ href, children }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
    >
      {children}
    </Link>
  );
}

function SimpleCard({ title, desc, href, cta = "Abrir" }) {
  return (
    <motion.div
      variants={cardVariant}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
    >
      <h3 className="text-white text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
        {desc}
      </p>

      <div className="mt-5">
        <CTAButton href={href}>{cta}</CTAButton>
      </div>
    </motion.div>
  );
}

export default function HomePage() {
  const prefersReduced = useReducedMotion();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Real Motion Cartel",
        alternateName: "RMC",
        url: "https://realmotioncartel.com",
        logo: "https://realmotioncartel.com/logo.png",
        image: "https://realmotioncartel.com/og-image.png",
        description:
          "Sello musical independiente y colectivo creativo con base en Madrid y conexión Canarias. Música urbana contemporánea con dirección creativa unificada.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Madrid",
          addressCountry: "ES",
        },
      },
      {
        "@type": "WebSite",
        name: "Real Motion Cartel",
        url: "https://realmotioncartel.com",
      },
    ],
  };

  return (
    <>
      <Navbar />

      <Script
        id="rmc-home-jsonld"
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
        <main className="bg-black text-white">
          {/* HERO */}
          <section className="relative overflow-hidden border-b border-white/10 bg-black">
            <motion.div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(700px 450px at 50% 0%, var(--accent-soft), transparent 70%)",
              }}
              animate={prefersReduced ? undefined : { opacity: [0.9, 1, 0.9] }}
              transition={
                prefersReduced
                  ? undefined
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }
            />

            <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 pt-24 md:pt-28 pb-16 md:pb-20">
              <motion.div
                className="relative mx-auto h-[152px] w-[152px] sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[220px]"
                variants={heroFade}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.8 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl opacity-50"
                  style={{ background: "var(--accent-soft)" }}
                  animate={prefersReduced ? undefined : { scale: [1, 1.04, 1] }}
                  transition={
                    prefersReduced
                      ? undefined
                      : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                  }
                />

                <motion.div
                  animate={prefersReduced ? undefined : { y: [0, -4, 0] }}
                  transition={
                    prefersReduced
                      ? undefined
                      : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="absolute inset-0"
                >
                  <Image
                    src="/logo.png"
                    alt="RMC — Real Motion Cartel"
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 640px) 152px, (max-width: 768px) 180px, 220px"
                  />
                </motion.div>
              </motion.div>

              <motion.h1
                className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
                variants={fadeUp}
                initial={false}
                whileInView="show"
                viewport={{ once: true }}
              >
                Real Motion Cartel
              </motion.h1>

              <motion.p
                className="mt-3 text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg"
                variants={fadeUp}
                initial={false}
                whileInView="show"
                transition={{ delay: 0.18 }}
              >
                Música, identidad y dirección visual bajo una misma línea.
                Operativa entre Madrid y Canarias.
              </motion.p>

              <motion.div
                className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
                variants={fadeUp}
                initial={false}
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: 0.28 }}
              >
                <CTAButton href="/artists">Artists</CTAButton>
                <CTAButton href="/releases">Releases</CTAButton>
                <CTAButton href="/merch">Merch</CTAButton>
              </motion.div>
            </div>
          </section>

          {/* FEATURED DROP */}
          <section
            aria-labelledby="drop-title"
            className="border-b border-white/10 bg-black"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
              <motion.div
                className="grid gap-8 md:grid-cols-2 md:items-center"
                variants={fadeUp}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div
                  variants={cardVariant}
                  className="relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <Image
                    src="/merch/merch1.png"
                    alt="RMC DROP 01 — Merch oficial"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </motion.div>

                <motion.div
                  variants={cardVariant}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-7"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                    Comunicado
                  </p>

                  <h2
                    id="drop-title"
                    className="mt-3 text-2xl sm:text-3xl font-semibold text-white"
                  >
                    DROP 01 · Ya disponible
                  </h2>

                  <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
                    El primer lanzamiento oficial de Real Motion Cartel ya está
                    activo. Una pieza concebida como extensión directa del
                    universo RMC.
                  </p>

                  <p className="mt-3 text-xs text-zinc-500">
                    Unidades limitadas · Producción cuidada · Distribución directa
                  </p>

                  <div className="mt-6">
                    <CTAButton href="/merch">Acceder al drop</CTAButton>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* ABOUT + QUICK NAV */}
          <section className="border-b border-white/10 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
              <motion.div
                variants={fadeUp}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="max-w-3xl"
              >
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Qué es Real Motion Cartel
                </h2>

                <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                  RMC es un sello musical y colectivo creativo. Publicamos y
                  desarrollamos proyectos con un criterio claro: coherencia,
                  control narrativo y ejecución visual.
                </p>

                <div className="mt-5">
                  <CTAButton href="/about">Conocer la visión</CTAButton>
                </div>
              </motion.div>

              <motion.div
                className="mt-10 grid gap-4 md:grid-cols-3"
                variants={gridParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                <SimpleCard
                  title="Artists"
                  desc="Conoce el roster y la identidad de cada perfil dentro del sello."
                  href="/artists"
                />
                <SimpleCard
                  title="Releases"
                  desc="Explora los lanzamientos y el catálogo oficial de RMC."
                  href="/releases"
                />
                <SimpleCard
                  title="Merch"
                  desc="Accede a los drops y piezas vinculadas al universo del sello."
                  href="/merch"
                />
              </motion.div>
            </div>
          </section>

          {/* OPTIONAL SMALL INFO STRIP */}
          <section className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
              <motion.p
                className="text-xs sm:text-sm text-zinc-400 max-w-4xl"
                variants={fadeUp}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                Enfoque sonoro: trap, Detroit trap y reggaetón moderno/alternativo,
                con producción y dirección visual alineadas a una identidad común.
              </motion.p>
            </div>
          </section>
        </main>
      </MotionConfig>

      <Footer />
    </>
  );
}