import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const dsgvo: Lesson = {
  slug: "dsgvo",
  objectives: [
    "Grundprinzipien der DSGVO nennen",
    "Betroffenenrechte aufzählen",
    "Pflichten von Unternehmen einordnen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        DSGVO-Themen sind klassische Theorie-Punkte. Gerade im neuen Katalog (2024+) mit mehr
        Detailgrad.
      </Callout>

      <h2>Grundsätze (Art. 5 DSGVO)</h2>
      <ul>
        <li><strong>Rechtmäßigkeit, Treu und Glauben, Transparenz</strong></li>
        <li><strong>Zweckbindung</strong> – nur für festgelegten Zweck</li>
        <li><strong>Datenminimierung</strong> – nur was nötig ist</li>
        <li><strong>Richtigkeit</strong> – Daten aktuell halten</li>
        <li><strong>Speicherbegrenzung</strong> – nur so lange wie nötig</li>
        <li><strong>Integrität und Vertraulichkeit</strong> – Schutz vor unbefugter Verarbeitung</li>
        <li><strong>Rechenschaftspflicht</strong> – Einhaltung nachweisen können</li>
      </ul>

      <h2>Betroffenenrechte</h2>
      <ul>
        <li>Auskunft (Art. 15)</li>
        <li>Berichtigung (Art. 16)</li>
        <li>Löschung / »Recht auf Vergessenwerden« (Art. 17)</li>
        <li>Einschränkung der Verarbeitung (Art. 18)</li>
        <li>Datenübertragbarkeit (Art. 20)</li>
        <li>Widerspruch (Art. 21)</li>
        <li>Keine automatisierten Einzelentscheidungen (Art. 22)</li>
      </ul>

      <h2>Pflichten des Verantwortlichen</h2>
      <ul>
        <li>Verzeichnis von Verarbeitungstätigkeiten (VVT)</li>
        <li>Technische und organisatorische Maßnahmen (<strong>TOMs</strong>)</li>
        <li>Datenschutz-Folgenabschätzung bei hohem Risiko</li>
        <li>Meldung von Datenpannen binnen 72 h</li>
        <li>Benennung eines Datenschutzbeauftragten ab bestimmten Schwellen</li>
      </ul>

      <h2>Datenschutz vs. Datensicherheit</h2>
      <p>
        <strong>Datenschutz</strong> schützt <em>Personen</em> vor Missbrauch ihrer Daten.{" "}
        <strong>Datensicherheit</strong> schützt <em>Daten</em> vor unbefugtem Zugriff, Verlust,
        Manipulation (auch nicht-personenbezogene!).
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches ist KEIN Grundsatz der DSGVO?",
      options: [
        { id: "a", text: "Zweckbindung", correct: false },
        { id: "b", text: "Datenmaximierung", correct: true, explanation: "Das Gegenteil: Datenminimierung!" },
        { id: "c", text: "Speicherbegrenzung", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Innerhalb welcher Frist muss eine meldepflichtige Datenpanne gemeldet werden?",
      options: [
        { id: "a", text: "24 h", correct: false },
        { id: "b", text: "48 h", correct: false },
        { id: "c", text: "72 h", correct: true },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      multiple: true,
      question: "Welche Rechte haben Betroffene?",
      options: [
        { id: "a", text: "Recht auf Auskunft", correct: true },
        { id: "b", text: "Recht auf Vergessenwerden", correct: true },
        { id: "c", text: "Recht auf dauerhafte Nutzung durch alle Dritten", correct: false },
        { id: "d", text: "Recht auf Datenübertragbarkeit", correct: true },
      ],
    },
  ],
  examTips: [
    "DSGVO-Prinzipien in Listenform parat haben – das sind schnelle MC-Punkte.",
    "Datenschutz vs. Datensicherheit exakt auseinanderhalten.",
    "72 h – DIE magische Zahl für Datenpannen.",
  ],
  resources: [
    {
      kind: "video",
      title: "Datenschutz: Diese Grundlagen solltest du kennen – DSGVO einfach erklärt #1",
      url: "https://www.youtube.com/watch?v=pXWMbQInubU",
      channel: "WBS – Die Experten",
      note: "Seriöse Einführung von Rechtsanwalt Christian Solmecke.",
    },
    {
      kind: "video",
      title: "DSGVO erklärt: Grundlagen der EU-Datenschutzgrundverordnung",
      url: "https://www.youtube.com/watch?v=Tnq2VG8xhRo",
      note: "Zweite, strukturierte Erklärung mit Beispielen.",
    },
  ],
  related: ["schutzziele", "backup-archivierung"],
};
