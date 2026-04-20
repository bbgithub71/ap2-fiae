import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const architekturPatterns: Lesson = {
  slug: "architektur-patterns",
  objectives: [
    "MVC, MVVM, Schichten, Hexagonal/Clean, Microservices und Event-Driven unterscheiden",
    "Monolith vs. Microservices bewerten",
    "Ein passendes Pattern für ein Szenario vorschlagen",
  ],
  body: (
    <div className="prose-content">
      <h2>Überblick</h2>
      <ul>
        <li><strong>MVC</strong>: Model / View / Controller – entkoppelt Daten, Darstellung, Steuerung.</li>
        <li><strong>MVVM</strong>: Variante mit ViewModel + Data-Binding (Angular, Vue, WPF).</li>
        <li><strong>Schichtenarchitektur</strong>: Präsentation → Logik → Persistenz. Abhängigkeiten nur nach unten.</li>
        <li><strong>Hexagonal / Clean Architecture</strong>: Domäne im Kern, Ports &amp; Adapter nach außen.</li>
        <li><strong>Monolith / Modulith / Microservices</strong>: ein Artefakt, ein Artefakt mit klaren Modulen, viele unabhängige Dienste.</li>
        <li><strong>Event-Driven</strong>: lose Kopplung via Events (Pub/Sub, Message Broker).</li>
      </ul>

      <h2>Vergleich Monolith vs. Microservices</h2>
      <table>
        <thead><tr><th>Stil</th><th>Pro</th><th>Contra</th></tr></thead>
        <tbody>
          <tr><td>Monolith</td><td>einfach, ein Deployment</td><td>schwerer skalierbar, große Releases</td></tr>
          <tr><td>Modulith</td><td>klare Module, ein Deploy</td><td>Disziplin nötig</td></tr>
          <tr><td>Microservices</td><td>unabhängig skalierbar / deploybar</td><td>komplex: Netz, Monitoring, Datenhaltung</td></tr>
          <tr><td>Event-Driven</td><td>hohe Entkopplung</td><td>schwer zu debuggen, Eventual Consistency</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        «Microservices» ist nicht automatisch «besser». Der Overhead – verteilte Systeme, Monitoring,
        Datenkonsistenz – wird häufig unterschätzt.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>MVC ist kein GoF-Pattern, sondern ein Architektur-Pattern.</li>
        <li>Clean Architecture und Hexagonal Architecture sind eng verwandt (Ports &amp; Adapter).</li>
        <li>Microservices-Vorteile: eigenständige Teams, unterschiedliche Skalierung, Polyglot-Persistenz.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Architektur setzt die Domänenlogik in den Kern und kapselt externe Systeme über Ports &amp; Adapter?",
      options: [
        { id: "a", text: "MVC", correct: false },
        { id: "b", text: "Hexagonal Architecture", correct: true, explanation: "Domäne ist technologieunabhängig, Außenwelt über Adapter." },
        { id: "c", text: "Schichtenarchitektur", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Typischer Nachteil von Microservices gegenüber einem Monolith?",
      options: [
        { id: "a", text: "Schlechtere Skalierung", correct: false },
        { id: "b", text: "Höhere Betriebs- und Netzwerkkomplexität", correct: true, explanation: "Verteilte Systeme bringen Latenz, Monitoring- und Konsistenzprobleme." },
        { id: "c", text: "Keine unabhängigen Deployments möglich", correct: false },
      ],
    },
  ],
  examTips: [
    "Vor-/Nachteile-Tabelle Monolith vs. Microservices auswendig.",
    "MVC in 1 Satz: «Model, View, Controller – entkoppelt Daten, Darstellung, Steuerung».",
    "Wann Microservices? Mehrere Teams, unterschiedliche Skalierung, Polyglot-Persistenz.",
  ],
  related: ["design-patterns", "modularisierung", "container"],
};
