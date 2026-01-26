"use client";

import { useState, useEffect } from "react";
import clsx from "clsx";

const MESSAGES = [
  "ENVÍOS A TODA EUROPA",
  "ENVÍOS GRATIS POR COMPRAS SUPERIORES A 50€",
];

export default function TopAnnouncementBar() {
  const [index, setIndex] = useState(0);

  // Autoplay suave
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length);
    }, 4000);

    return () => clearInterval(id);
  }, []);

  const next = () => {
    setIndex((i) => (i + 1) % MESSAGES.length);
  };

  return (
    <div
      className={clsx(
        "fixed inset-x-0 top-0 z-[60]",
        // Accent RMC más oscuro (60% accent / 40% negro)
        "bg-[color-mix(in_srgb,var(--accent)_60%,black)] text-white"
      )}
    >
      <button
        type="button"
        onClick={next}
        aria-label="Cambiar mensaje"
        className="w-full h-9 flex items-center justify-center text-xs sm:text-sm font-semibold tracking-wide uppercase hover:opacity-90 transition"
      >
        <span>{MESSAGES[index]}</span>
      </button>
    </div>
  );
}
