import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const modularisierung: Lesson = {
  slug: "modularisierung",
  objectives: [
    "Kopplung und Kohäsion unterscheiden",
    "SOLID-Prinzipien benennen",
    "Cross-Cutting Concerns erkennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Qualitätskriterien</h2>
      <ul>
        <li><strong>Kopplung</strong> (lose = gut, fest = schlecht): wenige, klare Abhängigkeiten über Schnittstellen.</li>
        <li><strong>Kohäsion</strong> (hoch = gut, niedrig = schlecht): ein Modul tut genau eine Sache.</li>
        <li>Merksatz: <strong>«Hohe Kohäsion, lose Kopplung»</strong>.</li>
      </ul>

      <h2>SOLID</h2>
      <ul>
        <li><strong>S</strong>ingle Responsibility – eine Klasse, ein Grund zur Änderung.</li>
        <li><strong>O</strong>pen / Closed – offen für Erweiterung, geschlossen für Modifikation.</li>
        <li><strong>L</strong>iskov Substitution – Unterklasse muss Oberklasse ersetzen können.</li>
        <li><strong>I</strong>nterface Segregation – kleine, fokussierte Schnittstellen.</li>
        <li><strong>D</strong>ependency Inversion – Abhängigkeiten auf Abstraktionen, nicht auf Details.</li>
      </ul>

      <CodeBlock lang="pseudocode" caption="schlecht vs. gut (DIP)">
{`// schlecht – feste Kopplung
KLASSE Rechnung
    METHODE speichern()
        neu MySqlRepo().save(this)
    ENDE

// gut – lose Kopplung, Abstraktion
KLASSE Rechnung(repo: Repository)
    METHODE speichern()
        repo.save(this)
    ENDE`}
      </CodeBlock>

      <h2>Cross-Cutting Concerns</h2>
      <p>
        Belange, die viele Module betreffen: Logging, Security, Transaktionen, Caching. Lösung
        zentral über Aspekte (AOP), Middleware oder Interceptoren.
      </p>

      <Callout variant="warn">
        Zu feingranulare Module erzeugen eigene Komplexität. Nicht jede Klasse muss ihre eigene
        Abstraktion haben.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Ziel gilt als Qualitätsmerkmal guter Modularisierung?",
      options: [
        { id: "a", text: "Hohe Kohäsion, lose Kopplung", correct: true },
        { id: "b", text: "Hohe Kopplung, niedrige Kohäsion", correct: false },
        { id: "c", text: "Niedrige Kohäsion, lose Kopplung", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was besagt das Dependency-Inversion-Prinzip (DIP)?",
      options: [
        { id: "a", text: "High-Level-Module hängen direkt von Low-Level-Modulen ab", correct: false },
        { id: "b", text: "Beide hängen von Abstraktionen ab, Details von Abstraktionen", correct: true },
        { id: "c", text: "Module dürfen keine Abhängigkeiten haben", correct: false },
      ],
    },
  ],
  examTips: [
    "Alle 5 SOLID-Buchstaben benennen können.",
    "Merksatz «Hohe Kohäsion, lose Kopplung» sicher parat haben.",
    "Cross-Cutting in 1 Satz erklären: «Belange, die viele Module querschnittlich betreffen».",
  ],
  related: ["architektur-patterns", "design-patterns", "oo-grundprinzipien"],
};
