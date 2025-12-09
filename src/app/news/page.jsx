"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar"; // asegúrate de que esta ruta apunta a tu Navbar correcto

/* --------------- NEWS / POSTS ---------------- */

// Portada Young Cmon (debes tener /public/news/youngcmon.jpg)
const YOUNG_CMON_COVER = "/news/youngcmon.jpg";

const posts = [
  // NOTICIA MÁS NUEVA: LABEL EN DITTO
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
          Real Motion Cartel da un paso decisivo en su evolución como proyecto
          creativo y ecosistema musical poniendo en marcha su propio{" "}
          <strong>label interno dentro de Ditto</strong>. Esta nueva estructura
          nos permite gestionar lanzamientos de forma centralizada, ordenar el
          catálogo y consolidar la identidad sonora del movimiento RMC.
        </p>

        <h3>Un paso clave en la profesionalización de RMC</h3>
        <p>
          Hasta ahora, muchos lanzamientos se hacían de forma dispersa, sin una
          estructura común que uniera a los artistas bajo un mismo paraguas. Con
          este label, RMC comienza a operar como un{" "}
          <strong>sello independiente real</strong>, capaz de:
        </p>
        <ul>
          <li>
            Centralizar la distribución de la música bajo un sello unificado.
          </li>
          <li>
            Gestionar mejor derechos, metadata y organización del catálogo.
          </li>
          <li>
            Construir una identidad clara alrededor de los artistas vinculados al
            proyecto.
          </li>
          <li>
            Impulsar estrategias conjuntas de crecimiento y visibilidad.
          </li>
        </ul>

        <h3>
          Un label reservado para quienes están de verdad dentro del movimiento
        </h3>
        <p>
          El label de Real Motion Cartel no está pensado para fichar artistas por
          volumen, sino para dar estructura a quienes{" "}
          <strong>están realmente involucrados en el proyecto</strong>:
        </p>
        <ul>
          <li>
            Artistas que participan activamente en la visión y el crecimiento de
            RMC.
          </li>
          <li>
            Perfiles alineados estética y artísticamente con nuestro universo
            creativo.
          </li>
          <li>
            Personas con actitud profesional, disciplina de trabajo y ambición de
            carrera.
          </li>
        </ul>
        <p>
          El objetivo es construir un <strong>roster pequeño pero sólido</strong>,
          donde cada nombre tenga sentido dentro del ecosistema y cuente con un
          plan real de desarrollo.
        </p>

        <h3>Qué desbloquea este label para los artistas</h3>
        <p>
          Formar parte del label de RMC supone entrar en una estructura donde la
          música no se lanza “porque sí”, sino con planificación y criterio. Entre
          los beneficios principales:
        </p>
        <ul>
          <li>
            <strong>Distribución profesional</strong> bajo un sello reconocible
            asociado a la marca Real Motion Cartel.
          </li>
          <li>
            <strong>Acompañamiento estratégico</strong> en calendarios de
            lanzamientos, narrativa y posicionamiento.
          </li>
          <li>
            <strong>Dirección creativa unificada</strong> en sonido, visuales,
            portadas y contenido.
          </li>
          <li>
            Mayor peso dentro de las acciones internas de RMC: campañas, visual
            content, eventos, etc.
          </li>
        </ul>

        <h3>Lo que viene</h3>
        <p>
          A partir de ahora, los artistas más comprometidos con el proyecto irán
          siendo incorporados progresivamente al label, creando un catálogo
          coherente y reconocible. Este movimiento es el primer gran paso para
          consolidar a Real Motion Cartel como{" "}
          <strong>sello independiente</strong> con estructura propia, criterio y
          ambición a medio y largo plazo.
        </p>

        <p className="text-sm text-neutral-400">
          Próximamente anunciaremos el roster inicial y los primeros lanzamientos
          oficiales bajo el nuevo label de Real Motion Cartel.
        </p>
      </article>
    ),
  },

  // NOTICIA ANTERIOR: FICHAJE YOUNG CMON
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
          como su primer fichaje oficial. Un movimiento que marca el inicio de
          una nueva etapa para el sello y para el ecosistema creativo que estamos
          construyendo.
        </p>

        <h3>Quién es Young Cmon</h3>
        <p>
          Young Cmon es una de las nuevas promesas del panorama urbano y
          mainstream. Su estilo se caracteriza por un sonido{" "}
          <strong>brillante, melódico</strong> y estéticamente moderno,
          combinando influencias del pop contemporáneo con elementos
          experimentales que lo diferencian dentro de la escena.
        </p>

        <p>
          Lejos de los tonos oscuros que dominan algunos géneros urbanos, Young
          Cmon destaca por una propuesta luminosa, expansiva y orientada a un
          público amplio. Su versatilidad le permite moverse entre lo comercial y
          lo alternativo sin perder identidad, construyendo una estética fresca,
          colorida y con visión internacional.
        </p>

        <h3>Estilo y propuesta artística</h3>
        <ul>
          <li>
            <strong>Sonido:</strong> melodías modernas, estribillos memorables y
            producción clara y pulida con tintes experimentales.
          </li>
          <li>
            <strong>Identidad estética:</strong> visuales vibrantes, energía
            juvenil y un enfoque artístico muy conectado con las nuevas
            generaciones.
          </li>
          <li>
            <strong>Proyección:</strong> uno de los nombres con mayor potencial
            para abrirse paso en el circuito mainstream sin perder autenticidad
            urbana.
          </li>
        </ul>

        <h3>Un perfil alineado con la visión de RMC</h3>
        <ul>
          <li>
            <strong>Propuesta fresca y moderna</strong> que complementa la línea
            creativa de RMC.
          </li>
          <li>
            <strong>Capacidad para conectar con audiencias amplias</strong> sin
            dejar de ser competitivo en la escena urbana.
          </li>
          <li>
            <strong>Actitud profesional</strong> y ambición para construir una
            carrera sólida.
          </li>
        </ul>

        <h3>Plan de trabajo conjunto</h3>
        <ol>
          <li>
            <strong>Lanzamientos estratégicos:</strong> definir singles, concepto
            artístico y narrativa visual alrededor de cada publicación.
          </li>
          <li>
            <strong>Visuales y contenido:</strong> videoclips, piezas creativas y
            contenido optimizado para plataformas digitales.
          </li>
          <li>
            <strong>Posicionamiento:</strong> consolidación de marca artística,
            crecimiento en redes y expansión a nuevas audiencias.
          </li>
        </ol>

        <h3>Lo que esperamos de Young Cmon en RMC</h3>
        <p>
          Young Cmon llega a Real Motion Cartel como un referente emergente con
          todo el potencial para convertirse en una figura destacada del sonido
          urbano mainstream. Su enfoque melódico, su estética moderna y su
          ambición lo sitúan como una de las apuestas más sólidas para esta nueva
          etapa del sello.
        </p>

        <p className="text-sm text-neutral-400">
          Próximamente anunciaremos fechas de lanzamiento, contenido exclusivo y
          novedades sobre su primer proyecto dentro de RMC.
        </p>
      </article>
    ),
  },
];

