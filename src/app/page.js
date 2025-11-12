"use client";

import Image from "next/image";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Navbar from "../components/Navbar";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/* ---------- ClientOnly: render solo en cliente para evitar mismatches en grids/iframes ---------- */
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // puedes poner un skeleton aquí si quieres
  return <>{children}</>;
}

/* ---------- Variants reutilizables ---------- */
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

export default function HomePage() {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <Navbar />

      <MotionConfig
        transition={
          prefersReduced
            ? { duration: 0 }
            : { duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }
        }
      >
        {/* HERO (SSR seguro) */}
        <section className="relative overflow-hidden bg-black">
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

          <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 pt-24 md:pt-28 pb-14 md:pb-16">
            {/* Logo */}
            <motion.div
              className="relative mx-auto h-[152px] w-[152px] sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[220px] will-change-transform"
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
                  alt="RMC Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 640px) 152px, (max-width: 768px) 180px, 220px"
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 rounded-full overflow-hidden">
                <motion.span
                  className="absolute -left-1/3 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={false}
                  whileHover={{ x: "200%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            <motion.h1
              className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.1 }}
            >
              Real Motion Cartel — Música, visuales y cultura desde Madrid
            </motion.h1>

            <motion.p
              className="mt-3 text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg [text-wrap:pretty]"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.18 }}
            >
              Lanzamientos con identidad: concepto, sonido y estética. Menos ruido, más idea.
            </motion.p>
          </div>
        </section>

        {/* SOBRE RMC (SSR seguro) */}
        <section aria-labelledby="about-title">
          <div className="max-w-7xl mx-auto grid gap-8 sm:gap-10 px-4 sm:px-6 py-10 sm:py-12 md:grid-cols-2 md:items-center">
            <motion.div
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2
                id="about-title"
                className="text-2xl sm:text-3xl font-extrabold text-white"
              >
                Quiénes somos
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Real Motion Cartel (RMC) es un colectivo creativo con base en Madrid que une música,
                moda y producción audiovisual. Creamos proyectos con identidad, desde la idea hasta su
                lanzamiento, combinando dirección artística, producción musical, visuales y estrategia
                digital. Trabajamos con artistas y marcas de distintos estilos y géneros, buscando siempre
                un enfoque estético sólido y resultados reales.
              </p>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-xl border border-white/10 h-[180px] sm:h-[220px] md:h-[240px] bg-gradient-to-br from-fuchsia-500/10 via-white/5 to-transparent flex items-center justify-center will-change-transform"
              variants={cardVariant}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover={!prefersReduced ? { scale: 1.01 } : undefined}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            >
              <motion.div
                aria-hidden
                className="absolute inset-0"
                animate={
                  prefersReduced
                    ? undefined
                    : { backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }
                }
                transition={
                  prefersReduced
                    ? undefined
                    : { duration: 10, repeat: Infinity, ease: "linear" }
                }
                style={{
                  background:
                    "radial-gradient(1200px 400px at 20% 0%, rgba(255,255,255,0.06), transparent 60%), radial-gradient(900px 400px at 80% 100%, rgba(255,255,255,0.05), transparent 60%)",
                  backgroundSize: "200% 200%",
                }}
              />
              <p className="relative text-zinc-400 text-xs sm:text-sm">
                Visual reel próximamente
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONCEPTO Y FILOSOFÍA (textos SSR + grid animado en cliente) */}
        <section aria-labelledby="concepto-title" className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-10 sm:space-y-12">
            <motion.div
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2
                id="concepto-title"
                className="text-xl sm:text-2xl md:text-3xl font-semibold"
              >
                🧩 Concepto general
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed max-w-4xl text-sm sm:text-base">
                Real Motion Cartel (RMC) es un colectivo creativo con base en Madrid que une música, moda y producción
                audiovisual bajo una misma marca. El objetivo es construir una plataforma completa donde artistas, marcas
                y proyectos puedan desarrollarse con una identidad real.
              </p>
            </motion.div>

            <div>
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold"
                variants={fadeUp}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                ⚡ Qué hacemos
              </motion.h2>

              {/* grid animado SOLO cliente */}
              <ClientOnly>
                <motion.div
                  className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  variants={gridParent}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  {[
                    { title: "Música", desc: "Dirección creativa, grabación, mezcla/master, visualizers y lanzamiento." },
                    { title: "Visuales", desc: "Videoclips, fotos, contenido para redes y campañas con estética cinematográfica." },
                    { title: "Moda", desc: "Drops propios (RMC Wear) y selección de ropa importada (RMC Select)." },
                    { title: "Branding & Web", desc: "Identidad visual, páginas web y crecimiento digital." },
                  ].map((b) => (
                    <motion.div
                      key={b.title}
                      variants={cardVariant}
                      whileHover={!prefersReduced ? { y: -3 } : undefined}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
                    >
                      <h3 className="font-semibold">{b.title}</h3>
                      <p className="mt-2 text-sm text-zinc-300">{b.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </ClientOnly>
            </div>

            {[
              {
                title: "🚀 Visión a futuro",
                text:
                  "RMC evolucionará hacia un sello independiente, combinando distribución, desarrollo de talento y producción creativa. También se planean eventos, colaboraciones y una comunidad activa vía Discord, donde artistas y creativos puedan conectar y compartir oportunidades.",
              },
              {
                title: "💡 Filosofía",
                text:
                  "RMC representa movimiento real, sin postureo. Una mezcla entre profesionalismo y calle, donde cada proyecto se construye con estética, estrategia y propósito. Nuestro enfoque es ofrecer resultados tangibles: crecimiento, ventas y presencia real en la industria.",
              },
            ].map((block) => (
              <motion.div
                key={block.title}
                variants={fadeUp}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  {block.title}
                </h2>
                <p className="mt-4 text-zinc-300 leading-relaxed max-w-4xl text-sm sm:text-base">
                  {block.text}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ÚLTIMOS LANZAMIENTOS (solo cliente: iframes + motion) */}
        <section aria-labelledby="last-title" className="border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
            <div className="mb-5 sm:mb-6 flex items-end justify-between">
              <h3
                id="last-title"
                className="text-xl sm:text-2xl font-semibold tracking-tight"
              >
                Últimos lanzamientos
              </h3>
            </div>

            <ClientOnly>
              <motion.div
                className="grid gap-5 sm:gap-6 sm:grid-cols-2"
                variants={gridParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                {[
                  {
                    tag: "Single",
                    title: "Young Cmon — Loco",
                    yt: "https://www.youtube.com/embed/5_ZhpXix50s",
                    spotify:
                      "https://open.spotify.com/intl-es/track/3UhPYoLB6Vw4z7NXk1oxRa?si=b44c6ffbbc404e14",
                  },
                  {
                    tag: "Single",
                    title: "509flakko, ElSevi09 — Goat Freestyle",
                    yt: "https://www.youtube.com/embed/uUaV2m3Kp54",
                    spotify:
                      "https://open.spotify.com/intl-es/track/6LdNZSEHz23IggJ2577DvF?si=baacb802b3454c2d",
                  },
                  {
                    tag: "Colaboración",
                    title:
                      "BIG FICRE — GAS O MEDICINA (FT. BIG BOLER, DM850)",
                    yt: "https://www.youtube.com/embed/18bELdfb6HU",
                  },
                  {
                    tag: "Single",
                    title: "XINI — FOR SALE",
                    yt: "https://www.youtube.com/embed/4QmuVWkHrS0",
                  },
                ].map((item) => (
                  <motion.div
                    key={item.title}
                    variants={cardVariant}
                    className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4"
                    whileHover={!prefersReduced ? { y: -2 } : undefined}
                  >
                    <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
                      <iframe
                        className="h-full w-full"
                        src={item.yt}
                        title={item.title}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="mt-3 sm:mt-4 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs sm:text-sm text-zinc-400">
                          {item.tag}
                        </div>
                        <div className="font-semibold text-sm sm:text-base line-clamp-2">
                          {item.title}
                        </div>
                      </div>
                      {item.spotify ? (
                        <Button href={item.spotify} variant="primary" size="sm">
                          Spotify
                        </Button>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </ClientOnly>
          </div>
        </section>

        {/* PRÓXIMOS LANZAMIENTOS (solo cliente: cards con motion) */}
        <section
          id="upcoming"
          aria-labelledby="upcoming-title"
          className="border-t border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
            <div className="mb-5 sm:mb-6 flex items-end justify-between">
              <h3
                id="upcoming-title"
                className="text-xl sm:text-2xl font-semibold tracking-tight"
              >
                Próximos lanzamientos
              </h3>
            </div>

            <ClientOnly>
              <motion.div
                className="grid gap-4 sm:gap-6 grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                variants={gridParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
              >
                {[
                  {
                    tag: "EP",
                    title: "JUNKIE SETUP EP — Flakko ft Shynelevell",
                    cover: "/covers/JUNKIESETUP.jpg",
                  },
                  {
                    tag: "Single",
                    title: "Back2Back — Flakko ft BigFicre",
                    cover: "/covers/BACK2BACK.jpg",
                  },
                  {
                    tag: "Single",
                    title: "BAD B1TCH — Young Cmon ft Flakko",
                    cover: "/covers/BAD.jpg",
                  },
                  {
                    tag: "Colab",
                    title: "X6 — Flakko ft Shynelevell, Boler",
                    cover: "/covers/X6.jpg",
                  },
                ].map((item) => (
                  <motion.article
                    key={item.title}
                    variants={cardVariant}
                    whileHover={!prefersReduced ? { y: -3 } : undefined}
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition w-full max-w-[300px] sm:max-w-none mx-auto"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.cover}
                        alt={`Portada — ${item.title}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
                        sizes="(max-width: 380px) 85vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                        priority={false}
                      />
                      <span className="absolute top-2 left-2 rounded-full bg-black/70 backdrop-blur px-2 py-1 text-[11px] font-medium text-white border border-white/10">
                        Próximamente
                      </span>
                    </div>

                    <div className="p-3 sm:p-4">
                      <div className="text-xs sm:text-sm text-zinc-400">
                        {item.tag}
                      </div>
                      <h4 className="font-semibold text-sm sm:text-base leading-snug line-clamp-2">
                        {item.title}
                      </h4>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </ClientOnly>
          </div>
        </section>
      </MotionConfig>

      <Footer />
    </>
  );
}
