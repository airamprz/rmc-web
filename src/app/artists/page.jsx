"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

/* ---------- Datos ---------- */
const ARTISTS = [
  {
    id: "fernando-morales",
    name: "Fernando Morales",
    roles: ["Manager", "Administrativo", "Estrategia", "Dirección de proyectos"],
    about:
      "Encargado de la gestión y dirección estratégica de RMC. Supervisa la planificación, coordinación y administración del colectivo, asegurando que cada proyecto mantenga coherencia, calidad y visión a largo plazo.",
    img: "/artists/fer.jpg",
    ig: "https://instagram.com/fermoralesp6",
  },
  {
    id: "yaiza-deniz",
    name: "Yaiza Deniz",
    roles: ["Directora creativa"],
    about:
      "Responsable de definir la estética y el universo visual de RMC. Lidera los conceptos creativos, coordina sesiones y vela porque la imagen del colectivo sea coherente, sólida y reconocible.",
    img: "/artists/yaiza.jpg", // asegúrate de crear esta imagen en /public/artists
    ig: "https://instagram.com/ydenizmed",
  },
  {
    id: "509flakko",
    name: "509flakko",
    roles: ["CEO", "Voz", "Compositor"],
    about:
      "Artista con un sonido influenciado por el trap de Detroit y la escena underground. Su voz grave y estilo oscuro reflejan una identidad auténtica y directa dentro del colectivo RMC.",
    img: "/artists/flakko.jpg",
    ig: "https://instagram.com/509flakko",
  },
  {
    id: "xini",
    name: "Xini",
    roles: ["Voz", "Compositor"],
    about:
      "Artista con un estilo que mezcla trap y melodías sad. Destaca por su enfoque experimental y su capacidad para crear atmósferas únicas dentro del colectivo RMC.",
    img: "/artists/xini.jpg",
    ig: "https://instagram.com/xini509",
  },
  {
    id: "young-cmon",
    name: "Young Cmon",
    roles: ["Voz", "Compositor"],
    about:
      "Artista con un sonido más mainstream dentro del colectivo RMC. Su enfoque melódico y su capacidad para conectar con el público lo convierten en una de las voces más versátiles del grupo.",
    img: "/artists/young.jpg",
    ig: "https://instagram.com/young.cmon",
  },
  {
    id: "big-ficre",
    name: "Big Ficre",
    roles: ["Voz", "Compositor"],
    about:
      "Artista con un estilo agresivo y presencia dominante en cada tema. Combina actitud y técnica, aportando la fuerza y el carácter que definen el sonido del colectivo RMC.",
    img: "/artists/big-ficre.jpg",
    ig: "https://instagram.com/bigficre",
  },
  {
    id: "elsevi09",
    name: "ElSevi09",
    roles: ["Voz", "Compositor"],
    about:
      "Artista con un sonido callejero y auténtico. Su estilo directo y sus letras reflejan vivencias reales, aportando crudeza y honestidad al sonido del colectivo RMC.",
    img: "/artists/elsevi.jpg",
    ig: "https://instagram.com/elseviii09",
  },
  {
    id: "sheila",
    name: "Sheila Langa",
    roles: ["Voz", "Compositor"],
    about:
      "Artista con una voz cálida y una presencia escénica natural. Aporta un enfoque melódico y emocional al colectivo RMC, destacando por su autenticidad y conexión con el público.",
    img: "/artists/sheila1.jpg",
    ig: "https://instagram.com/sheilalanga_",
  },
  {
    id: "darlyn-sirii",
    name: "Darlyn Sirii",
    roles: ["Voz", "Compositor"],
    about:
      "Artista urbano dominicano afincado en Madrid. Su propuesta mezcla trap, reggaetón y hip hop melódico, con letras personales y callejeras. Con el álbum “Sentimientos En El Trap” y singles como “No Cantan”, “Bandida” o “Mi Ex”, consolida un sonido propio dentro de la escena.",
    img: "/artists/darlyn.jpg", // crea esta imagen en /public/artists
    ig: "https://instagram.com/darlynsirii",
  },
  {
    id: "yoel-arboleda",
    name: "Yoel Arboleda",
    roles: ["Director creativo", "Gestión", "Atención al cliente", "Comunicación", "Soporte operativo"],
    about:
      "Director creativo y responsable de la relación con clientes. Coordina la atención, la comunicación y la operativa diaria para que cada proyecto fluya con calidad y coherencia visual.",
    img: "/artists/arboleda.jpg",
    ig: "https://instagram.com/arboledafx",
  },
  {
    id: "cb-one",
    name: "CB ONE",
    roles: ["Voz", "Compositor"],
    about:
      "Artista urbano emergente cuya música combina rap moderno e influencias melódicas, destacando por un sonido atmosférico y letras sinceras. Su crecimiento en plataformas digitales refleja una propuesta sólida y en constante evolución dentro de la escena independiente.",
    img: "/artists/cbone.jpg", // crea esta imagen en /public/artists
    ig: "https://www.instagram.com/cb.one1/",
  },
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
