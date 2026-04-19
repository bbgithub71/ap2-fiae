import type { ReactNode } from "react";

export function CodeBlock({
  children,
  lang,
  caption,
}: {
  children: ReactNode;
  lang?: string;
  caption?: string;
}) {
  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-white/10 bg-zinc-950/60">
      {lang ? (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-400">
          <span>{lang}</span>
          {caption ? <span className="normal-case tracking-normal text-zinc-500">{caption}</span> : null}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-zinc-100">
        <code>{children}</code>
      </pre>
    </figure>
  );
}

export function InlineCode({ children }: { children: ReactNode }) {
  return (
    <code className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[0.85em] text-amber-200">
      {children}
    </code>
  );
}
