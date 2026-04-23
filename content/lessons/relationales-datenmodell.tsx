import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const relationalesDatenmodell: Lesson = {
  slug: "relationales-datenmodell",
  objectives: [
    "Aus einem ER-Modell ein relationales Schema ableiten",
    "Primär- und Fremdschlüssel korrekt kennzeichnen",
    "1:1-, 1:n- und n:m-Beziehungen in Tabellen umsetzen",
    "Konventionen der AP2-Schreibweise einhalten",
  ],
  keyTerms: [
    { term: "Relation", definition: "Tabelle mit fester Spaltenmenge und Zeilen als Datensätzen." },
    { term: "Primärschlüssel (PK)", definition: "Minimale Spalte(n)-Kombination, die jeden Datensatz eindeutig identifiziert." },
    { term: "Fremdschlüssel (FK)", definition: "Spalte, die auf einen PK einer anderen Tabelle verweist." },
    { term: "Referentielle Integrität", definition: "Jede FK-Verweis muss existieren oder NULL sein." },
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Relationales Datenmodell: <strong>75 %</strong> der letzten Prüfungen, <strong>~141 Punkte</strong>{" "}
        kumuliert. Typische Aufgabe: ER-Modell vorhanden → relationales Schema schreiben.
      </Callout>

      <h2>1. Notation</h2>
      <p>In der AP2 wird das Schema meist textuell notiert:</p>
      <CodeBlock caption="Beispiel einer Relation">
{`kunde (id, name, stadt)
           ↑
         Primärschlüssel wird unterstrichen (oder fett/PK markiert)`}
      </CodeBlock>
      <p>
        Für <strong>Fremdschlüssel</strong> wird die Spalte zusätzlich gekennzeichnet, z. B. mit einem
        Pfeil auf die referenzierte Tabelle:
      </p>
      <CodeBlock>
{`bestellung (id, kunde_id, datum)
                 ↑
              FK → kunde(id)`}
      </CodeBlock>

      <h2>2. Überführung der Beziehungstypen</h2>

      <h3>1:1</h3>
      <p>
        Einfachster Fall. FK kann auf <em>einer</em> der beiden Seiten liegen. Meist auf der Seite, die
        optional ist oder häufiger null sein darf.
      </p>
      <CodeBlock>
{`mitarbeiter (id, name, parkplatz_id)
parkplatz   (id, nummer)
-- Oder umgekehrt: parkplatz bekommt mitarbeiter_id`}
      </CodeBlock>

      <h3>1:n</h3>
      <p>FK wird <strong>immer auf der »n«-Seite</strong> eingefügt.</p>
      <CodeBlock>
{`kunde       (id, name)
bestellung  (id, kunde_id, datum)
                 ↑
              FK → kunde(id)`}
      </CodeBlock>

      <h3>n:m</h3>
      <p>
        Immer eine <strong>Zwischentabelle</strong>. Der PK der Zwischentabelle ist typischerweise die
        Kombination der beiden FKs (oder eine eigene ID + UNIQUE(FK1, FK2)).
      </p>
      <CodeBlock>
{`student       (id, name)
kurs          (id, titel)
belegt        (student_id, kurs_id, note)   PK = (student_id, kurs_id)
                     ↑           ↑
                  FK → student  FK → kurs`}
      </CodeBlock>

      <Callout variant="tip">
        Merksatz: <strong>1:1 → FK frei wählbar · 1:n → FK bei n · n:m → neue Tabelle.</strong>
      </Callout>

      <h2>3. Integritätsregeln</h2>
      <ul>
        <li>
          <strong>Entitätsintegrität:</strong> Kein Teil des Primärschlüssels darf NULL sein.
        </li>
        <li>
          <strong>Referentielle Integrität:</strong> Jeder FK-Wert muss in der referenzierten Tabelle
          vorhanden sein – oder NULL sein, wenn zulässig.
        </li>
        <li>
          <strong>Domänenintegrität:</strong> Wertebereich einer Spalte wird durch Datentyp und
          CHECK-Constraints eingehalten.
        </li>
      </ul>

      <h2>4. Typische Constraints im DDL</h2>
      <CodeBlock lang="sql">
{`CREATE TABLE bestellung (
  id         INT           PRIMARY KEY,
  kunde_id   INT           NOT NULL,
  datum      DATE          NOT NULL,
  status     VARCHAR(20)   CHECK (status IN ('offen','bezahlt','storniert')),
  CONSTRAINT fk_kunde FOREIGN KEY (kunde_id) REFERENCES kunde(id)
    ON DELETE RESTRICT
    ON UPDATE CASCADE
);`}
      </CodeBlock>

      <h2>5. Beispiel: Vom ERM zum Schema</h2>
      <p>Gegeben:</p>
      <ul>
        <li>Ein Kunde kann 0..n Bestellungen haben.</li>
        <li>Jede Bestellung enthält mindestens 1 Artikel, jeder Artikel kann in vielen Bestellungen auftauchen.</li>
        <li>Je Artikel in einer Bestellung wird eine Menge festgehalten.</li>
      </ul>
      <p>Lösung:</p>
      <CodeBlock>
{`kunde           (id, name, stadt)
artikel         (id, bezeichnung, preis)
bestellung      (id, kunde_id → kunde, datum)
bestellposition (bestellung_id → bestellung,
                 artikel_id   → artikel,
                 menge)        PK = (bestellung_id, artikel_id)`}
      </CodeBlock>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question:
        "Eine n:m-Beziehung zwischen Student und Kurs soll in ein relationales Schema überführt werden. Was ist richtig?",
      options: [
        { id: "a", text: "FK student_id in der Tabelle kurs anlegen.", correct: false },
        { id: "b", text: "Neue Zwischentabelle mit zwei FKs anlegen.", correct: true,
          explanation: "n:m ⇒ immer Zwischentabelle. Der zusammengesetzte Schlüssel identifiziert die Belegung." },
        { id: "c", text: "Jeweils einen FK in Student UND in Kurs anlegen.", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was bedeutet »referentielle Integrität«?",
      options: [
        { id: "a", text: "Primärschlüssel dürfen nicht NULL sein.", correct: false, explanation: "Das ist die Entitätsintegrität." },
        { id: "b", text: "Fremdschlüsselwerte existieren in der referenzierten Tabelle oder sind NULL.", correct: true },
        { id: "c", text: "Jede Tabelle muss normalisiert sein.", correct: false },
      ],
    },
    {
      kind: "sql",
      id: "sql-ddl-1",
      task: "Lege per CREATE TABLE eine Tabelle `bestellung` (id PK, kunde_id FK → kunde(id), datum NOT NULL) an.",
      sampleSolution: `CREATE TABLE bestellung (
  id        INT PRIMARY KEY,
  kunde_id  INT NOT NULL REFERENCES kunde(id),
  datum     DATE NOT NULL
);`,
      check: {
        mustMatch: [
          { pattern: 'create\\s+table\\s+bestellung', flags: 'i' },
          { pattern: 'id\\s+(int|integer)\\s+primary\\s+key', flags: 'i' },
          { pattern: 'kunde_id[^,]*references\\s+kunde\\s*\\(\\s*id\\s*\\)', flags: 'i' },
          { pattern: 'datum\\s+date\\s+not\\s+null', flags: 'i' },
        ],
      },
      hint: "Primary Key + Foreign Key mit REFERENCES.",
    },
  ],
  examTips: [
    "Primärschlüssel immer markieren – meist durch Unterstreichen.",
    "Bei n:m: Namen der Zwischentabelle sprechend wählen (z. B. belegt, enthält).",
    "Fremdschlüssel nie in der 1-Seite, sondern immer in der n-Seite platzieren.",
    "ON DELETE / ON UPDATE: in der Prüfung meist RESTRICT oder CASCADE – Entscheidung begründen können.",
  ],
  resources: [
    {
      kind: "video",
      title: "Welche Schlüssel existieren in Datenbanken?",
      url: "https://www.youtube.com/watch?v=Vgi3kfAJZQQ",
      note: "Primär-, Fremd- und weitere Schlüsselarten erklärt.",
    },
    {
      kind: "page",
      title: "sibiwiki.de – Relationales Datenmodell",
      url: "https://sibiwiki.de/wiki/index.php?title=Relationales_Datenmodell",
      source: "sibiwiki.de",
      note: "Kompakte textuelle Erklärung mit Beispielen.",
    },
  ],
  related: ["erm", "normalisierung", "sql-ddl", "sql-grundlagen"],
};
