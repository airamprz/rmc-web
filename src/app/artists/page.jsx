"use client";
import { useState } from "react";
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
      "Fundador y CEO de Real Motion Cartel. Líder estratégico y responsable de A&R, define la visión creativa, el desarrollo de artistas y la identidad global del sello. Como artista, destaca por un sonido influenciado por el trap de Detroit, con una estética cruda, experimental y profundamente personal que sirve como pilar sonoro del colectivo.",
    img: "/artists/flakko.jpg",
    ig: "https://instagram.com/509flakko",
  },
  {
    id: "big-ficre",
    name: "Big Ficre",
    roles: ["COO", "Mano derecha del CEO", "Voz", "Compositor"],
    about:
      "Chief Operating Officer y mano derecha del CEO en RMC. Supervisa la ejecución operativa del sello y participa en la toma de decisiones clave, asegurando que cada proyecto avance con coherencia y dirección. Como artista, aporta una energía agresiva y dominante que refuerza la identidad del colectivo.",
    img: "/artists/big-ficre.jpg",
    ig: "https://instagram.com/bigficre",
  },
  {
    id: "fernando-morales",
    name: "Fernando Morales",
    roles: ["Operations & Strategy Manager", "Administración", "Dirección de proyectos"],
    about:
      "Responsable de operaciones y estrategia en RMC. Supervisa la ejecución de proyectos, organiza la estructura interna del sello y apoya la toma de decisiones clave junto al CEO y el COO. Garantiza que cada movimiento del colectivo avance con coherencia, planificación y dirección profesional.",
    img: "/artists/fer.jpg",
    ig: "https://instagram.com/fermoralesp6",
  },
  {
    id: "yaiza-deniz",
    name: "Yaiza Deniz",
    roles: ["Directora creativa"],
    about:
      "Responsable de construir y supervisar la identidad visual de RMC. Define la estética del sello, lidera las propuestas conceptuales, coordina sesiones creativas y garantiza que la imagen del colectivo mantenga coherencia, fuerza y reconocimiento.",
    img: "/artists/yaiza.jpg",
    ig: "https://instagram.com/ydenizmed",
  },
  {
    id: "monru",
    name: "Monru",
    roles: [
      "Operations Coordinator",
      "Talent Support",
      "Estrategia & Organización"
    ],
    about:
      "Coordinador de operaciones en RMC, con un rol clave en la organización interna, la gestión del roster y el soporte estratégico del sello. Aporta estructura, seguimiento y coherencia a los proyectos, coordinando agendas, sesiones y lanzamientos, y asegurando que cada artista cuente con el apoyo necesario para avanzar. Con buena presencia y capacidad para liderar, participa en la relación directa con el roster y colabora en labores de scouting, aportando criterio, orden y visión en la expansión del colectivo.",
    img: "/artists/monru.jpg",
    ig: "https://instagram.com/monru" // cámbialo si procede
  },
  {
    id: "yoel-arboleda",
    name: "Yoel Arboleda",
    roles: ["Finance & Operations Coordinator", "Gestión", "Atención al cliente", "Comunicación", "Soporte operativo"],
    about:
      "Coordinador de finanzas y operaciones en RMC. Gestiona la comunicación con clientes y artistas, organiza la operativa diaria y brinda soporte administrativo y logístico. Su labor garantiza que cada proyecto fluya con calidad, eficiencia y profesionalidad.",
    img: "/artists/arboleda.jpg",
    ig: "https://instagram.com/arboledafx",
  },
  {
    id: "pablo-vera",
    name: "Pablo Vera",
    roles: ["Fashion Stylist", "Creative Wardrobe Lead", "Imagen & Estética", "Dirección de Estilo", "Curaduría Visual"],
    about:
      "Estilista principal de Real Motion Cartel. Responsable de construir y pulir la identidad visual de los artistas a través del vestuario, referencias estéticas y coherencia de marca. Su criterio define los looks en sesiones, videoclips, presentaciones y campañas, garantizando una imagen sólida, moderna y estratégica para cada integrante de RMC.",
    img: "/artists/pablovera.jpg",
    ig: "https://instagram.com/arboledafx",
  },


  {
    id: "xini",
    name: "Xini",
    roles: ["Voz", "Compositor"],
    about:
      "Artista que mezcla trap con melodías de corte más introspectivo. Su enfoque experimental y su capacidad para crear atmósferas propias aportan una dimensión emocional y distintiva dentro del roster de RMC.",
    img: "/artists/xini.jpg",
    ig: "https://instagram.com/xini509",
  },
  {
    id: "young-cmon",
    name: "Young Cmon",
    roles: ["Voz", "Compositor"],
    about:
      "Artista con un sonido brillante, mainstream y experimental. Su enfoque melódico y su capacidad para conectar con el público lo convierten en una de las voces más versátiles y con mayor proyección dentro del colectivo RMC.",
    img: "/artists/young.jpg",
    ig: "https://instagram.com/young.cmon",
  },
  {
    id: "elsevi09",
    name: "ElSevi09",
    roles: ["Voz", "Compositor"],
    about:
      "Artista con un sonido callejero y auténtico. Su estilo directo y sus letras reflejan vivencias reales, aportando crudeza, carácter y honestidad al sonido del colectivo RMC.",
    img: "/artists/elsevi.jpg",
    ig: "https://instagram.com/elseviii09",
  },
  {
    id: "sheila",
    name: "Sheila Langa",
    roles: ["Voz", "Compositora"],
    about:
      "Artista con una voz cálida y una presencia natural. Aporta un enfoque melódico y emocional al colectivo RMC, destacando por su autenticidad y su capacidad de conectar con el público.",
    img: "/artists/sheila1.jpg",
    ig: "https://instagram.com/sheilalanga_",
  },
  {
    id: "darlyn-sirii",
    name: "Darlyn Sirii",
    roles: ["Voz", "Compositor"],
    about:
      "Artista urbano dominicano afincado en Madrid. Su propuesta mezcla trap, reggaetón y hip hop melódico, con letras personales y callejeras. Con el álbum “Sentimientos En El Trap” y singles como “No Cantan”, “Bandida” o “Mi Ex”, consolida un sonido propio dentro de la escena y aporta diversidad al universo RMC.",
    img: "/artists/darlyn.jpg",
    ig: "https://instagram.com/darlynsirii",
  },
  {
    id: "cb-one",
    name: "CB ONE",
    roles: ["Voz", "Compositor"],
    about:
      "Artista urbano emergente cuya música combina rap moderno e influencias melódicas, destacando por un sonido atmosférico y letras sinceras. Su crecimiento en plataformas digitales refleja una propuesta sólida y en constante evolución dentro de la escena independiente.",
    img: "/artists/cbone.jpg",
    ig: "https://www.instagram.com/cb.one1/",
  },
  {
    id: "BG01",
    name: "BG01",
    roles: ["Voz", "Compositor"],
    about:
      "Artista urbano emergente que fusiona rap moderno e influencias melódicas. Su sonido envolvente y su propuesta honesta lo consolidan como un perfil con gran potencial dentro de la nueva ola independiente.",
    img: "/artists/bgone.jpg",
    ig: "https://www.instagram.com/bg_one018/",
  },
  {
    id: "649babywhite",
    name: "649babywhite",
    roles: ["Voz", "Rapero", "Compositor"],
    about:
      "Rapero de estética underground con un sonido claramente influenciado por la escuela de Detroit. Su estilo destaca por flows cortantes, patrones frenéticos y una energía cruda que recuerda a la nueva ola del midwest, posicionándolo como uno de los perfiles más distintivos dentro del universo RMC.",
    img: "/artists/babywhite.jpg",
    ig: "https://instagram.com/649babywhite",
  },
  {
    id: "nico-arrocha",
    name: "Nico Arrocha",
    roles: ["Voz", "Compositor"],
    about:
      "Artista canario en ascenso cuyo sonido fusiona raíces locales con una estética contemporánea y mainstream. Su versatilidad le permite moverse entre el rap, el urbano melódico y otros estilos modernos, manteniendo siempre un sello propio influenciado por la identidad musical de Canarias.",
    img: "/artists/nicoarrocha.jpg",
    ig: "https://instagram.com/nicoarrocha.fr",
  },
  {
    id: "julian-marrero",
    name: "Julián Marrero",
    roles: ["DJ"],
    about:
      "DJ de Lanzarote reconocido por su presencia sólida en la escena musical de la isla. Centrado principalmente en la electrónica y la música urbana, destaca por una selección versátil, mezclas fluidas y un enfoque orientado al directo, encajando de forma natural en ambientes de club y eventos urbanos.",
    img: "/artists/julian.jpg",
    ig: "https://instagram.com/julian_marrero",
  },
  {
    id: "akaelperi",
    name: "AKAELPERI",
    roles: ["Voz", "Cantante", "Compositora"],
    about:
      "Joven promesa del reggaetón con una gran soltura vocal y un enfoque natural a la hora de interpretar. Su estilo combina melodías pegadizas, actitud fresca y sensibilidad urbana, logrando conectar con facilidad con el público. Destaca por su versatilidad, su capacidad para adaptarse a diferentes ritmos y una presencia artística en crecimiento que la posiciona como uno de los perfiles con mayor proyección dentro del nuevo panorama urbano.",
    img: "/artists/akaelperi.jpg",
    ig: "https://instagram.com/miguelmillanpp",
  },
  {
    id: "waitta38",
    name: "Waitta38",
    roles: ["Rapper", "Compositor"],
    about:
      "Criado en un barrio del sur de Madrid, este artista tiene una visión única del mundo urbano. A pesar de su carácter reservado, su música habla por él, abarcando desde drill y hoodtrap hasta trap romántico y sad/real rap. No se limita a un solo género, sino que fusiona estilos y sonidos que reflejan su vida, emociones y vivencias. Con un enfoque auténtico y sin filtros, está construyendo su camino en la escena urbana, buscando conectar con quienes comparten su visión del mundo.",
    img: "/artists/0waitta38.jpg",
    ig: "https://instagram.com/0waitta38",
}

];


/* ---------- Página ---------- */
export default function ArtistsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-24 pb-16 px-4 sm:px-6">
        <section className="mx-auto max-w-7xl">
          {/* Header con fade */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-center"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Artistas RMC
            </h1>
            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Voces y talentos del colectivo. Música diversa con identidad real.
            </p>
          </motion.div>

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
              >
                <ArtistCard artist={a} />
              </motion.div>
            ))}
          </motion.div>
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
  const Wrapper = ig ? "a" : "div";
  const wrapperProps = ig
    ? {
      href: ig,
      target: "_blank",
      rel: "noreferrer",
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

        {/* Faja con nombre y roles */}
        <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-black/55 backdrop-blur border border-white/10 px-3 py-2">
          <h3 className="font-semibold leading-none">{name}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {roles.map((r) => (
              <span
                key={r}
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
