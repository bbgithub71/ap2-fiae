import type { Resource, VideoResource } from "@/content/lessons/_types";

function youtubeId(url: string): string | null {
  const m = url.match(/(?:v=|youtu\.be\/|\/embed\/|\/shorts\/)([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

function thumbnail(url: string): string | null {
  const id = youtubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/mqdefault.jpg` : null;
}

function VideoCard({ r }: { r: VideoResource }) {
  const thumb = thumbnail(r.url);
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-white/20 hover:bg-white/[0.05] sm:gap-4 sm:p-4"
    >
      <div className="relative aspect-video w-32 flex-none overflow-hidden rounded-lg bg-zinc-900 sm:w-40">
        {thumb ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={thumb}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center text-zinc-500">▶</div>
        )}
        <div className="absolute inset-0 grid place-items-center bg-black/30 opacity-0 transition group-hover:opacity-100">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white/90 text-zinc-900 shadow-lg">
            ▶
          </span>
        </div>
        <span className="absolute bottom-1 right-1 rounded bg-black/70 px-1 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white">
          YouTube
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-zinc-100 group-hover:text-white sm:text-base">
            {r.title}
          </h3>
          {r.channel ? (
            <p className="mt-0.5 text-xs text-zinc-400">Kanal: {r.channel}</p>
          ) : null}
        </div>
        {r.note ? <p className="mt-1 line-clamp-2 text-xs text-zinc-400">{r.note}</p> : null}
      </div>
    </a>
  );
}

function PageCard({ r }: { r: Extract<Resource, { kind: "page" }> }) {
  return (
    <a
      href={r.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 transition hover:border-white/20 hover:bg-white/[0.05] sm:p-4"
    >
      <div className="mt-0.5 grid h-10 w-10 flex-none place-items-center rounded-lg bg-gradient-to-br from-sky-500/20 to-violet-500/20 text-base">
        📄
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
          <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white sm:text-base">
            {r.title}
          </h3>
          {r.source ? (
            <span className="text-[11px] text-zinc-500">· {r.source}</span>
          ) : null}
        </div>
        {r.note ? <p className="mt-0.5 text-xs text-zinc-400">{r.note}</p> : null}
      </div>
      <span
        aria-hidden
        className="mt-1 flex-none text-zinc-500 transition group-hover:translate-x-0.5 group-hover:text-zinc-200"
      >
        ↗
      </span>
    </a>
  );
}

export function Resources({ items }: { items: Resource[] }) {
  if (!items || items.length === 0) return null;
  const videos = items.filter((r): r is VideoResource => r.kind === "video");
  const pages = items.filter((r): r is Extract<Resource, { kind: "page" }> => r.kind === "page");

  return (
    <section className="mt-8">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-400">
        Zum Weiterlernen
      </h2>
      {videos.length > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2">
          {videos.map((r) => (
            <VideoCard key={r.url} r={r} />
          ))}
        </div>
      ) : null}
      {pages.length > 0 ? (
        <div className="mt-3 grid gap-2">
          {pages.map((r) => (
            <PageCard key={r.url} r={r} />
          ))}
        </div>
      ) : null}
      <p className="mt-3 text-[11px] text-zinc-500">
        Externe Inhalte – AP2 Lernhub ist nicht für die Verfügbarkeit oder Korrektheit der verlinkten
        Seiten verantwortlich.
      </p>
    </section>
  );
}
