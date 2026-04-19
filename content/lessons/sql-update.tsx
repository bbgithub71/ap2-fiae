import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const sqlUpdate: Lesson = {
  slug: "sql-update",
  objectives: [
    "UPDATE mit korrektem WHERE-Filter schreiben",
    "Mehrere Spalten in einem Statement aktualisieren",
    "Transaktions-Absicherung verstehen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        UPDATE kam in ~50 % der letzten Prüfungen vor. Häufig kombiniert mit einer Bedingung über
        mehrere Tabellen (Subquery im WHERE).
      </Callout>

      <h2>1. Grundform</h2>
      <CodeBlock lang="sql">
{`UPDATE tabelle
SET    spalte1 = neuer_wert,
       spalte2 = spalte2 * 1.1
WHERE  bedingung;`}
      </CodeBlock>

      <Callout variant="warn">
        Vergisst du das <strong>WHERE</strong>, wird die <em>komplette</em> Tabelle verändert. In der
        Prüfung und produktiv ein Desaster – immer prüfen, ob ein Filter steht.
      </Callout>

      <h2>2. Mehrere Spalten</h2>
      <CodeBlock lang="sql">
{`UPDATE kunde
SET    stadt = 'Berlin',
       name  = UPPER(name)
WHERE  id = 42;`}
      </CodeBlock>

      <h2>3. UPDATE mit Subquery</h2>
      <CodeBlock lang="sql">
{`-- Preis um 10 % erhöhen für Artikel, die noch nie bestellt wurden
UPDATE artikel
SET    preis = preis * 1.10
WHERE  id NOT IN (
         SELECT DISTINCT artikel_id FROM bestellposition
       );`}
      </CodeBlock>

      <h2>4. Sicherheitsnetz per Transaktion</h2>
      <CodeBlock lang="sql">
{`BEGIN TRANSACTION;
UPDATE konto SET saldo = saldo - 100 WHERE id = 1;
UPDATE konto SET saldo = saldo + 100 WHERE id = 2;
-- Bei Fehler:  ROLLBACK;
COMMIT;`}
      </CodeBlock>
    </div>
  ),
  exercises: [
    {
      kind: "sql",
      id: "sql-1",
      task: "Erhöhe den Preis aller Artikel um 5 %.",
      sampleSolution: `UPDATE artikel SET preis = preis * 1.05;`,
      check: {
        mustMatch: [{ pattern: 'update\\s+artikel', flags: 'i' }, { pattern: 'set\\s+preis\\s*=\\s*preis\\s*\\*\\s*1\\.05', flags: 'i' }],
      },
    },
    {
      kind: "sql",
      id: "sql-2",
      task:
        "Setze für alle Kunden aus Hamburg die Spalte `aktiv` auf FALSE.",
      sampleSolution: `UPDATE kunde
SET aktiv = FALSE
WHERE stadt = 'Hamburg';`,
      check: {
        mustMatch: [
          { pattern: 'update\\s+kunde', flags: 'i' },
          { pattern: 'set\\s+aktiv\\s*=\\s*(false|0)', flags: 'i' },
          { pattern: 'where\\s+stadt\\s*=\\s*\'hamburg\'', flags: 'i' },
        ],
      },
    },
    {
      kind: "mc",
      id: "mc-1",
      question: "Was passiert bei UPDATE kunde SET stadt='Berlin'; (ohne WHERE)?",
      options: [
        { id: "a", text: "Es tritt ein Syntaxfehler auf.", correct: false },
        { id: "b", text: "Alle Zeilen werden auf 'Berlin' gesetzt.", correct: true },
        { id: "c", text: "Nur die erste Zeile wird geändert.", correct: false },
      ],
    },
  ],
  examTips: [
    "Immer erst per SELECT prüfen, welche Zeilen betroffen wären.",
    "Bei mehreren DML-Statements in einer Transaktion klammern.",
    "SQL-Syntax-Beiblatt hilft bei Funktionen wie UPPER, ROUND, NOW.",
  ],
  related: ["sql-select", "sql-joins", "sql-grundlagen", "transaktionen-acid"],
};
