import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const sqlJoins: Lesson = {
  slug: "sql-joins",
  objectives: [
    "INNER, LEFT, RIGHT und FULL OUTER JOIN sicher unterscheiden",
    "Beim JOIN die passenden ON-Bedingungen formulieren",
    "Selbst-Joins und kartesische Produkte erkennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Der Klassiker in jeder SELECT-Aufgabe. Wer LEFT JOIN verstanden hat, holt die Punkte bei »alle
        Kunden (auch solche ohne Bestellung)«.
      </Callout>

      <h2>1. JOIN-Typen – die Mengenlogik</h2>
      <table>
        <thead>
          <tr><th>JOIN</th><th>Ergebnis</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><InlineCode>INNER JOIN</InlineCode></td>
            <td>Schnittmenge: nur Zeilen, die auf BEIDEN Seiten einen Treffer haben</td>
          </tr>
          <tr>
            <td><InlineCode>LEFT JOIN</InlineCode></td>
            <td>Alle Zeilen der linken Tabelle + passende rechts; fehlende rechts als NULL</td>
          </tr>
          <tr>
            <td><InlineCode>RIGHT JOIN</InlineCode></td>
            <td>Spiegelbildlich</td>
          </tr>
          <tr>
            <td><InlineCode>FULL OUTER JOIN</InlineCode></td>
            <td>Alle Zeilen beider Tabellen, unpassend ⇒ NULL</td>
          </tr>
          <tr>
            <td><InlineCode>CROSS JOIN</InlineCode></td>
            <td>Kartesisches Produkt – alle möglichen Kombinationen</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Syntax-Vergleich</h2>
      <CodeBlock lang="sql">
{`-- Alte Komma-Syntax (funktioniert, aber unübersichtlich)
SELECT k.name, b.datum
FROM kunde k, bestellung b
WHERE k.id = b.kunde_id;

-- Modern mit JOIN … ON
SELECT k.name, b.datum
FROM kunde k
INNER JOIN bestellung b ON b.kunde_id = k.id;`}
      </CodeBlock>

      <h2>3. LEFT JOIN – der häufige Punktbringer</h2>
      <p>Frage: »Zeige alle Kunden und die Anzahl ihrer Bestellungen, auch die ohne Bestellung.«</p>
      <CodeBlock lang="sql">
{`SELECT k.name, COUNT(b.id) AS anzahl
FROM kunde k
LEFT JOIN bestellung b ON b.kunde_id = k.id
GROUP BY k.name;`}
      </CodeBlock>
      <Callout variant="tip">
        <strong>Typischer Fehler:</strong> <InlineCode>COUNT(*)</InlineCode> statt <InlineCode>COUNT(b.id)</InlineCode>.
        COUNT(*) zählt auch NULL-Zeilen → Kunden ohne Bestellung bekommen fälschlich »1«.
      </Callout>

      <h2>4. Self-Join</h2>
      <p>Dieselbe Tabelle zweimal referenzieren – Aliasse sind Pflicht.</p>
      <CodeBlock lang="sql">
{`-- Mitarbeiter + ihre Vorgesetzten
SELECT m.name AS mitarbeiter, v.name AS vorgesetzter
FROM mitarbeiter m
LEFT JOIN mitarbeiter v ON v.id = m.vorgesetzter_id;`}
      </CodeBlock>
    </div>
  ),
  exercises: [
    {
      kind: "sql",
      id: "sql-1",
      task: "Liefere zu jeder Bestellung (ID, Datum) den Kundennamen. Bestellungen ohne Kundeneintrag sollen trotzdem angezeigt werden.",
      sampleSolution: `SELECT b.id, b.datum, k.name
FROM bestellung b
LEFT JOIN kunde k ON k.id = b.kunde_id;`,
      check: {
        mustMatch: [{ pattern: 'from\\s+bestellung', flags: 'i' }, { pattern: 'left\\s+(outer\\s+)?join\\s+kunde', flags: 'i' }, { pattern: 'on\\s+k\\.id\\s*=\\s*b\\.kunde_id', flags: 'i' }],
      },
    },
    {
      kind: "mc",
      id: "mc-1",
      question:
        "Welcher JOIN entspricht der Schnittmenge (nur Zeilen, die auf beiden Seiten passen)?",
      options: [
        { id: "a", text: "LEFT JOIN", correct: false },
        { id: "b", text: "INNER JOIN", correct: true },
        { id: "c", text: "FULL OUTER JOIN", correct: false },
        { id: "d", text: "CROSS JOIN", correct: false },
      ],
    },
  ],
  examTips: [
    "Aliasse nutzen (k, b, a) – spart Schreiben und macht Abfragen lesbar.",
    "ON-Klausel = Join-Bedingung. Weitere Filter kommen in WHERE (oder bewusst mit in ON, wenn sich sonst LEFT JOIN in INNER JOIN verwandelt).",
    "Bei LEFT JOIN + WHERE auf rechte Spalte: ungewollt INNER JOIN! Dann Bedingung in ON verschieben.",
  ],
  related: ["sql-select", "sql-grundlagen"],
};
