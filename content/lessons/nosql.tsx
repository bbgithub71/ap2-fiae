import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const nosql: Lesson = {
  slug: "nosql",
  objectives: [
    "Die vier NoSQL-Typen kennen und je Beispiel nennen",
    "CAP-Theorem und BASE vs. ACID unterscheiden",
    "Wann NoSQL statt einer relationalen DB?",
  ],
  body: (
    <div className="prose-content">
      <h2>Die 4 NoSQL-Typen</h2>
      <ul>
        <li><strong>Key-Value:</strong> einfache Schlüssel-Wert-Paare, sehr schnell. Beispiele: Redis, DynamoDB.</li>
        <li><strong>Dokument:</strong> JSON/BSON-Dokumente, flexibles Schema. Beispiele: MongoDB, CouchDB.</li>
        <li><strong>Spalte (Wide-Column):</strong> Spaltenfamilien, Big-Data-tauglich. Beispiele: Cassandra, HBase.</li>
        <li><strong>Graph:</strong> Knoten + Kanten, ideal für Beziehungen. Beispiele: Neo4j, ArangoDB.</li>
      </ul>

      <h2>CAP-Theorem</h2>
      <p>Ein verteiltes System kann bei Netzwerkpartitionierung <strong>maximal zwei</strong> der drei Eigenschaften garantieren:</p>
      <ul>
        <li><strong>C</strong>onsistency – alle Knoten sehen dieselben Daten</li>
        <li><strong>A</strong>vailability – jedes Query bekommt eine Antwort</li>
        <li><strong>P</strong>artition Tolerance – System funktioniert bei Netzaussetzern weiter</li>
      </ul>

      <h2>BASE vs. ACID</h2>
      <table>
        <thead>
          <tr><th>ACID (relational)</th><th>BASE (NoSQL-typisch)</th></tr>
        </thead>
        <tbody>
          <tr><td>Atomicity, Consistency, Isolation, Durability</td><td>Basically Available, Soft state, Eventually consistent</td></tr>
          <tr><td>starke Konsistenz, sofort</td><td>Konsistenz «irgendwann»</td></tr>
          <tr><td>Beispiel: PostgreSQL, Oracle</td><td>Beispiel: Cassandra, DynamoDB</td></tr>
        </tbody>
      </table>

      <h2>Beispiel-Dokument (MongoDB)</h2>
      <CodeBlock lang="json">
{`{
  "_id": 1,
  "name": "Anna",
  "tags": ["admin", "vip"],
  "adresse": { "plz": "10115", "ort": "Berlin" }
}`}
      </CodeBlock>

      <Callout variant="tip">
        NoSQL ≠ «No SQL", sondern <strong>«Not only SQL»</strong>. Viele NoSQL-DBs haben eigene
        Query-Sprachen (z. B. Cypher für Neo4j).
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>Keine klassischen JOINs → Daten oft <strong>denormalisiert</strong> gespeichert.</li>
        <li>Schemafreiheit ist Stärke UND Gefahr (Inkonsistenz ohne Anwendungslogik).</li>
        <li>MongoDB = CP, Cassandra = AP — je nach CAP-Entscheidung.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Datenbank ist eine Graphdatenbank?",
      options: [
        { id: "a", text: "MongoDB", correct: false },
        { id: "b", text: "Redis", correct: false },
        { id: "c", text: "Neo4j", correct: true, explanation: "Speichert Knoten und Kanten." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wofür steht das «E» in BASE?",
      options: [
        { id: "a", text: "Exclusive", correct: false },
        { id: "b", text: "Eventually consistent", correct: true, explanation: "Konsistenz wird irgendwann erreicht – nicht sofort." },
        { id: "c", text: "Encrypted", correct: false },
      ],
    },
  ],
  examTips: [
    "Die 4 Typen + je 1 Beispiel sicher nennen.",
    "CAP-Theorem: bei Partition 2 von 3. MongoDB = CP, Cassandra = AP.",
    "NoSQL statt relational, wenn: sehr große Datenmengen, unstrukturiert, hoher Durchsatz oder Graphbeziehungen.",
  ],
  resources: [
    {
      kind: "video",
      title: "SQL vs NoSQL – was ist besser? (auf Deutsch erklärt)",
      url: "https://www.youtube.com/watch?v=HOtrRY583YE",
      note: "Direkter Vergleich der beiden Ansätze mit Beispielen.",
    },
    {
      kind: "video",
      title: "Dokumente speichern – NoSQL-Datenbanken Crashkurs",
      url: "https://www.youtube.com/watch?v=Lg-O6XJSefU",
      note: "Aus einer Reihe zu NoSQL-Grundlagen mit CouchDB, MongoDB, Redis.",
    },
  ],
  related: ["transaktionen-acid", "relationales-datenmodell", "cloud-speicher"],
};
