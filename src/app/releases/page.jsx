"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { motion, MotionConfig, useReducedMotion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

/* ---------- ClientOnly ---------- */
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

/* ---------- Helpers ---------- */
function formatDateES(iso) {
  if (!iso) return "";

  // soporta "2026" (solo año) y fechas ISO completas
  const normalized = /^\d{4}$/.test(iso) ? `${iso}-01-01` : iso;
  const d = new Date(normalized);

  if (Number.isNaN(d.getTime())) return "";

  // si era solo año, devolvemos solo el año (más limpio)
  if (/^\d{4}$/.test(iso)) return iso;

  return d.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function cleanUrl(url) {
  if (!url) return "";
  try {
    const u = new URL(url);

    // elimina radio/playlist params típicos
    const remove = new Set(["list", "start_radio", "si", "index", "pp"]);
    for (const key of remove) u.searchParams.delete(key);

    // reconstruye (mantiene otros params si existieran)
    const kept = new URL(u.origin + u.pathname);
    for (const [k, v] of u.searchParams.entries()) kept.searchParams.set(k, v);

    return kept.toString();
  } catch {
    return url;
  }
}

function toYouTubeEmbed(url) {
  if (!url) return "";
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "").trim();
      return id ? `https://www.youtube.com/embed/${id}` : "";
    }

    // youtube.com/watch?v=<id>
    const v = u.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;

    // youtube.com/shorts/<id>
    const shortsMatch = u.pathname.match(/\/shorts\/([^/]+)/);
    if (shortsMatch?.[1]) return `https://www.youtube.com/embed/${shortsMatch[1]}`;

    // ya es embed
    if (u.pathname.startsWith("/embed/")) return `https://www.youtube.com${u.pathname}`;

    return "";
  } catch {
    return "";
  }
}

function isISODateYYYYMMDD(dateStr) {
  return typeof dateStr === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dateStr);
}

function normalizeForSort(dateStr) {
  if (!dateStr) return "1970-01-01";
  if (/^\d{4}$/.test(dateStr)) return `${dateStr}-01-01`;
  return dateStr;
}

