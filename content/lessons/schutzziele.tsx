import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const schutzziele: Lesson = {
  slug: "schutzziele",
  objectives: [
    "Die klassischen Schutzziele Vertraulichkeit, Integrität, Verfügbarkeit benennen",
    "Erweiterte Ziele (Authentizität, Nicht-Abstreitbarkeit, Verbindlichkeit) kennen",
    "Maßnahmen zu jedem Schutzziel zuordnen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Die VIV-Schutzziele sind MC-Dauerbrenner. Im IT-Grundschutz auch V²I bzw. erweitert VIVA.
      </Callout>

      <h2>VIV – die klassische Triade</h2>
      <ul>
        <li>
          <strong>Vertraulichkeit (Confidentiality):</strong> Daten nur für Berechtigte einsehbar.
          <em> Maßnahmen:</em> Verschlüsselung, Zugriffskontrolle.
        </li>
        <li>
          <strong>Integrität (Integrity):</strong> Daten sind unverändert und vollständig.
          <em> Maßnahmen:</em> Prüfsummen, Hashes, digitale Signaturen.
        </li>
        <li>
          <strong>Verfügbarkeit (Availability):</strong> Daten und Systeme sind zugänglich, wenn
          benötigt. <em> Maßnahmen:</em> Redundanz, Backup, DoS-Schutz.
        </li>
      </ul>

      <h2>Erweiterte Ziele (VIVA)</h2>
      <ul>
        <li><strong>Authentizität:</strong> Absender/Datenherkunft ist echt. (z. B. Signaturen)</li>
        <li><strong>Verbindlichkeit / Nicht-Abstreitbarkeit:</strong> Sender kann die Handlung nicht leugnen.</li>
      </ul>

      <h2>Typische Prüfungsfrage</h2>
      <p>
        »Welches Schutzziel wird verletzt, wenn ein Angreifer Daten auf einem Bankserver
        <em> ändert</em>?« → Integrität.<br />
        »Welches, wenn er sie <em>mitliest</em>?« → Vertraulichkeit.<br />
        »Welches, wenn er den Server <em>abschießt</em>?« → Verfügbarkeit.
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Ein Hash wird eingesetzt, um zu prüfen, ob eine Datei verändert wurde. Welches Schutzziel?",
      options: [
        { id: "a", text: "Vertraulichkeit", correct: false },
        { id: "b", text: "Integrität", correct: true },
        { id: "c", text: "Verfügbarkeit", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was bedeutet Nicht-Abstreitbarkeit?",
      options: [
        { id: "a", text: "Daten können nicht verändert werden.", correct: false },
        { id: "b", text: "Der Sender kann seine Aktion nicht leugnen.", correct: true },
        { id: "c", text: "Daten sind immer verfügbar.", correct: false },
      ],
    },
  ],
  examTips: [
    "VIV-Merksatz: Vertraulichkeit, Integrität, Verfügbarkeit.",
    "Jedes Ziel hat klassische Maßnahmen – eine passende nennen reicht oft.",
  ],
  resources: [
    {
      kind: "video",
      title: "Die Schutzziele der Informationssicherheit (CIA-Triade)",
      url: "https://www.youtube.com/watch?v=aNJ2LPm2i6g",
      note: "Vertraulichkeit, Integrität, Verfügbarkeit anschaulich erklärt.",
    },
    {
      kind: "video",
      title: "Schutzziele in der Informationssicherheit – Vertraulichkeit, Integrität, Verfügbarkeit und mehr",
      url: "https://www.youtube.com/watch?v=9TuHFuzXKKo",
      note: "Inkl. erweiterter Schutzziele (Authentizität, Nicht-Abstreitbarkeit).",
    },
  ],
  related: ["angriffe", "kryptografie", "dsgvo"],
};
