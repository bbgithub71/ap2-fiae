import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const sqlDdl: Lesson = {
  slug: "sql-ddl",
  objectives: [
    "Tabellen mit CREATE TABLE inkl. Constraints anlegen",
    "Mit ALTER TABLE Spalten hinzufügen/ändern",
    "Constraints (PK, FK, UNIQUE, CHECK, NOT NULL) korrekt setzen",
  ],
  body: (
    <div className="prose-content">
      <h2>CREATE TABLE</h2>
      <CodeBlock lang="sql">
{`CREATE TABLE kunde (
  id        INT           PRIMARY KEY,
  name      VARCHAR(100)  NOT NULL,
  email     VARCHAR(255)  UNIQUE,
  alter     INT           CHECK (alter >= 18),
  stadt     VARCHAR(100)  DEFAULT 'unbekannt'
);`}
      </CodeBlock>

      <h2>Fremdschlüssel</h2>
      <CodeBlock lang="sql">
{`CREATE TABLE bestellung (
  id       INT PRIMARY KEY,
  kunde_id INT NOT NULL,
  datum    DATE NOT NULL,
  CONSTRAINT fk_kunde
    FOREIGN KEY (kunde_id) REFERENCES kunde(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);`}
      </CodeBlock>
      <Callout variant="tip">
        <strong>ON DELETE / ON UPDATE</strong> entscheidet, was beim Löschen/Ändern der referenzierten
        Zeile passiert: <em>RESTRICT</em> (Fehler), <em>CASCADE</em> (mitziehen), <em>SET NULL</em>,
        <em> NO ACTION</em>.
      </Callout>

      <h2>ALTER TABLE</h2>
      <CodeBlock lang="sql">
{`ALTER TABLE kunde ADD COLUMN telefon VARCHAR(30);
ALTER TABLE kunde DROP COLUMN alter;
ALTER TABLE kunde ALTER COLUMN name TYPE VARCHAR(200);  -- Syntax je DBMS`}
      </CodeBlock>

      <h2>DROP</h2>
      <CodeBlock lang="sql">
{`DROP TABLE IF EXISTS bestellung;`}
      </CodeBlock>

      <h2>Constraint-Arten</h2>
      <ul>
        <li><strong>PRIMARY KEY</strong> – eindeutiger, nicht-NULL-Bezeichner der Zeile.</li>
        <li><strong>FOREIGN KEY</strong> – Verweis auf PK anderer Tabelle.</li>
        <li><strong>UNIQUE</strong> – eindeutig, aber NULL erlaubt (je nach DBMS einmal).</li>
        <li><strong>NOT NULL</strong> – Spalte darf nicht leer sein.</li>
        <li><strong>CHECK (…)</strong> – beliebige Bedingung.</li>
        <li><strong>DEFAULT &lt;wert&gt;</strong> – Default-Wert.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "sql",
      id: "sql-1",
      task: "Lege eine Tabelle `artikel` an: id (PK), bezeichnung (VARCHAR 100, NOT NULL), preis (DECIMAL(10,2), CHECK >= 0).",
      sampleSolution: `CREATE TABLE artikel (
  id          INT PRIMARY KEY,
  bezeichnung VARCHAR(100) NOT NULL,
  preis       DECIMAL(10,2) CHECK (preis >= 0)
);`,
      check: {
        mustMatch: [
          { pattern: 'create\\s+table\\s+artikel', flags: 'i' },
          { pattern: 'id\\s+(int|integer)\\s+primary\\s+key', flags: 'i' },
          { pattern: 'bezeichnung\\s+varchar\\s*\\(\\s*100\\s*\\)\\s+not\\s+null', flags: 'i' },
          { pattern: 'check\\s*\\(\\s*preis\\s*>=\\s*0\\s*\\)', flags: 'i' },
        ],
      },
    },
    {
      kind: "mc",
      id: "mc-1",
      question: "Unterschied PRIMARY KEY vs. UNIQUE?",
      options: [
        { id: "a", text: "Gibt keinen.", correct: false },
        { id: "b", text: "PK ist eindeutig UND nicht NULL; UNIQUE ist eindeutig, erlaubt aber meist einen NULL-Wert.", correct: true },
        { id: "c", text: "UNIQUE ist nur für numerische Spalten.", correct: false },
      ],
    },
  ],
  examTips: [
    "PRIMARY KEY impliziert NOT NULL + UNIQUE.",
    "Bei mehrspaltigem PK: PRIMARY KEY (a, b) als eigene Zeile.",
    "CHECK-Constraint in der Prüfung ruhig nutzen – sorgt für valide Daten.",
  ],
  related: ["sql-grundlagen", "relationales-datenmodell", "sql-insert"],
};
