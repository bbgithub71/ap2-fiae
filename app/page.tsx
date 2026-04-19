import Link from "next/link";
import { topics } from "@/lib/topics";
import { categories } from "@/lib/categories";
import { priorityOrder, priorityMeta } from "@/lib/priority";
import { TopicCard } from "@/components/TopicCard";

function daysUntilAP2() {
  const target = new Date("2026-04-29T00:00:00"); // Prüfungstag: Mi, 29. April 2026
  const now = new Date();
  const ms = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export default function Home() {
  const essentials = topics.filter((t) => t.priority === "essentiell");
  const hotspots = topics.filter((t) => t.priority === "sehr-hoch");
  const topPointsByTopic = [...topics]
    .filter((t) => typeof t.pointsAllTime === "number")
    .sort((a, b) => (b.pointsAllTime! - a.pointsAllTime!))
    .slice(0, 8);

  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 p-8">
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-center">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
              AP2 Frühjahr 2026 · Anwendungsentwicklung
            </p>
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              Prüfungsorientiert lernen – <span className="text-sky-300">priorisiert</span> nach dem, was wirklich drankommt.
            </h1>
            <p className="mt-4 max-w-2xl text-zinc-300">
              Alle AP2-Themen gemäß IHK-Katalog (Okt. 2024) auf einer Seite. Jedes Thema zeigt seine Prüfungs-
              relevanz nach Häufigkeit und Punktausbeute der letzten 12 Prüfungen. Mit Beispielen und kleinen
              Übungen – Multiple Choice, SQL, Pseudocode-Tracing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/fokus"
                className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-medium text-white hover:bg-sky-400"
              >
                🎯 Fokus-Lernen starten
              </Link>
              <Link
                href="/themen"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-zinc-100 hover:bg-white/10"
              >
                Alle Themen ansehen
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-black/40 p-5">
            <div className="text-xs uppercase tracking-wider text-zinc-500">Countdown</div>
            <div className="mt-1 text-5xl font-bold text-white">{daysUntilAP2()}</div>
            <div className="text-sm text-zinc-400">Tage bis Mi, 29. April 2026</div>
            <div className="mt-4 border-t border-white/10 pt-4 text-xs text-zinc-400">
              Prüfungsteile Frühjahr 2026:
              <ul className="mt-1 space-y-0.5 text-zinc-300">
                <li>• Planen eines Softwareproduktes · 90 min</li>
                <li>• Entwicklung & Algorithmen · 90 min</li>
                <li>• WiSo · 60 min (MC)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Priority legend */}
      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-400">
          So liest du die Prioritäten
        </h2>
        <div className="grid gap-2 md:grid-cols-5">
          {priorityOrder.map((p) => (
            <div key={p} className="rounded-lg border border-white/10 bg-white/[0.02] p-3 text-xs">
              <div className="flex items-center justify-between gap-2">
                <span className="font-semibold text-zinc-100">{priorityMeta[p].label}</span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                  {priorityMeta[p].short}
                </span>
              </div>
              <p className="mt-1 text-zinc-400">{priorityMeta[p].description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Muss-Wissen */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold text-white">🥇 Muss-Wissen</h2>
          <span className="text-xs text-zinc-400">
            Essentielle Themen · 100% Prüfungswahrscheinlichkeit
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {essentials.map((t) => (
            <TopicCard key={t.slug} topic={t} detailed />
          ))}
        </div>
      </section>

      {/* Hotspots */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold text-white">🔥 Hotspots</h2>
          <span className="text-xs text-zinc-400">Sehr häufig · 80–99% Prüfungswahrscheinlichkeit</span>
        </div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {hotspots.map((t) => (
            <TopicCard key={t.slug} topic={t} detailed />
          ))}
        </div>
      </section>

      {/* Punktbringer */}
      <section>
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="text-xl font-semibold text-white">🎯 Größte Punktbringer</h2>
          <span className="text-xs text-zinc-400">
            Kumulierte Punkte aus allen AP2-Prüfungen seit 2020
          </span>
        </div>
        <ol className="space-y-2">
          {topPointsByTopic.map((t, i) => (
            <li
              key={t.slug}
              className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-md bg-white/5 text-xs text-zinc-400">
                  {i + 1}
                </span>
                <Link href={`/thema/${t.slug}`} className="text-sm text-zinc-100 hover:text-white">
                  {t.title}
                </Link>
              </div>
              <span className="font-mono text-sm text-amber-200">~{t.pointsAllTime} P.</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Kategorien */}
      <section>
        <h2 className="mb-4 text-xl font-semibold text-white">Alle Themengebiete</h2>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const count = topics.filter((t) => t.category === c.id).length;
            return (
              <Link
                key={c.id}
                href={`/kategorie/${c.id}`}
                className="rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-sm font-semibold text-white">{c.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500">
                    {count} Themen
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-400">{c.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
