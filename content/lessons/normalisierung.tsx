import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const normalisierung: Lesson = {
  slug: "normalisierung",
  objectives: [
    "Die drei Normalformen (1NF, 2NF, 3NF) erklären und begründen",
    "Redundanzen und Anomalien in Tabellen erkennen",
    "Eine Tabelle von 0NF schrittweise bis 3NF überführen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Normalisierung ist Pflichtstoff – kommt gern zusammen mit einer Tabelle mit Redundanzen.
        Prüfer:innen wollen sehen, dass du Schritte <em>benennen</em> und <em>ausführen</em> kannst.
      </Callout>

      <h2>1. Warum normalisieren?</h2>
      <p>
        Unnormalisierte Tabellen führen zu <strong>Anomalien</strong>:
      </p>
      <ul>
        <li><strong>Einfüge-Anomalie:</strong> Man kann Kunde X nicht anlegen, weil eine andere Spalte Pflicht ist.</li>
        <li><strong>Änderungs-Anomalie:</strong> Eine Änderung muss in mehreren Zeilen passieren (Inkonsistenzgefahr).</li>
        <li><strong>Lösch-Anomalie:</strong> Löscht man die letzte Bestellung, verliert man auch die Kundendaten.</li>
      </ul>

      <h2>2. 1. Normalform (1NF)</h2>
      <p>Alle Attributwerte sind <strong>atomar</strong> – keine Listen, Mengen oder zusammengesetzten Werte.</p>
      <CodeBlock caption="0NF">
{`kunde (id, name,     telefone)
      1, "Meier",    "030-1, 030-2"`}
      </CodeBlock>
      <CodeBlock caption="1NF – Telefonnummern in eigene Tabelle">
{`kunde       (id, name)
telefon     (kunde_id, nummer)    PK = (kunde_id, nummer)`}
      </CodeBlock>

      <h2>3. 2. Normalform (2NF)</h2>
      <p>
        Ist in 1NF <em>und</em> jedes Nicht-Schlüsselattribut hängt vom <strong>gesamten</strong>{" "}
        Schlüssel ab (nicht nur von einem Teil). Relevant nur bei zusammengesetztem PK.
      </p>
      <CodeBlock caption="Problem: bestellposition(bestell_id, artikel_id, menge, artikelname)">
{`artikelname hängt NUR vom artikel_id ab, nicht von bestell_id → verletzt 2NF`}
      </CodeBlock>
      <CodeBlock caption="Lösung">
{`artikel         (id, name)
bestellposition (bestell_id, artikel_id, menge)`}
      </CodeBlock>

      <h2>4. 3. Normalform (3NF)</h2>
      <p>Ist in 2NF <em>und</em> es gibt keine <strong>transitiven Abhängigkeiten</strong> zwischen Nicht-Schlüsselattributen.</p>
      <CodeBlock caption="Problem: kunde(id, name, plz, ort)">
{`ort hängt von plz ab → transitiv über plz → verletzt 3NF`}
      </CodeBlock>
      <CodeBlock caption="Lösung">
{`kunde     (id, name, plz)
plz_ort   (plz, ort)`}
      </CodeBlock>

      <h2>5. Merksatz</h2>
      <Callout variant="tip">
        »The key, the whole key, and nothing but the key.«<br />
        1NF = <em>the key</em> (es gibt einen PK und alles ist atomar)<br />
        2NF = <em>the whole key</em> (kein Teilschlüssel reicht)<br />
        3NF = <em>nothing but the key</em> (keine Zwischenabhängigkeiten)
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Tabelle: lieferant(id, name, plz, ort). In welcher Normalform ist sie?",
      options: [
        { id: "a", text: "1NF", correct: false },
        { id: "b", text: "2NF", correct: true,
          explanation: "Sie ist in 2NF (PK ist id, ein einfacher Schlüssel). Aber nicht in 3NF wegen plz→ort." },
        { id: "c", text: "3NF", correct: false, explanation: "3NF fehlt wegen transitiver Abhängigkeit plz→ort." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was bedeutet »atomar« in 1NF?",
      options: [
        { id: "a", text: "Es gibt genau eine Tabelle pro Entität.", correct: false },
        { id: "b", text: "Jeder Attributwert enthält nur einen unteilbaren Wert.", correct: true },
        { id: "c", text: "Alle Spalten sind Integer.", correct: false },
      ],
    },
  ],
  examTips: [
    "In Aufgaben oft: Tabelle mit Redundanzen → begründete Überführung in 1NF, 2NF, 3NF.",
    "Nicht-Schlüsselattribute in den Fokus stellen – das sind die Ursachen von 2NF- und 3NF-Verletzungen.",
    "Formuliere deine Lösung mit den Namen der neuen Tabellen + ihren PKs/FKs.",
  ],
  related: ["relationales-datenmodell", "erm"],
};
