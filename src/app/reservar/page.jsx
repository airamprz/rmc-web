"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HiLockClosed } from "react-icons/hi2";

/* ===========================
   SERVICIOS PRINCIPALES
=========================== */
const SERVICES = [
  {
    id: "grabacion-mix-master",
    label: "Grabación + Mezcla + Master",
    price: 70,
  },
  {
    id: "solo-grabacion",
    label: "Solo grabación",
    price: 40,
  },
  {
    id: "videoclip-completo",
    label: "Videoclip (grabación + edición)",
    price: 120,
  },
  {
    id: "videoclip-solo-grabacion",
    label: "Videoclip (solo grabación)",
    price: 60,
  },
  {
    id: "sesion-fotos",
    label: "Sesión de fotos",
    price: 60,
  },
];

/* ===========================
   PAYMENT LINKS (luego los rellenamos)
=========================== */
const PAYMENT_LINKS = {
  "grabacion-mix-master": "",
  "solo-grabacion": "",
  "videoclip-completo": "",
  "videoclip-solo-grabacion": "",
  "sesion-fotos": "",
};

// 🔒 Flag global de bloqueo
const IS_LOCKED = true;

export default function ReservarPage() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const selectedService = SERVICES.find((s) => s.id === service);

  const handleReserve = () => {
    if (IS_LOCKED) {
      alert(
        "Las reservas online todavía no están disponibles.\n\nEscríbenos por Instagram (@realmotioncartel) para gestionar tu sesión."
      );
      return;
    }

    if (!service || !date || !time || !name || !contact) {
      alert("Completa todos los campos antes de continuar.");
      return;
    }

    const link = PAYMENT_LINKS[service];
    if (!link) {
      alert(
        "El pago aún no está configurado para este servicio. Pronto estará disponible."
      );
      return;
    }

    // Redirigir a Stripe
    window.location.href = link;
  };

  // clases extra cuando está bloqueado
  const disabledInputClass = IS_LOCKED
    ? "opacity-60 cursor-not-allowed"
    : "";
  const disabledMainTextClass = IS_LOCKED ? "text-zinc-400" : "";

  return (
    <>
      <Navbar />

      <main className="bg-black text-white pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* HEADER */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-3 mb-4">
              <HiLockClosed className="h-7 w-7 text-zinc-100" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
              Reservar un servicio
            </h1>

            {IS_LOCKED && (
              <p className="text-xs sm:text-sm text-amber-300/90 font-medium uppercase tracking-[0.16em]">
                Reservas online temporalmente desactivadas
              </p>
            )}
          </div>

          {/* AVISOS IMPORTANTES */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-zinc-300 mb-8 leading-relaxed">
            {IS_LOCKED ? (
              <>
                <p className="mb-2">
                  ⚠️ <strong>Por ahora no aceptamos reservas desde la web.</strong>
                </p>
                <p className="mb-2">
                  Estamos ajustando el sistema de citas y pagos para que todo
                  funcione de forma segura y profesional.
                </p>
                <p className="mt-2 text-zinc-400">
                  Si quieres reservar estudio, vídeo o sesión de fotos,
                  escríbenos directamente por Instagram{" "}
                  <span className="font-medium text-zinc-200">
                    @realmotioncartel
                  </span>{" "}
                  y gestionamos la fecha, la hora y el presupuesto contigo.
                </p>
              </>
            ) : (
              <>
                <p className="mb-2">
                  ⚠️{" "}
                  <strong>
                    Las reservas quedan sujetas a confirmación de
                    disponibilidad.
                  </strong>
                </p>
                <p className="mb-2">
                  Si el horario elegido está ocupado, nos pondremos en contacto
                  contigo inmediatamente para ajustar la cita.
                </p>
                <p className="mt-2 text-zinc-400">
                  Tras hacer la reserva, el equipo de RMC se pondrá en contacto
                  contigo para confirmar detalles, revisar posibles extras y
                  asegurar que todo esté listo para tu sesión.
                </p>
              </>
            )}
          </div>

          {/* FORMULARIO (VISUAL IGUAL, PERO BLOQUEADO) */}
          <div className={clsx("space-y-6", disabledMainTextClass)}>
            {/* Servicio */}
            <div>
              <label className="block mb-2 font-medium">Servicio</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`w-full bg-white text-black border border-white/10 rounded-xl px-4 py-3 text-sm ${disabledInputClass}`}
                disabled={IS_LOCKED}
              >
                <option value="">Selecciona un servicio</option>
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label} — {s.price}€
                  </option>
                ))}
              </select>
            </div>

            {/* Fecha */}
            <div>
              <label className="block mb-2 font-medium">Fecha</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 ${disabledInputClass}`}
                disabled={IS_LOCKED}
              />
            </div>

            {/* Hora */}
            <div>
              <label className="block mb-2 font-medium">Hora</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 ${disabledInputClass}`}
                disabled={IS_LOCKED}
              />
            </div>

            {/* Nombre */}
            <div>
              <label className="block mb-2 font-medium">Tu nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre o nombre artístico"
                className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 ${disabledInputClass}`}
                disabled={IS_LOCKED}
              />
            </div>

            {/* Contacto */}
            <div>
              <label className="block mb-2 font-medium">Forma de contacto</label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Instagram o número de teléfono"
                className={`w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 ${disabledInputClass}`}
                disabled={IS_LOCKED}
              />
            </div>

            {/* Total a pagar */}
            {selectedService && (
              <div className="text-xl font-semibold text-center mt-4">
                Total: {selectedService.price}€
              </div>
            )}

            {/* Botón de reserva */}
            <button
              onClick={handleReserve}
              disabled={IS_LOCKED}
              className={`w-full py-3 rounded-xl font-semibold mt-4 transition ${
                IS_LOCKED
                  ? "bg-white/40 text-black/60 cursor-not-allowed"
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
            >
              {IS_LOCKED ? "Reservas online no disponibles" : "Confirmar y pagar"}
            </button>

            {IS_LOCKED && (
              <p className="text-xs text-zinc-500 text-center mt-2">
                Para reservar, contáctanos por Instagram:{" "}
                <span className="font-medium text-zinc-300">
                  @realmotioncartel
                </span>
                .
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
