import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const sqlGrundlagen: Lesson = {
  slug: "sql-grundlagen",
  objectives: [
    "Die fünf SQL-Sprachkomponenten DDL, DML, DQL, DCL, TCL benennen und einordnen",
    "Typische Befehle je Kategorie kennen und auseinanderhalten",
    "Reihenfolge einer SELECT-Auswertung (logische Verarbeitung) verstehen",
  ],
  keyTerms: [
    { term: "DDL", definition: "Data Definition Language – Struktur definieren: CREATE, ALTER, DROP, TRUNCATE." },
    { term: "DML", definition: "Data Manipulation Language – Datensätze ändern: INSERT, UPDATE, DELETE, MERGE." },
    { term: "DQL", definition: "Data Query Language – Daten lesen: SELECT." },
    { term: "DCL", definition: "Data Control Language – Rechte: GRANT, REVOKE." },
    { term: "TCL", definition: "Transaction Control Language – Transaktionen: COMMIT, ROLLBACK, SAVEPOINT." },
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        SQL kam in <strong>100 % der letzten 12 AP2-Prüfungen</strong> vor (~200 Punkte kumuliert). In
        der schriftlichen Prüfung liegt ein <strong>SQL-Syntax-Beiblatt</strong> bei – es hilft dir bei
        Funktionsnamen, ersetzt aber nicht das Üben.
      </Callout>

      <h2>1. Die 5 Sprachkomponenten</h2>
      <table>
        <thead>
          <tr>
            <th>Kategorie</th>
            <th>Befehle</th>
            <th>Zweck</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>DDL</strong><br />Data Definition</td>
            <td><InlineCode>CREATE</InlineCode>, <InlineCode>ALTER</InlineCode>, <InlineCode>DROP</InlineCode>, <InlineCode>TRUNCATE</InlineCode></td>
            <td>Strukturen anlegen / ändern</td>
          </tr>
          <tr>
            <td><strong>DML</strong><br />Data Manipulation</td>
            <td><InlineCode>INSERT</InlineCode>, <InlineCode>UPDATE</InlineCode>, <InlineCode>DELETE</InlineCode></td>
            <td>Datensätze schreiben</td>
          </tr>
          <tr>
            <td><strong>DQL</strong><br />Data Query</td>
            <td><InlineCode>SELECT</InlineCode></td>
            <td>Datensätze lesen</td>
          </tr>
          <tr>
            <td><strong>DCL</strong><br />Data Control</td>
            <td><InlineCode>GRANT</InlineCode>, <InlineCode>REVOKE</InlineCode></td>
            <td>Rechte vergeben / entziehen</td>
          </tr>
          <tr>
            <td><strong>TCL</strong><br />Transaction Control</td>
            <td><InlineCode>COMMIT</InlineCode>, <InlineCode>ROLLBACK</InlineCode>, <InlineCode>SAVEPOINT</InlineCode></td>
            <td>Transaktionen steuern</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="new">
        <strong>DCL (GRANT/REVOKE)</strong> tauchte in Sommer 2025 erstmals in der AP2 auf – sollte
        also nicht überraschen.
      </Callout>

      <h2>2. CRUD – die vier Grundoperationen</h2>
      <p>
        Die CRUD-Operationen fassen den Lebenszyklus eines Datensatzes zusammen und mappen direkt auf
        DML/DQL:
      </p>
      <ul>
        <li><strong>C</strong>reate → <InlineCode>INSERT</InlineCode></li>
        <li><strong>R</strong>ead → <InlineCode>SELECT</InlineCode></li>
        <li><strong>U</strong>pdate → <InlineCode>UPDATE</InlineCode></li>
        <li><strong>D</strong>elete → <InlineCode>DELETE</InlineCode></li>
      </ul>

      <h2>3. Logische Verarbeitungsreihenfolge einer SELECT-Abfrage</h2>
      <p>
        Die Reihenfolge, in der du es schreibst, ist <em>nicht</em> die Reihenfolge, in der die DB es
        auswertet. Merken!
      </p>
      <ol>
        <li><InlineCode>FROM</InlineCode> / <InlineCode>JOIN</InlineCode> – Quelltabellen bereitstellen</li>
        <li><InlineCode>WHERE</InlineCode> – Zeilen filtern</li>
        <li><InlineCode>GROUP BY</InlineCode> – gruppieren</li>
        <li><InlineCode>HAVING</InlineCode> – gruppierte Zeilen filtern</li>
        <li><InlineCode>SELECT</InlineCode> – Spalten berechnen/auswählen</li>
        <li><InlineCode>DISTINCT</InlineCode> – Duplikate entfernen</li>
        <li><InlineCode>ORDER BY</InlineCode> – sortieren</li>
        <li><InlineCode>LIMIT</InlineCode>/<InlineCode>OFFSET</InlineCode> – Ausschnitt wählen</li>
      </ol>

      <Callout variant="tip">
        Konsequenz: In <InlineCode>WHERE</InlineCode> darfst du <em>keine</em> Aggregatfunktionen (SUM,
        AVG, …) benutzen – die werden erst im GROUP-BY-Schritt gebildet. Dafür gibt's{" "}
        <InlineCode>HAVING</InlineCode>.
      </Callout>

      <h2>4. Ein Mini-Beispiel</h2>
      <CodeBlock lang="sql">
{`SELECT k.name, SUM(b.betrag) AS gesamt
FROM kunde k
JOIN bestellung b ON b.kunde_id = k.id
WHERE b.jahr = 2025
GROUP BY k.name
HAVING SUM(b.betrag) > 1000
ORDER BY gesamt DESC
LIMIT 10;`}
      </CodeBlock>
      <p>Liest sich: »Top-10-Kunden 2025 nach Umsatz, nur Umsatz &gt; 1.000 €.«</p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Zu welcher Kategorie gehört der Befehl TRUNCATE TABLE?",
      options: [
        { id: "a", text: "DML", correct: false, explanation: "DML wirkt zeilenweise und ist transaktional rollbackbar." },
        { id: "b", text: "DDL", correct: true, explanation: "TRUNCATE ändert die Struktur (und leert die Tabelle) – gilt als DDL." },
        { id: "c", text: "DCL", correct: false },
        { id: "d", text: "TCL", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Reihenfolge entspricht der logischen Auswertung einer SELECT-Abfrage?",
      options: [
        { id: "a", text: "SELECT → FROM → WHERE → GROUP BY → ORDER BY", correct: false },
        { id: "b", text: "FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY", correct: true,
          explanation: "Genau. Deshalb kann SELECT auf Alias-Spalten meistens schon zugreifen, WHERE aber noch nicht." },
        { id: "c", text: "FROM → SELECT → WHERE → HAVING → ORDER BY", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "GRANT SELECT ON kunde TO berichter; – welche Kategorie?",
      options: [
        { id: "a", text: "DML", correct: false },
        { id: "b", text: "DDL", correct: false },
        { id: "c", text: "DCL", correct: true, explanation: "Rechte-Vergabe = Data Control Language." },
        { id: "d", text: "DQL", correct: false },
      ],
    },
  ],
  examTips: [
    "Reihenfolge der Klauseln: SELECT – FROM – WHERE – GROUP BY – HAVING – ORDER BY – LIMIT.",
    "Immer Semikolon ans Ende – AP2-Korrektor:innen achten auf Form.",
    "Aliasse (AS) sparen Platz im Ergebnis und machen komplexe Abfragen lesbar.",
  ],
  resources: [
    {
      kind: "video",
      title: "SQL Tutorial für Anfänger | Grundkurs Deutsch",
      url: "https://www.youtube.com/watch?v=7HZbGReAi5s",
      note: "Kompletter deutscher Grundkurs – ideal, wenn du bei Null anfängst.",
    },
    {
      kind: "video",
      title: "SQL lernen: Die Struktur einer Datenbank mit der DDL definieren (Teil 1/3)",
      url: "https://www.youtube.com/watch?v=uoeQsF6_QQE",
      note: "Fokus auf DDL – CREATE TABLE, Constraints, Schlüssel.",
    },
  ],
  related: ["sql-select", "sql-joins", "sql-update", "sql-insert", "sql-delete", "sql-ddl"],
};
