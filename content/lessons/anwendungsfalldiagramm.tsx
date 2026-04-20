import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const anwendungsfalldiagramm: Lesson = {
  slug: "anwendungsfalldiagramm",
  objectives: [
    "Akteur, Use Case und Systemgrenze korrekt darstellen",
    "«include» und «extend» auseinanderhalten",
    "Ein Use-Case-Diagramm aus einem Anforderungstext ableiten",
  ],
  body: (
    <div className="prose-content">
      <h2>Bausteine</h2>
      <ul>
        <li><strong>Akteur</strong> (Strichmännchen): Benutzer oder externes System, außerhalb der Systemgrenze.</li>
        <li><strong>Use Case</strong> (Ellipse): eine fachliche Funktion, aus Nutzersicht.</li>
        <li><strong>Systemgrenze</strong> (Rechteck): umschließt alle Use Cases.</li>
        <li><strong>«include»</strong> (gestrichelt): A ruft B <strong>immer</strong> auf (Pflicht).</li>
        <li><strong>«extend»</strong> (gestrichelt): B erweitert A <strong>optional</strong> unter Bedingung.</li>
        <li><strong>Generalisierung</strong> (Dreiecksspitze): Spezialisierung bei Akteuren oder Use Cases.</li>
      </ul>

      <h2>Beispiel</h2>
      <CodeBlock caption="Skizze – Onlineshop">
{`            ┌────── System: Onlineshop ──────┐
            │  (Bestellung aufgeben) ──«include»──▶ (Einloggen)
  Kunde ────┤        ▲
            │        │  «extend» [Rabattcode]
            │  (Rabatt anwenden)
            └────────────────────────────────┘`}
      </CodeBlock>

      <Callout variant="tip">
        Merksatz: <strong>«include» = muss</strong>, <strong>«extend» = kann</strong>. Nicht verwechseln!
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>Bei <code>«include»</code> zeigt der Pfeil <strong>vom Basis-UC zum eingebundenen UC</strong>.</li>
        <li>Akteure gehören nie <em>innerhalb</em> der Systemgrenze.</li>
        <li>Das Diagramm zeigt <em>was</em>, nicht <em>wie</em> (kein Ablauf, keine Logik).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wann nutzt man «extend»?",
      options: [
        { id: "a", text: "Für Pflicht-Teilabläufe", correct: false },
        { id: "b", text: "Für optionale Erweiterungen unter Bedingung", correct: true, explanation: "z. B. Rabatt anwenden nur mit Code." },
        { id: "c", text: "Für Vererbung zwischen Akteuren", correct: false, explanation: "Das wäre eine Generalisierung." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was symbolisiert die Ellipse?",
      options: [
        { id: "a", text: "Akteur", correct: false },
        { id: "b", text: "Use Case (fachliche Funktion)", correct: true },
        { id: "c", text: "Systemgrenze", correct: false },
      ],
    },
  ],
  examTips: [
    "Anforderungstext nach Zielen/Verben aus Nutzersicht scannen → Use Cases.",
    "include vs. extend: Pflicht vs. optional.",
    "Nie Methodenaufrufe modellieren – das ist Aufgabe von Sequenz-/Aktivitätsdiagramm.",
  ],
  related: ["klassendiagramm", "aktivitaetsdiagramm", "anforderungen"],
};
