import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const wisoRechtsformen: Lesson = {
  slug: "wiso-rechtsformen",
  objectives: [
    "Personen- und Kapitalgesellschaften unterscheiden",
    "Haftung, Mindestkapital und Leitung je Rechtsform nennen",
    "Besonderheiten der UG, AG, KG kennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Überblick</h2>
      <table>
        <thead>
          <tr><th>Form</th><th>Mindestkapital</th><th>Haftung</th><th>Leitung</th></tr>
        </thead>
        <tbody>
          <tr><td>Einzelunternehmen</td><td>–</td><td>unbeschränkt persönlich</td><td>Inhaber</td></tr>
          <tr><td>GbR (§ 705 BGB)</td><td>–</td><td>gesamtschuldnerisch</td><td>alle Gesellschafter</td></tr>
          <tr><td>OHG</td><td>–</td><td>unbeschränkt persönlich</td><td>alle</td></tr>
          <tr><td>KG</td><td>–</td><td>Komplementär voll / Kommanditist bis Einlage</td><td>Komplementär</td></tr>
          <tr><td>GmbH</td><td>25.000 €</td><td>Gesellschaftsvermögen</td><td>Geschäftsführer</td></tr>
          <tr><td>UG (haftungsbeschränkt)</td><td>1 €</td><td>Gesellschaftsvermögen</td><td>Geschäftsführer</td></tr>
          <tr><td>AG</td><td>50.000 €</td><td>Gesellschaftsvermögen</td><td>Vorstand + Aufsichtsrat + HV</td></tr>
          <tr><td>KGaA</td><td>50.000 €</td><td>Komplementär voll / Kommandit-Aktionäre Einlage</td><td>Komplementär</td></tr>
        </tbody>
      </table>

      <h2>Besonderheiten</h2>
      <ul>
        <li><strong>GmbH</strong>: Stammkapital 25.000 €, bei Gründung min. 12.500 € eingezahlt.</li>
        <li><strong>UG</strong>: «Mini-GmbH", ab 1 €; Pflicht: 25 % des Jahresüberschusses in die Rücklage, bis 25.000 € erreicht sind.</li>
        <li><strong>AG</strong>: drei Organe – Vorstand (führt), Aufsichtsrat (kontrolliert), Hauptversammlung (entscheidet Grundlagen).</li>
        <li><strong>KG</strong>: <em>nur der Komplementär</em> haftet voll; Kommanditisten nur mit Einlage.</li>
      </ul>

      <Callout variant="tip">
        Faustregel: Personengesellschaften (GbR, OHG, KG) haften <em>persönlich</em>,
        Kapitalgesellschaften (GmbH, UG, AG) nur mit dem <em>Gesellschaftsvermögen</em>.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Mindestkapital benötigt die Gründung einer GmbH?",
      options: [
        { id: "a", text: "1 €", correct: false },
        { id: "b", text: "12.500 €", correct: false, explanation: "Das ist nur die Mindesteinzahlung bei Gründung." },
        { id: "c", text: "25.000 €", correct: true, explanation: "Stammkapital; mindestens 12.500 € müssen bei Gründung eingezahlt sein." },
        { id: "d", text: "50.000 €", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wer haftet in einer KG unbeschränkt?",
      options: [
        { id: "a", text: "Alle Gesellschafter", correct: false },
        { id: "b", text: "Der Komplementär", correct: true, explanation: "Kommanditisten nur bis Höhe der Einlage." },
        { id: "c", text: "Nur die Kommanditisten", correct: false },
        { id: "d", text: "Niemand", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Welche Rechtsform ist eine Kapitalgesellschaft?",
      options: [
        { id: "a", text: "OHG", correct: false },
        { id: "b", text: "GbR", correct: false },
        { id: "c", text: "KG", correct: false },
        { id: "d", text: "GmbH", correct: true, explanation: "Juristische Person, Haftung auf Gesellschaftsvermögen beschränkt." },
      ],
    },
  ],
  examTips: [
    "25.000 / 50.000 / 12.500 auswendig.",
    "Organe der AG: Vorstand führt, AR kontrolliert, HV entscheidet.",
    "UG: 1 € möglich, aber 25 %-Gewinnrücklage bis 25.000 € Pflicht.",
  ],
  resources: [
    {
      kind: "video",
      title: "Unternehmensformen einfach erklärt – Rechtsformen: AG, GmbH, OHG, GbR, KG, UG",
      url: "https://www.youtube.com/watch?v=uFfsZA3wnWE",
      note: "Deckt alle prüfungsrelevanten Formen in einem Video ab.",
    },
    {
      kind: "page",
      title: "IHK Stuttgart – Rechtsformen im Überblick",
      url: "https://www.ihk.de/stuttgart/fuer-unternehmen/recht-und-steuern/gesellschaftsrecht-unternehmensformen/wahl-der-rechtsform-gesellschaftsrecht/wahl-der-rechtsform-677188",
      source: "ihk.de",
      note: "Offizielle Übersicht auf IHK-Niveau.",
    },
    {
      kind: "page",
      title: "IHK-Merkblatt «Rechtsformen als Tabelle» (PDF)",
      url: "https://www.ihk.de/blueprint/servlet/resource/blob/5209610/881c8a3d828e17662c2691b1b735307e/merkblatt-rechtsformen-als-tabelle-data.pdf",
      source: "ihk.de",
      note: "Ideal zum Ausdrucken – kompakte Vergleichstabelle.",
    },
  ],
  related: ["wiso-bgb", "wiso-wirtschaftsordnung", "wiso-mitbestimmung"],
};
