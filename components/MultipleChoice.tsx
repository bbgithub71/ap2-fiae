"use client";

import { useState } from "react";
import type { MultipleChoiceQuestion } from "@/lib/lesson-types";

export function MultipleChoice({ q }: { q: MultipleChoiceQuestion }) {
  const multi = q.multiple ?? q.options.filter((o) => o.correct).length > 1;
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);

  function toggle(id: string) {
    if (submitted) return;
    if (multi) {
      const next = new Set(selected);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      setSelected(next);
    } else {
      setSelected(new Set([id]));
    }
  }

  const correctIds = new Set(q.options.filter((o) => o.correct).map((o) => o.id));
  const allCorrect =
    submitted &&
    selected.size === correctIds.size &&
    [...correctIds].every((id) => selected.has(id));

  return (
    <div className="my-5 rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
      <div className="mb-3 flex items-start justify-between gap-3">
        <p className="text-sm font-medium text-zinc-100 sm:text-base">
          <span className="mr-2 inline-block rounded-md bg-white/5 px-2 py-0.5 align-middle text-[10px] uppercase tracking-wider text-zinc-400">
            {multi ? "Mehrfachauswahl" : "Eine Antwort"}
          </span>
          {q.question}
        </p>
      </div>
      <ul className="space-y-2">
        {q.options.map((o) => {
          const isSelected = selected.has(o.id);
          let state = "border-white/10 bg-white/[0.02] hover:bg-white/5";
          if (submitted) {
            if (o.correct) state = "border-emerald-400/40 bg-emerald-500/10";
            else if (isSelected) state = "border-rose-400/40 bg-rose-500/10";
            else state = "border-white/5 bg-white/[0.02] opacity-60";
          } else if (isSelected) {
            state = "border-sky-400/40 bg-sky-500/10";
          }
          return (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => toggle(o.id)}
                disabled={submitted}
                className={`flex w-full items-start gap-3 rounded-lg border px-3 py-3 text-left text-sm transition sm:py-2 ${state}`}
              >
                <span
                  className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-${
                    multi ? "md" : "full"
                  } border border-white/20 text-[10px] ${
                    isSelected ? "bg-white/20 text-white" : "text-transparent"
                  }`}
                >
                  ✓
                </span>
                <span className="flex-1">
                  <span className="text-zinc-100">{o.text}</span>
                  {submitted && o.explanation ? (
                    <span className="mt-1 block text-xs text-zinc-400">{o.explanation}</span>
                  ) : null}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-3 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-zinc-400">
          {submitted ? (
            allCorrect ? (
              <span className="text-emerald-300">✓ Richtig!</span>
            ) : (
              <span className="text-rose-300">Nicht ganz. Schau dir die Erklärungen an.</span>
            )
          ) : q.hint ? (
            <span>💡 {q.hint}</span>
          ) : null}
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {submitted ? (
            <button
              type="button"
              onClick={() => {
                setSelected(new Set());
                setSubmitted(false);
              }}
              className="min-h-[40px] rounded-md border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 active:bg-white/10 sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-xs"
            >
              Nochmal
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={selected.size === 0}
              className="min-h-[40px] rounded-md bg-sky-500/80 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400 active:bg-sky-600 disabled:opacity-40 sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-xs"
            >
              Prüfen
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
