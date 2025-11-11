import Image from "next/image";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden bg-black">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(700px 450px at 50% 0%, var(--accent-soft), transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6 pt-24 md:pt-28 pb-14 md:pb-16">
          <div className="relative mx-auto h-[152px] w-[152px] sm:h-[180px] sm:w-[180px] md:h-[220px] md:w-[220px]">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-50"
              style={{ background: "var(--accent-soft)" }}
            />
            <Image
              src="/logo.png"
              alt="RMC Logo"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 152px, (max-width: 768px) 180px, 220px"
            />
          </div>

          <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white [text-wrap:balance]">
            Real Motion Cartel — Música, visuales y cultura desde Madrid
          </h1>
          <p className="mt-3 text-zinc-300 max-w-2xl mx-auto text-base sm:text-lg [text-wrap:pretty]">
            Lanzamientos con identidad: concepto, sonido y estética. Menos ruido, más idea.
          </p>
        </div>
      </section>

      {/* SOBRE RMC */}
      <section aria-labelledby="about-title">
        <div className="max-w-7xl mx-auto grid gap-8 sm:gap-10 px-4 sm:px-6 py-10 sm:py-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 id="about-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              Quiénes somos
            </h2>
            <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
              Real Motion Cartel (RMC) es un colectivo creativo con base en Madrid que une música,
              moda y producción audiovisual. Creamos proyectos con identidad, desde la idea hasta su
              lanzamiento, combinando dirección artística, producción musical, visuales y estrategia
              digital. Trabajamos con artistas y marcas de distintos estilos y géneros, buscando siempre
              un enfoque estético sólido y resultados reales.
            </p>
          </div>

          {/* Panel visual — placeholder responsive */}
          <div className="relative overflow-hidden rounded-xl border border-white/10 h-[180px] sm:h-[220px] md:h-[240px] bg-gradient-to-br from-fuchsia-500/10 via-white/5 to-transparent flex items-center justify-center">
            <p className="text-zinc-400 text-xs sm:text-sm">Visual reel próximamente</p>
          </div>
        </div>
      </section>

      {/* CONCEPTO Y FILOSOFÍA */}
      <section aria-labelledby="concepto-title" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12 space-y-10 sm:space-y-12">
          <div>
            <h2 id="concepto-title" className="text-xl sm:text-2xl md:text-3xl font-semibold">🧩 Concepto general</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-4xl text-sm sm:text-base">
              Real Motion Cartel (RMC) es un colectivo creativo con base en Madrid que une música, moda y producción
              audiovisual bajo una misma marca. El objetivo es construir una plataforma completa donde artistas, marcas
              y proyectos puedan desarrollarse con una identidad real.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">⚡ Qué hacemos</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Música", desc: "Dirección creativa, grabación, mezcla/master, visualizers y lanzamiento." },
                { title: "Visuales", desc: "Videoclips, fotos, contenido para redes y campañas con estética cinematográfica." },
                { title: "Moda", desc: "Drops propios (RMC Wear) y selección de ropa importada (RMC Select)." },
                { title: "Branding & Web", desc: "Identidad visual, páginas web y crecimiento digital." },
              ].map((b) => (
                <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                  <h3 className="font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">🚀 Visión a futuro</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-4xl text-sm sm:text-base">
              RMC evolucionará hacia un sello independiente, combinando distribución, desarrollo de talento y producción creativa.
              También se planean eventos, colaboraciones y una comunidad activa vía Discord, donde artistas y creativos puedan
              conectar y compartir oportunidades.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">💡 Filosofía</h2>
            <p className="mt-4 text-zinc-300 leading-relaxed max-w-4xl text-sm sm:text-base">
              RMC representa movimiento real, sin postureo. Una mezcla entre profesionalismo y calle, donde cada proyecto se construye con
              estética, estrategia y propósito. Nuestro enfoque es ofrecer resultados tangibles: crecimiento, ventas y presencia real en la industria.
            </p>
          </div>
        </div>
      </section>

      {/* ÚLTIMOS LANZAMIENTOS — grid 2x2 igualado */}
      <section aria-labelledby="last-title" className="border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="mb-5 sm:mb-6 flex items-end justify-between">
            <h3 id="last-title" className="text-xl sm:text-2xl font-semibold tracking-tight">
              Últimos lanzamientos
            </h3>
          </div>

          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2">
            {[
              {
                tag: "Single",
                title: "Young Cmon — Loco",
                yt: "https://www.youtube.com/embed/5_ZhpXix50s",
                spotify: "https://open.spotify.com/intl-es/track/3UhPYoLB6Vw4z7NXk1oxRa?si=b44c6ffbbc404e14",
              },
              {
                tag: "Single",
                title: "509flakko, ElSevi09 — Goat Freestyle",
                yt: "https://www.youtube.com/embed/uUaV2m3Kp54",
                spotify: "https://open.spotify.com/intl-es/track/6LdNZSEHz23IggJ2577DvF?si=baacb802b3454c2d",
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
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
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
                    <div className="text-xs sm:text-sm text-zinc-400">{item.tag}</div>
                    <div className="font-semibold text-sm sm:text-base line-clamp-2">{item.title}</div>
                  </div>
                  {item.spotify ? (
                    <Button href={item.spotify} variant="primary" size="sm">
                      Spotify
                    </Button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÓXIMOS LANZAMIENTOS — portadas locales (mejorado para móvil) */}
      <section id="upcoming" aria-labelledby="upcoming-title" className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
          <div className="mb-5 sm:mb-6 flex items-end justify-between">
            <h3 id="upcoming-title" className="text-xl sm:text-2xl font-semibold tracking-tight">
              Próximos lanzamientos
            </h3>
          </div>

          {/* 1 col en móvil muy pequeño, 2 cols a partir ~380px, 3 en md, 4 en lg */}
          <div className="grid gap-4 sm:gap-6 grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {[
              { tag: "EP", title: "JUNKIE SETUP EP — Flakko ft Shynelevell", cover: "/covers/JUNKIESETUP.jpg" },
              { tag: "Single", title: "Back2Back — Flakko ft BigFicre", cover: "/covers/BACK2BACK.jpg" },
              { tag: "Single", title: "BAD B1TCH — Young Cmon ft Flakko", cover: "/covers/BADBITCH.jpg" },
              { tag: "Colab", title: "X6 — Flakko ft Shynelevell, Boler", cover: "/covers/X6.jpg" },
            ].map((item) => (
              <article
                key={item.title}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition
                     w-full max-w-[300px] sm:max-w-none mx-auto"
              >
                {/* Imagen más compacta (4:5) */}
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

                {/* Texto más compacto en móvil */}
                <div className="p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-zinc-400">{item.tag}</div>
                  <h4 className="font-semibold text-sm sm:text-base leading-snug line-clamp-2">{item.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
