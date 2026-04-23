import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const nutzwertanalyse: Lesson = {
  slug: "nutzwertanalyse",
  objectives: [
    "Den Ablauf einer Nutzwertanalyse durchführen",
    "Kriterien definieren, gewichten und Alternativen bewerten",
    "Das Ergebnis als Entscheidungsgrundlage verteidigen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Nutzwertanalyse kommt gern bei „Entscheidung für / gegen X"-Aufgaben: Make or Buy,
        Software-Auswahl, Architektur-Entscheidungen.
      </Callout>

      <h2>Ablauf in 5 Schritten</h2>
      <ol>
        <li><strong>Alternativen festlegen</strong>: Welche Optionen werden verglichen? (z. B. A, B, C)</li>
        <li><strong>Kriterien definieren</strong>: Was ist wichtig? (Kosten, Qualität, Zeit, Sicherheit, …)</li>
        <li><strong>Kriterien gewichten</strong>: Prozentsätze, Summe = 100 %.</li>
        <li><strong>Alternativen bewerten</strong>: Punkte pro Kriterium (z. B. 1–10).</li>
        <li>
          <strong>Nutzwert berechnen</strong>: Nutzwert = Σ (Punkte × Gewicht). Die höchste Summe
          gewinnt.
        </li>
      </ol>

      <h2>Beispiel – Software-Auswahl</h2>
      <table>
        <thead>
          <tr><th>Kriterium</th><th>Gewicht</th><th>A: 7</th><th>B: 8</th><th>C: 5</th></tr>
        </thead>
        <tbody>
          <tr><td>Kosten</td><td>40 %</td><td>7 → 2,8</td><td>5 → 2,0</td><td>9 → 3,6</td></tr>
          <tr><td>Funktionalität</td><td>30 %</td><td>8 → 2,4</td><td>9 → 2,7</td><td>5 → 1,5</td></tr>
          <tr><td>Support</td><td>15 %</td><td>6 → 0,9</td><td>9 → 1,35</td><td>4 → 0,6</td></tr>
          <tr><td>Sicherheit</td><td>15 %</td><td>7 → 1,05</td><td>8 → 1,2</td><td>6 → 0,9</td></tr>
          <tr><td><strong>Nutzwert</strong></td><td><strong>100 %</strong></td><td><strong>7,15</strong></td><td><strong>7,25</strong></td><td><strong>6,60</strong></td></tr>
        </tbody>
      </table>
      <p>→ <strong>Alternative B gewinnt.</strong></p>

      <CodeBlock caption="Formel">
{`Nutzwert(Alternative) = Σ  (Gewicht_i × Punkte_i)

mit   Σ Gewichte = 1 (bzw. 100 %)`}
      </CodeBlock>

      <Callout variant="tip">
        <strong>Vorteil:</strong> transparente, nachvollziehbare Entscheidung. <strong>Schwäche:</strong>
        Subjektivität bei Gewichtung und Bewertung – deshalb Annahmen immer begründen.
      </Callout>

      <h2>Typische Fallstricke</h2>
      <ul>
        <li>Summe der Gewichte ≠ 100 % → Rechenfehler.</li>
        <li>Zu wenige Kriterien → Ergebnis nicht aussagekräftig.</li>
        <li>Gewichte absichtlich so wählen, dass das Wunschergebnis rauskommt (Bias).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was ergibt die Summe aller Gewichte in einer Nutzwertanalyse?",
      options: [
        { id: "a", text: "je nach Anzahl der Kriterien verschieden", correct: false },
        { id: "b", text: "immer 100 % (bzw. 1,0)", correct: true, explanation: "Damit sind alle Alternativen fair vergleichbar." },
        { id: "c", text: "immer 10", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wie berechnet man den Nutzwert einer Alternative?",
      options: [
        { id: "a", text: "Summe der Punkte", correct: false },
        { id: "b", text: "Σ (Gewicht × Punkte) über alle Kriterien", correct: true },
        { id: "c", text: "Mittelwert der Punkte", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Welche Aussage zur Nutzwertanalyse stimmt?",
      options: [
        { id: "a", text: "Sie liefert objektiv den einzig richtigen Wert.", correct: false, explanation: "Gewichtung und Punkte sind subjektiv." },
        { id: "b", text: "Sie macht Entscheidungen transparent, bleibt aber subjektiv in der Gewichtung.", correct: true },
        { id: "c", text: "Sie funktioniert nur bei maximal 2 Alternativen.", correct: false },
      ],
    },
  ],
  examTips: [
    "5 Schritte auswendig: Alternativen → Kriterien → Gewichten → Bewerten → Summe.",
    "Gewichte müssen 100 % ergeben – sofort prüfen.",
    "Annahmen bei Gewichten und Punkten immer kurz begründen, nicht kommentarlos vergeben.",
  ],
  related: ["make-or-buy", "wirtschaftlichkeitsanalyse", "projektphasen"],
  resources: [
    {
      kind: "video",
      title: "Nutzwertanalyse | einfach erklärt | Beispielaufgabe",
      url: "https://www.youtube.com/watch?v=P5E-0IsVZQg",
      channel: "wirtconomy",
      note: "Mit komplett durchgerechnetem Beispiel.",
    },
    {
      kind: "video",
      title: "Nutzwertanalyse einfach erklärt – Erklärung, Kriterien, Beispiel, Durchführung",
      url: "https://www.youtube.com/watch?v=rSL_5YOEsvE",
      note: "Alternative Erklärung mit Fokus auf die Kriterien-Gewichtung.",
    },
    {
      kind: "page",
      title: "studyflix – Nutzwertanalyse",
      url: "https://studyflix.de/wirtschaft/nutzwertanalyse-315",
      source: "studyflix.de",
      note: "Mit eingebettetem Video und Schritt-für-Schritt-Anleitung.",
    },
  ],
};
