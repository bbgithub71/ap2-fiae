import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const kontrollstrukturen: Lesson = {
  slug: "kontrollstrukturen",
  objectives: [
    "Sequenz, Verzweigung und Schleifen sicher in Pseudocode einsetzen",
    "Kopf-, fuß- und zählgesteuerte Schleifen unterscheiden",
    "break/continue und Mehrfach-Verzweigungen richtig nutzen",
  ],
  body: (
    <div className="prose-content">
      <h2>Sequenz</h2>
      <p>Anweisungen werden in der Reihenfolge abgearbeitet, in der sie stehen.</p>

      <h2>Verzweigung</h2>
      <CodeBlock lang="pseudocode">
{`WENN bedingung DANN
    // block A
SONST WENN weitereBedingung DANN
    // block B
SONST
    // block C
ENDE WENN`}
      </CodeBlock>

      <h2>switch/case (Mehrfachauswahl)</h2>
      <CodeBlock lang="pseudocode">
{`FALLUNTERSCHEIDUNG zeichen
    FALL 'A': gib "Alpha" aus
    FALL 'B': gib "Beta"  aus
    STANDARD: gib "?"     aus
ENDE FALLUNTERSCHEIDUNG`}
      </CodeBlock>

      <h2>Schleifen</h2>
      <table>
        <thead>
          <tr><th>Art</th><th>Bedingung</th><th>Min. Durchläufe</th></tr>
        </thead>
        <tbody>
          <tr><td>kopfgesteuert (WHILE)</td><td>vor</td><td>0</td></tr>
          <tr><td>fußgesteuert (DO…WHILE)</td><td>nach</td><td>1</td></tr>
          <tr><td>zählgesteuert (FOR)</td><td>fester Zähler</td><td>n</td></tr>
          <tr><td>FOR-EACH</td><td>über Elemente</td><td>abhängig</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        <InlineCode>break</InlineCode> verlässt die aktuelle Schleife, <InlineCode>continue</InlineCode>
        {" "}springt zum nächsten Durchlauf.
      </Callout>

      <h2>Zähler in Schleifen</h2>
      <CodeBlock lang="pseudocode">
{`zaehler ← 0
FÜR wert IN liste TUE
    WENN wert > 100 DANN
        zaehler ← zaehler + 1
    ENDE WENN
ENDE FÜR
GIB zaehler aus`}
      </CodeBlock>
    </div>
  ),
  exercises: [
    {
      kind: "trace",
      id: "trace-1",
      task: "Welche Ausgabe ergibt dieser Code?",
      code: `summe ← 0
FÜR i VON 1 BIS 5 TUE
    WENN i MOD 2 = 1 DANN
        summe ← summe + i
    ENDE WENN
ENDE FÜR
GIB summe aus`,
      expectedOutput: "9",
      hint: "Addiere die ungeraden Zahlen 1..5",
    },
    {
      kind: "mc",
      id: "mc-1",
      question: "Eine DO…WHILE-Schleife läuft mindestens …",
      options: [
        { id: "a", text: "0 mal", correct: false },
        { id: "b", text: "1 mal", correct: true, explanation: "Weil die Bedingung erst NACH dem Durchlauf geprüft wird." },
        { id: "c", text: "n mal", correct: false },
      ],
    },
  ],
  examTips: [
    "Abbruchbedingung UND Fortschritt (i ← i + 1) immer beide prüfen – sonst Endlosschleife.",
    "`break` sparsam einsetzen und kommentieren – Korrektor will den Pfad erkennen.",
  ],
  resources: [
    {
      kind: "video",
      title: "Kontrollstrukturen – Schleifen",
      url: "https://www.youtube.com/watch?v=sgWS9jRBX8g",
      note: "Überblick über Schleifentypen mit C-Beispielen.",
    },
    {
      kind: "page",
      title: "studyflix – If-Anweisung einfach erklärt",
      url: "https://studyflix.de/informatik/if-anweisung-220",
      source: "studyflix.de",
      note: "Verzweigungen Schritt für Schritt, mit eingebettetem Video.",
    },
  ],
  related: ["pseudocode", "rekursion", "suchen-sortieren"],
};
