"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { fold, search, type SearchResult } from "@/lib/search";
import { priorityMeta } from "@/lib/priority";

interface SearchBarProps {
  /** "header" = kompaktes Inline-Suchfeld, "modal" = vollbreite Variante z. B. im Mobile-Menü */
  variant?: "header" | "modal";
  /** Wird aufgerufen, wenn ein Treffer angeklickt oder per Enter geöffnet wird (z. B. zum Schließen des Mobile-Menüs). */
  onNavigate?: () => void;
  /** Beim Mounten initial focussen (für Modal-Variante). */
  autoFocus?: boolean;
}

const FIELD_LABEL: Record<SearchResult["matchedField"], string> = {
  title: "Titel",
  keyword: "Stichwort",
  short: "Kurzform",
  summary: "Zusammenfassung",
  category: "Kategorie",
};

export function SearchBar({
  variant = "header",
  onNavigate,
  autoFocus = false,
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();

  const results = useMemo(() => search(query, { limit: 8 }), [query]);
  const tokens = useMemo(
    () => fold(query).split(" ").filter((t) => t.length >= 1),
    [query],
  );

  // Liste verändert sich → aktiven Index zurücksetzen.
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Beim Mounten Focus setzen, falls gewünscht.
  useEffect(() => {
    if (autoFocus) inputRef.current?.focus();
  }, [autoFocus]);

  // Globale Tastenkürzel: Cmd/Ctrl+K fokussiert die Suche.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const isModK =
        (e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey);
      if (isModK) {
        e.preventDefault();
        inputRef.current?.focus();
        inputRef.current?.select();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Klick außerhalb schließt das Dropdown (nur Header-Variante).
  useEffect(() => {
    if (variant !== "header") return;
    function onClick(e: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [variant]);

  const navigate = useCallback(
    (slug: string) => {
      setOpen(false);
      setQuery("");
      onNavigate?.();
      router.push(`/thema/${slug}`);
    },
    [onNavigate, router],
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (results.length === 0) return;
      setActiveIndex((i) => (i + 1) % results.length);
      setOpen(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (results.length === 0) return;
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
      setOpen(true);
    } else if (e.key === "Enter") {
      if (results.length > 0) {
        e.preventDefault();
        const r = results[Math.min(activeIndex, results.length - 1)];
        navigate(r.doc.slug);
      }
    } else if (e.key === "Escape") {
      if (open) {
        e.preventDefault();
        setOpen(false);
        inputRef.current?.blur();
      } else if (query) {
        setQuery("");
      }
    }
  };

  const showDropdown = open && query.trim().length > 0;
  const isHeader = variant === "header";

  return (
    <div
      ref={wrapperRef}
      className={
        isHeader
          ? "relative w-full max-w-xs sm:max-w-sm"
          : "relative w-full"
      }
    >
      <label className="sr-only" htmlFor={`${listboxId}-input`}>
        Themen durchsuchen
      </label>
      <div className="relative">
        <span
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
        >
          <SearchIcon className="h-4 w-4" />
        </span>
        <input
          id={`${listboxId}-input`}
          ref={inputRef}
          type="search"
          inputMode="search"
          autoComplete="off"
          spellCheck={false}
          enterKeyHint="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder={
            isHeader ? "Themen suchen…" : "Themen, Stichworte, Kategorie…"
          }
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          aria-controls={showDropdown ? listboxId : undefined}
          aria-activedescendant={
            showDropdown && results.length > 0
              ? `${listboxId}-opt-${Math.min(activeIndex, results.length - 1)}`
              : undefined
          }
          role="combobox"
          className={
            isHeader
              ? "block w-full rounded-lg border border-white/10 bg-white/[0.04] py-1.5 pl-9 pr-12 text-sm text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-sky-400/40 focus:bg-white/[0.06] focus:ring-2 focus:ring-sky-400/20"
              : "block w-full rounded-lg border border-white/10 bg-white/[0.04] py-3 pl-10 pr-10 text-base text-zinc-100 placeholder:text-zinc-500 outline-none focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20"
          }
        />
        {query ? (
          <button
            type="button"
            aria-label="Suche zurücksetzen"
            onClick={() => {
              setQuery("");
              inputRef.current?.focus();
            }}
            className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded text-zinc-400 hover:bg-white/10 hover:text-zinc-100"
          >
            ×
          </button>
        ) : isHeader ? (
          <kbd
            aria-hidden
            className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 select-none rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-zinc-400 sm:inline-block"
          >
            ⌘K
          </kbd>
        ) : null}
      </div>

      {showDropdown ? (
        <div
          className={
            isHeader
              ? "absolute left-0 right-0 z-40 mt-2 max-h-[70vh] overflow-y-auto rounded-xl border border-white/10 bg-zinc-950/95 p-1 shadow-2xl backdrop-blur sm:right-auto sm:w-[28rem]"
              : "mt-3 max-h-[60vh] overflow-y-auto rounded-xl border border-white/10 bg-zinc-950/95 p-1"
          }
        >
          {results.length === 0 ? (
            <div className="px-3 py-6 text-center text-sm text-zinc-400">
              Keine Treffer für{" "}
              <span className="text-zinc-200">„{query.trim()}"</span>.
              <div className="mt-1 text-xs text-zinc-500">
                Tipp: Anders schreiben, kürzeres Stichwort, oder{" "}
                <Link
                  href="/themen"
                  className="underline hover:text-zinc-300"
                  onClick={() => {
                    setOpen(false);
                    onNavigate?.();
                  }}
                >
                  alle Themen anzeigen
                </Link>
                .
              </div>
            </div>
          ) : (
            <ul role="listbox" id={listboxId} className="space-y-1">
              {results.map((r, i) => (
                <li key={r.doc.slug}>
                  <Link
                    id={`${listboxId}-opt-${i}`}
                    role="option"
                    aria-selected={activeIndex === i}
                    href={`/thema/${r.doc.slug}`}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                      onNavigate?.();
                    }}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`block rounded-lg px-3 py-2 transition ${
                      activeIndex === i
                        ? "bg-white/10"
                        : "hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-zinc-100">
                          {highlight(r.doc.title, tokens)}
                        </div>
                        <div className="mt-0.5 line-clamp-2 text-xs text-zinc-400">
                          {highlight(r.doc.summary, tokens)}
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[10px] uppercase tracking-wider text-zinc-500">
                          <span>{r.doc.categoryTitle}</span>
                          <span aria-hidden>·</span>
                          <span>{priorityMeta[r.doc.priority].label}</span>
                          {r.matchedField !== "title" &&
                          r.matchedField !== "summary" ? (
                            <>
                              <span aria-hidden>·</span>
                              <span className="text-zinc-400">
                                Treffer in {FIELD_LABEL[r.matchedField]}
                                {r.matchedField === "keyword"
                                  ? `: ${r.matchedText}`
                                  : ""}
                              </span>
                            </>
                          ) : null}
                        </div>
                      </div>
                      <PriorityDot priority={r.doc.priority} />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-1 flex items-center justify-between border-t border-white/10 px-3 py-2 text-[11px] text-zinc-500">
            <span>
              <kbd className="rounded border border-white/10 bg-white/5 px-1 font-mono text-[10px]">↑↓</kbd>{" "}
              wählen ·{" "}
              <kbd className="rounded border border-white/10 bg-white/5 px-1 font-mono text-[10px]">↵</kbd>{" "}
              öffnen ·{" "}
              <kbd className="rounded border border-white/10 bg-white/5 px-1 font-mono text-[10px]">Esc</kbd>{" "}
              schließen
            </span>
            <span className="hidden sm:inline">
              {results.length} Treffer
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function PriorityDot({ priority }: { priority: SearchResult["doc"]["priority"] }) {
  const color: Record<typeof priority, string> = {
    essentiell: "bg-rose-400",
    "sehr-hoch": "bg-orange-400",
    hoch: "bg-amber-400",
    mittel: "bg-sky-400",
    niedrig: "bg-zinc-500",
  };
  return (
    <span
      aria-hidden
      title={priorityMeta[priority].label}
      className={`mt-1 h-2 w-2 flex-none rounded-full ${color[priority]}`}
    />
  );
}

/**
 * Hebt alle Tokens (case-insensitive, umlaut-unabhängig) im Anzeigetext hervor.
 * Wir vergleichen am gefolteten Text, mappen aber Positionen 1:1 zurück, weil
 * `fold` nur Lowercasing + Umlaut-Ersatz macht und damit Längen verändern KÖNNTE
 * (ä → ae, ß → ss). Daher nutzen wir ein einfaches Original-Substring-Matching:
 * Sucht jedes Token im Originaltext OHNE Umlaut-Folding (case-insensitive),
 * UND zusätzlich im gefolteten Text (für Umlaut-Suche). Das ist ausreichend,
 * weil Token oft in der gleichen Form wie der Anzeigetext vorkommen.
 */
function highlight(text: string, tokens: string[]): React.ReactNode {
  if (tokens.length === 0 || !text) return text;
  const lower = text.toLowerCase();
  // Sammle alle Match-Bereiche [start, end).
  const ranges: Array<[number, number]> = [];
  for (const t of tokens) {
    if (!t) continue;
    let from = 0;
    while (from < lower.length) {
      const idx = lower.indexOf(t, from);
      if (idx === -1) break;
      ranges.push([idx, idx + t.length]);
      from = idx + Math.max(t.length, 1);
    }
  }
  if (ranges.length === 0) return text;
  // Bereiche zusammenführen.
  ranges.sort((a, b) => a[0] - b[0]);
  const merged: Array<[number, number]> = [];
  for (const r of ranges) {
    const last = merged[merged.length - 1];
    if (last && r[0] <= last[1]) last[1] = Math.max(last[1], r[1]);
    else merged.push([r[0], r[1]]);
  }
  // Erzeuge Fragmente.
  const out: React.ReactNode[] = [];
  let cursor = 0;
  for (let i = 0; i < merged.length; i++) {
    const [s, e] = merged[i];
    if (s > cursor) out.push(text.slice(cursor, s));
    out.push(
      <mark
        key={i}
        className="rounded bg-sky-400/20 px-0.5 text-sky-100"
      >
        {text.slice(s, e)}
      </mark>,
    );
    cursor = e;
  }
  if (cursor < text.length) out.push(text.slice(cursor));
  return out;
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx={11} cy={11} r={7} />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}
