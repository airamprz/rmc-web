"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

/* ---------- ClientOnly: render solo en cliente ---------- */
function ClientOnly({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <>{children}</>;
}

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

/* ---------- PAGE ---------- */
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
        {/* HERO */}
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
              Real Motion Cartel — Sello musical y colectivo creativo en Madrid
            </motion.h1>

            <motion.p
              className="mt-3 text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              transition={{ delay: 0.18 }}
            >
              Música urbana contemporánea con identidad underground. Lanzamientos
              con control creativo: sonido, estética y narrativa.
            </motion.p>
          </div>
        </section>

        {/* SOBRE RMC */}
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
                Qué es RMC
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Real Motion Cartel (RMC) es un sello musical y colectivo creativo
                con base en Madrid. Desarrollamos talento y publicamos
                lanzamientos con una dirección clara: identidad por encima de
                tendencia, coherencia por encima de ruido. Cada proyecto se
                construye desde el sonido hasta su ejecución visual, con control
                narrativo y estética consistente.
              </p>
            </motion.div>

            {/* Visual */}
            <motion.div
              className="relative overflow-hidden rounded-xl border border-white/10 h-[180px] sm:h-[220px] md:h-[240px] bg-gradient-to-br from-fuchsia-500/10 via-white/5 to-transparent flex items-center justify-center"
              variants={cardVariant}
              initial={false}
              whileInView="show"
            >
              <p className="relative text-zinc-400 text-xs sm:text-sm">
                Reel visual en preparación
              </p>
            </motion.div>
          </div>
        </section>

        {/* CAPACIDADES / VISIÓN / FILOSOFÍA */}
        <section className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            <motion.div
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Dirección
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed max-w-4xl text-sm sm:text-base">
                RMC funciona como un ecosistema. Artistas, sonido y visuales bajo
                una misma línea. No buscamos agradar a todos: buscamos imponer
                identidad, construir respeto y consolidar un catálogo con peso.
              </p>
            </motion.div>

            {/* QUÉ HACEMOS */}
            <div>
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-semibold"
                variants={fadeUp}
                initial={false}
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                Qué hacemos
              </motion.h2>

              <ClientOnly>
                <motion.div
                  className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  variants={gridParent}
                  initial="hidden"
                  whileInView="show"
                >
                  {[
                    {
                      title: "Lanzamientos",
                      desc: "Singles, EPs y proyectos con planificación real: timing, assets y ejecución.",
                    },
                    {
                      title: "Desarrollo artístico",
                      desc: "Dirección creativa y acompañamiento: identidad, posicionamiento y narrativa.",
                    },
                    {
                      title: "Visuales",
                      desc: "Portadas, visualizers y contenido: estética fría, dominante y coherente.",
                    },
                    {
                      title: "Merch",
                      desc: "Drops selectos vinculados a la identidad del sello, sin saturar ni quemar marca.",
                    },
                    {
                      title: "RMC Select",
                      desc: "Curación de ropa de marca y piezas seleccionadas. Drops limitados como extensión del universo RMC.",
                    },
                  ].map((b) => (
                    <motion.div
                      key={b.title}
                      variants={cardVariant}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
                    >
                      <h3 className="font-semibold">{b.title}</h3>
                      <p className="mt-2 text-sm text-zinc-300">{b.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </ClientOnly>
            </div>

            {/* VISIÓN Y FILOSOFÍA */}
            {[
              {
                title: "Visión",
                text:
                  "Construir un sello reconocible por su coherencia, control narrativo y credibilidad artística. Crecimiento sostenido, sin depender de tendencias ni sobreexposición.",
              },
              {
                title: "Filosofía",
                text:
                  "Silencio estratégico, ejecución precisa. Cada lanzamiento refuerza el universo RMC: identidad por encima del algoritmo, largo plazo por encima del impacto inmediato.",
              },
            ].map((block) => (
              <motion.div
                key={block.title}
                variants={fadeUp}
                initial={false}
                whileInView="show"
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

        {/* LANZAMIENTO DESTACADO – UNA NOCHE CON UN G */}
        <section
          id="featured-release"
          aria-labelledby="featured-release-title"
          className="border-y border-white/10 bg-gradient-to-b from-black via-black to-white/5"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            {/* Texto */}
            <motion.div
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.09em] text-emerald-200">
                Ya disponible
                <span className="h-1 w-1 rounded-full bg-emerald-300" />
              </p>

              <h2
                id="featured-release-title"
                className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white"
              >
                Una Noche Con Un G —{" "}
                <span className="text-zinc-300">509flakko ft BigFicre</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
                Nuevo lanzamiento de Real Motion Cartel. Directo, nocturno y con
                intención. Disponible en todas las plataformas.
              </p>

              {/* Plataformas */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://open.spotify.com/intl-es/track/0rtp8A6fmCZS5RDy1SIzCr?si=130643d91e334915"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/15 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/25 transition"
                >
                  Escuchar en Spotify
                </a>

                <a
                  href="https://www.youtube.com/watch?v=lulGDouNy4A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Ver en YouTube
                </a>
              </div>

              {/* Fecha */}
              <div className="mt-8 rounded-2xl border border-white/15 bg-black/50 px-4 py-3 inline-block">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  Lanzado el
                </p>
                <p className="mt-1 text-base sm:text-lg font-semibold text-white">
                  23 de diciembre de 2025
                </p>
              </div>
            </motion.div>

            {/* Portada */}
            <motion.div
              variants={cardVariant}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative max-w-md w-full mx-auto rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.75)]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src="/covers/una-noche-con-un-g.jpg"
                  alt="Portada del single Una Noche Con Un G"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 400px"
                />

                {/* Badge OUT NOW */}
                <div className="absolute top-3 right-3 rounded-2xl border border-emerald-400/40 bg-black/80 px-3 py-2 text-right backdrop-blur">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-300">
                    Out now
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-white leading-tight">
                    Disponible
                  </p>
                </div>

                {/* Faja inferior */}
                <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-black/75 backdrop-blur border border-white/15 px-3 py-2.5">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-400">
                    Lanzamiento destacado
                  </p>
                  <p className="mt-0.5 text-sm sm:text-base font-semibold text-white line-clamp-2">
                    Una Noche Con Un G — 509flakko ft BigFicre
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ÚLTIMOS LANZAMIENTOS */}
        <section aria-labelledby="last-title" className="border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="mb-5 flex items-end justify-between">
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
              >
                {[
                  {
                    tag: "Single",
                    title: "BG01 - NONSTOPPA FT WAITTA38",
                    yt: "https://www.youtube-nocookie.com/embed/w5JnEZxQz_s?si=isr4yn8GxzTmrMfA",
                  },
                  {
                    tag: "Single",
                    title: "Una Noche Con Un G — 509flakko ft BigFicre",
                    yt: "https://www.youtube.com/embed/lulGDouNy4A?si=uvTWBqWt4d-7uf4O",
                  },
                  {
                    tag: "Single",
                    title: "Star Feeling — Sheyla Langa (feat. Bravo Steez)",
                    yt: "https://www.youtube.com/embed/Jv3VSEAOSBY",
                  },
                  {
                    tag: "Single",
                    title: "NO ME CONOCE - PERI X CODE X SORIA",
                    yt: "https://www.youtube.com/embed/68o7eChhOpU?si=PzpIHPYs4wKaMOvL",
                  },
                  {
                    tag: "Single",
                    title: "BG01 - GHETTO",
                    yt: "https://www.youtube.com/embed/n_Pfo3FcPyY?si=riXLOTFuXRUPpREh",
                  },
                  {
                    tag: "Single",
                    title: "Star Haze - Watta Like ft. Sheyla Langa (prod. Bravo Steez)",
                    yt: "https://www.youtube.com/embed/PxN6LkhLI2w?si=hYu2h9OkQlZaDNAd",
                  },
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
                    title: "BIG FICRE — GAS O MEDICINA (FT. BIG BOLER, DM850)",
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

                    <div className="mt-3 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-zinc-400">{item.tag}</div>
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

        {/* PRÓXIMOS LANZAMIENTOS */}
        <section id="upcoming" className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="mb-5 flex items-end justify-between">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Próximos lanzamientos
              </h3>
            </div>

            <ClientOnly>
              <motion.div
                className="grid gap-4 sm:gap-6 grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                variants={gridParent}
                initial="hidden"
                whileInView="show"
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
                    className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={item.cover}
                        alt={`Portada: ${item.title}`}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 rounded-full bg-black/70 px-2 py-1 text-[11px] border border-white/10">
                        Próximamente
                      </span>
                    </div>

                    <div className="p-3 sm:p-4">
                      <div className="text-xs text-zinc-400">{item.tag}</div>
                      <h4 className="font-semibold text-sm sm:text-base line-clamp-2">
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
