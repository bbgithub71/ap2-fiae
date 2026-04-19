import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const suchenSortieren: Lesson = {
  slug: "suchen-sortieren",
  objectives: [
    "Lineare und binäre Suche implementieren und vergleichen",
    "Bubble-, Selection- und Insertion-Sort erkennen und ausführen",
    "Laufzeit in O-Notation benennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="new">
        Bubble-, Selection- und Insertion-Sort sind seit Katalog 2025 <strong>explizit gefordert</strong>.
        Im Zweifel also alle drei können.
      </Callout>

      <h2>Suche</h2>
      <h3>Lineare Suche – O(n)</h3>
      <CodeBlock lang="pseudocode">
{`FUNKTION lineareSuche(liste, ziel) → INT
    FÜR i VON 0 BIS länge(liste) - 1 TUE
        WENN liste[i] = ziel DANN GIB i zurück
    ENDE FÜR
    GIB -1 zurück
ENDE FUNKTION`}
      </CodeBlock>

      <h3>Binäre Suche – O(log n), nur auf sortierter Liste</h3>
      <CodeBlock lang="pseudocode">
{`FUNKTION binaereSuche(sortListe, ziel) → INT
    links ← 0
    rechts ← länge(sortListe) - 1
    SOLANGE links <= rechts TUE
        mitte ← (links + rechts) / 2   // Ganzzahldivision
        WENN sortListe[mitte] = ziel DANN GIB mitte zurück
        WENN sortListe[mitte] < ziel DANN links ← mitte + 1
        SONST rechts ← mitte - 1
    ENDE SOLANGE
    GIB -1 zurück
ENDE FUNKTION`}
      </CodeBlock>

      <h2>Sortieralgorithmen</h2>
      <h3>Bubble Sort – O(n²)</h3>
      <p>Vergleicht benachbarte Paare, vertauscht sie bei Bedarf. Nach jedem Durchlauf »blubbert« der größte Wert ans Ende.</p>
      <CodeBlock lang="pseudocode">
{`FÜR i VON 0 BIS n - 2 TUE
    FÜR j VON 0 BIS n - 2 - i TUE
        WENN a[j] > a[j+1] DANN tausche a[j], a[j+1]
    ENDE FÜR
ENDE FÜR`}
      </CodeBlock>

      <h3>Selection Sort – O(n²)</h3>
      <p>Findet in jedem Durchlauf das Minimum des Restes und tauscht es nach vorn.</p>
      <CodeBlock lang="pseudocode">
{`FÜR i VON 0 BIS n - 2 TUE
    minIdx ← i
    FÜR j VON i + 1 BIS n - 1 TUE
        WENN a[j] < a[minIdx] DANN minIdx ← j
    ENDE FÜR
    tausche a[i], a[minIdx]
ENDE FÜR`}
      </CodeBlock>

      <h3>Insertion Sort – O(n²), aber best case O(n)</h3>
      <p>Elementweise an die richtige Stelle in der sortierten linken Teilliste einfügen.</p>
      <CodeBlock lang="pseudocode">
{`FÜR i VON 1 BIS n - 1 TUE
    key ← a[i]
    j ← i - 1
    SOLANGE j >= 0 UND a[j] > key TUE
        a[j+1] ← a[j]
        j ← j - 1
    ENDE SOLANGE
    a[j+1] ← key
ENDE FÜR`}
      </CodeBlock>

      <h2>Laufzeit-Überblick</h2>
      <table>
        <thead>
          <tr><th>Algo</th><th>Best</th><th>Durchschn.</th><th>Worst</th><th>Stabil?</th></tr>
        </thead>
        <tbody>
          <tr><td>Bubble</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>ja</td></tr>
          <tr><td>Selection</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>nein</td></tr>
          <tr><td>Insertion</td><td>O(n)</td><td>O(n²)</td><td>O(n²)</td><td>ja</td></tr>
          <tr><td>Quicksort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>nein</td></tr>
          <tr><td>Mergesort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>ja</td></tr>
        </tbody>
      </table>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Laufzeit hat binäre Suche?",
      options: [
        { id: "a", text: "O(1)", correct: false },
        { id: "b", text: "O(log n)", correct: true },
        { id: "c", text: "O(n)", correct: false },
        { id: "d", text: "O(n log n)", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welcher Sort ist im Best Case O(n)?",
      options: [
        { id: "a", text: "Bubble Sort (ohne Optimierung)", correct: false },
        { id: "b", text: "Selection Sort", correct: false },
        { id: "c", text: "Insertion Sort", correct: true,
          explanation: "Bei bereits sortierter Eingabe wandert jedes Element sofort auf seinen Platz – n Vergleiche." },
      ],
    },
  ],
  examTips: [
    "Binäre Suche setzt sortierte Liste voraus – wichtigste Voraussetzung!",
    "O-Notation beschreibt Wachstum, nicht tatsächliche Laufzeit.",
    "»Stabil« = gleiche Werte behalten ihre Reihenfolge.",
  ],
  related: ["pseudocode", "datenstrukturen"],
};
