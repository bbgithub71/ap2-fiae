import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const unitTestsCoverage: Lesson = {
  slug: "unit-tests-coverage",
  objectives: [
    "Die Coverage-Stufen C0, C1, C2 unterscheiden",
    "Anzahl notwendiger Testfälle aus einem Kontrollflussdiagramm bestimmen",
    "Äquivalenzklassen und Grenzwertanalyse anwenden",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Eine Rechenaufgabe: »Wie viele Testfälle braucht es, um 100 % Zweigabdeckung zu erreichen?«
        lernt man am besten mit Papier und Stift.
      </Callout>

      <h2>Coverage-Stufen</h2>
      <ul>
        <li><strong>C0 – Statement Coverage:</strong> jede Anweisung mindestens 1× ausgeführt.</li>
        <li><strong>C1 – Branch Coverage:</strong> jede Verzweigung einmal true und einmal false.</li>
        <li><strong>C2 – Path Coverage:</strong> jeder mögliche Pfad durch den Code.</li>
        <li><strong>Condition Coverage:</strong> jede Einzelbedingung true/false (bei zusammengesetzten Bedingungen).</li>
      </ul>

      <h2>Beispiel</h2>
      <CodeBlock lang="pseudocode">
{`FUNKTION rabatt(betrag, stammkunde)
    r ← 0
    WENN betrag > 100 DANN r ← 5
    WENN stammkunde DANN r ← r + 10
    GIB r zurück
ENDE FUNKTION`}
      </CodeBlock>
      <table>
        <thead>
          <tr><th>Kombination</th><th>betrag &gt; 100</th><th>stammkunde</th><th>r</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>false</td><td>false</td><td>0</td></tr>
          <tr><td>2</td><td>true</td><td>false</td><td>5</td></tr>
          <tr><td>3</td><td>false</td><td>true</td><td>10</td></tr>
          <tr><td>4</td><td>true</td><td>true</td><td>15</td></tr>
        </tbody>
      </table>
      <p>
        Für 100 % C1 reichen 2 geschickt gewählte Testfälle (z. B. 1 und 4). Für 100 % C2 braucht es
        alle 4.
      </p>

      <h2>Black-Box: Äquivalenzklassen + Grenzwerte</h2>
      <p>
        Eingaben in <strong>Äquivalenzklassen</strong> partitionieren (Werte mit gleichem erwarteten
        Verhalten). Pro Klasse mindestens einen Testfall. Dann <strong>Grenzwerte</strong> der Klassen
        zusätzlich.
      </p>
      <CodeBlock>
{`Beispiel: Alter muss 18-99 sein.
 - gültige Klasse: 18..99    → Testwerte 18, 42, 99 (inkl. Grenzen)
 - ungültig niedrig: <18     → -1, 17
 - ungültig hoch: >99        → 100`}
      </CodeBlock>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wie viele Testfälle braucht es für 100 % Branch Coverage im Rabatt-Beispiel oben?",
      options: [
        { id: "a", text: "1", correct: false },
        { id: "b", text: "2", correct: true,
          explanation: "z. B. (false, false) und (true, true) decken beide Branches in true UND false ab." },
        { id: "c", text: "3", correct: false },
        { id: "d", text: "4", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was ist der Unterschied zwischen C1 und C2?",
      options: [
        { id: "a", text: "C2 deckt alle Anweisungen ab, C1 nur Zweige.", correct: false },
        { id: "b", text: "C2 fordert alle möglichen Pfade, C1 nur alle Zweige.", correct: true },
        { id: "c", text: "C1 und C2 sind äquivalent.", correct: false },
      ],
    },
  ],
  examTips: [
    "Zwischenschritt: Kontrollflussdiagramm zeichnen – dann fällt die Rechnung leichter.",
    "Für C1 = 2 × Anzahl Verzweigungen als Obergrenze.",
    "Grenzwerte sind berühmt dafür, Bugs zu finden – in der Prüfung immer mit angeben.",
  ],
  related: ["testmethoden", "teststufen", "tdd"],
};
