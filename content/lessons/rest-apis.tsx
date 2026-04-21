import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const restApis: Lesson = {
  slug: "rest-apis",
  objectives: [
    "Die REST-Prinzipien (stateless, ressourcenorientiert, einheitliche Schnittstelle) erklären",
    "CRUD auf HTTP-Methoden mappen",
    "Ein sinnvolles Endpunkt-Schema entwerfen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        REST kommt fast immer im Zusammenspiel mit einer JSON-Aufgabe oder einem Szenario »wie sollte
        die API aussehen?«.
      </Callout>

      <h2>REST-Prinzipien (nach Fielding)</h2>
      <ul>
        <li><strong>Client-Server:</strong> klare Trennung.</li>
        <li><strong>Stateless:</strong> jeder Request trägt alle nötigen Infos; Server hält keinen Client-Zustand.</li>
        <li><strong>Cacheable:</strong> Antworten können gekennzeichnet werden als (nicht-)cachebar.</li>
        <li><strong>Uniform Interface:</strong> einheitliche Schnittstelle (Ressourcen-URIs + HTTP-Verben).</li>
        <li><strong>Layered System:</strong> Client sieht nicht, ob hinter dem Server Proxies/LBs stehen.</li>
        <li><strong>Code on Demand</strong> (optional).</li>
      </ul>

      <h2>CRUD-Mapping</h2>
      <table>
        <thead>
          <tr><th>Operation</th><th>HTTP-Methode</th><th>URL-Muster</th><th>Status</th></tr>
        </thead>
        <tbody>
          <tr><td>Liste lesen</td><td>GET</td><td>/kunden</td><td>200</td></tr>
          <tr><td>Eins lesen</td><td>GET</td><td>/kunden/42</td><td>200 / 404</td></tr>
          <tr><td>Anlegen</td><td>POST</td><td>/kunden</td><td>201 Created</td></tr>
          <tr><td>Ersetzen</td><td>PUT</td><td>/kunden/42</td><td>200 / 204</td></tr>
          <tr><td>Teil-Update</td><td>PATCH</td><td>/kunden/42</td><td>200</td></tr>
          <tr><td>Löschen</td><td>DELETE</td><td>/kunden/42</td><td>204</td></tr>
        </tbody>
      </table>

      <h2>Beispiel-Request/Response</h2>
      <CodeBlock caption="Request">
{`POST /kunden HTTP/1.1
Content-Type: application/json

{ "name": "Meier", "stadt": "Berlin" }`}
      </CodeBlock>
      <CodeBlock caption="Response">
{`HTTP/1.1 201 Created
Location: /kunden/42
Content-Type: application/json

{ "id": 42, "name": "Meier", "stadt": "Berlin" }`}
      </CodeBlock>

      <h2>Best Practices</h2>
      <ul>
        <li>Ressourcen im <strong>Plural</strong>: /kunden, /artikel.</li>
        <li>Keine Verben in der URL (<code>/getKunden</code> ist anti-REST).</li>
        <li>Filtern/Paginieren über Query-Parameter: <code>?seite=2&limit=20</code>.</li>
        <li>Beziehung: <code>/kunden/42/bestellungen</code>.</li>
        <li>Statuscodes korrekt einsetzen (201 beim Anlegen, 204 ohne Body).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Endpunkt-Design ist RESTful?",
      options: [
        { id: "a", text: "POST /createKunde", correct: false, explanation: "Verben in URLs vermeiden." },
        { id: "b", text: "POST /kunden", correct: true },
        { id: "c", text: "GET /kunden?action=delete&id=42", correct: false, explanation: "Löschen gehört DELETE." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welchen Status-Code gibt ein erfolgreiches POST /kunden idealerweise?",
      options: [
        { id: "a", text: "200 OK", correct: false, explanation: "Technisch ok, aber 201 ist spezifischer." },
        { id: "b", text: "201 Created", correct: true },
        { id: "c", text: "204 No Content", correct: false },
      ],
    },
  ],
  examTips: [
    "»Stateless« = Server speichert keinen Client-State. Cookies für Sessions sind genau genommen Stateful.",
    "Immer Location-Header bei 201 setzen.",
    "OAuth 2.0 und JWT als Auth-Beispiele parat halten.",
  ],
  resources: [
    {
      kind: "video",
      title: "Was ist eine REST-API? – Einführung in REST-APIs (inkl. Authentication)",
      url: "https://www.youtube.com/watch?v=ZuINS_-n-AM",
      note: "Moderne Einführung mit Auth-Aspekten.",
    },
    {
      kind: "video",
      title: "REST API Erklärung | Was ist RESTful API Design wirklich?",
      url: "https://www.youtube.com/watch?v=uhXCuSnIwjg",
      note: "Design-Prinzipien von REST konkret erklärt.",
    },
  ],
  related: ["http", "datenformate", "web-sicherheit"],
};
