"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

/* --------------- NEWS / POSTS ---------------- */

// Portadas (en /public/news/)
const RELEASES_COVER = "/news/releases.jpg";
const YOUNG_CMON_COVER = "/news/youngcmon.jpg";
const ROSTER_EXPANSION_COVER = "/news/cbpixelado.jpg";
const PABLO_VERA_COVER = "/news/pablovera.jpg";

const posts = [
  // ✅ NUEVA NOTICIA: APERTURA DE RELEASES
  {
    id: "rmc-releases-launch",
    title:
      "Real Motion Cartel abre su sección de Releases y presenta el catálogo oficial del sello",
    date: "2025-12-29",
    tag: "Releases",
    cover: RELEASES_COVER,
    // ✅ Marcamos esta como “hero” para usar formato editorial (16:9)
    coverVariant: "wide",
    excerpt:
      "RMC activa la sección Releases dentro de su web oficial: un archivo vivo del catálogo, diseñado para centralizar lanzamientos, reforzar la narrativa y ordenar la etapa actual del sello.",
    body: () => (
      <article className="prose prose-invert prose-sm md:prose-base max-w-none">
        <p>
          Real Motion Cartel activa oficialmente la sección{" "}
          <strong>Releases</strong> dentro de su web, un espacio concebido como{" "}
          <strong>catálogo central</strong> del sello. Este lanzamiento marca un
          paso operativo y estratégico: ordenar el archivo, reforzar la identidad
          y ofrecer un punto único desde el que seguir la evolución del
          movimiento.
        </p>

        <h3>Un catálogo con criterio, no un listado</h3>
        <p>
          Releases nace con una premisa clara:{" "}
          <strong>coherencia por encima de volumen</strong>. La sección no se
          plantea como un feed, sino como un archivo curado donde cada
          lanzamiento tiene su lugar dentro del universo RMC.
        </p>

        <h3>Qué incluye la sección</h3>
        <ul>
          <li>
            <strong>Lanzamientos oficiales</strong> publicados bajo Real Motion
            Cartel.
          </li>
          <li>
            <strong>Filtros por formato</strong> (Singles, EPs) y{" "}
            <strong>colaboraciones</strong>.
          </li>
          <li>
            Un bloque de <strong>próximamente</strong> para anticipar lo que viene
            sin romper el control narrativo.
          </li>
          <li>
            Enlaces directos a plataformas y embeds opcionales para escucha
            inmediata.
          </li>
        </ul>

        <h3>Por qué ahora</h3>
        <p>
          La apertura de Releases responde a la necesidad de consolidar a RMC
          como sello con estructura: control de metadata, orden de catálogo y una
          presentación alineada con el estándar visual del proyecto. Es un punto
          de partida para futuras extensiones de producto y comunicación.
        </p>

        <h3>Lo siguiente</h3>
        <p>
          En las próximas semanas se incorporarán nuevas entradas y se ampliará
          el archivo con lanzamientos, colaboraciones y piezas clave de esta
          etapa. Releases no es una sección estática: es un{" "}
          <strong>registro vivo</strong>.
        </p>

        <p className="text-sm text-neutral-400">
          La sección ya está disponible en la web oficial de Real Motion Cartel.
        </p>
      </article>
    ),
  },

  // NOTICIA: FICHAJE PABLO VERA (PV)
  {
    id: "rmc-fichaje-pablo-vera",
    title:
      "Real Motion Cartel incorpora a Pablo Vera como estilista oficial del colectivo",
    date: "2025-12-11",
    tag: "Equipo",
    cover: PABLO_VERA_COVER,
    excerpt:
      "Real Motion Cartel refuerza su estructura creativa con la incorporación de Pablo Vera (PV) como estilista oficial del proyecto, consolidando la identidad visual del colectivo.",
    body: () => (
      <article className="prose prose-invert prose-sm md:prose-base max-w-none">
        <p>
          Real Motion Cartel anuncia oficialmente la incorporación de{" "}
          <strong>Pablo Vera (PV)</strong> como{" "}
          <strong>estilista principal del colectivo</strong>, un movimiento
          estratégico que refuerza la identidad visual y la presencia estética del
          proyecto en una etapa de crecimiento clave.
        </p>

        <h3>Un rol esencial en la nueva estructura creativa</h3>
        <p>
          El fichaje de PV responde a la necesidad de consolidar la coherencia
          visual del colectivo, integrando el vestuario y la estética como parte
          fundamental del universo RMC. Su rol abarca la{" "}
          <strong>
            búsqueda de prendas, selección de outfits, dirección de estilo y
            curaduría visual
          </strong>{" "}
          para videoclips, sesiones fotográficas, eventos, contenido digital y
          apariciones públicas.
        </p>

        <p className="text-sm text-neutral-400">
          En las próximas semanas se presentarán nuevas sesiones, campañas
          visuales y contenido trabajado bajo la dirección estética de PV.
        </p>
      </article>
    ),
  },

  // NOTICIA: EXPANSIÓN DEL ROSTER
  {
    id: "rmc-roster-expansion",
    title: "RMC expande su roster con nuevos talentos emergentes",
    date: "2025-12-10",
    tag: "Fichajes",
    cover: ROSTER_EXPANSION_COVER,
    excerpt:
      "Real Motion Cartel entra en una nueva etapa de crecimiento, incorporando varios artistas emergentes con propuestas sólidas, identidad propia y una proyección real dentro de la escena urbana.",
    body: () => (
      <article className="prose prose-invert prose-sm md:prose-base max-w-none">
        <p>
          Real Motion Cartel continúa consolidándose como uno de los colectivos
          más activos y con mayor proyección dentro de la escena urbana
          independiente.
        </p>

        <p className="text-sm text-neutral-400">
          Próximamente se revelarán nuevos nombres, proyectos y fechas de
          lanzamiento dentro de esta nueva etapa de expansión de RMC.
        </p>
      </article>
    ),
  },

  // NOTICIA: LABEL EN DITTO
  {
    id: "rmc-label-ditto",
    title: "Real Motion Cartel lanza su propio label dentro de Ditto",
    date: "2025-12-09",
    tag: "Label",
    cover: null,
    excerpt:
      "Real Motion Cartel da un paso clave en su profesionalización con la creación de su propio label dentro de Ditto, reservado para los artistas más comprometidos con el proyecto.",
    body: () => (
      <article className="prose prose-invert prose-sm md:prose-base max-w-none">
        <p>
          Real Motion Cartel pone en marcha su propio{" "}
          <strong>label interno dentro de Ditto</strong>.
        </p>

        <p className="text-sm text-neutral-400">
          Próximamente anunciaremos el roster inicial y los primeros lanzamientos
          oficiales bajo el nuevo label de Real Motion Cartel.
        </p>
      </article>
    ),
  },

  // NOTICIA: FICHAJE YOUNG CMON
  {
    id: "young-cmon-fichaje-rmc",
    title: "Real Motion Cartel incorpora a Young Cmon como primer fichaje",
    date: "2025-12-06",
    tag: "Fichajes",
    cover: YOUNG_CMON_COVER,
    excerpt:
      "Real Motion Cartel da el primer paso como plataforma creativa y sello independiente con la incorporación de Young Cmon.",
    body: () => (
      <article className="prose prose-invert prose-sm md:prose-base max-w-none">
        <p>
          Real Motion Cartel anuncia la llegada de <strong>Young Cmon</strong>{" "}
          como su primer fichaje oficial.
        </p>

        <p className="text-sm text-neutral-400">
          Próximamente anunciaremos fechas de lanzamiento, contenido exclusivo y
          novedades sobre su primer proyecto dentro de RMC.
        </p>
      </article>
    ),
  },
];

