import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const anforderungen: Lesson = {
  slug: "anforderungen",
  objectives: [
    "Funktionale und nicht-funktionale Anforderungen erkennen und formulieren",
    "Lastenheft und Pflichtenheft sauber abgrenzen",
    "User Stories korrekt aufbauen",
  ],
  body: (
    <div className="prose-content">
      <h2>Funktional vs. nicht-funktional</h2>
      <ul>
        <li>
          <strong>Funktional:</strong> Was soll das System tun? »Login prüft Benutzername und Passwort.«
        </li>
        <li>
          <strong>Nicht-funktional:</strong> Wie soll es das tun? Performance, Sicherheit,
          Wartbarkeit, Usability, Verfügbarkeit, Skalierbarkeit …
        </li>
      </ul>

      <h2>Lastenheft vs. Pflichtenheft</h2>
      <table>
        <thead>
          <tr><th></th><th>Lastenheft</th><th>Pflichtenheft</th></tr>
        </thead>
        <tbody>
          <tr><td>Autor</td><td>Auftraggeber</td><td>Auftragnehmer</td></tr>
          <tr><td>Frage</td><td>Was?</td><td>Wie genau?</td></tr>
          <tr><td>Detailtiefe</td><td>grob</td><td>fein</td></tr>
          <tr><td>Verbindlichkeit</td><td>Ziele/Anforderungen</td><td>Lösungsumfang, Basis für Abnahme</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Merksatz: <strong>L wie Lasten = Kunde trägt seine Last vor. P wie Pflicht = Auftragnehmer
        beschreibt seine Pflicht.</strong>
      </Callout>

      <h2>User Stories</h2>
      <p>
        Schema: <em>»Als &lt;Rolle&gt; möchte ich &lt;Ziel/Wunsch&gt;, damit &lt;Nutzen&gt;.«</em>
      </p>
      <p>
        Zusätzlich Akzeptanzkriterien (AC): messbare Bedingungen, wann die Story umgesetzt gilt.
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wer erstellt typischerweise das Pflichtenheft?",
      options: [
        { id: "a", text: "Kunde (Auftraggeber)", correct: false },
        { id: "b", text: "Auftragnehmer", correct: true },
        { id: "c", text: "Externer Tester", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Anforderung ist nicht-funktional?",
      options: [
        { id: "a", text: "Der Nutzer kann sich einloggen.", correct: false },
        { id: "b", text: "Die Seite lädt in unter 500 ms.", correct: true },
        { id: "c", text: "Admins können Berichte exportieren.", correct: false },
      ],
    },
  ],
  examTips: [
    "Lasten = was will der Kunde. Pflichten = wie setzt es der Auftragnehmer um.",
    "Nicht-funktional oft an -keit erkennbar: Perform-ance, Usabil-ity, Zuverlässig-keit.",
    "User Story-Schema auswendig für Punkte.",
  ],
  related: ["vorgehensmodelle", "scrum", "bpmn"],
};
