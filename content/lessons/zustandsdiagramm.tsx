import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const zustandsdiagramm: Lesson = {
  slug: "zustandsdiagramm",
  objectives: [
    "Zustände, Ereignisse und Transitionen korrekt modellieren",
    "Guards und Actions einsetzen",
    "End-/Startzustand richtig einzeichnen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Zustandsdiagramm kam in ~33 % der letzten Prüfungen (~61 Pkt. kumuliert). Oft als Modell eines
        Bestell- oder Bearbeitungsvorgangs.
      </Callout>

      <h2>1. Symbolik</h2>
      <ul>
        <li><strong>Startzustand:</strong> voller Kreis (wie beim Aktivitätsdiagramm).</li>
        <li><strong>Zustand:</strong> abgerundetes Rechteck mit Namen.</li>
        <li><strong>Transition:</strong> Pfeil zwischen Zuständen, beschriftet mit »Ereignis [Guard] / Aktion«.</li>
        <li><strong>Endzustand:</strong> Kreis mit Punkt.</li>
      </ul>

      <h2>2. Beispiel – Bestellung</h2>
      <CodeBlock caption="Textuelle Skizze">
{`● → [Neu]
[Neu]        -- bestaetigen -->  [Bestaetigt]
[Bestaetigt] -- versenden -->    [Versandt]
[Versandt]   -- zustellen -->    [Zugestellt]
[Neu]        -- stornieren -->   [Storniert]
[Bestaetigt] -- stornieren -->   [Storniert]
[Zugestellt] --> ⦿ Ende
[Storniert]  --> ⦿ Ende`}
      </CodeBlock>

      <h2>3. Guards und Actions</h2>
      <p>
        Ein Guard ist eine Bedingung, die gelten muss, damit die Transition ausgelöst wird. Eine
        Action wird beim Übergang ausgeführt.
      </p>
      <CodeBlock>
{`Bestaetigt  ── zahlungEingang [betrag >= offenerBetrag] / markiereBezahlt ──▶  Bezahlt`}
      </CodeBlock>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wie wird eine Transition beschriftet?",
      options: [
        { id: "a", text: "Nur mit dem Namen des Zielzustands.", correct: false },
        { id: "b", text: "Ereignis [Guard] / Aktion.", correct: true },
        { id: "c", text: "Mit dem auslösenden Objekt.", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welcher Zustand darf mehrfach vorkommen?",
      options: [
        { id: "a", text: "Startzustand", correct: false, explanation: "Nur genau 1 Startzustand." },
        { id: "b", text: "Endzustand", correct: true },
        { id: "c", text: "Ein normaler Zustand mit demselben Namen", correct: false },
      ],
    },
  ],
  examTips: [
    "Guard in eckigen Klammern, Aktion nach dem Slash.",
    "Endzustand ist optional, aber sauberer fürs Diagramm.",
    "Jeder Zustand sollte eine ausgehende Transition haben (oder Endzustand sein).",
  ],
  resources: [
    {
      kind: "video",
      title: "UML-Zustandsdiagramm für Fachinformatiker Anwendungsentwicklung",
      url: "https://www.youtube.com/watch?v=5qp0WkU_T-M",
      channel: "IT-Berufe-Podcast (Stefan Macke)",
      note: "Lehrgespräch direkt für FIAE – Pflichtmaterial.",
    },
    {
      kind: "video",
      title: "UML Teil 6: Das Zustandsdiagramm",
      url: "https://www.youtube.com/watch?v=bcoqPlRWI34",
      note: "Strukturierte Einführung mit allen Elementen.",
    },
  ],
  related: ["aktivitaetsdiagramm", "sequenzdiagramm", "klassendiagramm"],
};
