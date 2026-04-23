import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const praesentieren: Lesson = {
  slug: "praesentieren",
  objectives: [
    "Vorbereitung, Foliengestaltung, Rhetorik und Körpersprache einsetzen",
    "Visualisierungsregeln (7x7, KISS, Kontraste) anwenden",
    "Einen strukturierten Präsentationsaufbau wählen",
  ],
  body: (
    <div className="prose-content">
      <h2>Vorbereitung</h2>
      <ul>
        <li>Zielgruppe analysieren: Vorwissen, Interessen, Erwartungen.</li>
        <li>Präsentationsziel und Kernbotschaft festlegen.</li>
        <li>Roter Faden: Einleitung → Hauptteil → Schluss.</li>
      </ul>

      <h2>Foliengestaltung</h2>
      <ul>
        <li><strong>7 × 7-Regel</strong>: maximal 7 Zeilen à 7 Wörter pro Folie.</li>
        <li>Hohe Kontraste, serifenlose Schrift ≥ 20 pt.</li>
        <li>Diagramme &gt; Text: komplexe Inhalte visualisieren.</li>
        <li>Folien unterstützen, ersetzen nicht den Vortrag – nie ablesen.</li>
      </ul>

      <h2>Rhetorik &amp; Körpersprache</h2>
      <ul>
        <li>Pausen gezielt einsetzen, Tempo variieren, keine Füllwörter («ähm»).</li>
        <li>Blickkontakt ins Publikum (nicht zur Leinwand).</li>
        <li>Aufrechte Haltung, offene Gestik, ruhige Hände.</li>
      </ul>

      <h2>Beispielaufbau AP2-Projektpräsentation (15 min)</h2>
      <table>
        <thead><tr><th>Phase</th><th>Zeit</th></tr></thead>
        <tbody>
          <tr><td>Einstieg / Problem</td><td>2 min</td></tr>
          <tr><td>Projektvorgehen</td><td>4 min</td></tr>
          <tr><td>Umsetzung / Demo</td><td>6 min</td></tr>
          <tr><td>Ergebnis / Ausblick</td><td>3 min</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Zeitmanagement ist Pflicht. Überziehen kostet Punkte. Üben mit Stoppuhr, Demo ggf. mit Fallback
        (z. B. Screenshots), falls Live-Demo abstürzt.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Die 7×7-Regel bezieht sich auf …",
      options: [
        { id: "a", text: "Übungsdauer der Präsentation", correct: false },
        { id: "b", text: "Folieninhalt (max. 7 Zeilen, 7 Wörter)", correct: true },
        { id: "c", text: "die Anzahl der Gesprächsphasen", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wohin sollte ein Vortragender schauen?",
      options: [
        { id: "a", text: "Auf die Leinwand", correct: false },
        { id: "b", text: "Ins Publikum", correct: true, explanation: "Erzeugt Kontakt und Aufmerksamkeit." },
        { id: "c", text: "Auf die Uhr", correct: false },
      ],
    },
  ],
  examTips: [
    "7×7-Regel und Blickkontakt sind Standardfragen.",
    "Live-Demos immer Fallback einplanen.",
    "Fachgespräch ≠ Präsentation – anderer Modus, anderer Fokus.",
  ],
  resources: [
    {
      kind: "page",
      title: "studyflix – Präsentationstechniken",
      url: "https://studyflix.de/jobs/karriere-tipps/praesentationstechniken-7191",
      source: "studyflix.de",
      note: "Methoden, Tipps & Beispiele mit eingebettetem Video.",
    },
    {
      kind: "page",
      title: "DGUV – Lernen & Gesundheit: Richtig präsentieren",
      url: "https://www.dguv-lug.de/berufsbildende-schulen/selbstmanagement/richtig-praesentieren/",
      source: "dguv-lug.de",
      note: "Unterrichtseinheit für Azubis, speziell für Berufsschulen.",
    },
  ],
  related: ["usability", "kundenbeziehungen"],
};
