import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const http: Lesson = {
  slug: "http",
  objectives: [
    "Die wichtigsten HTTP-Methoden und ihre Eigenschaften benennen",
    "Typische Status-Codes den Gruppen zuordnen",
    "Idempotenz und Sicherheit von Methoden verstehen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        HTTP-Methoden und Status-Codes sind Pflichtwissen – häufige MC-Frage oder Teil einer
        REST-Aufgabe.
      </Callout>

      <h2>Methoden</h2>
      <table>
        <thead>
          <tr><th>Methode</th><th>Zweck</th><th>Safe?</th><th>Idempotent?</th></tr>
        </thead>
        <tbody>
          <tr><td><InlineCode>GET</InlineCode></td><td>Ressource lesen</td><td>✓</td><td>✓</td></tr>
          <tr><td><InlineCode>HEAD</InlineCode></td><td>wie GET, nur Header</td><td>✓</td><td>✓</td></tr>
          <tr><td><InlineCode>POST</InlineCode></td><td>neue Ressource erzeugen / Action ausführen</td><td>✗</td><td>✗</td></tr>
          <tr><td><InlineCode>PUT</InlineCode></td><td>Ressource ersetzen (oder anlegen)</td><td>✗</td><td>✓</td></tr>
          <tr><td><InlineCode>PATCH</InlineCode></td><td>Ressource teilweise ändern</td><td>✗</td><td>✗ (oft)</td></tr>
          <tr><td><InlineCode>DELETE</InlineCode></td><td>Ressource löschen</td><td>✗</td><td>✓</td></tr>
          <tr><td><InlineCode>OPTIONS</InlineCode></td><td>Metainformationen (z. B. CORS)</td><td>✓</td><td>✓</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        <strong>Idempotent</strong> heißt: mehrfaches Ausführen hat denselben Effekt wie einmaliges.
        PUT ja, POST nicht, weil POST jedes Mal eine neue Ressource erzeugen kann.
      </Callout>

      <h2>Status-Codes – die 5 Gruppen</h2>
      <ul>
        <li><strong>1xx</strong> – Informational (100 Continue)</li>
        <li><strong>2xx</strong> – Success (200 OK, 201 Created, 204 No Content)</li>
        <li><strong>3xx</strong> – Redirection (301 Moved Permanently, 302 Found, 304 Not Modified)</li>
        <li><strong>4xx</strong> – Client Error (400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable)</li>
        <li><strong>5xx</strong> – Server Error (500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout)</li>
      </ul>

      <h2>Header-Beispiele</h2>
      <CodeBlock caption="HTTP-Request">
{`GET /api/kunden/42 HTTP/1.1
Host: shop.example.com
Accept: application/json
Authorization: Bearer eyJhbGciOi...`}
      </CodeBlock>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Methode ist idempotent?",
      options: [
        { id: "a", text: "POST", correct: false },
        { id: "b", text: "PUT", correct: true },
        { id: "c", text: "PATCH", correct: false, explanation: "PATCH ist meist nicht idempotent (teilweise Änderung)." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was bedeutet Status-Code 401?",
      options: [
        { id: "a", text: "Nicht gefunden", correct: false, explanation: "Das ist 404." },
        { id: "b", text: "Nicht authentifiziert", correct: true, explanation: "401 Unauthorized = Authentifizierung fehlt/ungültig." },
        { id: "c", text: "Nicht autorisiert", correct: false, explanation: "Authentifiziert, aber kein Recht = 403." },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Was liefert Status-Code 204?",
      options: [
        { id: "a", text: "Erfolg mit Body.", correct: false },
        { id: "b", text: "Erfolg, aber kein Body (No Content).", correct: true },
        { id: "c", text: "Clientfehler.", correct: false },
      ],
    },
  ],
  examTips: [
    "404 vs. 410 vs. 400 unterscheiden – vor allem 404 (nicht da) vs. 400 (fehlerhafter Request).",
    "401 vs. 403: 401 = nicht angemeldet, 403 = angemeldet aber keine Rechte.",
    "PUT = komplette Ersetzung, PATCH = Teil-Update.",
  ],
  resources: [
    {
      kind: "video",
      title: "HTTP-Statuscodes: Alle benutzen sie falsch?!",
      url: "https://www.youtube.com/watch?v=2ZOFCl3E-_c",
      note: "Gute Übersicht der wichtigsten Codes mit häufigen Fehlern.",
    },
    {
      kind: "video",
      title: "HTTP Statuscodes erklärt | DAS musst du darüber wissen",
      url: "https://www.youtube.com/watch?v=NCvpXwbCJtI",
      note: "Systematische Einteilung der 5 Status-Gruppen.",
    },
  ],
  related: ["rest-apis", "web-sicherheit"],
};
