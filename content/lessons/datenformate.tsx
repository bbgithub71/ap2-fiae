import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const datenformate: Lesson = {
  slug: "datenformate",
  objectives: [
    "CSV, XML und JSON in Aufbau, Zweck und Stärken vergleichen",
    "Gleiche Daten in allen drei Formaten notieren können",
    "Validierungsmechanismen (XSD, JSON Schema) einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Vergleich</h2>
      <table>
        <thead>
          <tr><th></th><th>CSV</th><th>XML</th><th>JSON</th></tr>
        </thead>
        <tbody>
          <tr><td>Struktur</td><td>flach, zeilenbasiert</td><td>hierarchisch, Tags</td><td>hierarchisch, Key-Value</td></tr>
          <tr><td>Lesbarkeit</td><td>maschinenlesbar</td><td>verbose, aber gut beschreibbar</td><td>leichtgewichtig, gut lesbar</td></tr>
          <tr><td>Typen</td><td>keine</td><td>über Schema (XSD)</td><td>Native: String, Number, Boolean, Array, Object, null</td></tr>
          <tr><td>Validierung</td><td>–</td><td>DTD, XSD</td><td>JSON Schema</td></tr>
          <tr><td>Einsatz</td><td>Excel, Datenexport</td><td>SOAP, Konfig, Dokumente</td><td>REST-APIs, Config</td></tr>
        </tbody>
      </table>

      <h2>Gleiche Daten in allen drei Formaten</h2>
      <CodeBlock lang="csv">
{`id,name,stadt
1,Anna,Berlin
2,Bernd,Hamburg`}
      </CodeBlock>
      <CodeBlock lang="xml">
{`<kunden>
  <kunde id="1"><name>Anna</name><stadt>Berlin</stadt></kunde>
  <kunde id="2"><name>Bernd</name><stadt>Hamburg</stadt></kunde>
</kunden>`}
      </CodeBlock>
      <CodeBlock lang="json">
{`[
  { "id": 1, "name": "Anna",  "stadt": "Berlin"  },
  { "id": 2, "name": "Bernd", "stadt": "Hamburg" }
]`}
      </CodeBlock>

      <Callout variant="tip">
        <strong>Faustregel:</strong> Für moderne Web-APIs → JSON. Für formale Verträge mit strenger
        Struktur → XML + XSD. Für einfache Exporte / Tabellendaten → CSV.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>CSV hat <strong>keinen Standard-Trenner</strong> – in Deutschland oft Semikolon statt Komma.</li>
        <li>JSON kennt <strong>keine Kommentare</strong> und <strong>kein Datum</strong> als eigenen Typ (meist String).</li>
        <li>XML-Attribute vs. Kindelemente ist oft eine Designfrage, nicht logisch eindeutig.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Format wird typischerweise für REST-APIs verwendet?",
      options: [
        { id: "a", text: "CSV", correct: false },
        { id: "b", text: "XML", correct: false },
        { id: "c", text: "JSON", correct: true, explanation: "Leichtgewichtig, nativ zu JavaScript, Standard bei REST." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Womit validiert man ein XML-Dokument gegen eine Struktur?",
      options: [
        { id: "a", text: "XSD (XML Schema Definition)", correct: true, explanation: "Definiert erlaubte Elemente, Reihenfolge und Typen." },
        { id: "b", text: "JSON Schema", correct: false },
        { id: "c", text: "CSV-Header", correct: false },
      ],
    },
  ],
  examTips: [
    "Gleiche Beispieldaten in allen drei Formaten schreiben können.",
    "Vor-/Nachteile-Tabelle auswendig: Lesbarkeit, Größe, Typensystem, Einsatzgebiet.",
    "JSON Schema ist das Pendant zu XSD – kannst du oft als Frage erwarten.",
  ],
  resources: [
    {
      kind: "video",
      title: "JSON und XML: Was ist der Unterschied? (Kurzformat)",
      url: "https://www.youtube.com/shorts/tCrBF2GEj9Y",
      channel: "nexoma",
      note: "Kurzer Vergleich JSON ↔ XML.",
    },
    {
      kind: "page",
      title: "Vergleich CSV, XML, JSON (PDF)",
      url: "https://rimbakowsky.de/Material/Informatik/CSV_XML_JSON_Vergleich.pdf",
      source: "rimbakowsky.de",
      note: "Übersichtliches Unterrichts-PDF mit allen drei Formaten im direkten Vergleich.",
    },
  ],
  related: ["xml-validierung", "rest-apis", "soap-webservices"],
};
