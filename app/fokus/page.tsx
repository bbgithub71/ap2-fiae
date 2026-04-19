import Link from "next/link";
import { topics } from "@/lib/topics";
import { priorityMeta } from "@/lib/priority";
import { PriorityBadge } from "@/components/PriorityBadge";

export const metadata = { title: "Fokus-Lernen · AP2 Lernhub" };

export default function FokusPage() {
  const focus = [...topics]
    .filter((t) => t.priority === "essentiell" || t.priority === "sehr-hoch" || t.priority === "hoch")
    .sort(
      (a, b) =>
        priorityMeta[b.priority].weight - priorityMeta[a.priority].weight ||
        (b.pointsAllTime ?? 0) - (a.pointsAllTime ?? 0) ||
        (b.frequencyPct ?? 0) - (a.frequencyPct ?? 0),
    );

  return (
    <div className="space-y-8">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-sky-400">Fokus-Modus</p>
        <h1 className="mt-1 text-3xl font-semibold text-white">
          Die {focus.length} wichtigsten Themen für die AP2
        </h1>
        <p className="mt-3 text-zinc-300">
          Statistisch fast garantiert. Wenn deine Lernzeit knapp ist – hier ansetzen. Diese Themen
          machen den Löwenanteil der AP2-Punkte aus.
        </p>
      </header>

      <ol className="space-y-2">
        {focus.map((t, i) => (
          <li
            key={t.slug}
            className="rounded-xl border border-white/10 bg-white/[0.02] transition hover:border-white/20"
          >
            <Link
              href={`/thema/${t.slug}`}
              className="flex items-start gap-4 p-4"
            >
              <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-lg bg-gradient-to-br from-sky-500/30 to-violet-500/30 font-mono text-sm text-white">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">{t.title}</h3>
                  <PriorityBadge priority={t.priority} size="sm" />
                  {t.newSince2025 ? (
                    <span className="rounded-md bg-violet-500/15 px-1.5 py-0.5 text-[10px] text-violet-300">
                      neu 2025
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-xs text-zinc-400">{t.summary}</p>
                <div className="mt-2 flex flex-wrap gap-3 text-[11px] text-zinc-500">
                  {typeof t.frequencyPct === "number" ? (
                    <span>📊 {t.frequencyPct}% Häufigkeit</span>
                  ) : null}
                  {typeof t.pointsAllTime === "number" ? (
                    <span>🎯 ~{t.pointsAllTime} P. kumuliert</span>
                  ) : null}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
