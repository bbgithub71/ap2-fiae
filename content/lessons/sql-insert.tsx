import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const sqlInsert: Lesson = {
  slug: "sql-insert",
  objectives: [
    "INSERT-Statements korrekt formulieren (mit und ohne Spaltenliste)",
    "Bulk-INSERT mit mehreren Tupeln",
    "INSERT … SELECT für Daten-Übernahme aus anderer Tabelle",
  ],
  body: (
    <div className="prose-content">
      <h2>1. Grundform</h2>
      <CodeBlock lang="sql">
{`INSERT INTO kunde (id, name, stadt)
VALUES (42, 'Meier', 'Berlin');`}
      </CodeBlock>
      <Callout variant="tip">
        Spaltenliste explizit angeben! Ohne Liste verlässt du dich auf die Definitionsreihenfolge – das
        bricht, sobald die Tabelle einmal erweitert wird.
      </Callout>

      <h2>2. Mehrere Zeilen</h2>
      <CodeBlock lang="sql">
{`INSERT INTO artikel (id, bezeichnung, preis)
VALUES (1, 'Schraube', 0.19),
       (2, 'Mutter',   0.10),
       (3, 'Scheibe',  0.05);`}
      </CodeBlock>

      <h2>3. INSERT … SELECT</h2>
      <CodeBlock lang="sql">
{`-- Inaktive Kunden in Archiv kopieren
INSERT INTO kunde_archiv (id, name, stadt)
SELECT id, name, stadt
FROM kunde
WHERE aktiv = FALSE;`}
      </CodeBlock>

      <h2>4. Auto-Inkrement & NULL</h2>
      <p>
        Auto-Inkrement-Spalten lässt man in der Spaltenliste meistens weg. Für optionale Spalten kann
        <code> DEFAULT</code> oder <code>NULL</code> als Wert stehen.
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "sql",
      id: "sql-1",
      task: "Füge einen neuen Kunden hinzu: id = 7, name = 'Schmidt', stadt = 'Hamburg'.",
      sampleSolution: `INSERT INTO kunde (id, name, stadt) VALUES (7, 'Schmidt', 'Hamburg');`,
      check: {
        mustMatch: [
          { pattern: 'insert\\s+into\\s+kunde', flags: 'i' },
          { pattern: 'values\\s*\\(\\s*7\\s*,\\s*\'schmidt\'\\s*,\\s*\'hamburg\'\\s*\\)', flags: 'i' },
        ],
      },
    },
    {
      kind: "mc",
      id: "mc-1",
      question: "Warum ist eine explizite Spaltenliste bei INSERT sinnvoll?",
      options: [
        { id: "a", text: "Sie ist Pflicht laut SQL-Standard.", correct: false },
        { id: "b", text: "Sie macht das Statement robust gegen spätere Schemaänderungen.", correct: true },
        { id: "c", text: "Sie verhindert, dass der Primärschlüssel vergeben wird.", correct: false },
      ],
    },
  ],
  examTips: [
    "Bei Beispielen in der Prüfung: Werte in richtiger Reihenfolge + Zeichenketten in Hochkommas.",
    "DEFAULT / NULL explizit hinschreiben, wenn im Aufgabentext gefordert.",
  ],
  related: ["sql-grundlagen", "sql-update", "sql-delete", "sql-ddl"],
};
