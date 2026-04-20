import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const usability: Lesson = {
  slug: "usability",
  objectives: [
    "Usability nach ISO 9241-11 (Effektivität, Effizienz, Zufriedenheit) definieren",
    "Die 7 Dialoggrundsätze aus ISO 9241-110 nennen",
    "Usability von UX abgrenzen",
  ],
  body: (
    <div className="prose-content">
      <h2>Usability vs. UX</h2>
      <ul>
        <li><strong>Usability</strong> = Gebrauchstauglichkeit (eng, objektiv messbar).</li>
        <li><strong>UX</strong> = gesamtes Nutzungserlebnis (Emotion, Kontext, vor/während/nach der Nutzung).</li>
        <li>Usability ⊂ UX – Usability ist Teilmenge der UX.</li>
      </ul>

      <h2>ISO 9241-11</h2>
      <ul>
        <li><strong>Effektivität:</strong> Ziel erreicht?</li>
        <li><strong>Effizienz:</strong> mit welchem Aufwand?</li>
        <li><strong>Zufriedenheit:</strong> wie empfindet der Nutzer es?</li>
      </ul>

      <h2>ISO 9241-110 – die 7 Dialoggrundsätze</h2>
      <ol>
        <li>Aufgabenangemessenheit</li>
        <li>Selbstbeschreibungsfähigkeit</li>
        <li>Erwartungskonformität</li>
        <li>Lernförderlichkeit</li>
        <li>Steuerbarkeit</li>
        <li>Fehlertoleranz</li>
        <li>Individualisierbarkeit</li>
      </ol>
      <p>
        Fassung 2020 ergänzt «Benutzerbindung» als weiteren Grundsatz (ggf. verifizieren, welche
        Fassung geprüft wird).
      </p>

      <h2>WCAG – Barrierefreiheit</h2>
      <p>
        Web Content Accessibility Guidelines, Prinzipien <strong>POUR</strong>: <em>Perceivable,
        Operable, Understandable, Robust.</em> In Deutschland seit 2025 per BFSG für viele digitale
        Produkte verpflichtend.
      </p>

      <Callout variant="tip">
        Typische Usability-Beispiele: Icon ohne Tooltip verletzt die Selbstbeschreibungsfähigkeit.
        Fehlendes Undo verletzt die Fehlertoleranz.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welcher Grundsatz gehört NICHT zu ISO 9241-110?",
      options: [
        { id: "a", text: "Steuerbarkeit", correct: false },
        { id: "b", text: "Wirtschaftlichkeit", correct: true, explanation: "Wirtschaftlichkeit ist kein Dialoggrundsatz." },
        { id: "c", text: "Fehlertoleranz", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Usability nach ISO 9241-11 umfasst …",
      options: [
        { id: "a", text: "Effektivität, Effizienz, Zufriedenheit", correct: true },
        { id: "b", text: "Design, Code, Test", correct: false },
        { id: "c", text: "Schnelligkeit, Schönheit, Sicherheit", correct: false },
      ],
    },
  ],
  examTips: [
    "Mindestens 5 der 7 Dialoggrundsätze nennen können.",
    "Effektivität/Effizienz/Zufriedenheit unterscheiden – Dreiklang nach ISO 9241-11.",
    "WCAG = POUR. BFSG macht Barrierefreiheit in DE ab 2025 verpflichtend.",
  ],
  related: ["praesentieren", "qualitaetssicherung"],
};
