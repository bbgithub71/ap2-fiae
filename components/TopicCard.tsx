import Link from "next/link";
import type { TopicMeta } from "@/lib/topics";
import { PriorityBadge } from "./PriorityBadge";

export function TopicCard({ topic, detailed = false }: { topic: TopicMeta; detailed?: boolean }) {
  return (
    <Link
      href={`/thema/${topic.slug}`}
      className="group block rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-zinc-100 group-hover:text-white">
            {topic.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-zinc-400">{topic.summary}</p>
        </div>
        <PriorityBadge priority={topic.priority} size="sm" />
      </div>
      {detailed ? (
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-zinc-500">
          {typeof topic.frequencyPct === "number" ? (
            <span>📊 {topic.frequencyPct}% in letzten 12 Prüfungen</span>
          ) : null}
          {typeof topic.pointsAllTime === "number" ? (
            <span>🎯 ~{topic.pointsAllTime} Punkte kumuliert</span>
          ) : null}
          {topic.newSince2025 ? (
            <span className="rounded-md bg-violet-500/15 px-1.5 py-0.5 text-violet-300">neu 2025</span>
          ) : null}
        </div>
      ) : null}
    </Link>
  );
}
