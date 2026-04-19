import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const scrum: Lesson = {
  slug: "scrum",
  objectives: [
    "Scrum-Rollen, -Artefakte und -Events auswendig benennen",
    "Den Scrum-Ablauf in einem Sprint beschreiben",
    "Scrum gegen Wasserfall und Kanban abgrenzen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Scrum ist ein Theorie-Dauerbrenner (MC und Erklärungsaufgaben). Lernziel:
        <strong> 3 Rollen · 3 Artefakte · 5 Events.</strong>
      </Callout>

      <h2>1. Rollen</h2>
      <ul>
        <li><strong>Product Owner (PO):</strong> verantwortet den Wert, pflegt das Product Backlog, priorisiert.</li>
        <li><strong>Scrum Master (SM):</strong> entfernt Hindernisse, lebt das Framework, coacht.</li>
        <li><strong>Developers:</strong> cross-funktionales Team, liefert das Increment.</li>
      </ul>

      <h2>2. Artefakte</h2>
      <ul>
        <li><strong>Product Backlog:</strong> priorisierte Liste aller Anforderungen.</li>
        <li><strong>Sprint Backlog:</strong> Auswahl fürs aktuelle Sprint + Plan zur Umsetzung.</li>
        <li><strong>Increment:</strong> am Sprint-Ende lauffähiges Produkt-Inkrement (»Done«).</li>
      </ul>

      <h2>3. Events</h2>
      <ul>
        <li><strong>Sprint:</strong> Timebox (meist 2–4 Wochen), enthält alle anderen Events.</li>
        <li><strong>Sprint Planning:</strong> Was + wie wird im Sprint umgesetzt?</li>
        <li><strong>Daily Scrum:</strong> 15-min-Abgleich der Developers.</li>
        <li><strong>Sprint Review:</strong> Increment Stakeholdern zeigen, Feedback einsammeln.</li>
        <li><strong>Sprint Retrospective:</strong> Zusammenarbeit reflektieren, Verbesserungen planen.</li>
      </ul>

      <h2>4. Definition of Done / Ready</h2>
      <ul>
        <li><strong>DoR (Definition of Ready):</strong> Wann ist ein Backlog-Item bereit für einen Sprint?</li>
        <li><strong>DoD (Definition of Done):</strong> Wann gilt ein Increment als »fertig«?</li>
      </ul>

      <h2>5. Abgrenzung</h2>
      <ul>
        <li>
          <strong>Wasserfall:</strong> phasenbasiert, einmal durchlaufen – wenig Rückkanal. Lange
          Planungszyklen.
        </li>
        <li>
          <strong>Kanban:</strong> kontinuierlicher Fluss, WIP-Limits, keine festen Sprints.
        </li>
        <li>
          <strong>Scrum:</strong> iterativ-inkrementell mit festen Timeboxes und Rollen.
        </li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Rolle priorisiert das Product Backlog?",
      options: [
        { id: "a", text: "Scrum Master", correct: false },
        { id: "b", text: "Product Owner", correct: true },
        { id: "c", text: "Development Team", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welches Event dient der Reflexion der Zusammenarbeit?",
      options: [
        { id: "a", text: "Sprint Planning", correct: false },
        { id: "b", text: "Sprint Review", correct: false, explanation: "Review zeigt das Produkt, Retro reflektiert das Team." },
        { id: "c", text: "Sprint Retrospective", correct: true },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      multiple: true,
      question: "Welche Aussagen zu Scrum stimmen?",
      options: [
        { id: "a", text: "Ein Sprint ist eine Timebox von typischerweise 2–4 Wochen.", correct: true },
        { id: "b", text: "Scrum eignet sich für sehr starre, vorab vollständig spezifizierbare Projekte.", correct: false },
        { id: "c", text: "Das Daily Scrum ist 15 Minuten lang.", correct: true },
      ],
    },
  ],
  examTips: [
    "3-3-5-Merker: 3 Rollen, 3 Artefakte, 5 Events – das ist der Kern.",
    "Scrum vs. Kanban: Timeboxes vs. kontinuierlicher Fluss.",
    "DoR und DoD nicht verwechseln – Ready (Eingang) vs. Done (Ausgang).",
  ],
  related: ["vorgehensmodelle", "anforderungen"],
};
