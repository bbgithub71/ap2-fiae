"use client";

import { useState } from "react";
import type { SqlExercise } from "@/lib/lesson-types";

type Result = {
  ok: boolean;
  reasons: string[];
};

function normalize(sql: string): string {
  return sql
    .replace(/--.*$/gm, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toRegex(p: { pattern: string; flags?: string }): RegExp {
  return new RegExp(p.pattern, p.flags ?? "");
}

function checkSql(input: string, ex: SqlExercise): Result {
  const s = normalize(input);
  const reasons: string[] = [];
  for (const p of ex.check.mustMatch) {
    const re = toRegex(p);
    if (!re.test(s)) reasons.push(`Fehlt: ${p.pattern}`);
  }
  if (ex.check.mustNotMatch) {
    for (const p of ex.check.mustNotMatch) {
      const re = toRegex(p);
      if (re.test(s)) reasons.push(`Sollte nicht vorkommen: ${p.pattern}`);
    }
  }
  return { ok: reasons.length === 0, reasons };
}

export function SqlExerciseCard({ ex }: { ex: SqlExercise }) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className="my-5 rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
      <p className="mb-3 text-sm font-medium text-zinc-100 sm:text-base">
        <span className="mr-2 inline-block rounded-md bg-emerald-500/10 px-2 py-0.5 align-middle text-[10px] uppercase tracking-wider text-emerald-300">
          SQL-Übung
        </span>
        {ex.task}
      </p>
      {ex.schema ? (
        <details className="mb-3 rounded-lg border border-white/10 bg-black/30 text-xs text-zinc-300">
          <summary className="cursor-pointer px-3 py-2 text-zinc-400">Tabellen-Schema ansehen</summary>
          <pre className="overflow-x-auto px-3 pb-3 font-mono">{ex.schema}</pre>
        </details>
      ) : null}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={5}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        placeholder="-- Dein SQL hier …"
        className="w-full rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-emerald-200 outline-none focus:border-sky-400/50 sm:text-sm"
      />
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="text-xs text-zinc-400">{ex.hint ? `💡 ${ex.hint}` : null}</div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={() => setResult(checkSql(value, ex))}
            disabled={value.trim().length === 0}
            className="min-h-[40px] rounded-md bg-sky-500/80 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400 active:bg-sky-600 disabled:opacity-40 sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-xs"
          >
            Prüfen
          </button>
          <button
            type="button"
            onClick={() => setShowSolution((v) => !v)}
            className="min-h-[40px] rounded-md border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 active:bg-white/10 sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-xs"
          >
            {showSolution ? "Lösung verstecken" : "Musterlösung"}
          </button>
        </div>
      </div>
      {result ? (
        <div className="mt-3 rounded-lg border border-white/10 p-3 text-xs">
          {result.ok ? (
            <p className="text-emerald-300">
              ✓ Sieht gut aus. (Heuristische Prüfung – Musterlösung zum Vergleich ansehen.)
            </p>
          ) : (
            <ul className="space-y-1 text-rose-300">
              {result.reasons.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          )}
        </div>
      ) : null}
      {showSolution ? (
        <pre className="mt-3 overflow-x-auto rounded-lg border border-emerald-400/20 bg-emerald-500/5 p-3 font-mono text-[13px] text-emerald-200">
          {ex.sampleSolution}
        </pre>
      ) : null}
    </div>
  );
}
