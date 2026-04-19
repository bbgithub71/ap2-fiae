import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const erm: Lesson = {
  slug: "erm",
  objectives: [
    "Aus einer Textbeschreibung Entitäten, Attribute und Beziehungen extrahieren",
    "Kardinalitäten sowohl in Chen- als auch in Crow's-Foot-Notation angeben",
    "Min-Max-Notation lesen und anwenden",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        ER-Modell: ~50 % der letzten Prüfungen, ~68 Punkte kumuliert. Oft in Kombination mit der
        Überführung ins relationale Datenmodell.
      </Callout>

      <h2>1. Grundbausteine</h2>
      <ul>
        <li><strong>Entität:</strong> Rechteck mit Namen (Kunde, Bestellung, Artikel).</li>
        <li><strong>Attribut:</strong> Ellipse (Name, Preis, Datum). Primärschlüssel unterstrichen.</li>
        <li><strong>Beziehung:</strong> Raute zwischen zwei Entitäten.</li>
      </ul>

      <h2>2. Kardinalitäten</h2>
      <table>
        <thead>
          <tr><th>Chen</th><th>Crow's Foot</th><th>Min-Max</th><th>Bedeutung</th></tr>
        </thead>
        <tbody>
          <tr><td>1 : 1</td><td>∥ — ∥</td><td>(1,1):(1,1)</td><td>genau 1 ↔ genau 1</td></tr>
          <tr><td>1 : n</td><td>∥ — Krähenfuß</td><td>(1,1):(0,n)</td><td>einer zu vielen</td></tr>
          <tr><td>n : m</td><td>Krähenfuß — Krähenfuß</td><td>(0,n):(0,m)</td><td>viele zu vielen</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Min-Max liest man so: <InlineCode>(min, max)</InlineCode> = wie viele Partner muss/darf die
        jeweilige Entität haben? Ein Kunde muss 0..n Bestellungen haben, eine Bestellung gehört zu
        genau 1 Kunde → <InlineCode>Kunde (0,n) – hat – (1,1) Bestellung</InlineCode>.
      </Callout>

      <h2>3. Von der Text-Aufgabe zum ERM</h2>
      <ol>
        <li>Substantive sammeln → Entitäts-Kandidaten.</li>
        <li>Verben zwischen ihnen → Beziehungen.</li>
        <li>Pro Beziehung beide Kardinalitäten bestimmen (Frage: »muss«/»darf«/»kann«/»wie viele?«).</li>
        <li>Schwache Entitäten prüfen: existiert X ohne Y? Wenn nicht → schwache Entität.</li>
      </ol>

      <CodeBlock caption="Beispiel – textuell skizziert">
{`[Kunde] (1,1) ──◇ erteilt ◇── (0,n) [Bestellung]
[Bestellung] (1,n) ──◇ enthält ◇── (0,n) [Artikel]    (Attribut menge an Beziehung)`}
      </CodeBlock>

      <h2>4. Schwache Entitäten</h2>
      <p>
        Eine Bestellposition existiert nur, solange es die Bestellung gibt. In der Notation doppeltes
        Rechteck + doppelte Raute. Beim Überführen ins relationale Modell: Komposition in eine eigene
        Tabelle mit zusammengesetztem PK.
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question:
        "»Jede Abteilung hat 1..n Mitarbeiter, jeder Mitarbeiter gehört zu genau 1 Abteilung.« In Min-Max aus Sicht der Abteilung?",
      options: [
        { id: "a", text: "(0,1) : (1,n)", correct: false },
        { id: "b", text: "(1,1) : (1,n)", correct: false },
        { id: "c", text: "(1,n) : (1,1) – Abteilung ↔ Mitarbeiter", correct: true,
          explanation: "Abteilung hat mindestens 1 MA (1,n), jeder MA gehört zu genau 1 Abteilung (1,1)." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wie wird eine n:m-Beziehung mit Beziehungsattributen (z. B. Menge) in ein relationales Schema überführt?",
      options: [
        { id: "a", text: "In eine der beiden Haupttabellen integriert.", correct: false },
        { id: "b", text: "Als Zwischentabelle, die das Attribut mit den beiden FKs enthält.", correct: true },
        { id: "c", text: "Gar nicht, Beziehungsattribute werden entfernt.", correct: false },
      ],
    },
  ],
  examTips: [
    "Primärschlüssel im ERM unterstrichen – nicht vergessen!",
    "Beziehungsname aktiv formulieren (erteilt, enthält, arbeitet_in).",
    "Entscheide dich auf einen Notationsstil (Chen ODER Crow's Foot) und bleib dabei.",
  ],
  related: ["relationales-datenmodell", "normalisierung", "sql-ddl"],
};
