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
    <div className="my-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="mb-3 font-medium text-zinc-100">
        <span className="mr-2 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-emerald-300">
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
        placeholder="-- Dein SQL hier …"
        className="w-full rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-sm text-emerald-200 outline-none focus:border-sky-400/50"
      />
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div className="text-xs text-zinc-400">{ex.hint ? `💡 ${ex.hint}` : null}</div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setResult(checkSql(value, ex))}
            disabled={value.trim().length === 0}
            className="rounded-md bg-sky-500/80 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-400 disabled:opacity-40"
          >
            Prüfen
          </button>
          <button
            type="button"
            onClick={() => setShowSolution((v) => !v)}
            className="rounded-md border border-white/10 px-3 py-1.5 text-xs text-zinc-200 hover:bg-white/5"
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
