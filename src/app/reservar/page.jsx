"use client";

import { useMemo, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HiLockClosed } from "react-icons/hi";

/* ===========================
   SERVICIOS PRINCIPALES
=========================== */
const SERVICES = [
  { id: "grabacion-mix-master", label: "Grabación + Mezcla + Master", price: 70 },
  { id: "solo-grabacion", label: "Solo grabación", price: 40 },
  { id: "videoclip-completo", label: "Videoclip (grabación + edición)", price: 120 },
  { id: "videoclip-solo-grabacion", label: "Videoclip (solo grabación)", price: 60 },
  { id: "sesion-fotos", label: "Sesión de fotos", price: 60 },
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
  const disabledInputClass = IS_LOCKED ? "opacity-60 cursor-not-allowed" : "";

  /* ===========================
     SEO: JSON-LD (informativo)
     Nota: la página está en noindex via layout.
     Aun así, dejamos estructura limpia por consistencia y futuro.
  =========================== */
  const jsonLd = useMemo(() => {
    const baseUrl = "https://realmotioncartel.com";
    const pageUrl = `${baseUrl}/reservar`;

    const offers = SERVICES.map((s) => ({
      "@type": "Offer",
      name: s.label,
      price: String(s.price),
      priceCurrency: "EUR",
      availability: IS_LOCKED
        ? "https://schema.org/PreOrder"
        : "https://schema.org/InStock",
      url: pageUrl,
    }));

    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          url: pageUrl,
          name: "Reservar servicios (temporalmente cerrado) | Real Motion Cartel",
          description:
            "Reservas online no disponibles por el momento. Para reservar estudio, videoclip o sesión de fotos, contacta con RMC por Instagram.",
          isPartOf: {
            "@type": "WebSite",
            "@id": `${baseUrl}#website`,
            url: baseUrl,
            name: "Real Motion Cartel",
          },
        },
        {
          "@type": "OfferCatalog",
          "@id": `${pageUrl}#catalog`,
          name: "Servicios — Real Motion Cartel",
          itemListElement: offers,
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          name: "Servicios creativos y producción — Real Motion Cartel",
          provider: {
            "@type": "Organization",
            name: "Real Motion Cartel",
            url: baseUrl,
          },
          areaServed: [
            { "@type": "City", name: "Madrid" },
            { "@type": "Country", name: "España" },
          ],
          offers: offers,
          url: pageUrl,
        },
      ],
    };
  }, []);

  return (
    <>
      <Navbar />

      <Script
        id="rmc-reservar-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="bg-black text-white pt-24 pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* HEADER */}
          <header className="text-center mb-8">
            <div className="inline-flex items-center justify-center rounded-2xl bg-white/10 border border-white/15 p-3 mb-4">
              <HiLockClosed className="h-7 w-7 text-zinc-100" />
            </div>

            {/* ✅ H1 único */}
            <h1 className="text-3xl sm:text-4xl font-extrabold mb-2">
              Reservar un servicio
            </h1>

            <p className="text-zinc-400 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
              Servicios de estudio, visuales y sesión de fotos bajo el estándar
              de Real Motion Cartel. Reserva online en preparación.
            </p>

            {IS_LOCKED && (
              <p className="mt-4 text-xs sm:text-sm text-amber-300/90 font-medium uppercase tracking-[0.16em]">
                Reservas online temporalmente desactivadas
              </p>
            )}

            {/* ✅ Enlazado interno */}
            <nav
              aria-label="Enlaces clave"
              className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Inicio
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Sobre RMC
              </Link>
              <Link
                href="/releases"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Releases
              </Link>
              <Link
                href="/artists"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                Artistas
              </Link>
              <Link
                href="/news"
                className="inline-flex items-center justify-center rounded-full px-6 h-11 text-sm font-medium border border-white/15 text-zinc-100 hover:bg-white/10 transition"
              >
                News
              </Link>
            </nav>
          </header>

          {/* ✅ H2: Aviso / Estado */}
          <section
            aria-labelledby="estado-reservas-title"
            className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-zinc-300 mb-8 leading-relaxed"
          >
            <h2 id="estado-reservas-title" className="text-base font-semibold text-white">
              Estado de reservas
            </h2>

            {IS_LOCKED ? (
              <>
                <p className="mt-3">
                  <strong>Por ahora no aceptamos reservas desde la web.</strong>{" "}
                  Estamos ajustando el sistema de citas y pagos para que funcione
                  de forma segura y profesional.
                </p>

                <p className="mt-3 text-zinc-400">
                  Para reservar estudio, vídeo o sesión de fotos, escríbenos por{" "}
                  <span className="font-medium text-zinc-200">
                    Instagram @realmotioncartel
                  </span>{" "}
                  y gestionamos fecha, hora y presupuesto contigo.
                </p>
              </>
            ) : (
              <>
                <p className="mt-3">
                  <strong>
                    Las reservas quedan sujetas a confirmación de disponibilidad.
                  </strong>
                </p>
                <p className="mt-3 text-zinc-400">
                  Tras la reserva, el equipo de RMC confirmará detalles y
                  posibles extras para tu sesión.
                </p>
              </>
            )}
          </section>

          {/* ✅ H2: Servicios */}
          <section aria-labelledby="servicios-title" className="mb-8">
            <h2 id="servicios-title" className="text-lg font-semibold text-white">
              Servicios disponibles
            </h2>

            <p className="mt-2 text-sm text-zinc-400">
              Grabación, mezcla/master, videoclip y sesión de fotos. Tarifas base
              orientativas (pueden variar según necesidades).
            </p>

            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <li
                  key={s.id}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h3 className="font-semibold text-white">{s.label}</h3>
                  <p className="mt-1 text-sm text-zinc-300">{s.price}€</p>
                </li>
              ))}
            </ul>
          </section>

          {/* ✅ H2: Formulario */}
          <section aria-labelledby="form-title">
            <h2 id="form-title" className="text-lg font-semibold text-white">
              Solicitud de reserva
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Formulario en preparación. Por ahora, el acceso está bloqueado y se
              gestiona por Instagram.
            </p>

            {/* FORM (VISUAL IGUAL, PERO BLOQUEADO) */}
            <div className="space-y-6 mt-6">
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

              {/* Total */}
              {selectedService && (
                <div className="text-xl font-semibold text-center mt-4">
                  Total: {selectedService.price}€
                </div>
              )}

              {/* CTA */}
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
                  <a
                    href="https://instagram.com/realmotioncartel"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-zinc-300 hover:text-white transition"
                  >
                    @realmotioncartel
                  </a>
                  .
                </p>
              )}
            </div>
          </section>

          {/* Footer mini */}
          <footer className="mt-10 text-center text-xs text-zinc-500">
            <p>© {new Date().getFullYear()} Real Motion Cartel.</p>
          </footer>
        </div>
      </main>

      <Footer />
    </>
  );
}
