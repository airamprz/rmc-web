// app/drop/page.jsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

function pad(n) {
  return String(n).padStart(2, "0");
}

function getTimeLeft(targetDate) {
  const now = new Date();
  const diffMs = targetDate.getTime() - now.getTime();

  if (diffMs <= 0) {
    return { isLive: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { isLive: false, days, hours, minutes, seconds };
}

export default function DropPage() {
  // Ajusta aquí la fecha/hora objetivo (Madrid/CET).
  // Ejemplo: 13 de febrero a las 23:00 (hora peninsular)
  const target = useMemo(() => new Date("2026-02-13T23:00:00+01:00"), []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-24 pb-16 px-4 sm:px-6">
        <section className="mx-auto max-w-5xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] text-zinc-200">
              DROP — PRIVATE ACCESS
            </div>

            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
              LATE AGAIN
            </h1>

            <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
              Preview exclusiva + contenido inédito. Acceso limitado mediante contraseña.
            </p>
          </motion.div>

          {/* Card principal */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            {/* Top strip */}
            <div className="p-6 sm:p-8 border-b border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-[11px] tracking-[0.22em] text-zinc-300">
                    UNRELEASED / LIMITED
                  </p>

                  <p className="mt-2 text-sm text-zinc-400">
                    Dentro del drop encontrarás:
                    <span className="text-zinc-200">
                      {" "}
                      una preview exclusiva de “Late Again”
                    </span>{" "}
                    y un audio inédito titulado{" "}
                    <span className="text-zinc-200">
                      “No todo lo importante se queda”
                    </span>
                    .
                    <span className="block mt-2 text-zinc-400">
                      Además, acceso a{" "}
                      <span className="text-zinc-200">
                        códigos de descuento oficiales de RMC
                      </span>
                      , contenido exclusivo y otros materiales inéditos{" "}
                      <span className="text-zinc-200">
                        incluidos dentro del ZIP del drop
                      </span>
                      .
                    </span>
                  </p>

                  {/* Chips */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] tracking-[0.12em] text-zinc-200">
                      ZIP DOWNLOAD
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] tracking-[0.12em] text-zinc-200">
                      UNRELEASED CONTENT
                    </span>
                    <span className="inline-flex items-center rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[11px] tracking-[0.12em] text-zinc-200">
                      RMC ACCESS / ETC.
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center rounded-xl border border-white/10 bg-black/40 px-4 py-3">
                  <span className="text-[11px] tracking-[0.22em] text-zinc-300">
                    STATUS:
                  </span>
                  <span className="ml-2 text-[11px] tracking-[0.22em] text-zinc-200">
                    {timeLeft.isLive ? "AVAILABLE" : "LOCKED"}
                  </span>
                </div>
              </div>
            </div>

            {/* Countdown + Access */}
            <div className="p-6 sm:p-8 grid gap-6 lg:grid-cols-2">
              {/* Countdown */}
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-[11px] tracking-[0.22em] text-zinc-300">
                  COUNTDOWN
                </p>

                <div className="mt-4 grid grid-cols-4 gap-3 select-none">
                  <TimeBox label="DÍAS" value={pad(timeLeft.days)} />
                  <TimeBox label="HORAS" value={pad(timeLeft.hours)} />
                  <TimeBox label="MIN" value={pad(timeLeft.minutes)} />
                  <TimeBox label="SEG" value={pad(timeLeft.seconds)} />
                </div>

                <p className="mt-4 text-xs text-zinc-500">
                  {timeLeft.isLive
                    ? "El drop ya está disponible."
                    : "El acceso se desbloqueará cuando el contador llegue a cero."}
                </p>

                <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs text-zinc-400">
                    Nota: el drop incluye{" "}
                    <span className="text-zinc-200">preview</span>, material{" "}
                    <span className="text-zinc-200">inédito</span> y contenido exclusivo.
                    La canción completa se publica en plataformas en su fecha oficial.
                  </p>
                </div>
              </div>

              {/* Access */}
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-[11px] tracking-[0.22em] text-zinc-300">
                  ACCESS
                </p>

                <div className="mt-4 grid gap-3">
                  <label
                    htmlFor="drop-password"
                    className="text-[11px] tracking-[0.22em] text-zinc-300"
                  >
                    PASSWORD
                  </label>

                  {/* Por ahora bloqueado */}
                  <input
                    id="drop-password"
                    type="password"
                    disabled
                    placeholder="Locked"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 outline-none"
                  />

                  <button
                    type="button"
                    disabled
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[12px] tracking-[0.18em] text-zinc-400 cursor-not-allowed"
                    title="Acceso bloqueado por ahora"
                  >
                    ACCESS DENIED
                  </button>

                  <div className="pt-2 text-xs text-zinc-500">
                    Al desbloquear, podrás descargar un ZIP con{" "}
                    <span className="text-zinc-300">
                      preview, audios inéditos, códigos RMC y otros contenidos
                      exclusivos
                    </span>
                    .
                  </div>

                  {/* TODO (más adelante):
                      - Añadir input de email
                      - Validar password
                      - Mostrar botón de descarga del ZIP
                  */}
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[11px] tracking-[0.22em] text-zinc-300">
                    WHAT YOU GET
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-200/70" />
                      Preview exclusiva de “Late Again”
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-200/70" />
                      Audio inédito (“No todo lo importante se queda”)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-200/70" />
                      Códigos de descuento / accesos RMC (etc.)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-zinc-200/70" />
                      Contenido adicional exclusivo del drop (etc.)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer mini */}
            <div className="px-6 sm:px-8 pb-8">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs text-zinc-400">
                  Esto es un drop privado: acceso anticipado, material inédito y
                  contenido que no estará disponible públicamente. El contenido final
                  del ZIP puede variar.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <div className="text-2xl font-extrabold tracking-[0.06em]">{value}</div>
      <div className="mt-1 text-[10px] tracking-[0.22em] text-zinc-300">
        {label}
      </div>
    </div>
  );
}
