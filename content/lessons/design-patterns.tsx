import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const designPatterns: Lesson = {
  slug: "design-patterns",
  objectives: [
    "Die drei GoF-Kategorien benennen (Erzeugungs-, Struktur-, Verhaltensmuster)",
    "Klassiker wie Singleton, Factory, Observer, Strategy, Adapter erklären",
    "Ein passendes Muster für ein Szenario vorschlagen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Klassische Theorie-Aufgabe: »Wähle ein passendes Design Pattern für … und begründe.« Ein/zwei
        Klassiker aus jeder Kategorie reichen meist.
      </Callout>

      <h2>Kategorien</h2>
      <ul>
        <li>
          <strong>Erzeugungsmuster:</strong> Wie werden Objekte erzeugt? (Singleton, Factory, Builder)
        </li>
        <li>
          <strong>Strukturmuster:</strong> Wie werden Klassen/Objekte zusammengesteckt? (Adapter,
          Decorator, Composite)
        </li>
        <li>
          <strong>Verhaltensmuster:</strong> Wie interagieren Objekte? (Observer, Strategy, Iterator,
          Template Method)
        </li>
      </ul>

      <h2>Singleton (Erzeugung)</h2>
      <p>Nur genau eine Instanz einer Klasse, global zugreifbar.</p>
      <CodeBlock lang="pseudocode">
{`KLASSE Konfiguration
    - statisch instanz: Konfiguration
    - privat Konstruktor() …

    + statisch hole() → Konfiguration
        WENN instanz = NULL DANN
            instanz ← neu Konfiguration()
        ENDE WENN
        GIB instanz zurück
    ENDE
ENDE KLASSE`}
      </CodeBlock>

      <h2>Factory (Erzeugung)</h2>
      <p>Erzeugt Objekte über eine Methode, nicht direkt per <code>new</code>.</p>

      <h2>Observer (Verhalten)</h2>
      <p>
        Ein Subjekt benachrichtigt beliebig viele Beobachter bei Zustandsänderungen. Typisch für
        Event-Systeme.
      </p>

      <h2>Strategy (Verhalten)</h2>
      <p>
        Austauschbarer Algorithmus als Objekt. Beispiel: verschiedene Sortier- oder Rabatt-Strategien.
      </p>

      <h2>Adapter (Struktur)</h2>
      <p>
        Übersetzt die Schnittstelle einer Klasse in eine andere, die der Client erwartet – wie ein
        Stromadapter.
      </p>

      <h2>MVC (Architektur)</h2>
      <p>
        Kein GoF-Pattern, aber prüfungsrelevant. Model (Daten), View (Darstellung), Controller
        (Steuerung) voneinander entkoppelt.
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Pattern garantiert genau eine Instanz einer Klasse?",
      options: [
        { id: "a", text: "Factory", correct: false },
        { id: "b", text: "Singleton", correct: true },
        { id: "c", text: "Observer", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Für austauschbare Algorithmen (z. B. verschiedene Rabattarten) ist welches Pattern ideal?",
      options: [
        { id: "a", text: "Adapter", correct: false },
        { id: "b", text: "Strategy", correct: true },
        { id: "c", text: "Composite", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Zu welcher Kategorie gehört Observer?",
      options: [
        { id: "a", text: "Erzeugungsmuster", correct: false },
        { id: "b", text: "Strukturmuster", correct: false },
        { id: "c", text: "Verhaltensmuster", correct: true },
      ],
    },
  ],
  examTips: [
    "Bei »Welches Pattern?«-Fragen: Kern-Intention jedes Patterns in 1 Satz parat haben.",
    "Singleton + Factory + Observer + Strategy sind die häufigsten Kandidaten.",
    "Für MVC: Sätze wie »entkoppelt Daten, Darstellung und Steuerung« sind sichere Punkte.",
  ],
  related: ["architektur-patterns", "oo-grundprinzipien"],
};
