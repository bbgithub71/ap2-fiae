import { notFound } from "next/navigation";
import { categories, categoryById, type CategoryId } from "@/lib/categories";
import { topics } from "@/lib/topics";
import { priorityMeta } from "@/lib/priority";
import { TopicCard } from "@/components/TopicCard";

export function generateStaticParams() {
  return categories.map((c) => ({ id: c.id }));
}

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cat = categories.find((c) => c.id === id);
  if (!cat) notFound();
  const category = categoryById(cat.id as CategoryId);
  const list = [...topics]
    .filter((t) => t.category === category.id)
    .sort(
      (a, b) =>
        priorityMeta[b.priority].weight - priorityMeta[a.priority].weight ||
        a.title.localeCompare(b.title),
    );

  return (
    <div className="space-y-8">
      <header>
        <p className="text-xs uppercase tracking-widest text-sky-400">Themengebiet</p>
        <h1 className="mt-1 text-2xl font-semibold text-white">{category.title}</h1>
        <p className="mt-1 max-w-3xl text-sm text-zinc-400">{category.description}</p>
      </header>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <TopicCard key={t.slug} topic={t} detailed />
        ))}
      </div>
    </div>
  );
}
