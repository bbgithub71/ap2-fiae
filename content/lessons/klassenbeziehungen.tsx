import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const klassenbeziehungen: Lesson = {
  slug: "klassenbeziehungen",
  objectives: [
    "Assoziation, Aggregation, Komposition, Vererbung, Abhängigkeit und Realisierung unterscheiden",
    "Diamant-Notation korrekt einsetzen",
    "Passende Beziehung aus einem Szenario ableiten",
  ],
  body: (
    <div className="prose-content">
      <h2>Übersicht</h2>
      <ul>
        <li><strong>Assoziation</strong> (—): allgemeine «kennt»-Beziehung, oft mit Multiplizität.</li>
        <li><strong>Aggregation</strong> (◇—): «hat", Teil kann ohne Ganzes existieren.</li>
        <li><strong>Komposition</strong> (◆—): «besteht aus", Teil stirbt mit dem Ganzen.</li>
        <li><strong>Vererbung / Generalisierung</strong> (△): «ist ein».</li>
        <li><strong>Abhängigkeit</strong> (- - →): kurzlebige Nutzung, z. B. Parameter.</li>
        <li><strong>Realisierung</strong> (gestricheltes △): «implementiert Interface».</li>
      </ul>

      <h2>Beispiel</h2>
      <CodeBlock caption="textuelle Diagrammskizze">
{`Auto  ◆———— Motor       Komposition  (Motor gehört fest zum Auto)
Team  ◇———— Spieler     Aggregation  (Spieler existiert auch ohne Team)
Hund  △————  Tier       Vererbung    (Hund ist ein Tier)
Drucker ←···· Auftrag   Abhängigkeit (Drucker nutzt Auftrag)`}
      </CodeBlock>

      <Callout variant="tip">
        Merksatz: <strong>Komposition = «stirbt mit».</strong> Rechnungsposten und Rechnung?
        Komposition. Auto und Reifen? Eher Aggregation (Reifen können überleben).
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>Aggregation vs. Komposition: <strong>Lebensdauer</strong> entscheidet.</li>
        <li>Die Raute steht beim <strong>Ganzen</strong>, nicht beim Teil.</li>
        <li>Vererbung nur bei echter «ist-ein»-Semantik; sonst eher Komposition.</li>
        <li>Pfeilspitze bei Vererbung ist ein <strong>leeres Dreieck</strong>.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Beziehung impliziert, dass Teile mit dem Ganzen zerstört werden?",
      options: [
        { id: "a", text: "Aggregation", correct: false },
        { id: "b", text: "Komposition", correct: true, explanation: "Starke Lebensabhängigkeit, gefüllte Raute." },
        { id: "c", text: "Assoziation", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welches Symbol kennzeichnet Vererbung?",
      options: [
        { id: "a", text: "Gefüllte Raute", correct: false },
        { id: "b", text: "Leeres Dreieck zur Oberklasse", correct: true, explanation: "Generalisierungspfeil in UML." },
        { id: "c", text: "Gestrichelter Pfeil", correct: false },
      ],
    },
  ],
  examTips: [
    "Multiplizitäten immer an beiden Enden angeben (1 ↔ 0..*).",
    "Komposition/Aggregation sparsam einsetzen – im Zweifel Assoziation.",
    "Realisierung (gestrichelt + Dreieck) nicht mit Vererbung (durchgezogen) verwechseln.",
  ],
  resources: [
    {
      kind: "video",
      title: "UML Teil 2: Vererbung, Aggregation und Komposition (Neu Vertont)",
      url: "https://www.youtube.com/watch?v=5baxIRQJ1FM",
      note: "Strukturierte Einführung in die Beziehungstypen.",
    },
    {
      kind: "video",
      title: "UML Klassendiagramm – Aggregationen, Kompositionen und allgemeiner Aufbau",
      url: "https://www.youtube.com/watch?v=ug2EeU13yDA",
      note: "Fokus auf die Unterscheidung Aggregation ↔ Komposition.",
    },
  ],
  related: ["klassendiagramm", "klassen-objekte", "oo-grundprinzipien"],
};
