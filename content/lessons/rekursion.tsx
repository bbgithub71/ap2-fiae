import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const rekursion: Lesson = {
  slug: "rekursion",
  objectives: [
    "Basisfall und Rekursionsschritt identifizieren",
    "Eine rekursive Methode tracen",
    "Laufzeit und Speicherverhalten iterativ vs. rekursiv einschätzen",
  ],
  body: (
    <div className="prose-content">
      <h2>Prinzip</h2>
      <p>
        Eine Funktion löst ein Problem, indem sie sich selbst mit einem <em>kleineren</em> Problem
        aufruft. Jeder Aufruf belegt einen eigenen Stackframe. Ohne Basisfall wächst der Stack
        unbegrenzt → <strong>StackOverflowError</strong>.
      </p>
      <ul>
        <li><strong>Basisfall</strong>: Abbruchbedingung, liefert ohne weiteren Aufruf ein Ergebnis.</li>
        <li><strong>Rekursionsschritt</strong>: löst das Problem durch einen kleineren Teilaufruf.</li>
        <li><strong>Endrekursion</strong> (tail call): letzter Ausdruck ist der Selbstaufruf – theoretisch optimierbar (Java tut es nicht).</li>
      </ul>

      <h2>Beispiele</h2>
      <CodeBlock lang="pseudocode" caption="Fakultät">
{`FUNKTION fak(n) → INT
    WENN n <= 1 DANN GIB 1 zurück     // Basisfall
    GIB n * fak(n - 1) zurück          // Rekursionsschritt
ENDE FUNKTION

// Trace fak(3) = 3 * fak(2) = 3 * 2 * fak(1) = 3 * 2 * 1 = 6`}
      </CodeBlock>
      <CodeBlock lang="pseudocode" caption="Fibonacci (naiv, O(2^n))">
{`FUNKTION fib(n) → INT
    WENN n < 2 DANN GIB n zurück
    GIB fib(n - 1) + fib(n - 2) zurück
ENDE FUNKTION`}
      </CodeBlock>

      <Callout variant="warn">
        Naiver Fibonacci ist exponentiell – für n &gt; 40 schon sehr langsam. Abhilfe: iterativ oder
        Memoisierung.
      </Callout>

      <h2>Iterativ vs. rekursiv</h2>
      <ul>
        <li>Rekursiv: eleganter Code für rekursive Strukturen (Bäume, Dateisysteme).</li>
        <li>Iterativ: weniger Speicher, meist schneller.</li>
        <li>Endrekursive Algorithmen lassen sich immer iterativ umschreiben.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "trace",
      id: "trace-1",
      task: "Welche Ausgabe erzeugt fak(4)?",
      code: `FUNKTION fak(n)
    WENN n <= 1 DANN GIB 1 zurück
    GIB n * fak(n - 1) zurück
ENDE FUNKTION

GIB fak(4) aus`,
      expectedOutput: "24",
      hint: "4 * 3 * 2 * 1 = ?",
    },
    {
      kind: "mc",
      id: "mc-1",
      question: "Was passiert ohne Basisfall?",
      options: [
        { id: "a", text: "NullPointerException", correct: false },
        { id: "b", text: "StackOverflowError", correct: true, explanation: "Unendliche Aufrufe füllen den Call-Stack." },
        { id: "c", text: "Kompilierfehler", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Laufzeit des naiven fib(n)?",
      options: [
        { id: "a", text: "O(n)", correct: false },
        { id: "b", text: "O(2^n)", correct: true, explanation: "Exponentiell durch doppelte Teilaufrufe." },
        { id: "c", text: "O(log n)", correct: false },
      ],
    },
  ],
  examTips: [
    "Basisfall immer ZUERST im Code prüfen.",
    "Bei Fibonacci auf O(2^n) naiv vs. O(n) iterativ/memoisiert hinweisen.",
    "Jeder rekursive Algorithmus hat eine iterative Variante.",
  ],
  resources: [
    {
      kind: "video",
      title: "Rekursion in JavaScript – Fakultät und Fibonacci schrittweise erklärt",
      url: "https://www.youtube.com/watch?v=f54PSMjYa5w",
      note: "Klassische Rekursions-Beispiele Schritt für Schritt.",
    },
    {
      kind: "video",
      title: "C Programmieren – Rekursion, Fibonacci-Folge",
      url: "https://www.youtube.com/watch?v=d9IA2a9B2us",
      note: "Alternative Sprache, gut für den Quervergleich.",
    },
  ],
  related: ["pseudocode", "kontrollstrukturen", "suchen-sortieren"],
};
