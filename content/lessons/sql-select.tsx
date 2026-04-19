import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

const schema = `-- Beispielschema für die Übungen
kunde (id, name, stadt)
artikel (id, bezeichnung, preis)
bestellung (id, kunde_id, datum)
bestellposition (id, bestellung_id, artikel_id, menge)`;

export const sqlSelect: Lesson = {
  slug: "sql-select",
  objectives: [
    "SELECT-Abfragen mit WHERE, JOIN, GROUP BY, HAVING und ORDER BY schreiben",
    "Aggregatfunktionen korrekt anwenden und WHERE vs. HAVING unterscheiden",
    "Unterabfragen (korreliert / unkorreliert) lesen und schreiben",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        SELECT-Abfragen sind nach Pseudocode der zweitgrößte Punktbringer der AP2
        (<strong>~155 Punkte</strong>). Wer JOINs und GROUP BY beherrscht, holt viele Punkte.
      </Callout>

      <h2>1. Grundgerüst</h2>
      <CodeBlock lang="sql">
{`SELECT  spalten / ausdrücke
FROM    tabelle1
JOIN    tabelle2 ON …
WHERE   bedingung
GROUP BY ausdruck
HAVING   aggregat-bedingung
ORDER BY ausdruck [ASC|DESC]
LIMIT    n;`}
      </CodeBlock>

      <h2>2. Filter mit WHERE</h2>
      <CodeBlock lang="sql">
{`SELECT name, stadt
FROM kunde
WHERE stadt IN ('Berlin', 'Hamburg')
  AND name LIKE 'M%';`}
      </CodeBlock>
      <p>
        <strong>Operatoren</strong>: <InlineCode>=</InlineCode> <InlineCode>&lt;&gt;</InlineCode>{" "}
        <InlineCode>&lt;</InlineCode> <InlineCode>&gt;=</InlineCode>, <InlineCode>BETWEEN a AND b</InlineCode>,{" "}
        <InlineCode>IN (…)</InlineCode>, <InlineCode>LIKE 'Muster%'</InlineCode>, <InlineCode>IS NULL</InlineCode>.
      </p>

      <Callout variant="warn">
        <InlineCode>NULL</InlineCode> ist keine Gleichheit! <InlineCode>WHERE spalte = NULL</InlineCode> liefert
        immer <em>unknown</em>. Nutze <InlineCode>IS NULL</InlineCode> / <InlineCode>IS NOT NULL</InlineCode>.
      </Callout>

      <h2>3. JOINs</h2>
      <table>
        <thead>
          <tr><th>Join</th><th>Effekt</th></tr>
        </thead>
        <tbody>
          <tr><td><InlineCode>INNER JOIN</InlineCode></td><td>nur Zeilen mit Treffer auf beiden Seiten</td></tr>
          <tr><td><InlineCode>LEFT JOIN</InlineCode></td><td>alle Zeilen der linken Tabelle, rechte ggf. NULL</td></tr>
          <tr><td><InlineCode>RIGHT JOIN</InlineCode></td><td>spiegelbildlich</td></tr>
          <tr><td><InlineCode>FULL OUTER JOIN</InlineCode></td><td>alle Zeilen beider Seiten, unpassende mit NULL</td></tr>
          <tr><td><InlineCode>CROSS JOIN</InlineCode></td><td>kartesisches Produkt</td></tr>
        </tbody>
      </table>

      <CodeBlock lang="sql">
{`-- Alle Bestellungen mit Kundenname und Summe je Bestellung
SELECT b.id, k.name, SUM(bp.menge * a.preis) AS summe
FROM bestellung b
JOIN kunde k            ON k.id = b.kunde_id
JOIN bestellposition bp ON bp.bestellung_id = b.id
JOIN artikel a          ON a.id = bp.artikel_id
GROUP BY b.id, k.name
ORDER BY summe DESC;`}
      </CodeBlock>

      <h2>4. Aggregation</h2>
      <table>
        <thead>
          <tr><th>Funktion</th><th>Zweck</th></tr>
        </thead>
        <tbody>
          <tr><td><InlineCode>COUNT(*)</InlineCode></td><td>alle Zeilen</td></tr>
          <tr><td><InlineCode>COUNT(spalte)</InlineCode></td><td>Zeilen mit nicht-NULL-Wert</td></tr>
          <tr><td><InlineCode>SUM</InlineCode> / <InlineCode>AVG</InlineCode></td><td>Summe / Durchschnitt (ignorieren NULL)</td></tr>
          <tr><td><InlineCode>MIN</InlineCode> / <InlineCode>MAX</InlineCode></td><td>kleinster / größter Wert</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Faustregel: <strong>Alles, was in SELECT steht und <em>nicht</em> aggregiert wird, muss in
        GROUP BY.</strong>
      </Callout>

      <h2>5. WHERE vs. HAVING</h2>
      <CodeBlock lang="sql">
{`-- Kunden mit mindestens 3 Bestellungen in Berlin
SELECT k.name, COUNT(*) AS anzahl
FROM kunde k
JOIN bestellung b ON b.kunde_id = k.id
WHERE k.stadt = 'Berlin'        -- filtert Zeilen
GROUP BY k.name
HAVING COUNT(*) >= 3;           -- filtert Gruppen`}
      </CodeBlock>

      <h2>6. Unterabfragen</h2>
      <CodeBlock lang="sql">
{`-- Alle Artikel, die teurer sind als der Durchschnitt
SELECT bezeichnung, preis
FROM artikel
WHERE preis > (SELECT AVG(preis) FROM artikel);`}
      </CodeBlock>

      <CodeBlock lang="sql">
{`-- Kunden, die noch nie bestellt haben
SELECT name
FROM kunde k
WHERE NOT EXISTS (
  SELECT 1 FROM bestellung b WHERE b.kunde_id = k.id
);`}
      </CodeBlock>
    </div>
  ),
  exercises: [
    {
      kind: "sql",
      id: "sql-1",
      task: "Liefere Name und Stadt aller Kunden aus Hamburg, alphabetisch nach Name sortiert.",
      schema,
      sampleSolution: `SELECT name, stadt
FROM kunde
WHERE stadt = 'Hamburg'
ORDER BY name ASC;`,
      check: {
        mustMatch: [
          { pattern: 'select\\s+name.*stadt', flags: 'i' },
          { pattern: 'from\\s+kunde', flags: 'i' },
          { pattern: 'where\\s+stadt\\s*=\\s*\'hamburg\'', flags: 'i' },
          { pattern: 'order\\s+by\\s+name', flags: 'i' },
        ],
      },
      hint: "WHERE für die Stadt, ORDER BY für die Sortierung.",
    },
    {
      kind: "sql",
      id: "sql-2",
      task: "Liefere pro Kunde die Anzahl seiner Bestellungen (Spalten: name, anzahl). Kunden ohne Bestellung bitte mit 0 anzeigen.",
      schema,
      sampleSolution: `SELECT k.name, COUNT(b.id) AS anzahl
FROM kunde k
LEFT JOIN bestellung b ON b.kunde_id = k.id
GROUP BY k.name;`,
      check: {
        mustMatch: [
          { pattern: 'left\\s+(outer\\s+)?join', flags: 'i' },
          { pattern: 'count\\s*\\(', flags: 'i' },
          { pattern: 'group\\s+by', flags: 'i' },
        ],
      },
      hint: "Damit Kunden ohne Bestellung trotzdem auftauchen: LEFT JOIN.",
    },
    {
      kind: "sql",
      id: "sql-3",
      task: "Finde alle Artikel, die teurer sind als der durchschnittliche Artikelpreis.",
      schema,
      sampleSolution: `SELECT bezeichnung, preis
FROM artikel
WHERE preis > (SELECT AVG(preis) FROM artikel);`,
      check: {
        mustMatch: [
          { pattern: 'select\\s+bezeichnung.*preis', flags: 'i' },
          { pattern: 'from\\s+artikel', flags: 'i' },
          { pattern: 'where\\s+preis\\s*>\\s*\\(\\s*select\\s+avg\\s*\\(\\s*preis\\s*\\)\\s+from\\s+artikel\\s*\\)', flags: 'i' },
        ],
      },
      hint: "Unterabfrage mit AVG() in der WHERE-Klausel.",
    },
  ],
  examTips: [
    "JOIN-Bedingungen gehören in ON, nicht in WHERE – Ausnahme: bewusste Zusatzfilter.",
    "HAVING nur für Aggregate, WHERE nur für Zeilen – beim Mischen verwechselt man das gern.",
    "Bei Alias-Namen in ORDER BY immer ok, in WHERE meistens nicht.",
  ],
  related: ["sql-grundlagen", "sql-joins", "sql-update", "sql-insert"],
};