function PostCard({ post }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 via-white/[0.03] to-black/80 shadow-xl shadow-black/40">
      {/* Cover solo si existe */}
      {post.cover && (
        <div className="relative w-full aspect-[16/9]">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            className="object-cover"
            priority
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
              {new Date(post.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </time>
          </div>
        </div>
      )}

      {/* Contenido */}
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
          <div className="mt-4 border-t border-white/10 pt-4">
            {post.body()}
          </div>
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
        {/* Glow de fondo */}
        <div className="pointer-events-none absolute inset-x-0 top-32 mx-auto h-64 max-w-3xl rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-10">
          {/* Header / Hero */}
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
                  Última actualización:{" "}
                  {new Date().toLocaleDateString("es-ES")}
                </span>
              </div>
            </div>
          </header>

          {/* Listado de noticias */}
          <section className="space-y-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </section>

          {/* Footer simple */}
          <footer className="mt-10 flex flex-col items-center gap-3 text-center text-xs text-zinc-500">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-4 py-2 text-sm text-zinc-100 hover:bg-white hover:text-black transition"
            >
              Volver a inicio
            </Link>
            <p>
              © {new Date().getFullYear()} Real Motion Cartel. Todos los
              derechos reservados.
            </p>
          </footer>
        </div>
      </main>
    </>
  );
}
