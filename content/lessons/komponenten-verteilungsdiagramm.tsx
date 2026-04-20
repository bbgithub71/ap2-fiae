import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const komponentenVerteilungsdiagramm: Lesson = {
  slug: "komponenten-verteilungsdiagramm",
  objectives: [
    "Komponenten- und Verteilungsdiagramm voneinander abgrenzen",
    "Node, Artefakt und Stereotypen korrekt einsetzen",
    "Provided / Required Interfaces erkennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Komponentendiagramm</h2>
      <ul>
        <li>Zeigt <strong>logische</strong> Software-Bausteine und ihre Schnittstellen.</li>
        <li>Komponente: Rechteck mit Stereotyp <code>«component»</code>.</li>
        <li><strong>Provided Interface</strong>: Lollipop <code>○—</code> (wird angeboten).</li>
        <li><strong>Required Interface</strong>: Socket <code>⊃</code> (wird benötigt).</li>
      </ul>

      <h2>Verteilungsdiagramm</h2>
      <ul>
        <li>Zeigt die <strong>physische</strong> Verteilung auf Hardware.</li>
        <li><strong>Node</strong> (3D-Würfel): Laufzeitumgebung / Hardware, Stereotypen <code>«device»</code>, <code>«executionEnvironment»</code>.</li>
        <li><strong>Artefakt</strong>: konkret deploybare Einheit (<code>app.jar</code>, <code>index.html</code>) mit <code>«artifact»</code>.</li>
        <li><strong>Kommunikationspfad</strong>: Linie zwischen Nodes, oft beschriftet mit <code>«HTTPS»</code>, <code>«TCP/IP»</code>.</li>
      </ul>

      <h2>Beispiel</h2>
      <CodeBlock caption="Komponenten + Verteilung – Skizze">
{`Komponentendiagramm:
 ┌«component» UI┐  ○── IBestellService ──⊃ ┌«component» Backend┐

Verteilungsdiagramm:
 ┌«device» Client-PC─────┐   «HTTPS»    ┌«device» AppServer───────┐
 │ «executionEnv» Browser│ ──────────── │ «executionEnv» Tomcat   │
 │   «artifact» app.html │              │   «artifact» backend.war│
 └───────────────────────┘              └─────────────────────────┘`}
      </CodeBlock>

      <h2>Stolperfallen</h2>
      <ul>
        <li>Komponente = logisch, Artefakt = physische Datei.</li>
        <li><code>«executionEnvironment»</code> ist eine Node-Art <strong>innerhalb</strong> eines <code>«device»</code>.</li>
        <li>Stereotypen immer in doppelten spitzen Klammern <code>«...»</code>.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was zeigt ein Verteilungsdiagramm?",
      options: [
        { id: "a", text: "Ablauf von Methoden", correct: false },
        { id: "b", text: "Zuordnung von Artefakten zu Hardware-Knoten", correct: true, explanation: "Physische Deployment-Sicht." },
        { id: "c", text: "Vererbungsbeziehungen", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Der Stereotyp «executionEnvironment» bezeichnet …",
      options: [
        { id: "a", text: "eine Datenbanktabelle", correct: false },
        { id: "b", text: "eine Laufzeitumgebung wie JVM, Tomcat oder Browser", correct: true, explanation: "Läuft in/auf einem Device." },
        { id: "c", text: "einen Akteur", correct: false },
      ],
    },
  ],
  examTips: [
    "Lollipop = angeboten, Socket = benötigt. Merke die Richtung.",
    "Stereotypen in «...», nicht in <...>.",
    "Kommunikationspfade beschriften (Protokoll!) – sonst unvollständig.",
  ],
  related: ["klassendiagramm", "architektur-patterns", "container"],
};
