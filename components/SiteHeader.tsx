"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/themen", label: "Themen" },
  { href: "/fokus", label: "Fokus-Lernen" },
  { href: "/pruefung", label: "Prüfungsinfo" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="flex flex-none items-center gap-2 text-sm font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 text-[11px] font-bold text-white">
            AP2
          </span>
          <span className="text-zinc-100">
            <span className="sm:hidden">Lernhub</span>
            <span className="hidden sm:inline">Lernhub Frühjahr 2026</span>
          </span>
        </Link>

        {/* Desktop search (sm+) */}
        <div className="hidden flex-1 sm:block">
          <SearchBar variant="header" />
        </div>

        {/* Desktop nav (sm+) */}
        <nav className="hidden flex-none items-center gap-1 text-sm sm:flex" aria-label="Hauptnavigation">
          {navItems.map((i) => {
            const active = i.href === "/" ? pathname === "/" : pathname?.startsWith(i.href);
            return (
              <Link
                key={i.href}
                href={i.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-1.5 transition ${
                  active
                    ? "bg-white/10 text-white"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {i.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile spacer pushes hamburger right */}
        <div className="ml-auto sm:hidden" aria-hidden />

        {/* Mobile menu toggle (< sm) */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="grid h-10 w-10 place-items-center rounded-lg text-zinc-200 hover:bg-white/5 active:bg-white/10 sm:hidden"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open ? (
        <div
          id="mobile-nav"
          className="sm:hidden fixed inset-x-0 top-[57px] z-30 border-b border-white/10 bg-zinc-950/95 backdrop-blur"
        >
          <div className="mx-auto max-w-6xl px-4 pb-2 pt-3">
            <SearchBar
              variant="modal"
              autoFocus
              onNavigate={() => setOpen(false)}
            />
          </div>
          <nav
            aria-label="Hauptnavigation mobil"
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 pb-3"
          >
            {navItems.map((i) => {
              const active = i.href === "/" ? pathname === "/" : pathname?.startsWith(i.href);
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3 py-3 text-base font-medium transition ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-zinc-200 hover:bg-white/5 active:bg-white/10"
                  }`}
                >
                  {i.label}
                </Link>
              );
            })}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
