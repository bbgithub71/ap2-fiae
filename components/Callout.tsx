import type { ReactNode } from "react";

type Variant = "info" | "warn" | "tip" | "exam" | "new";

const styles: Record<Variant, { wrap: string; label: string; title: string }> = {
  info: {
    wrap: "border-sky-400/30 bg-sky-500/5",
    label: "text-sky-300",
    title: "Merke",
  },
  warn: {
    wrap: "border-rose-400/40 bg-rose-500/5",
    label: "text-rose-300",
    title: "Achtung",
  },
  tip: {
    wrap: "border-emerald-400/30 bg-emerald-500/5",
    label: "text-emerald-300",
    title: "Tipp",
  },
  exam: {
    wrap: "border-amber-400/40 bg-amber-500/5",
    label: "text-amber-200",
    title: "Prüfungshinweis",
  },
  new: {
    wrap: "border-violet-400/40 bg-violet-500/5",
    label: "text-violet-300",
    title: "Neu im Katalog 2025",
  },
};

export function Callout({
  children,
  variant = "info",
  title,
}: {
  children: ReactNode;
  variant?: Variant;
  title?: string;
}) {
  const s = styles[variant];
  return (
    <aside className={`my-5 rounded-xl border ${s.wrap} px-4 py-3 text-sm`}>
      <div className={`mb-1 text-[11px] font-semibold uppercase tracking-wider ${s.label}`}>
        {title ?? s.title}
      </div>
      <div className="text-zinc-200">{children}</div>
    </aside>
  );
}
