import { topics } from "@/lib/topics";
import { categories } from "@/lib/categories";
import { priorityMeta, priorityOrder } from "@/lib/priority";
import { TopicCard } from "@/components/TopicCard";

export const metadata = { title: "Alle Themen · AP2 Lernhub" };

export default function AllTopicsPage() {
  const sorted = [...topics].sort((a, b) => {
    const pa = priorityMeta[a.priority].weight;
    const pb = priorityMeta[b.priority].weight;
    if (pa !== pb) return pb - pa;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-2xl font-semibold text-white">Alle Themen</h1>
        <p className="mt-1 text-sm text-zinc-400">
          {topics.length} Themen, sortiert nach Priorität. Gruppiert nach {categories.length} Gebieten.
        </p>
      </header>

      {priorityOrder.map((p) => {
        const list = sorted.filter((t) => t.priority === p);
        if (list.length === 0) return null;
        return (
          <section key={p}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-300">
                {priorityMeta[p].label}
              </h2>
              <span className="text-xs text-zinc-500">{priorityMeta[p].description}</span>
            </div>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {list.map((t) => (
                <TopicCard key={t.slug} topic={t} detailed />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
