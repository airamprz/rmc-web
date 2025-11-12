"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { SiInstagram } from "react-icons/si";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/artists", label: "Artistas", badge: "Nuevo" },
  { href: "/shop", label: "Shop", badge: "Nuevo" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Cierra el menú al cambiar de ruta
  useEffect(() => setOpen(false), [pathname]);

  // Bloquear scroll en móvil cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Cerrar con ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const RoundBtn = ({ children, className, ...rest }) => (
    <button
      className={clsx(
        "inline-flex h-9 w-9 items-center justify-center rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );

  const LinkItem = ({ href, label, badge }) => {
    const active = pathname === href;
    return (
      <Link
        href={href}
        className={clsx(
          "relative px-3 py-1.5 rounded-full text-sm transition-colors text-zinc-300 hover:text-white hover:bg-white/10",
          active && "text-white bg-white/10 ring-1 ring-white/10"
        )}
      >
        <span>{label}</span>
        {badge ? (
          <span className="ml-2 align-middle text-[10px] rounded-full px-1.5 py-0.5 bg-white/15 text-zinc-200">{badge}</span>
        ) : null}
        {active && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-3 right-3 -bottom-[3px] h-[2px] rounded-full opacity-90"
            style={{ background: "var(--accent)" }}
          />
        )}
      </Link>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between gap-3">
          {/* Logo */}
          <Link href="/" className="block" aria-label="Inicio">
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <Image src="/logo.png" alt="RMC" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <LinkItem {...item} />
              </li>
            ))}
          </ul>

          {/* Instagram desktop */}
          <div className="hidden md:flex items-center">
            <a
              href="https://instagram.com/realmotioncartel"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-3 h-9 text-sm text-zinc-200 hover:text-white hover:bg-white/10 transition"
              aria-label="Instagram @realmotioncartel"
              title="@realmotioncartel"
            >
              <SiInstagram size={18} />
              <span className="font-medium">@realmotioncartel</span>
            </a>
          </div>

          {/* Burger móvil */}
          <RoundBtn
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" className="opacity-90">
              {open ? (
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </RoundBtn>
        </div>

        {/* Panel móvil */}
        {open && (
          <div className="md:hidden border-t border-white/10 mt-1 bg-black/80 backdrop-blur">
            <div className="p-3 space-y-3">
              {/* Links */}
              <div className="flex flex-col gap-1.5">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                      "flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/10 transition",
                      pathname === item.href && "text-white bg-white/10 ring-1 ring-white/10"
                    )}
                  >
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="ml-auto text-[10px] rounded-full px-1.5 py-0.5 bg-white/15 text-zinc-200">{item.badge}</span>
                    ) : null}
                  </Link>
                ))}
              </div>

              {/* Instagram móvil */}
              <a
                href="https://instagram.com/realmotioncartel"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm text-zinc-100 bg-white/10 hover:bg-white/15 transition"
                aria-label="Instagram @realmotioncartel"
                title="@realmotioncartel"
                onClick={() => setOpen(false)}
              >
                <SiInstagram size={18} />
                <span className="font-medium">@realmotioncartel</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
