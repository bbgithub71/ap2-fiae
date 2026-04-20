import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const datenstrukturen: Lesson = {
  slug: "datenstrukturen",
  objectives: [
    "Array, Liste, Stack, Queue, Baum und HashMap unterscheiden",
    "Laufzeiten der Grundoperationen grob benennen",
    "Die passende Struktur für ein Szenario wählen",
  ],
  body: (
    <div className="prose-content">
      <h2>Überblick</h2>
      <table>
        <thead>
          <tr><th>Struktur</th><th>Zugriff</th><th>Suchen</th><th>Einfügen</th><th>Einsatz</th></tr>
        </thead>
        <tbody>
          <tr><td>Array</td><td>O(1)</td><td>O(n)</td><td>O(n)</td><td>fester Index, schnelle Leseoperationen</td></tr>
          <tr><td>Verkettete Liste</td><td>O(n)</td><td>O(n)</td><td>O(1) am Kopf</td><td>häufiges Einfügen/Löschen</td></tr>
          <tr><td>Stack (LIFO)</td><td>—</td><td>—</td><td>O(1)</td><td>Undo, Call-Stack, Parser</td></tr>
          <tr><td>Queue (FIFO)</td><td>—</td><td>—</td><td>O(1)</td><td>Druckerqueue, BFS</td></tr>
          <tr><td>Binärbaum (balanciert)</td><td>—</td><td>O(log n)</td><td>O(log n)</td><td>sortierte Daten, schnelles Suchen</td></tr>
          <tr><td>HashMap</td><td>—</td><td>O(1) Ø</td><td>O(1) Ø</td><td>schneller Key-Lookup</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Merke: <strong>Stack = LIFO</strong> (Last In First Out), <strong>Queue = FIFO</strong>
        (First In First Out). Nicht verwechseln.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>HashMap: O(1) nur <strong>amortisiert</strong>. Bei schlechter Hashfunktion Worst-Case O(n).</li>
        <li>Array vs. Liste: Array liest schnell, Liste fügt schnell ein.</li>
        <li>Unbalancierter Baum degeneriert zur Liste → Suche O(n).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Struktur arbeitet nach FIFO?",
      options: [
        { id: "a", text: "Stack", correct: false, explanation: "Stack ist LIFO." },
        { id: "b", text: "Queue", correct: true, explanation: "First In, First Out – Druckerqueue, BFS." },
        { id: "c", text: "HashMap", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Durchschnittliche Zugriffszeit einer HashMap (nach Key)?",
      options: [
        { id: "a", text: "O(n)", correct: false },
        { id: "b", text: "O(1)", correct: true, explanation: "Konstante Zeit über die Hashfunktion." },
        { id: "c", text: "O(log n)", correct: false },
      ],
    },
  ],
  examTips: [
    "Struktur nach Zugriffsmuster wählen: Index → Array; Key → HashMap; FIFO → Queue.",
    "Laufzeit nie präzise auswendig lernen – grob einordnen und begründen.",
    "In Szenarien-Aufgaben IMMER die Wahl begründen.",
  ],
  related: ["suchen-sortieren", "pseudocode", "generics"],
};
