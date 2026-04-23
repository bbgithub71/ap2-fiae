import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const tdd: Lesson = {
  slug: "tdd",
  objectives: [
    "Den TDD-Zyklus Red-Green-Refactor erklären",
    "Vorteile und typische Einwände benennen",
    "TDD von klassischem »Test nach« unterscheiden",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="new">
        TDD ist <strong>neu im Katalog 2024/25</strong>. Typische Aufgabe: Kurzdefinition +
        Ablaufbeschreibung + Vor-/Nachteile.
      </Callout>

      <h2>Der Zyklus</h2>
      <ol>
        <li><strong>🔴 Red:</strong> Test für die neue Funktionalität schreiben – er schlägt fehl.</li>
        <li><strong>🟢 Green:</strong> Gerade so viel Produktionscode schreiben, damit der Test grün wird.</li>
        <li><strong>♻ Refactor:</strong> Code aufräumen – Struktur verbessern, Tests bleiben grün.</li>
      </ol>

      <h2>Vorteile</h2>
      <ul>
        <li>Hoher Testabdeckungsgrad, schon bevor Bugs entstehen.</li>
        <li>Design-getrieben: man denkt die API aus Nutzersicht.</li>
        <li>Sichere Refaktorierung durch Regressionsnetz.</li>
      </ul>

      <h2>Einwände / Grenzen</h2>
      <ul>
        <li>Einarbeitung und Disziplin nötig.</li>
        <li>Ungeeignet für Prototyping mit stark wechselnden Anforderungen.</li>
        <li>GUI- und Integrationsschicht ist schwieriger zu unit-testen.</li>
      </ul>

      <h2>Abgrenzung</h2>
      <ul>
        <li><strong>BDD</strong> (Behavior Driven Development): wie TDD, nur mit natürlicher Sprache (Given/When/Then).</li>
        <li><strong>ATDD</strong> (Acceptance Test Driven): Tests aus Kundensicht zuerst.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "In welcher Reihenfolge läuft der TDD-Zyklus?",
      options: [
        { id: "a", text: "Green → Red → Refactor", correct: false },
        { id: "b", text: "Red → Green → Refactor", correct: true },
        { id: "c", text: "Refactor → Green → Red", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      multiple: true,
      question: "Welche Aussagen zu TDD stimmen?",
      options: [
        { id: "a", text: "Man schreibt zuerst den Test.", correct: true },
        { id: "b", text: "TDD ist dasselbe wie BDD.", correct: false },
        { id: "c", text: "TDD verringert Regressionsrisiken.", correct: true },
      ],
    },
  ],
  examTips: [
    "Reihenfolge nie verwechseln: Red (Test schlägt fehl), Green (Test grün), Refactor.",
    "BDD ergänzt TDD, ersetzt es nicht.",
  ],
  resources: [
    {
      kind: "video",
      title: "Test-Driven Development (TDD) // deutsch",
      url: "https://www.youtube.com/watch?v=71nLhdZuMk0",
      note: "Kompakte Einführung in TDD auf Deutsch.",
    },
    {
      kind: "video",
      title: "Test Driven Development (TDD) – Mit Profi-Tipps und Beispiel",
      url: "https://www.youtube.com/watch?v=Q7IacWtNaG0",
      note: "Red-Green-Refactor am konkreten Beispiel.",
    },
  ],
  related: ["unit-tests-coverage", "teststufen", "qualitaetssicherung"],
};
