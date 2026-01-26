"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Navbar from "@/components/Navbar";

/* ===============================
   DATA
================================ */

const DROP_DATE = "2026-01-30T21:00:00+01:00";

const product = {
  id: "rmc-first-drop",
  name: "RMC · First Drop",
  image: "/merch/merch1.png",
  description:
    "Primer drop oficial de Real Motion Cartel. Unidades ilimitadas. Producción cuidada. Diseño alineado con el ADN del movimiento.",
};

/* ===============================
   COUNTDOWN HOOK (JSX safe)
================================ */

function useCountdown(targetDate) {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTime(null);
        return false;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });

      return true;
    };

    // first paint immediately (no 1s delay)
    tick();

    const interval = setInterval(() => {
      const keepGoing = tick();
      if (!keepGoing) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return time;
}

/* ===============================
   PAGE
================================ */

export default function MerchPage() {
  const countdown = useCountdown(DROP_DATE);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Merch oficial | Real Motion Cartel",
    url: "https://realmotioncartel.com/merch",
    description:
      "Drop oficial de merch de Real Motion Cartel. Piezas limitadas como extensión del universo RMC.",
    isPartOf: {
      "@type": "WebSite",
      name: "Real Motion Cartel",
      url: "https://realmotioncartel.com",
    },
  };

  return (
    <>
      <Navbar />

      <Script
        id="rmc-merch-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative min-h-screen bg-black text-white">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex justify-center">
          <div className="mt-32 h-72 w-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-20 space-y-24">
          {/* ===============================
              HEADER
          =============================== */}
          <header className="space-y-6 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Real Motion Cartel
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              First Drop
            </h1>

            <p className="text-base sm:text-lg text-zinc-300">
              El primer lanzamiento oficial de Real Motion Cartel. Una
              edición limitada concebida como parte del universo RMC.
            </p>

            <div className="flex gap-4 pt-2">
              <Link
                href="/about"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Sobre RMC
              </Link>

              <Link
                href="https://www.instagram.com/realmotioncartel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-400 hover:text-white transition"
              >
                Instagram
              </Link>
            </div>
          </header>

          {/* ===============================
              COUNTDOWN
          =============================== */}
          {countdown ? (
            <section className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Lanzamiento
              </p>

              <div className="mt-6 grid grid-cols-4 gap-4">
                {[
                  { label: "Días", value: countdown.days },
                  { label: "Horas", value: countdown.hours },
                  { label: "Min", value: countdown.minutes },
                  { label: "Seg", value: countdown.seconds },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-white/10 rounded-2xl bg-white/[0.03] py-5 text-center"
                  >
                    <div className="text-3xl font-semibold">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs text-zinc-500">
                30 de enero de 2026 · 21:00 (hora peninsular)
              </p>
            </section>
          ) : (
            <section className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                Lanzamiento
              </p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-sm text-zinc-300">
                  El drop ya está activo.
                </p>
              </div>
            </section>
          )}

          {/* ===============================
              PRODUCT
          =============================== */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-3xl border border-white/10"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold">
                {product.name}
              </h2>

              <p className="text-zinc-300 max-w-md">{product.description}</p>

              <p className="text-xs text-zinc-500 max-w-md">
                No hay preventa. El acceso se habilitará en el momento del
                lanzamiento a través de los canales oficiales.
              </p>

              <button
                disabled
                className="mt-4 inline-flex items-center justify-center rounded-full px-8 h-12 text-sm font-medium border border-white/10 bg-white/5 text-zinc-500 cursor-not-allowed"
              >
                Disponible próximamente
              </button>
            </div>
          </section>

          {/* ===============================
              FOOTER
          =============================== */}
          <footer className="pt-12 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Real Motion Cartel
          </footer>
        </div>
      </main>
    </>
  );
}
