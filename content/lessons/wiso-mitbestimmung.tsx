import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const wisoMitbestimmung: Lesson = {
  slug: "wiso-mitbestimmung",
  objectives: [
    "Tarifautonomie und Arten von Tarifverträgen erklären",
    "Rechte des Betriebsrats (BetrVG) kennen",
    "Unternehmensmitbestimmung (DrittelbG, MitbestG) zuordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Tarifautonomie</h2>
      <ul>
        <li>Art. 9 III GG: Gewerkschaften und Arbeitgeberverbände verhandeln ohne Staat.</li>
        <li><strong>Flächentarif</strong>: Branche oder Region.</li>
        <li><strong>Haus-/Firmentarif</strong>: einzelner Betrieb.</li>
        <li><strong>Günstigkeitsprinzip</strong>: einzelvertragliche Regelung greift, <em>wenn günstiger</em> für den AN.</li>
      </ul>

      <h2>Betriebsrat (BetrVG)</h2>
      <ul>
        <li>Wählbar ab <strong>5 ständigen wahlberechtigten AN</strong>, davon 3 wählbar.</li>
        <li>Wahl alle 4 Jahre.</li>
        <li><strong>Mitbestimmungsrechte</strong> (§ 87 BetrVG): Arbeitszeit, Urlaubsplanung, Ordnung des Betriebs, Entlohnungsgrundsätze → bei Verweigerung Einigungsstelle.</li>
        <li><strong>Mitwirkungsrechte</strong>: u. a. Anhörung vor Kündigung (§ 102 BetrVG). Ohne Anhörung ist die Kündigung <em>unwirksam</em>.</li>
      </ul>

      <h2>JAV (Jugend- und Auszubildendenvertretung)</h2>
      <ul>
        <li>Wählbar, wenn mind. 5 Jugendliche / Azubis / AN unter 18 im Betrieb.</li>
        <li>Vertritt deren Interessen gegenüber BR und AG.</li>
      </ul>

      <h2>Unternehmensmitbestimmung</h2>
      <table>
        <thead><tr><th>Schwelle</th><th>Gesetz</th><th>Regel</th></tr></thead>
        <tbody>
          <tr><td>ab 500 AN</td><td>DrittelbG</td><td>1/3 AN-Vertreter im Aufsichtsrat</td></tr>
          <tr><td>ab 2.000 AN</td><td>MitbestG</td><td>paritätisch; Stichentscheid AR-Vorsitz</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Tarifvertrag ≠ Betriebsvereinbarung: TV wird zwischen Gewerkschaft und AGV geschlossen, BV
        zwischen BR und AG.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Ab wie vielen ständig beschäftigten Arbeitnehmern kann ein Betriebsrat gewählt werden?",
      options: [
        { id: "a", text: "3", correct: false },
        { id: "b", text: "5", correct: true, explanation: "Davon mind. 3 wählbar (§ 1 BetrVG)." },
        { id: "c", text: "10", correct: false },
        { id: "d", text: "20", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welches Gesetz regelt die paritätische Mitbestimmung im Aufsichtsrat ab 2.000 AN?",
      options: [
        { id: "a", text: "BetrVG", correct: false },
        { id: "b", text: "DrittelbG", correct: false, explanation: "DrittelbG regelt 1/3-Beteiligung ab 500 AN." },
        { id: "c", text: "MitbestG", correct: true, explanation: "Paritätische Besetzung, Stichentscheid des AR-Vorsitzenden." },
        { id: "d", text: "BBiG", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Einzelvertragliche Regelung unterschreitet den Tarif — wann ist sie wirksam?",
      options: [
        { id: "a", text: "Immer", correct: false },
        { id: "b", text: "Nie", correct: false },
        { id: "c", text: "Nur wenn sie für den AN günstiger ist", correct: true, explanation: "Günstigkeitsprinzip." },
        { id: "d", text: "Nur mit Zustimmung des BR", correct: false },
      ],
    },
  ],
  examTips: [
    "Schwellenwerte 5 / 500 / 2.000 einprägen.",
    "§ 87 BetrVG = volle Mitbestimmung, § 102 = Kündigungsanhörung.",
    "Mitwirkung ≠ Mitbestimmung – Mitbestimmung ist stärker (Einigungsstelle).",
  ],
  resources: [
    {
      kind: "video",
      title: "Tarifvertrag einfach erklärt – Tarifvertragsarten, Tarifautonomie, Friedenspflicht",
      url: "https://www.youtube.com/watch?v=Ss3qJc1G21o",
      note: "Kompakte Einführung in Tarifverträge.",
    },
    {
      kind: "video",
      title: "Betriebliche Mitbestimmung – Erklärfilm",
      url: "https://www.youtube.com/watch?v=eCcZSmojG-c",
      channel: "Böckler Schule",
      note: "Kurzes Erklärvideo zur Mitbestimmung im Betrieb.",
    },
    {
      kind: "video",
      title: "Mitbestimmung im Aufsichtsrat – Erklärfilm",
      url: "https://www.youtube.com/watch?v=kbjqi3_3MjI",
      channel: "Böckler Schule",
      note: "Drittelbeteiligung und paritätische Mitbestimmung erklärt.",
    },
    {
      kind: "page",
      title: "IHK Nord Westfalen – Betriebsverfassungsgesetz",
      url: "https://www.ihk.de/nordwestfalen/recht/arbeitsrecht/betriebsverfassungsgesetz-3601968",
      source: "ihk.de",
      note: "Schwellenwerte und Rechte des Betriebsrats kompakt.",
    },
  ],
  related: ["wiso-arbeitsrecht", "wiso-rechtsformen"],
};