function splitArtists(raw) {
  return String(raw || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

/* ---------- DATA ---------- */
const RELEASES = [
  {
    id: "esmayao",
    type: "Single",
    artist: "Flakko, BigFicre (ft Shynelevell)",
    title: "Esmayao (ft. Shynelevell)",
    date: "2025-12-30",
    cover: "/covers/esmayao.jpg",
    spotify: "https://open.spotify.com/track/5vEb7CtvVXV0vsH9EU0Oy8",
    youtube: "https://www.youtube.com/watch?v=M-mUkITqYkQ",
    colab: true,
  },
  {
    id: "rmc-2025-una-noche-con-un-g",
    type: "Single",
    artist: "509flakko",
    title: "Una Noche Con Un G (ft. BigFicre)",
    date: "2025-12-23",
    cover: "/covers/una-noche-con-un-g.jpg",
    spotify: "https://open.spotify.com/track/0rtp8A6fmCZS5RDy1SIzCr",
    youtube: "https://www.youtube.com/watch?v=lulGDouNy4A",
    note: "Lanzamiento destacado",
    colab: true,
  },
  {
    id: "bg01-waitta",
    type: "Single",
    artist: "BG01 ft Waitta38",
    title: "NONSTOPPA",
    date: "2025-12-27",
    cover: "",
    youtube: "https://www.youtube.com/watch?v=w5JnEZxQz_s",
  },
  {
    id: "nico-brindemos",
    type: "Single",
    artist: "Nicoarrocha",
    title: "BRINDEMOS",
    date: "2025-12-17",
    cover: "",
    youtube: "https://www.youtube.com/watch?v=Oxumths266U",
  },
  {
    id: "bg01-ghetto",
    type: "Single",
    artist: "BG01",
    title: "GHETTO",
    date: "2025-12-06",
    cover: "",
    youtube: "https://www.youtube.com/watch?v=n_Pfo3FcPyY",
  },
  {
    id: "flakko-goat-freestyle",
    type: "Single",
    artist: "509flakko, ElSevi09",
    title: "Goat Freestyle",
    date: "2025-05-25",
    cover: "/covers/goat-freestyle.jpg",
    spotify: "https://open.spotify.com/track/6LdNZSEHz23IggJ2577DvF",
    youtube: "https://www.youtube.com/watch?v=uUaV2m3Kp54",
    colab: true,
  },
  {
    id: "young-cb-hmm",
    type: "Single",
    artist: "Young Cmon, CB ONE",
    title: "HMM",
    date: "2025-02-26",
    cover: "",
    youtube: "https://www.youtube.com/watch?v=FEdC2Fregls",
    colab: true,
  },

  /* --- Próximos --- */
  {
    id: "junkie-setup-ep",
    type: "EP",
    artist: "Flakko",
    title: "JUNKIE SETUP EP (ft. Shynelevell)",
    date: "2026", // año: NO se usa datePublished en JSON-LD
    cover: "/covers/JUNKIESETUP.jpg",
    status: "Próximamente",
    colab: true,
  },
];

/* ---------- Page ---------- */
export default function ReleasesPage() {
  const prefersReduced = useReducedMotion();
  const [filter, setFilter] = useState("All");
  const [showEmbeds, setShowEmbeds] = useState(false);

  const filters = useMemo(() => ["All", "Single", "EP", "Colab"], []);

  const sortedAll = useMemo(() => {
    return [...RELEASES].sort((a, b) => {
      const da = new Date(normalizeForSort(a.date)).getTime();
      const db = new Date(normalizeForSort(b.date)).getTime();
      return db - da;
    });
  }, []);

  const releases = useMemo(() => {
    if (filter === "All") return sortedAll;

    if (filter === "Colab") {
      return sortedAll.filter((r) => r.type === "Colab" || r.colab === true);
    }

    return sortedAll.filter((r) => r.type === filter);
  }, [filter, sortedAll]);

  // normaliza urls y genera embed a partir de youtube si faltase
  const releasesNormalized = useMemo(() => {
    return releases.map((r) => {
      const youtube = cleanUrl(r.youtube);
      const spotify = cleanUrl(r.spotify);
      const ytEmbed = r.ytEmbed ? cleanUrl(r.ytEmbed) : toYouTubeEmbed(youtube);
      return { ...r, youtube, spotify, ytEmbed };
    });
  }, [releases]);

  /* ---------- SEO: JSON-LD (CollectionPage + ItemList + MusicRecording/MusicAlbum) ---------- */
  const jsonLd = useMemo(() => {
    const baseUrl = "https://realmotioncartel.com";
    const pageUrl = `${baseUrl}/releases`;

    // Construimos desde el catálogo completo (sortedAll), no desde el filtro UI.
    const listItems = sortedAll.map((r, idx) => {
      const url = `${pageUrl}#${encodeURIComponent(r.id)}`;
      const artists = splitArtists(r.artist);

      const youtube = cleanUrl(r.youtube);
      const spotify = cleanUrl(r.spotify);
      const sameAs = [spotify, youtube].filter(Boolean);

      const hasCover = typeof r.cover === "string" && r.cover.trim().length > 0;
      const imageUrl = hasCover ? `${baseUrl}${r.cover}` : undefined;

      const isoDate = isISODateYYYYMMDD(r.date) ? r.date : undefined;

      const typeLower = String(r.type || "").toLowerCase();
      const item =
        typeLower === "ep"
          ? {
              "@type": "MusicAlbum",
              name: r.title,
              albumReleaseType: "EP",
              byArtist: artists.map((name) => ({ "@type": "MusicGroup", name })),
              url,
              ...(isoDate ? { datePublished: isoDate } : {}),
              ...(imageUrl ? { image: imageUrl } : {}),
              ...(sameAs.length ? { sameAs } : {}),
            }
          : {
              "@type": "MusicRecording",
              name: r.title,
              byArtist: artists.map((name) => ({ "@type": "MusicGroup", name })),
              url,
              ...(isoDate ? { datePublished: isoDate } : {}),
              ...(imageUrl ? { image: imageUrl } : {}),
              ...(sameAs.length ? { sameAs } : {}),
            };

      return {
        "@type": "ListItem",
        position: idx + 1,
        url,
        item,
      };
    });

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "CollectionPage",
          "@id": `${pageUrl}#collection`,
          url: pageUrl,
          name: "Catálogo oficial de lanzamientos | Real Motion Cartel",
          description:
            "Catálogo oficial de lanzamientos publicados bajo Real Motion Cartel: singles, EPs y colaboraciones.",
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
          name: "Releases — Real Motion Cartel",
          itemListOrder: "https://schema.org/ItemListOrderDescending",
          numberOfItems: listItems.length,
          itemListElement: listItems,
        },
      ],
    };
  }, [sortedAll]);

  return (
    <>
      <Navbar />

      <Script
        id="rmc-releases-jsonld"
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

          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-10 md:pb-12">
            <motion.div
              variants={heroFade}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.7 }}
              className="text-center"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.09em] text-zinc-300">
                Catálogo oficial
              </p>

              {/* ✅ H1 único */}
              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Catálogo oficial de lanzamientos
              </h1>

              <p className="mt-3 text-zinc-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Archivo curado de lanzamientos publicados bajo Real Motion Cartel.
                Proyectos desarrollados entre{" "}
                <span className="text-white/90 font-semibold">Madrid</span> y{" "}
                <span className="text-white/90 font-semibold">Canarias</span>,
                con visión independiente y una identidad creativa común.
              </p>

              {/* ✅ Enlazado interno */}
              <nav
                aria-label="Enlaces clave"
                className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
              >
                <Link
                  href="/artists"
                  className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
                >
                  Ver Artistas
                </Link>
                <Link
                  href="/news"
                  className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
                >
                  Ver News
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
                >
                  Sobre RMC
                </Link>
              </nav>
            </motion.div>

            {/* Controls */}
            <motion.div
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filtrar releases">
                {filters.map((f) => {
                  const active = filter === f;
                  return (
                    <button
                      key={f}
                      onClick={() => setFilter(f)}
                      className={[
                        "rounded-full px-4 py-2 text-xs sm:text-sm font-semibold border transition",
                        active
                          ? "border-white/25 bg-white/10 text-white"
                          : "border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10",
                      ].join(" ")}
                      aria-pressed={active}
                    >
                      {f === "All" ? "Todos" : f}
                    </button>
                  );
                })}
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3">
                <button
                  onClick={() => setShowEmbeds((v) => !v)}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  {showEmbeds ? "Ocultar embeds" : "Mostrar embeds"}
                </button>

                <Button href="/#featured-release" variant="primary" size="sm">
                  Ver destacado
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* GRID */}
        <section aria-labelledby="releases-grid-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            {/* ✅ H2 real */}
            <motion.h2
              id="releases-grid-title"
              className="text-xl sm:text-2xl font-semibold tracking-tight"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {filter === "All" ? "Todos los lanzamientos" : `${filter}s`}
            </motion.h2>

            <ClientOnly>
              <motion.div
                key={filter}
                className="mt-6 grid gap-4 sm:gap-6 grid-cols-1 min-[520px]:grid-cols-2 lg:grid-cols-3"
                variants={gridParent}
                initial="hidden"
                animate="show"
              >
                {releasesNormalized.length === 0 ? (
                  <div className="col-span-full rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                    <p className="text-sm text-zinc-200 font-semibold">
                      No hay lanzamientos en esta categoría aún.
                    </p>
                    <p className="mt-1 text-xs text-zinc-400">
                      Vuelve a “Todos” para ver el catálogo completo.
                    </p>

                    <button
                      onClick={() => setFilter("All")}
                      className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white hover:bg-white/10 transition"
                    >
                      Ver todos
                    </button>
                  </div>
                ) : (
                  releasesNormalized.map((r) => {
                    const hasCover =
                      typeof r.cover === "string" && r.cover.trim().length > 0;

                    return (
                      <motion.article
                        key={r.id}
                        id={r.id} // ✅ ancla estable para JSON-LD y prensa
                        variants={cardVariant}
                        className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 scroll-mt-24"
                      >
                        {/* Cover */}
                        <div className="relative aspect-[4/5] overflow-hidden">
                          {hasCover ? (
                            <Image
                              src={r.cover}
                              alt={`${r.artist} — ${r.title}`}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 92vw, 420px"
                              quality={95}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                              <p className="text-xs sm:text-sm font-semibold text-white/85 tracking-wide">
                                Cover coming soon
                              </p>
                            </div>
                          )}

                          {/* Badge: status + type */}
                          <span className="absolute top-2 left-2 rounded-full bg-black/70 px-2 py-1 text-[11px] border border-white/10 text-white/90">
                            {r.status ? `${r.status} · ${r.type}` : r.type}
                          </span>

                          {r.note ? (
                            <span className="absolute top-2 right-2 rounded-full bg-emerald-400/15 px-2 py-1 text-[11px] border border-emerald-400/25 text-emerald-200">
                              {r.note}
                            </span>
                          ) : null}

                          {/* Bottom strip */}
                          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-black/70 backdrop-blur border border-white/10 px-3 py-2.5">
                            <p className="text-[11px] uppercase tracking-[0.16em] text-zinc-300/80">
                              {r.artist}
                            </p>

                            {/* ✅ H3 dentro de cada card (la página ya tiene H1/H2) */}
                            <h3 className="mt-0.5 text-sm sm:text-base font-semibold text-white line-clamp-2">
                              {r.title}
                            </h3>
                          </div>
                        </div>

                        {/* Body */}
                        <div className="p-3 sm:p-4 space-y-3">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="text-xs text-zinc-400">
                                {r.date ? formatDateES(r.date) : ""}
                              </div>
                              <div className="text-xs text-zinc-400">
                                {r.type}
                                {r.status ? ` · ${r.status}` : ""}
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              {r.spotify ? (
                                <Button href={r.spotify} variant="primary" size="sm">
                                  Spotify
                                </Button>
                              ) : null}

                              {r.youtube ? (
                                <a
                                  href={r.youtube}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition"
                                >
                                  YouTube
                                </a>
                              ) : null}
                            </div>
                          </div>

                          {/* Optional embed */}
                          {showEmbeds && r.ytEmbed ? (
                            <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
                              <iframe
                                className="h-full w-full"
                                src={r.ytEmbed}
                                title={`${r.artist} — ${r.title}`}
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                              />
                            </div>
                          ) : null}
                        </div>
                      </motion.article>
                    );
                  })
                )}
              </motion.div>
            </ClientOnly>

            {/* Footer note */}
            <motion.p
              className="mt-8 text-xs sm:text-sm text-zinc-400 max-w-3xl"
              variants={fadeUp}
              initial={false}
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              Nota: este listado refleja lanzamientos oficiales de RMC. Si un medio
              necesita confirmación o datos de prensa, escribir a{" "}
              <span className="text-white/90 font-semibold">
                info@realmotioncartel.com
              </span>
              .
            </motion.p>
          </div>
        </section>
      </MotionConfig>

      <Footer />
    </>
  );
}
