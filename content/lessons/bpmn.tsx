import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const bpmn: Lesson = {
  slug: "bpmn",
  objectives: [
    "Die wichtigsten BPMN-Elemente (Events, Tasks, Gateways, Flows) erkennen",
    "Pools und Lanes richtig einsetzen",
    "Die Unterschiede zum UML-Aktivitätsdiagramm benennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="new">
        BPMN 2.0 hat im Katalog 2024/25 <strong>Struktogramm und PAP</strong> abgelöst. Bisher kaum in
        alten Prüfungen, aber sehr wahrscheinlich relevant für 2026.
      </Callout>

      <h2>Kern-Elemente</h2>
      <ul>
        <li><strong>Events</strong> (Kreise): Start (dünn), Zwischen (doppelt), Ende (fett).</li>
        <li><strong>Activities / Tasks</strong> (abgerundetes Rechteck): Arbeitsschritte.</li>
        <li>
          <strong>Gateways</strong> (Raute): Verzweigungen/Zusammenführungen.
          <ul>
            <li><code>✕</code> Exclusive (XOR)</li>
            <li><code>○</code> Inclusive (OR)</li>
            <li><code>+</code> Parallel (AND)</li>
            <li><code>⬢</code> Event-basiert</li>
          </ul>
        </li>
        <li>
          <strong>Sequenzfluss</strong> (durchgezogener Pfeil) innerhalb eines Pools.
        </li>
        <li>
          <strong>Nachrichtenfluss</strong> (gestrichelter Pfeil) zwischen Pools.
        </li>
        <li>
          <strong>Pool / Lane</strong>: Pool = Beteiligter (Organisation/System), Lane = interne Rolle.
        </li>
      </ul>

      <h2>Mini-Beispiel: Online-Bestellung</h2>
      <CodeBlock>
{`[Pool Kunde]
  ● Start → [Artikel wählen] → [Bestellen] → ⊙ Wartet auf Lieferung → ● Ende

[Pool Shop]
  ● (Nachricht: Bestellung eingegangen)
   → [Zahlung prüfen] → ✕ Zahlung ok?
      ├─ [Ja] → [Ware versenden] → ● Ende
      └─ [Nein] → [Absage senden] → ● Ende`}
      </CodeBlock>

      <h2>Abgrenzung BPMN vs. UML-Aktivitätsdiagramm</h2>
      <ul>
        <li>BPMN ist für <strong>Geschäftsprozesse</strong> gedacht, UML für Software-Verhalten.</li>
        <li>
          BPMN hat <strong>Pools/Lanes</strong> und explizite <strong>Nachrichtenflüsse</strong> –
          sehr stark für die Modellierung von Kooperation zwischen Akteuren.
        </li>
        <li>BPMN-Gateways sind semantisch präziser (XOR/OR/AND/Eventbasiert).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Symbol steht in BPMN für ein exklusives Gateway (XOR)?",
      options: [
        { id: "a", text: "Raute mit +", correct: false },
        { id: "b", text: "Raute mit ✕", correct: true },
        { id: "c", text: "Raute mit ○", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wodurch unterscheidet sich ein Nachrichtenfluss vom Sequenzfluss?",
      options: [
        { id: "a", text: "Er ist durchgezogen.", correct: false },
        { id: "b", text: "Er geht zwischen Pools und ist gestrichelt.", correct: true },
        { id: "c", text: "Er geht nur innerhalb einer Lane.", correct: false },
      ],
    },
  ],
  examTips: [
    "Gateway-Typen auswendig – XOR, OR, AND, Event.",
    "Pools NIE mit Sequenzfluss verbinden – immer Nachrichtenfluss.",
    "Jeder Prozess hat genau 1 Startevent pro Pool (meist).",
  ],
  related: ["aktivitaetsdiagramm", "anforderungen"],
};
