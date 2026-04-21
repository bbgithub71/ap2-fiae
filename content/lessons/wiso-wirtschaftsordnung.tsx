import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const wisoWirtschaftsordnung: Lesson = {
  slug: "wiso-wirtschaftsordnung",
  objectives: [
    "Prinzipien der sozialen Marktwirtschaft nennen",
    "Angebot, Nachfrage und Gleichgewichtspreis erklären",
    "Marktformen unterscheiden",
  ],
  body: (
    <div className="prose-content">
      <h2>Soziale Marktwirtschaft</h2>
      <ul>
        <li>Verbindet Marktfreiheit mit sozialer Absicherung (Müller-Armack / Erhard).</li>
        <li>Prinzipien: <strong>Wettbewerb</strong>, <strong>Preisfreiheit</strong>, <strong>Privateigentum</strong>, <strong>soziale Sicherung</strong>, <strong>Tarifautonomie</strong>.</li>
        <li>Abgrenzung: reine Marktwirtschaft (kein Staat) vs. Planwirtschaft (Staat plant alles).</li>
      </ul>

      <h2>Angebot und Nachfrage</h2>
      <ul>
        <li>Preis ↑ → Angebot ↑ und Nachfrage ↓.</li>
        <li>Preis ↓ → Angebot ↓ und Nachfrage ↑.</li>
        <li><strong>Gleichgewichtspreis</strong>: Schnittpunkt der Kurven – der Markt ist geräumt.</li>
      </ul>

      <h2>Marktformen</h2>
      <table>
        <thead>
          <tr><th></th><th>1 Nachfrager</th><th>wenige</th><th>viele</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>1 Anbieter</strong></td><td>bilaterales Monopol</td><td>beschr. Angebotsmonopol</td><td>Angebotsmonopol</td></tr>
          <tr><td><strong>wenige</strong></td><td>beschr. Nachfragemonopol</td><td>bilat. Oligopol</td><td>Angebotsoligopol</td></tr>
          <tr><td><strong>viele</strong></td><td>Nachfragemonopol</td><td>Nachfrageoligopol</td><td><strong>Polypol</strong></td></tr>
        </tbody>
      </table>

      <h2>Wirtschaftskreislauf</h2>
      <p>
        Einfacher Kreislauf: Haushalte ↔ Unternehmen (Güter gegen Geld). Erweitert kommen Staat,
        Banken und Ausland hinzu (2-, 3-, 4-Sektor-Modelle).
      </p>

      <Callout variant="tip">
        Gleichgewichtspreis ist nicht «fair", sondern markträumend. Eingriffe (z. B.
        Mindestpreise) verschieben das Gleichgewicht.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Viele Bäckereien bieten Brötchen an, viele Kunden kaufen. Welche Marktform?",
      options: [
        { id: "a", text: "Oligopol", correct: false },
        { id: "b", text: "Monopol", correct: false },
        { id: "c", text: "Polypol", correct: true, explanation: "Viele Anbieter und viele Nachfrager." },
        { id: "d", text: "Duopol", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was kennzeichnet den Gleichgewichtspreis?",
      options: [
        { id: "a", text: "Maximalpreis des Staats", correct: false },
        { id: "b", text: "Preis, zu dem angebotene und nachgefragte Menge übereinstimmen", correct: true },
        { id: "c", text: "Durchschnitt aller Marktpreise", correct: false },
        { id: "d", text: "Preis bei 0 Nachfrage", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Welches Prinzip gehört NICHT zur sozialen Marktwirtschaft?",
      options: [
        { id: "a", text: "Wettbewerb", correct: false },
        { id: "b", text: "Privateigentum", correct: false },
        { id: "c", text: "Staatliche Zentralplanung der Produktion", correct: true, explanation: "Das wäre Planwirtschaft." },
        { id: "d", text: "Soziale Sicherung", correct: false },
      ],
    },
  ],
  examTips: [
    "3×3-Marktform-Tabelle auswendig.",
    "Preisbildung mit Schaubild durchdenken.",
    "«Unsichtbare Hand» (Adam Smith) ≠ soziale Marktwirtschaft.",
  ],
  resources: [
    {
      kind: "video",
      title: "Marktformen einfach erklärt",
      url: "https://www.youtube.com/watch?v=TwkMH7cE2FE",
      channel: "explainity",
      note: "Polypol, Oligopol, Monopol in 3 Minuten.",
    },
    {
      kind: "video",
      title: "Gleichgewichtspreis einfach erklärt",
      url: "https://www.youtube.com/watch?v=aZrkZ0-sreI",
      channel: "explainity",
      note: "Preisbildung im Marktgleichgewicht visualisiert.",
    },
    {
      kind: "video",
      title: "Angebot & Nachfrage – einfach erklärt",
      url: "https://www.youtube.com/watch?v=QqwGFtV2e0s",
      note: "Grundmechanik der Preisbildung.",
    },
    {
      kind: "page",
      title: "studyflix – Soziale Marktwirtschaft",
      url: "https://studyflix.de/wirtschaft/soziale-marktwirtschaft-1857",
      source: "studyflix.de",
      note: "Prinzipien und Abgrenzung zur reinen Markt- bzw. Planwirtschaft.",
    },
  ],
  related: ["wiso-rechtsformen", "kundenbeziehungen", "wiso-mitbestimmung"],
};
