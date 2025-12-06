"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SiInstagram } from "react-icons/si";
import { HiLockClosed } from "react-icons/hi2";

/* ---------------- NAVBAR ---------------- */

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/artists", label: "Artistas" },
  { href: "/news", label: "News" }, 
  { href: "/shop", label: "Shop" },
  { href: "/reservar", label: "Servicios", locked: true },
];

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const RoundBtn = ({ children, className, ...rest }) => (
    <button
      className={clsx(
        "inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );

  const LinkItem = ({ href, label, locked }) => {
    const active = pathname === href;
    const isDisabled = locked;

    const Component = isDisabled ? "button" : Link;
    const componentProps = isDisabled ? { type: "button" } : { href };

    return (
      <Component
        {...componentProps}
        className={clsx(
          "relative px-3 py-1.5 rounded-full text-sm transition-colors inline-flex items-center gap-1.5",
          isDisabled
            ? "cursor-not-allowed text-zinc-500 bg-white/0 border border-dashed border-white/15"
            : "text-zinc-300 hover:text-white hover:bg-white/10",
          active && !isDisabled && "text-white bg-white/10 ring-1 ring-white/10"
        )}
        aria-disabled={isDisabled || undefined}
        title={isDisabled ? "Servicios no disponibles" : undefined}
      >
        <span>{label}</span>
        {isDisabled && (
          <HiLockClosed className="h-3.5 w-3.5 opacity-80" aria-hidden="true" />
        )}

        {!isDisabled && active && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-3 right-3 -bottom-[3px] h-[2px] rounded-full opacity-90"
            style={{ background: "var(--accent)" }}
          />
        )}
      </Component>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-3">
          <Link href="/" aria-label="Inicio">
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image src="/logo.png" alt="RMC" fill className="object-contain" priority />
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <LinkItem {...item} />
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center">
            <a
              href="https://instagram.com/realmotioncartel"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 h-9 text-sm text-zinc-200 hover:text-white hover:bg-white/10 transition"
            >
              <SiInstagram size={18} />
              <span className="font-medium">@realmotioncartel</span>
            </a>
          </div>

          <RoundBtn
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor">
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </RoundBtn>
        </div>
      </nav>
    </header>
  );
}

/* --------------- NEWS / POSTS ---------------- */

const YOUNG_CMON_COVER = "/news/youngcmon.jpg";

const posts = [
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
          Real Motion Cartel anuncia la llegada de <strong>Young Cmon</strong> como
          su primer fichaje oficial. Un movimiento que marca el inicio de una nueva
          etapa para el sello y para el ecosistema creativo que estamos construyendo.
        </p>

        <h3>Quién es Young Cmon</h3>
        <p>
          Young Cmon es una de las nuevas promesas del panorama urbano y mainstream.
          Su estilo se caracteriza por un sonido <strong>brillante, melódico</strong> y
          estéticamente moderno, combinando influencias del pop contemporáneo con
          elementos experimentales que lo diferencian dentro de la escena.
        </p>

        <p>
          Lejos de los tonos oscuros que dominan algunos géneros urbanos, Young Cmon
          destaca por una propuesta luminosa, expansiva y orientada a un público amplio.
          Su versatilidad le permite moverse entre lo comercial y lo alternativo sin perder
          identidad, construyendo una estética fresca, colorida y con visión internacional.
        </p>

        <h3>Estilo y propuesta artística</h3>
        <ul>
          <li>
            <strong>Sonido:</strong> melodías modernas, estribillos memorables y producción
            clara y pulida con tintes experimentales.
          </li>
          <li>
            <strong>Identidad estética:</strong> visuales vibrantes, energía juvenil y un
            enfoque artístico muy conectado con las nuevas generaciones.
          </li>
          <li>
            <strong>Proyección:</strong> uno de los nombres con mayor potencial para abrirse
            paso en el circuito mainstream sin perder autenticidad urbana.
          </li>
        </ul>

        <h3>Un perfil alineado con la visión de RMC</h3>
        <ul>
          <li>
            <strong>Propuesta fresca y moderna</strong> que complementa la línea creativa de RMC.
          </li>
          <li>
            <strong>Capacidad para conectar con audiencias amplias</strong> sin dejar de ser
            competitivo en la escena urbana.
          </li>
          <li>
            <strong>Actitud profesional</strong> y ambición para construir una carrera sólida.
          </li>
        </ul>

        <h3>Plan de trabajo conjunto</h3>
        <ol>
          <li>
            <strong>Lanzamientos estratégicos:</strong> definir singles, concepto artístico
            y narrativa visual alrededor de cada publicación.
          </li>
          <li>
            <strong>Visuales y contenido:</strong> videoclips, piezas creativas y contenido
            optimizado para plataformas digitales.
          </li>
          <li>
            <strong>Posicionamiento:</strong> consolidación de marca artística, crecimiento
            en redes y expansión a nuevas audiencias.
          </li>
        </ol>

        <h3>Lo que esperamos de Young Cmon en RMC</h3>
        <p>
          Young Cmon llega a Real Motion Cartel como un referente emergente con todo el
          potencial para convertirse en una figura destacada del sonido urbano mainstream.
          Su enfoque melódico, su estética moderna y su ambición lo sitúan como una de las
          apuestas más sólidas para esta nueva etapa del sello.
        </p>

        <p className="text-sm text-neutral-400">
          Próximamente anunciaremos fechas de lanzamiento, contenido exclusivo y novedades
          sobre su primer proyecto dentro de RMC.
        </p>
      </article>
    ),
  },
];

function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/[0.03] to-black/80 shadow-xl shadow-black/40">
      {post.cover && (
        <div className="relative w-full aspect-[16/9]">
          <Image src={post.cover} alt={post.title} fill className="object-cover" priority />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-zinc-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 uppercase tracking-wide">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {post.tag}
            </span>

            <time className="rounded-full bg-black/40 px-3 py-1">
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </time>
          </div>
        </div>
      )}

      <div className="p-5 sm:p-7 space-y-4">
        <header>
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">
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

/* --------------- PAGE COMPONENT ---------------- */

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
                  Fichajes, lanzamientos y movimientos del universo RMC.
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
            <p>© {new Date().getFullYear()} Real Motion Cartel</p>
          </footer>
        </div>
      </main>
    </>
  );
}
