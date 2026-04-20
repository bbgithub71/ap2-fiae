import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const nebenlaeufigkeit: Lesson = {
  slug: "nebenlaeufigkeit",
  objectives: [
    "Synchron, asynchron, nebenläufig und parallel unterscheiden",
    "Race Condition und Deadlock erkennen",
    "Synchronisationsmechanismen benennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Grundbegriffe</h2>
      <ul>
        <li><strong>Synchron:</strong> Aufrufer wartet, bis das Ergebnis da ist.</li>
        <li><strong>Asynchron:</strong> Aufruf kehrt sofort zurück, Ergebnis später (Future/Promise).</li>
        <li><strong>Nebenläufig:</strong> logisch gleichzeitig – auch verschachtelt auf einem Kern.</li>
        <li><strong>Parallel:</strong> tatsächlich gleichzeitig auf mehreren Kernen.</li>
      </ul>

      <h2>Typische Probleme</h2>
      <ul>
        <li><strong>Race Condition:</strong> Ergebnis hängt von der zufälligen Ausführungsreihenfolge ab (ungeschützter gemeinsamer Zustand).</li>
        <li><strong>Deadlock:</strong> zwei Threads warten zyklisch aufeinander. Lösung: einheitliche Sperrreihenfolge, Timeouts.</li>
        <li><strong>Livelock / Starvation:</strong> Threads arbeiten, kommen aber nicht voran.</li>
      </ul>

      <h2>Synchronisation</h2>
      <CodeBlock lang="java" caption="synchronized schützt den kritischen Abschnitt">
{`class Zaehler {
    private int n = 0;
    public synchronized void inc() { n++; }
}`}
      </CodeBlock>

      <CodeBlock lang="ts" caption="async / await in TypeScript">
{`async function laden() {
    const res = await fetch("/api");   // nicht blockierend
    return res.json();
}`}
      </CodeBlock>

      <Callout variant="tip">
        async/await ist <em>nicht automatisch parallel</em>. Es entkoppelt nur, wann Code wartet.
        Für echte Parallelität braucht es Worker-Threads / Web Workers / Tasks.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was ist eine Race Condition?",
      options: [
        { id: "a", text: "Ein Deadlock mit 3 Threads", correct: false },
        { id: "b", text: "Fehlverhalten, weil das Ergebnis von der Ausführungsreihenfolge abhängt", correct: true, explanation: "Ungeschützter gemeinsamer Zustand." },
        { id: "c", text: "Ein Thread läuft zu schnell", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wofür steht `await` in async/await?",
      options: [
        { id: "a", text: "Startet einen neuen Thread", correct: false },
        { id: "b", text: "Wartet nicht-blockierend auf das Ergebnis eines Promise/Future", correct: true, explanation: "Der Code läuft nach Auflösung weiter, andere Tasks können laufen." },
        { id: "c", text: "Beendet den Prozess", correct: false },
      ],
    },
  ],
  examTips: [
    "Race Condition und Deadlock als klassische Probleme immer benennen können.",
    "Lösungen: Mutex/Lock, atomare Operationen, unveränderliche Daten.",
    "«Parallel» ≠ «nebenläufig» – parallel setzt Mehrkernigkeit voraus.",
  ],
  related: ["fehlerbehandlung", "typisierung-compiler", "architektur-patterns"],
};
