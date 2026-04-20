import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const qualitaetssicherungLesson: Lesson = {
  slug: "qualitaetssicherung",
  objectives: [
    "Die Qualitätsmerkmale aus ISO/IEC 25010 benennen",
    "QS-Maßnahmen zuordnen",
    "PDCA / KVP als Verbesserungszyklus erklären",
  ],
  body: (
    <div className="prose-content">
      <h2>ISO/IEC 25010 – Produktqualitätsmerkmale</h2>
      <ul>
        <li><strong>Funktionale Eignung</strong> – Korrektheit, Angemessenheit, Vollständigkeit</li>
        <li><strong>Performance-Effizienz</strong> – Antwortzeit, Ressourcennutzung</li>
        <li><strong>Kompatibilität</strong> – Koexistenz, Interoperabilität</li>
        <li><strong>Benutzbarkeit</strong> – Erlernbarkeit, Bedienbarkeit, Ästhetik</li>
        <li><strong>Zuverlässigkeit</strong> – Verfügbarkeit, Fehlertoleranz, Wiederherstellbarkeit</li>
        <li><strong>Sicherheit</strong> – Vertraulichkeit, Integrität, Authentizität</li>
        <li><strong>Wartbarkeit</strong> – Modularität, Analysierbarkeit, Testbarkeit</li>
        <li><strong>Übertragbarkeit</strong> – Portabilität, Installierbarkeit</li>
      </ul>

      <Callout variant="tip">
        ISO 25010 löste <strong>ISO 9126</strong> ab. Die aktuelle Fassung wird von ISO 25010:2011
        referenziert, Revision 2023 ist veröffentlicht (ggf. verifizieren, welche Version die Prüfung
        zugrunde legt).
      </Callout>

      <h2>Typische QS-Maßnahmen</h2>
      <table>
        <thead><tr><th>Merkmal</th><th>Maßnahme</th></tr></thead>
        <tbody>
          <tr><td>Wartbarkeit</td><td>Refactoring, Clean Code, Reviews</td></tr>
          <tr><td>Zuverlässigkeit</td><td>Monitoring, Redundanz, Chaos Engineering</td></tr>
          <tr><td>Sicherheit</td><td>Pen-Test, OWASP-Checks, SAST/DAST</td></tr>
          <tr><td>Benutzbarkeit</td><td>Usability-Test, A/B-Test</td></tr>
          <tr><td>Funktionale Eignung</td><td>Unit- und Integrationstests</td></tr>
        </tbody>
      </table>

      <h2>KVP / PDCA-Zyklus</h2>
      <ol>
        <li><strong>Plan</strong> – Problem analysieren, Maßnahme planen.</li>
        <li><strong>Do</strong> – Maßnahme im kleinen Rahmen durchführen.</li>
        <li><strong>Check</strong> – Wirkung prüfen.</li>
        <li><strong>Act</strong> – Standardisieren oder nachjustieren.</li>
      </ol>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Merkmal gehört NICHT zu ISO 25010?",
      options: [
        { id: "a", text: "Zuverlässigkeit", correct: false },
        { id: "b", text: "Wirtschaftlichkeit", correct: true, explanation: "Keine Kategorie in ISO 25010." },
        { id: "c", text: "Wartbarkeit", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wofür steht das C in PDCA?",
      options: [
        { id: "a", text: "Create", correct: false },
        { id: "b", text: "Check", correct: true, explanation: "Wirkung der Maßnahme prüfen." },
        { id: "c", text: "Control", correct: false },
      ],
    },
  ],
  examTips: [
    "Mindestens 6 der 8 ISO-25010-Merkmale auswendig.",
    "QS ≠ Testen – Testen ist nur eine von vielen QS-Maßnahmen.",
    "PDCA-Phasen in korrekter Reihenfolge nennen können.",
  ],
  related: ["testmethoden", "teststufen", "tdd"],
};
