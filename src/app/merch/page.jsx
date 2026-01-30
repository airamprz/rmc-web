"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import Navbar from "@/components/Navbar";

const PRODUCT = {
  id: "rmc-drop-01-tee",
  name: "RMC DROP 01 – T-Shirt",
  description:
    "DROP 01 de Real Motion Cartel. Edición limitada. Producción cuidada.",
  priceMain: "33 €",
  priceNoteMain: "Envío nacional incluido",
  priceNoteSecondary: "Recogida en Madrid disponible · 25 €",
  images: {
    black: "/merch/merch1.png",
    white: "/merch/merch2.png",
  },
  colors: [
    { key: "black", label: "Black" },
    { key: "white", label: "White" },
  ],
  sizes: ["S", "M", "L", "XL"],
};

export default function MerchPage() {
  const [color, setColor] = useState("black");
  const [size, setSize] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPriceInfo, setShowPriceInfo] = useState(false);

  const productImage = useMemo(
    () => PRODUCT.images[color],
    [color]
  );

  async function handleCheckout() {
    if (!size) {
      setError("Selecciona una talla.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          color,
          size,
          quantity: 1,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      window.location.href = data.url;
    } catch (err) {
      setError(err.message || "Error al iniciar el pago.");
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <Script
        id="rmc-merch-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: PRODUCT.name,
            description: PRODUCT.description,
          }),
        }}
      />

      <main className="min-h-screen bg-black text-white">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-20">
          {/* HEADER */}
          <header className="mb-20 max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Real Motion Cartel
            </p>

            <h1 className="text-4xl sm:text-5xl font-semibold">
              DROP 01
            </h1>

            <p className="text-zinc-300">
              El primer lanzamiento oficial de Real Motion Cartel.
              Una pieza concebida como extensión del universo RMC.
            </p>
          </header>

          {/* PRODUCT */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="relative aspect-square w-full">
              <Image
                src={productImage}
                alt={`${PRODUCT.name} ${color}`}
                fill
                priority
                className="object-cover rounded-3xl border border-white/10"
              />
            </div>

            {/* INFO */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold">
                  {PRODUCT.name}
                </h2>

                <p className="mt-2 text-zinc-300 max-w-md">
                  {PRODUCT.description}
                </p>

                {/* PRICE */}
                <div className="mt-4 space-y-1">
                  <p className="text-3xl font-semibold">
                    {PRODUCT.priceMain}
                  </p>
                  <p className="text-sm text-zinc-300">
                    {PRODUCT.priceNoteMain}
                  </p>
                  <p className="text-xs text-zinc-500">
                    {PRODUCT.priceNoteSecondary}
                  </p>

                  <button
                    onClick={() => setShowPriceInfo(true)}
                    className="mt-1 text-xs text-zinc-400 underline hover:text-white transition"
                  >
                    Ver información de precio
                  </button>
                </div>
              </div>

              {/* COLOR */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Color
                </p>
                <div className="flex gap-3">
                  {PRODUCT.colors.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => setColor(c.key)}
                      className={`h-10 px-4 rounded-full text-sm border transition ${
                        color === c.key
                          ? "border-white text-white"
                          : "border-white/10 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* SIZE */}
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-zinc-500">
                  Talla
                </p>
                <div className="flex gap-3 flex-wrap">
                  {PRODUCT.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`h-10 w-10 rounded-full text-sm border transition ${
                        size === s
                          ? "border-white text-white"
                          : "border-white/10 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* ERROR */}
              {error && (
                <p className="text-sm text-red-400">{error}</p>
              )}

              {/* CTA */}
              <button
                onClick={handleCheckout}
                disabled={!size || loading}
                className={`h-12 px-10 rounded-full text-sm font-medium transition ${
                  size && !loading
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "border border-white/10 bg-white/5 text-zinc-500 cursor-not-allowed"
                }`}
              >
                {loading ? "Redirigiendo…" : "Comprar"}
              </button>

              <p className="text-xs text-zinc-500 max-w-md">
                La selección de color y talla queda registrada en tu pedido.
              </p>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="pt-20 text-center text-xs text-zinc-500">
            © {new Date().getFullYear()} Real Motion Cartel
          </footer>
        </div>
      </main>

      {/* PRICE INFO MODAL */}
      {showPriceInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black p-6 text-white">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">
                Información de precio
              </h3>

              <p className="text-sm text-zinc-300">
                El precio base de la camiseta es de <strong>25 €</strong>.
              </p>

              <p className="text-sm text-zinc-300">
                Para pedidos con envío nacional, el precio final es de{" "}
                <strong>33 €</strong>, incluyendo gastos de envío.
              </p>

              <p className="text-sm text-zinc-300">
                Si te encuentras en Madrid, la entrega puede realizarse
                en mano por <strong>25 €</strong>.
              </p>

              <p className="text-sm text-zinc-300">
                En caso de entrega en Madrid, los <strong>8 € correspondientes
                al envío se reembolsan automáticamente</strong> al mismo método
                de pago utilizado en la compra.
              </p>

              <p className="text-xs text-zinc-500">
                El importe mostrado en el checkout corresponde al precio
                final con envío.
              </p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowPriceInfo(false)}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:text-white transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
