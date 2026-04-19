import { priorityMeta, type Priority } from "@/lib/priority";

const colorMap: Record<string, string> = {
  rose: "bg-rose-500/15 text-rose-300 ring-rose-400/40",
  orange: "bg-orange-500/15 text-orange-300 ring-orange-400/40",
  amber: "bg-amber-500/15 text-amber-200 ring-amber-400/40",
  sky: "bg-sky-500/15 text-sky-300 ring-sky-400/40",
  slate: "bg-slate-500/15 text-slate-300 ring-slate-400/40",
};

const dotMap: Record<string, string> = {
  rose: "bg-rose-400",
  orange: "bg-orange-400",
  amber: "bg-amber-300",
  sky: "bg-sky-400",
  slate: "bg-slate-400",
};

export function PriorityBadge({
  priority,
  size = "md",
  showLabel = true,
}: {
  priority: Priority;
  size?: "sm" | "md";
  showLabel?: boolean;
}) {
  const meta = priorityMeta[priority];
  const cls = colorMap[meta.color] ?? colorMap.slate;
  const dot = dotMap[meta.color] ?? dotMap.slate;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full ring-1 ring-inset ${cls} ${
        size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-xs"
      } font-medium tracking-wide`}
      title={meta.description}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden />
      {showLabel ? meta.label : null}
    </span>
  );
}

export function PriorityMeter({ priority }: { priority: Priority }) {
  const meta = priorityMeta[priority];
  const segments = 5;
  const filled = meta.weight;
  return (
    <div className="flex items-center gap-1" aria-label={`Priorität: ${meta.label}`}>
      {Array.from({ length: segments }).map((_, i) => {
        const isOn = i < filled;
        return (
          <span
            key={i}
            className={`h-1.5 w-4 rounded-full ${
              isOn ? dotMap[meta.color] ?? dotMap.slate : "bg-white/10"
            }`}
          />
        );
      })}
    </div>
  );
}
