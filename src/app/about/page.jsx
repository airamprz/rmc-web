"use client";

import { motion, MotionConfig, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ---------- Variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

export default function AboutPage() {
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
        <section className="relative overflow-hidden bg-black border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-10 md:pb-12">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-center"
            >
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.09em] text-zinc-300">
                About
              </p>

              <h1 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Real Motion Cartel
              </h1>

              <p className="mt-4 text-zinc-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
                Real Motion Cartel (RMC) es un sello musical independiente y
                colectivo creativo que desarrolla y publica proyectos musicales
                con una identidad clara y una visión a largo plazo.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTENT */}
        <section>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
            {/* Qué es */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Qué es Real Motion Cartel
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                RMC funciona como una plataforma creativa que integra música,
                dirección artística y producción audiovisual bajo un mismo
                criterio estético. El proyecto nace con la intención de ofrecer
                una estructura real a artistas que buscan desarrollar su
                identidad sin depender de fórmulas genéricas ni dinámicas
                efímeras.
              </p>
            </motion.div>

            {/* Qué hacemos */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Qué hacemos
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Desde Real Motion Cartel trabajamos en el desarrollo artístico,
                la producción musical y la ejecución visual de lanzamientos
                dentro de la música urbana contemporánea. Cada proyecto se
                concibe como una pieza completa, donde sonido, imagen y
                narrativa forman parte de un mismo universo creativo.
              </p>
            </motion.div>

            {/* Madrid · Canarias */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Madrid · Canarias
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Aunque la base operativa del sello se encuentra en Madrid, Real
                Motion Cartel mantiene una conexión directa con Canarias,
                especialmente con Lanzarote. Esta doble presencia permite
                actuar como puente entre territorios, facilitando el acceso a
                recursos, visibilidad y estructura profesional en un contexto
                donde el desarrollo artístico desde las islas presenta mayores
                barreras.
              </p>
            </motion.div>

            {/* Filosofía */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Filosofía
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Real Motion Cartel apuesta por la coherencia, el control creativo
                y el crecimiento sostenible. La prioridad no es la exposición
                inmediata, sino la construcción de un catálogo sólido y una
                identidad reconocible en el tiempo.
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                Contacto
              </h2>
              <p className="mt-4 text-zinc-300 leading-relaxed text-sm sm:text-base">
                Para consultas relacionadas con el sello, prensa o proyectos
                creativos:
              </p>
              <p className="mt-2 text-sm sm:text-base text-white font-semibold">
                info@realmotioncartel.com
              </p>
            </motion.div>
          </div>
        </section>
      </MotionConfig>

      <Footer />
    </>
  );
}
