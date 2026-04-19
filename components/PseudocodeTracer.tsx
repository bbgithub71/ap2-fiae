"use client";

import { useState } from "react";
import type { PseudocodeTrace } from "@/lib/lesson-types";

function normalize(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

export function PseudocodeTracer({ ex }: { ex: PseudocodeTrace }) {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState<null | boolean>(null);
  const [show, setShow] = useState(false);

  function check() {
    setChecked(normalize(value) === normalize(ex.expectedOutput));
  }

  return (
    <div className="my-5 rounded-xl border border-white/10 bg-white/[0.02] p-3 sm:p-4">
      <p className="mb-3 text-sm font-medium text-zinc-100 sm:text-base">
        <span className="mr-2 inline-block rounded-md bg-violet-500/10 px-2 py-0.5 align-middle text-[10px] uppercase tracking-wider text-violet-300">
          Schreibtischtest
        </span>
        {ex.task}
      </p>
      <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-[13px] text-zinc-100">
        {ex.code}
      </pre>
      <label className="mt-3 block text-xs text-zinc-400">Deine erwartete Ausgabe</label>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
        autoComplete="off"
        placeholder={"z. B.\n1\n2\n3"}
        className="mt-1 w-full rounded-lg border border-white/10 bg-black/40 p-3 font-mono text-zinc-100 outline-none focus:border-sky-400/50 sm:text-sm"
      />
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <div className="text-xs text-zinc-400">
          {checked === null ? (
            ex.hint ? (
              <span>💡 {ex.hint}</span>
            ) : null
          ) : checked ? (
            <span className="text-emerald-300">✓ Richtige Ausgabe!</span>
          ) : (
            <span className="text-rose-300">Noch nicht – trace Zeile für Zeile.</span>
          )}
        </div>
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            type="button"
            onClick={check}
            disabled={value.trim().length === 0}
            className="min-h-[40px] rounded-md bg-sky-500/80 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400 active:bg-sky-600 disabled:opacity-40 sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-xs"
          >
            Prüfen
          </button>
          <button
            type="button"
            onClick={() => setShow((v) => !v)}
            className="min-h-[40px] rounded-md border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:bg-white/5 active:bg-white/10 sm:min-h-0 sm:px-3 sm:py-1.5 sm:text-xs"
          >
            {show ? "Lösung verstecken" : "Lösung zeigen"}
          </button>
        </div>
      </div>
      {show ? (
        <pre className="mt-3 overflow-x-auto rounded-lg border border-emerald-400/20 bg-emerald-500/5 p-3 font-mono text-[13px] text-emerald-200">
          {ex.expectedOutput}
        </pre>
      ) : null}
    </div>
  );
}
