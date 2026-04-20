import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const wisoArbeitsrecht: Lesson = {
  slug: "wiso-arbeitsrecht",
  objectives: [
    "BBiG-Grundlagen (Ausbildungsvertrag, Probezeit, Vergütung) kennen",
    "Kündigungsfristen nach § 622 BGB wiedergeben",
    "ArbZG (Arbeitszeit, Pausen, Ruhezeit) und BUrlG anwenden",
  ],
  body: (
    <div className="prose-content">
      <h2>Ausbildung (BBiG, JArbSchG)</h2>
      <ul>
        <li>Ausbildungsvertrag <strong>schriftlich</strong> (§ 11 BBiG).</li>
        <li>Probezeit Ausbildung: <strong>1 bis 4 Monate</strong> (§ 20 BBiG).</li>
        <li>Mindestausbildungsvergütung 2026: <strong>724 €</strong> im 1. Jahr, +18 % / +35 % / +40 % in den Folgejahren (BIBB, Stand 2026).</li>
        <li>Nach Probezeit kündigt der Betrieb nur außerordentlich (§ 22 BBiG); der/die Azubi mit 4 Wochen Frist bei Berufsaufgabe.</li>
      </ul>

      <h2>Arbeitsvertrag &amp; Kündigung</h2>
      <ul>
        <li><strong>Schriftform Pflicht</strong> bei Kündigung (§ 623 BGB). E-Mail oder Fax sind unwirksam.</li>
        <li>
          Kündigungsfristen (§ 622 BGB, gestaffelt AG → AN nach Betriebszugehörigkeit):
        </li>
      </ul>
      <table>
        <thead><tr><th>Betriebszugehörigkeit</th><th>Frist (AG)</th></tr></thead>
        <tbody>
          <tr><td>Probezeit (max. 6 Monate)</td><td>2 Wochen</td></tr>
          <tr><td>bis 2 Jahre</td><td>4 Wochen zum 15. oder Monatsende</td></tr>
          <tr><td>5 Jahre</td><td>2 Monate zum Monatsende</td></tr>
          <tr><td>10 Jahre</td><td>4 Monate zum Monatsende</td></tr>
          <tr><td>20 Jahre</td><td>7 Monate zum Monatsende</td></tr>
        </tbody>
      </table>
      <p>
        Außerordentliche (fristlose) Kündigung nur aus wichtigem Grund (§ 626 BGB), innerhalb von
        2 Wochen nach Kenntnis.
      </p>

      <h2>Arbeitszeit &amp; Urlaub</h2>
      <ul>
        <li>ArbZG: max. 8 h/Tag (auf 10 h erweiterbar mit Ausgleich binnen 6 Monaten).</li>
        <li>Pause: 30 min bei &gt; 6 h, 45 min bei &gt; 9 h Arbeitszeit.</li>
        <li>Ruhezeit: 11 h zwischen zwei Arbeitstagen.</li>
        <li>BUrlG: 24 Werktage (6-Tage-Woche) = 20 Arbeitstage. JArbSchG: 30 / 27 / 25 Werktage für &lt; 16 / &lt; 17 / &lt; 18 Jahre.</li>
        <li>Mindestlohn 2026: <strong>13,90 €/h</strong>.</li>
      </ul>

      <Callout variant="tip">
        <strong>Sonderkündigungsschutz</strong>: Schwangere (MuSchG), Eltern in Elternzeit,
        Schwerbehinderte, Betriebsräte.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Form muss eine Kündigung haben?",
      options: [
        { id: "a", text: "Mündlich reicht", correct: false },
        { id: "b", text: "Textform per E-Mail", correct: false, explanation: "Textform reicht nicht." },
        { id: "c", text: "Schriftform mit eigenhändiger Unterschrift (§ 623 BGB)", correct: true },
        { id: "d", text: "Notariell", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Mindestausbildungsvergütung 2026 im 1. Jahr?",
      options: [
        { id: "a", text: "649 €", correct: false },
        { id: "b", text: "682 €", correct: false },
        { id: "c", text: "724 €", correct: true, explanation: "Seit 01.01.2026 laut BIBB." },
        { id: "d", text: "800 €", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Maximale tägliche Arbeitszeit nach ArbZG regulär?",
      options: [
        { id: "a", text: "6 Stunden", correct: false },
        { id: "b", text: "8 Stunden", correct: true, explanation: "Bis zu 10 h erweiterbar mit Ausgleich binnen 6 Monaten." },
        { id: "c", text: "10 Stunden fix", correct: false },
        { id: "d", text: "12 Stunden", correct: false },
      ],
    },
  ],
  examTips: [
    "Zahlen präzise lernen: 8 h, 11 h Ruhezeit, 6 Monate Probezeit, 4 Wochen Grundkündigungsfrist.",
    "§ 622 BGB: Fristen verlängern sich mit Betriebszugehörigkeit – aber nur in Richtung AG → AN.",
    "Bei Azubis gilt BBiG, BGB nur nachrangig.",
  ],
  related: ["wiso-sozialversicherung", "wiso-bgb", "wiso-mitbestimmung"],
};
