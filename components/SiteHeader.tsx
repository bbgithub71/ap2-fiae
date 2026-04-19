import Link from "next/link";

const navItems = [
  { href: "/", label: "Start" },
  { href: "/themen", label: "Themen" },
  { href: "/fokus", label: "Fokus-Lernen" },
  { href: "/pruefung", label: "Prüfungsinfo" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-sky-500 to-violet-500 text-[11px] font-bold text-white">
            AP2
          </span>
          <span className="text-zinc-100">Lernhub Frühjahr 2026</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {navItems.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-md px-3 py-1.5 text-zinc-300 transition hover:bg-white/5 hover:text-white"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
