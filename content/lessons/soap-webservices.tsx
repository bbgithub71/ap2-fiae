import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const soapWebservices: Lesson = {
  slug: "soap-webservices",
  objectives: [
    "Envelope / Header / Body einer SOAP-Nachricht benennen",
    "Rolle von WSDL und UDDI einordnen",
    "SOAP von REST abgrenzen",
  ],
  body: (
    <div className="prose-content">
      <h2>Aufbau</h2>
      <ul>
        <li><strong>SOAP-Envelope</strong>: Wurzelelement; enthält optional <code>Header</code> und immer <code>Body</code>.</li>
        <li><strong>WSDL</strong> (Web Services Description Language): XML-Vertrag – Operationen, Typen, Bindings, Endpunkte.</li>
        <li><strong>UDDI</strong> (historisch): zentrales Verzeichnis zum Finden von Services – kaum noch genutzt.</li>
        <li><strong>Transport</strong>: meist HTTP(S), auch SMTP oder JMS möglich.</li>
        <li><strong>WS-Standards</strong>: WS-Security, WS-ReliableMessaging, WS-AtomicTransaction.</li>
      </ul>

      <CodeBlock lang="xml">
{`<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
  <soap:Header/>
  <soap:Body>
    <getKundePreis>
      <kundeId>42</kundeId>
    </getKundePreis>
  </soap:Body>
</soap:Envelope>`}
      </CodeBlock>

      <h2>SOAP vs. REST</h2>
      <table>
        <thead><tr><th></th><th>SOAP</th><th>REST</th></tr></thead>
        <tbody>
          <tr><td>Format</td><td>XML</td><td>JSON (meist)</td></tr>
          <tr><td>Vertrag</td><td>streng (WSDL)</td><td>locker (OpenAPI optional)</td></tr>
          <tr><td>Transport</td><td>HTTP, SMTP, JMS</td><td>HTTP</td></tr>
          <tr><td>Verben</td><td>meist nur POST</td><td>GET/POST/PUT/DELETE</td></tr>
          <tr><td>Einsatz</td><td>Enterprise, Banken, Legacy</td><td>Web-APIs, modern</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Wann SOAP? Bei <strong>striktem Vertrag</strong>, WS-Security, Transaktionen oder
        Legacy-Integration. Sonst meist REST.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Rolle hat die WSDL bei SOAP?",
      options: [
        { id: "a", text: "Transportiert die Nutzdaten", correct: false },
        { id: "b", text: "Beschreibt den Service-Vertrag (Operationen, Typen, Endpunkte)", correct: true, explanation: "Basis für Client-Codegenerierung." },
        { id: "c", text: "Ersetzt die UDDI-Registry", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welches Element ist Pflicht-Wurzel jeder SOAP-Nachricht?",
      options: [
        { id: "a", text: "<soap:Body>", correct: false },
        { id: "b", text: "<soap:Envelope>", correct: true, explanation: "Umschließt optional Header und immer Body." },
        { id: "c", text: "<soap:Header>", correct: false },
      ],
    },
  ],
  examTips: [
    "Envelope / Header / Body als Struktur parat haben.",
    "SOAP nutzt meist POST, auch bei Lesezugriffen.",
    "WSDL ist das SOAP-Pendant zu OpenAPI (REST).",
  ],
  related: ["rest-apis", "datenformate", "xml-validierung"],
};