/* ---------------- CARD ---------------- */

function formatDateShortES(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("es-ES", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function PostCard({ post }) {
  const formattedDate = useMemo(() => formatDateShortES(post.date), [post.date]);

  // ✅ Si la imagen es “wide”, usamos 16:9. Si no, 1:1.
  const isWide = post.coverVariant === "wide";
  const coverClass = isWide ? "aspect-[16/9]" : "aspect-square";

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/[0.03] to-black/80 shadow-xl shadow-black/40">
      {post.cover ? (
        <div className={`relative w-full ${coverClass}`}>
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority={post.id === "rmc-releases-launch"}
            sizes={
              isWide
                ? "(min-width: 1024px) 896px, (min-width: 640px) 100vw, 100vw"
                : "(min-width: 1024px) 896px, (min-width: 640px) 100vw, 100vw"
            }
            // ✅ Evita recomprimir demasiado. (Aun así, si el archivo es “banner”
            // y lo fuerzas a cuadrado, se verá peor. Por eso hacemos 16:9 arriba.)
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {post.tag}
            </span>
            <time
              dateTime={post.date}
              className="rounded-full bg-black/40 px-3 py-1"
            >
              {formattedDate}
            </time>
          </div>
        </div>
      ) : (
        <div className="p-5 sm:p-7 flex items-center justify-between border-b border-white/10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-zinc-100">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {post.tag}
          </span>
          <time
            dateTime={post.date}
            className="rounded-full bg-black/40 px-3 py-1 text-xs text-zinc-100"
          >
            {formattedDate}
          </time>
        </div>
      )}

      <div className="p-5 sm:p-7 space-y-4">
        <header>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Notas de prensa · Real Motion Cartel
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white leading-tight">
            {post.title}
          </h2>
        </header>

        <p className="text-sm sm:text-base text-zinc-200">{post.excerpt}</p>

        <details className="group mt-2">
          <summary className="flex cursor-pointer items-center gap-2 text-sm font-medium text-zinc-100 hover:text-white">
            Leer nota completa
          </summary>
          <div className="mt-4 border-t border-white/10 pt-4">{post.body()}</div>
        </details>
      </div>
    </article>
  );
}

/* ---------------- PAGE ---------------- */

export default function NewsPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen bg-gradient-to-b from-black via-black to-zinc-950">
        <div className="pointer-events-none absolute inset-x-0 top-32 mx-auto h-64 max-w-3xl rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-10">
          <header className="space-y-3">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
              Real Motion Cartel · Newsroom
            </p>

            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-white">
                  Noticias & anuncios
                </h1>
                <p className="mt-2 max-w-xl text-sm sm:text-base text-zinc-300">
                  Fichajes, lanzamientos y movimientos clave dentro del universo
                  Real Motion Cartel.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Última actualización: {new Date().toLocaleDateString("es-ES")}
                </span>
              </div>
            </div>
          </header>

          <section className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section>

          <footer className="mt-10 flex flex-col items-center gap-3 text-center text-xs text-zinc-500">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-100 hover:bg-white hover:text-black transition"
            >
              Volver a inicio
            </Link>
            <p>
              © {new Date().getFullYear()} Real Motion Cartel. Todos los derechos
              reservados.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
