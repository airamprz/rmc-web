"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { HiLockClosed } from "react-icons/hi2";

/* ===============================
   NAV CONFIG (LV-inspired)
================================ */

const nav = [
  { href: "/merch", label: "Tienda" },
  { href: "/artists", label: "Artistas" },
  { href: "/releases", label: "Releases" },
  { href: "/about", label: "RMC" },
  { href: "/reservar", label: "Servicios", locked: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  /* ---------- Side effects ---------- */
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ---------- Components ---------- */

  const NavItem = ({ href, label, locked }) => {
    const active = pathname === href;
    const disabled = locked;

    const Component = disabled ? "button" : Link;
    const props = disabled ? { type: "button" } : { href };

    return (
      <Component
        {...props}
        className={clsx(
          "relative px-3 py-2 text-sm uppercase tracking-wide transition-colors",
          disabled
            ? "cursor-not-allowed text-zinc-500"
            : "text-zinc-300 hover:text-white",
          active && !disabled && "text-white"
        )}
        aria-disabled={disabled || undefined}
        title={disabled ? "Servicios no disponibles" : undefined}
      >
        <span>{label}</span>

        {disabled && (
          <HiLockClosed
            className="inline-block ml-1 h-3.5 w-3.5 opacity-70"
            aria-hidden
          />
        )}

        {!disabled && active && (
          <span
            aria-hidden
            className="absolute left-0 right-0 -bottom-1 h-[2px]"
            style={{ background: "var(--accent)" }}
          />
        )}
      </Component>
    );
  };

  return (
    <header className="fixed inset-x-0 top-9 z-50 bg-black/80 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Inicio" className="flex items-center">
            <div className="relative h-10 w-10 md:h-12 md:w-12">
              <Image
                src="/logo.png"
                alt="Real Motion Cartel"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <li key={item.href}>
                <NavItem {...item} />
              </li>
            ))}
          </ul>

          {/* Desktop socials */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/realmotioncartel"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-zinc-300 hover:text-white transition"
            >
              <SiInstagram size={18} />
            </a>

            <a
              href="https://www.tiktok.com/@realmotioncartel"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="text-zinc-300 hover:text-white transition"
            >
              <SiTiktok size={18} />
            </a>
          </div>

          {/* Burger */}
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-zinc-300 hover:text-white transition"
          >
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M6 6l12 12M18 6L6 18"
                />
              ) : (
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  d="M3 6h18M3 12h18M3 18h18"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden bg-black/90 backdrop-blur">
            <div className="p-4 space-y-4">
              <ul className="flex flex-col gap-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    {item.locked ? (
                      <button
                        type="button"
                        className="w-full flex items-center gap-2 px-2 py-2 text-sm uppercase tracking-wide text-zinc-500 cursor-not-allowed"
                        aria-disabled
                      >
                        {item.label}
                        <HiLockClosed className="h-4 w-4 opacity-70" />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={clsx(
                          "block px-2 py-2 text-sm uppercase tracking-wide transition",
                          pathname === item.href
                            ? "text-white"
                            : "text-zinc-300 hover:text-white"
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <a
                href="https://instagram.com/realmotioncartel"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
              >
                <SiInstagram size={18} />
                <span>@realmotioncartel</span>
              </a>

              <a
                href="https://www.tiktok.com/@realmotioncartel"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
              >
                <SiTiktok size={18} />
                <span>@realmotioncartel</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
