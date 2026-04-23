import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const sqlDelete: Lesson = {
  slug: "sql-delete",
  objectives: [
    "DELETE-Statements mit Filter schreiben",
    "Unterschied DELETE vs. TRUNCATE benennen",
    "Auswirkungen von Fremdschlüssel-Constraints verstehen",
  ],
  body: (
    <div className="prose-content">
      <h2>1. Syntax</h2>
      <CodeBlock lang="sql">
{`DELETE FROM tabelle
WHERE bedingung;`}
      </CodeBlock>

      <Callout variant="warn">
        Ohne WHERE-Klausel werden alle Zeilen gelöscht – die Tabelle selbst bleibt aber bestehen.
      </Callout>

      <h2>2. DELETE vs. TRUNCATE vs. DROP</h2>
      <table>
        <thead>
          <tr><th>Befehl</th><th>Was passiert?</th><th>Rollback?</th></tr>
        </thead>
        <tbody>
          <tr><td><InlineCode>DELETE FROM t</InlineCode></td><td>Zeilen löschen, Struktur bleibt</td><td>ja (DML, transaktional)</td></tr>
          <tr><td><InlineCode>TRUNCATE TABLE t</InlineCode></td><td>Zeilen löschen, ID-Counter reset, Struktur bleibt</td><td>abhängig vom DBMS, meist nein</td></tr>
          <tr><td><InlineCode>DROP TABLE t</InlineCode></td><td>Tabelle selbst gelöscht</td><td>nein</td></tr>
        </tbody>
      </table>

      <h2>3. Mit Fremdschlüsseln</h2>
      <p>Wird versucht, eine Zeile zu löschen, auf die ein FK verweist, hängt das Verhalten von der Constraint ab:</p>
      <ul>
        <li><strong>RESTRICT</strong> / <strong>NO ACTION</strong> (Default): DELETE verweigert.</li>
        <li><strong>CASCADE</strong>: Abhängige Zeilen werden ebenfalls gelöscht.</li>
        <li><strong>SET NULL</strong>: FK-Spalte in abhängigen Zeilen wird auf NULL gesetzt.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "sql",
      id: "sql-1",
      task: "Lösche alle inaktiven Kunden (Spalte `aktiv = FALSE`).",
      sampleSolution: `DELETE FROM kunde WHERE aktiv = FALSE;`,
      check: {
        mustMatch: [{ pattern: 'delete\\s+from\\s+kunde', flags: 'i' }, { pattern: 'where\\s+aktiv\\s*=\\s*(false|0)', flags: 'i' }],
      },
    },
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Aussage zu TRUNCATE TABLE stimmt?",
      options: [
        { id: "a", text: "Es löscht Struktur und Daten.", correct: false },
        { id: "b", text: "Es leert die Tabelle; die Struktur bleibt, Auto-IDs werden meist zurückgesetzt.", correct: true },
        { id: "c", text: "Es ist äquivalent zu DROP TABLE.", correct: false },
      ],
    },
  ],
  examTips: [
    "Immer zuerst mit SELECT prüfen, welche Zeilen betroffen wären.",
    "DELETE ist transaktional – lieber einmal zu viel COMMIT/ROLLBACK erwähnen.",
    "Prüfer:innen mögen, wenn du ON DELETE CASCADE vs. RESTRICT gezielt benutzt.",
  ],
  resources: [
    {
      kind: "video",
      title: "Datenbanken und SQL #9 – Datensätze löschen mit DELETE",
      url: "https://www.youtube.com/watch?v=FwIqrLCuf4E",
      note: "Fokus auf DELETE mit WHERE-Bedingung.",
    },
    {
      kind: "video",
      title: "SQL: Insert, Delete und Update",
      url: "https://www.youtube.com/watch?v=uj6GjI6odpM",
      note: "Überblick über alle DML-Änderungsbefehle.",
    },
  ],
  related: ["sql-grundlagen", "sql-update", "sql-ddl"],
};
