"use client";

import Link from "next/link";
import Script from "next/script";
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

/* ---------- Countdown (home-safe) ---------- */
const DROP_DATE = "2026-01-30T21:00:00+01:00";

function useCountdown(targetDate) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTime(null);
        return false;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });

      return true;
    };

    tick();
    const interval = setInterval(() => {
      if (!tick()) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return time;
}


/* ---------- Helpers ---------- */
function cleanUrl(url) {
  if (!url) return "";
  try {
    const u = new URL(url);
    const remove = new Set(["list", "start_radio", "si", "index", "pp"]);
    for (const key of remove) u.searchParams.delete(key);
    // mantén solo parámetros no eliminados (por si añades alguno útil)
    const kept = new URL(u.origin + u.pathname);
    for (const [k, v] of u.searchParams.entries()) kept.searchParams.set(k, v);
    return kept.toString();
  } catch {
    return url;
  }
}

/* ---------- DATA (home) ---------- */
const LAST_RELEASES = [
  {
    tag: "Single",
    title: "509flakko x BG01 - Side by Side",
    yt: "https://www.youtube-nocookie.com/embed/iR4qJG932i0",
  },
  {
    tag: "Single",
    title: "Y SI SE ACABA EL MUNDO - AKAELPERI",
    yt: "https://www.youtube-nocookie.com/embed/CiuBm9SkFYk?si=rNUatCevSDHzSfKk",
  },
  {
    tag: "Single",
    title: "BG01 — NONSTOPPA ft Waitta38",
    yt: "https://www.youtube-nocookie.com/embed/w5JnEZxQz_s",
  },
  {
    tag: "Single",
    title: "Una Noche Con Un G — 509flakko ft BigFicre",
    yt: "https://www.youtube-nocookie.com/embed/lulGDouNy4A",
  },
  {
    tag: "Single",
    title: "NO ME CONOCE — PERI X CODE X SORIA",
    yt: "https://www.youtube-nocookie.com/embed/68o7eChhOpU",
  },
  {
    tag: "Single",
    title: "BG01 — GHETTO",
    yt: "https://www.youtube-nocookie.com/embed/n_Pfo3FcPyY",
  },
  {
    tag: "Single",
    title: "Young Cmon — Loco",
    yt: "https://www.youtube-nocookie.com/embed/5_ZhpXix50s",
    spotify: "https://open.spotify.com/track/3UhPYoLB6Vw4z7NXk1oxRa",
  },
  {
    tag: "Single",
    title: "509flakko, ElSevi09 — Goat Freestyle",
    yt: "https://www.youtube-nocookie.com/embed/uUaV2m3Kp54",
    spotify: "https://open.spotify.com/track/6LdNZSEHz23IggJ2577DvF",
  },
  {
    tag: "Colaboración",
    title: "BIG FICRE — GAS O MEDICINA (ft. BIG BOLER, DM850)",
    yt: "https://www.youtube-nocookie.com/embed/18bELdfb6HU",
  },
  {
    tag: "Single",
    title: "XINI — FOR SALE",
    yt: "https://www.youtube-nocookie.com/embed/4QmuVWkHrS0",
  },
].map((x) => ({
  ...x,
  yt: cleanUrl(x.yt),
  spotify: cleanUrl(x.spotify),
}));

const UPCOMING = [
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
];

export default function HomePage() {
  const prefersReduced = useReducedMotion();
  const countdown = useCountdown(DROP_DATE);


  // JSON-LD (entidad + website). Minimal, limpio y útil para buscadores/IA.
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

      {/* JSON-LD (SEO) */}
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

            {/* H1 único y con intención clara */}
            <motion.h1
              className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true }}
            >
              Real Motion Cartel (RMC) — sello musical independiente en Madrid
            </motion.h1>

            {/* Copy semántico: corto, específico, sin relleno */}
            <motion.p
              className="mt-3 text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              transition={{ delay: 0.18 }}
            >
              Plataforma creativa y catálogo urbano contemporáneo. Operativa entre{" "}
              <span className="text-white/90 font-semibold">Madrid</span> y{" "}
              <span className="text-white/90 font-semibold">Canarias</span>. Sonido,
              estética y narrativa bajo una misma dirección.
            </motion.p>

            {/* Enlazado interno (SEO + UX) */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: 0.28 }}
            >
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
            </motion.div>
          </div>
        </section>

        {/* DROP ACTIVO */}
        <section
          aria-labelledby="drop-title"
          className="border-t border-white/10 bg-black"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
            <motion.div
              className="grid gap-8 md:grid-cols-2 md:items-center"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Imagen */}
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

              {/* Texto */}
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
                  Comunicado
                </p>

                <h2
                  id="drop-title"
                  className="mt-3 text-2xl sm:text-3xl font-semibold text-white"
                >
                  DROP 01 · Ya disponible
                </h2>

                <p className="mt-4 text-zinc-300 text-sm sm:text-base">
                  El primer lanzamiento oficial de Real Motion Cartel ya está
                  activo. Una pieza concebida como extensión directa del
                  universo RMC.
                </p>

                <p className="mt-3 text-xs text-zinc-500">
                  Unidades limitadas · Producción cuidada · Distribución directa
                </p>

                <div className="mt-6">
                  <Link
                    href="/merch"
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    Acceder al drop →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* QUÉ ES RMC */}
        <section aria-labelledby="about-title" className="border-t border-white/10">
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
                Qué es Real Motion Cartel
              </h2>

              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                RMC es un sello musical y colectivo creativo. Publicamos y
                desarrollamos proyectos con un criterio único: coherencia, control
                narrativo y ejecución visual. Catálogo curado, sin ruido.
              </p>

              <div className="mt-5">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Conocer la visión
                </Link>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              className="relative overflow-hidden rounded-xl border border-white/10 h-[180px] sm:h-[220px] md:h-[240px] bg-gradient-to-br from-fuchsia-500/10 via-white/5 to-transparent flex items-center justify-center"
              variants={cardVariant}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="relative text-zinc-400 text-xs sm:text-sm">
                Reel visual en preparación
              </p>
            </motion.div>
          </div>
        </section>

        {/* DIRECCIÓN + QUÉ HACEMOS */}
        <section className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
            <motion.div
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Dirección creativa
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed max-w-4xl text-sm sm:text-base">
                Ecosistema: artistas, sonido y visuales bajo una misma línea.
                Identidad por encima de tendencia. Largo plazo por encima de impacto.
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
                Qué hacemos
              </motion.h2>

              <ClientOnly>
                <motion.div
                  className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  variants={gridParent}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {[
                    {
                      title: "Lanzamientos",
                      desc: "Singles, EPs y proyectos con planificación real: timing, assets y ejecución.",
                      href: "/releases",
                    },
                    {
                      title: "Desarrollo artístico",
                      desc: "Dirección creativa: identidad, posicionamiento y narrativa.",
                      href: "/artists",
                    },
                    {
                      title: "Visuales",
                      desc: "Portadas, visualizers y contenido: estética fría y consistente.",
                      href: "/news",
                    },
                    {
                      title: "Merch",
                      desc: "Drops selectos vinculados a la identidad del sello, sin saturar marca.",
                      href: "/merch",
                    },
                  ].map((b) => (
                    <motion.div
                      key={b.title}
                      variants={cardVariant}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5"
                    >
                      <h3 className="font-semibold text-white">{b.title}</h3>
                      <p className="mt-2 text-sm text-zinc-300">{b.desc}</p>

                      <div className="mt-4">
                        <Link
                          href={b.href}
                          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
                        >
                          Abrir
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </ClientOnly>

              {/* Microtexto SEO (corto) */}
              <p className="mt-6 text-xs sm:text-sm text-zinc-400 max-w-4xl">
                Enfoque sonoro: trap, Detroit trap y reggaetón moderno/alternativo,
                con producción y dirección visual alineadas a una identidad común.
              </p>
            </div>
          </div>
        </section>



        {/* ÚLTIMOS LANZAMIENTOS */}
        <section aria-labelledby="last-title" className="border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <h2
                id="last-title"
                className="text-xl sm:text-2xl font-semibold tracking-tight"
              >
                Últimos lanzamientos
              </h2>

              <Link
                href="/releases"
                className="text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition"
              >
                Ver todo el catálogo →
              </Link>
            </div>

            <ClientOnly>
              <motion.div
                className="grid gap-5 sm:gap-6 sm:grid-cols-2"
                variants={gridParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {LAST_RELEASES.map((item) => (
                  <motion.article
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
                        <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
                          {item.title}
                        </h3>
                      </div>

                      {item.spotify ? (
                        <Button href={item.spotify} variant="primary" size="sm">
                          Spotify
                        </Button>
                      ) : null}
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </ClientOnly>
          </div>
        </section>

        {/* PRÓXIMOS LANZAMIENTOS */}
        <section id="upcoming" aria-labelledby="upcoming-title" className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="mb-5 flex items-end justify-between gap-4">
              <h2 id="upcoming-title" className="text-xl sm:text-2xl font-semibold">
                Próximos lanzamientos
              </h2>

              <Link
                href="/news"
                className="text-xs sm:text-sm font-semibold text-white/80 hover:text-white transition"
              >
                Ver comunicados →
              </Link>
            </div>

            <ClientOnly>
              <motion.div
                className="grid gap-4 sm:gap-6 grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                variants={gridParent}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
              >
                {UPCOMING.map((item) => (
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
                        sizes="(max-width: 768px) 50vw, 280px"
                      />
                      <span className="absolute top-2 left-2 rounded-full bg-black/70 px-2 py-1 text-[11px] border border-white/10 text-white/90">
                        Próximamente · {item.tag}
                      </span>
                    </div>

                    <div className="p-3 sm:p-4">
                      <div className="text-xs text-zinc-400">{item.tag}</div>
                      <h3 className="font-semibold text-sm sm:text-base line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            </ClientOnly>

            <p className="mt-8 text-xs sm:text-sm text-zinc-400 max-w-3xl">
              Para solicitudes de prensa y verificación de catálogo:{" "}
              <span className="text-white/90 font-semibold">info@realmotioncartel.com</span>.
            </p>
          </div>
        </section>
      </MotionConfig>

      <Footer />
    </>
  );
}
