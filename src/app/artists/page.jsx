"use client";

import Link from "next/link";
import Script from "next/script";
import { useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

/* ---------- Datos ---------- */
const ARTISTS = [
  {
    id: "509flakko",
    name: "509flakko",
    roles: ["CEO", "Head of A&R", "Voz", "Compositor", "Productor"],
    about:
      "CEO de Real Motion Cartel. Lidera la visión creativa, el desarrollo artístico y la identidad global del sello. Sonido influenciado por el trap de Detroit: crudo, experimental y personal.",
    img: "/artists/flakko.jpg",
    ig: "https://www.instagram.com/509flakko",
  },
  {
    id: "big-ficre",
    name: "Big Ficre",
    roles: ["COO", "Operaciones", "Voz", "Compositor"],
    about:
      "Chief Operating Officer en RMC. Supervisa la ejecución operativa y decisiones clave para sostener coherencia y dirección. Como artista aporta energía agresiva y dominante.",
    img: "/artists/big-ficre.jpg",
    ig: "https://www.instagram.com/bigficre",
  },
  {
    id: "fernando-morales",
    name: "Fernando Morales",
    roles: ["Operations & Strategy Manager", "Administración", "Dirección de proyectos"],
    about:
      "Responsable de operaciones y estrategia. Ordena la ejecución de proyectos, estructura interna y soporte a decisiones junto a dirección ejecutiva.",
    img: "/artists/fer.jpg",
    ig: "https://www.instagram.com/fermoralesp6",
  },
  {
    id: "monru",
    name: "Monru",
    roles: ["Operations Coordinator", "Talent Support", "Estrategia & Organización"],
    about:
      "Coordinación operativa y soporte estratégico. Gestión interna, seguimiento de roster y coordinación de agendas, sesiones y lanzamientos.",
    img: "/artists/monru.jpg",
    ig: "https://www.instagram.com/monru",
  },
  {
    id: "yoel-arboleda",
    name: "Yoel Arboleda",
    roles: ["Finance & Operations Coordinator", "Gestión", "Soporte operativo"],
    about:
      "Coordinación de finanzas y operaciones. Comunicación, soporte administrativo y logística para que cada proyecto avance con eficiencia.",
    img: "/artists/arboleda.jpg",
    ig: "https://www.instagram.com/arboledafx",
  },
  {
    id: "pablo-vera",
    name: "Pablo Vera",
    roles: ["Fashion Stylist", "Creative Wardrobe Lead", "Dirección de estilo"],
    about:
      "Estilista principal de RMC. Construye identidad visual a través de vestuario y curaduría estética. Define looks para sesiones, videoclips y campañas.",
    img: "/artists/pablovera.jpg",
    ig: "https://www.instagram.com/pablovra_", 
  },

  // Artistas
  {
    id: "xini",
    name: "Xini",
    roles: ["Voz", "Compositor"],
    about:
      "Trap con enfoque introspectivo. Capacidad para construir atmósferas propias y una dimensión emocional distintiva en el roster.",
    img: "/artists/xini.jpg",
    ig: "https://www.instagram.com/xini509",
  },
  {
    id: "young-cmon",
    name: "Young Cmon",
    roles: ["Voz", "Compositor"],
    about:
      "Sonido brillante y melódico con enfoque mainstream y experimental. Versatilidad y proyección dentro del universo RMC.",
    img: "/artists/young.jpg",
    ig: "https://www.instagram.com/young.cmon",
  },
  {
    id: "elsevi09",
    name: "ElSevi09",
    roles: ["Voz", "Compositor"],
    about:
      "Sonido callejero y directo. Letras de vivencia real y carácter crudo que refuerza el perfil urbano del colectivo.",
    img: "/artists/elsevi.jpg",
    ig: "https://www.instagram.com/elseviii09",
  },
  {
    id: "cb-one",
    name: "CB ONE",
    roles: ["Voz", "Compositor"],
    about:
      "Rap moderno con influencias melódicas. Sonido atmosférico y letras sinceras, en evolución dentro de la escena independiente.",
    img: "/artists/cbone.jpg",
    ig: "https://www.instagram.com/cb.one1",
  },
  {
    id: "bg01",
    name: "BG01",
    roles: ["Voz", "Compositor"],
    about:
      "Fusión de rap moderno e influencias melódicas. Sonido envolvente y propuesta honesta dentro de la nueva ola independiente.",
    img: "/artists/bgone.jpg",
    ig: "https://www.instagram.com/bg_one018",
  },
  {
    id: "649babywhite",
    name: "649babywhite",
    roles: ["Voz", "Rapero", "Compositor"],
    about:
      "Estética underground con influencia Detroit. Flows cortantes, patrones frenéticos y energía cruda del midwest.",
    img: "/artists/babywhite.jpg",
    ig: "https://www.instagram.com/649babywhite",
  },
  {
    id: "nico-arrocha",
    name: "Nico Arrocha",
    roles: ["Voz", "Compositor"],
    about:
      "Artista canario en ascenso. Fusión de raíces locales con estética contemporánea y mainstream, manteniendo sello propio.",
    img: "/artists/nicoarrocha.jpg",
    ig: "https://www.instagram.com/nicoarrocha.fr",
  },
  {
    id: "julian-marrero",
    name: "Julián Marrero",
    roles: ["DJ"],
    about:
      "DJ de Lanzarote. Selección versátil y enfoque orientado al directo entre electrónica y urbano.",
    img: "/artists/julian.jpg",
    ig: "https://www.instagram.com/julian_marrero",
  },
  {
    id: "akaelperi",
    name: "AKAELPERI",
    roles: ["Voz", "Cantante", "Compositora"],
    about:
      "Perfil emergente de reggaetón con soltura vocal, melodías pegadizas y sensibilidad urbana. Versátil y en crecimiento.",
    img: "/artists/akaelperi.jpg",
    ig: "https://www.instagram.com/miguelmillanpp",
  },
];

/* ---------- Página ---------- */
export default function ArtistsPage() {
  // JSON-LD: roster como ItemList (estructura clara para Google/IA)
  const jsonLd = useMemo(() => {
    const items = ARTISTS.map((a, i) => ({
      "@type": "Person",
      position: i + 1,
      name: a.name,
      url: a.ig || `https://realmotioncartel.com/artists#${a.id}`,
      image: a.img ? `https://realmotioncartel.com${a.img}` : undefined,
      description: a.about,
    }));

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Real Motion Cartel",
          alternateName: "RMC",
          url: "https://realmotioncartel.com",
          logo: "https://realmotioncartel.com/logo.png",
          image: "https://realmotioncartel.com/og-image.png",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Madrid",
            addressCountry: "ES",
          },
        },
        {
          "@type": "ItemList",
          name: "Artistas del sello — Real Motion Cartel",
          itemListOrder: "http://schema.org/ItemListOrderAscending",
          numberOfItems: ARTISTS.length,
          itemListElement: items,
        },
      ],
    };
  }, []);

  return (
    <>
      <Navbar />

      <Script
        id="rmc-artists-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-black text-white pt-24 pb-16 px-4 sm:px-6">
        <section className="mx-auto max-w-7xl">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-center"
          >
            {/* ✅ H1 único con intención SEO */}
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Artistas del sello — Real Motion Cartel
            </h1>

            {/* Copy semántico, corto, específico */}
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Roster oficial y equipo creativo. Música urbana contemporánea (trap,
              Detroit trap y reggaetón moderno/alternativo), con base en Madrid y
              conexión Canarias.
            </p>

            {/* ✅ Internal links */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/releases"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Ver catálogo (Releases)
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Comunicados (News)
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Sobre RMC (About)
              </Link>
            </div>
          </motion.header>

          {/* ✅ H2 útil para estructura (sin competir con H1) */}
          <h2 className="sr-only">Roster y equipo de Real Motion Cartel</h2>

          {/* Grid animado */}
          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {ARTISTS.map((a) => (
              <motion.div
                key={a.id}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
                }}
                id={a.id}
              >
                <ArtistCard artist={a} />
              </motion.div>
            ))}
          </motion.div>

          {/* Footer note corto (SEO/credibilidad) */}
          <p className="mt-10 text-xs sm:text-sm text-zinc-400 max-w-3xl">
            Para prensa y verificación de roster/catálogo:{" "}
            <span className="text-white/90 font-semibold">
              info@realmotioncartel.com
            </span>
            .
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}

/* ---------- Componentes ---------- */
function ArtistCard({ artist }) {
  const { name, roles, about, img, ig } = artist;
  const [imgError, setImgError] = useState(false);

  const isLink = typeof ig === "string" && ig.trim().length > 0;
  const Wrapper = isLink ? "a" : "div";
  const wrapperProps = isLink
    ? {
        href: ig,
        target: "_blank",
        rel: "noopener noreferrer",
        title: `${name} en Instagram`,
        "aria-label": `${name} — abrir Instagram`,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      <div className="relative aspect-[4/5] overflow-hidden cursor-pointer">
        {imgError ? (
          <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-white/10 to-transparent text-zinc-200">
            <span className="text-sm">Imagen próximamente</span>
          </div>
        ) : (
          <Image
            src={img}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        )}

        {/* Faja */}
        <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-black/55 backdrop-blur border border-white/10 px-3 py-2">
          <h3 className="font-semibold leading-none">{name}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {roles.map((r) => (
              <span
                key={`${name}-${r}`}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[11px] text-zinc-200"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-zinc-300">{about}</p>
      </div>
    </Wrapper>
  );
}
