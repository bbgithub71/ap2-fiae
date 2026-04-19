import Link from "next/link";
import { notFound } from "next/navigation";
import { topicBySlug, topics } from "@/lib/topics";
import { categoryById } from "@/lib/categories";
import { priorityMeta } from "@/lib/priority";
import { PriorityBadge } from "@/components/PriorityBadge";
import { ExerciseList } from "@/components/ExerciseList";
import { Callout } from "@/components/Callout";
import { getLesson } from "@/content/lessons";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) return { title: "Thema nicht gefunden" };
  return {
    title: `${topic.title} · AP2 Lernhub`,
    description: topic.summary,
  };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = topicBySlug(slug);
  if (!topic) notFound();
  const category = categoryById(topic.category);
  const lesson = getLesson(topic.slug);
  const meta = priorityMeta[topic.priority];

  return (
    <article className="space-y-6 sm:space-y-8">
      {/* Header */}
      <header className="space-y-3">
        <nav
          aria-label="Brotkrumen-Navigation"
          className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400"
        >
          <Link href="/" className="hover:text-zinc-200">Start</Link>
          <span aria-hidden>›</span>
          <Link href={`/kategorie/${category.id}`} className="hover:text-zinc-200">
            {category.title}
          </Link>
          <span aria-hidden>›</span>
          <span className="text-zinc-300">{topic.title}</span>
        </nav>

        <div className="flex flex-wrap items-center gap-2">
          <PriorityBadge priority={topic.priority} />
          {topic.newSince2025 ? (
            <span className="rounded-md bg-violet-500/15 px-2 py-0.5 text-xs text-violet-300 ring-1 ring-inset ring-violet-400/40">
              neu im Katalog 2025
            </span>
          ) : null}
          {typeof topic.frequencyPct === "number" ? (
            <span className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
              📊 {topic.frequencyPct}% Prüfungs-Häufigkeit
            </span>
          ) : null}
          {typeof topic.pointsAllTime === "number" ? (
            <span className="rounded-md bg-amber-500/15 px-2 py-0.5 text-xs text-amber-200 ring-1 ring-inset ring-amber-400/30">
              🎯 ~{topic.pointsAllTime} Punkte kumuliert
            </span>
          ) : null}
        </div>

        <h1 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl">
          {topic.title}
        </h1>
        <p className="max-w-3xl text-base text-zinc-300 sm:text-lg">{topic.summary}</p>

        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm text-zinc-300">
          <strong className="text-zinc-100">Warum Priorität „{meta.label}"?</strong> {meta.description}
        </div>
      </header>

      {lesson ? (
        <>
          {lesson.objectives.length > 0 ? (
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-widest text-sky-400">
                Lernziele
              </h2>
              <ul className="space-y-1 text-sm text-zinc-200">
                {lesson.objectives.map((o, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-sky-400" />
                    {o}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {lesson.keyTerms && lesson.keyTerms.length > 0 ? (
            <section>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Kernbegriffe
              </h2>
              <dl className="grid gap-2 sm:grid-cols-2">
                {lesson.keyTerms.map((k) => (
                  <div
                    key={k.term}
                    className="rounded-lg border border-white/10 bg-white/[0.02] p-3"
                  >
                    <dt className="text-sm font-semibold text-zinc-100">{k.term}</dt>
                    <dd className="mt-1 text-xs text-zinc-400">{k.definition}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <section>{lesson.body}</section>

          {lesson.exercises && lesson.exercises.length > 0 ? (
            <ExerciseList items={lesson.exercises} />
          ) : null}

          {lesson.examTips && lesson.examTips.length > 0 ? (
            <Callout variant="exam" title="Prüfungs-Kurz-Checklist">
              <ul className="space-y-1">
                {lesson.examTips.map((t, i) => (
                  <li key={i}>• {t}</li>
                ))}
              </ul>
            </Callout>
          ) : null}

          {lesson.related && lesson.related.length > 0 ? (
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-400">
                Verwandte Themen
              </h2>
              <div className="flex flex-wrap gap-2">
                {lesson.related.map((slug) => {
                  const t = topicBySlug(slug);
                  if (!t) return null;
                  return (
                    <Link
                      key={slug}
                      href={`/thema/${slug}`}
                      className="rounded-lg border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/[0.06]"
                    >
                      {t.title}
                    </Link>
                  );
                })}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <FallbackLesson topic={topic} />
      )}
    </article>
  );
}

function FallbackLesson({ topic }: { topic: ReturnType<typeof topicBySlug> }) {
  if (!topic) return null;
  return (
    <section className="space-y-4">
      <Callout variant="info">
        Detaillierte Erklärung für dieses Thema ist noch in Arbeit. Hier findest du schon die
        Stichwortwolke aus dem Prüfungskatalog und eine Einordnung.
      </Callout>
      {topic.keywords && topic.keywords.length > 0 ? (
        <div>
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Stichworte
          </h2>
          <div className="flex flex-wrap gap-2">
            {topic.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <Callout variant="tip">
        <strong>Tipp:</strong> Nutze das <Link className="underline" href="/fokus">Fokus-Lernen</Link>
        {" "}für die Top-Themen nach Punktausbeute. Bei Bedarf folgen Inhalte hier Stück für Stück.
      </Callout>
    </section>
  );
}
