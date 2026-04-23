import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const transaktionenAcid: Lesson = {
  slug: "transaktionen-acid",
  objectives: [
    "Die vier ACID-Eigenschaften benennen und erklären",
    "Transaktions-Steuerbefehle (BEGIN / COMMIT / ROLLBACK / SAVEPOINT) einsetzen",
    "Typische Probleme (Deadlock, Lost Update) benennen",
  ],
  body: (
    <div className="prose-content">
      <h2>ACID</h2>
      <ul>
        <li><strong>A</strong>tomicity – alles oder nichts (entweder komplett oder gar nicht).</li>
        <li><strong>C</strong>onsistency – Datenbank bleibt vor/nach Transaktion konsistent.</li>
        <li><strong>I</strong>solation – parallele Transaktionen beeinflussen sich nicht sichtbar.</li>
        <li><strong>D</strong>urability – committete Daten überleben Stromausfall.</li>
      </ul>

      <h2>Steuer-Befehle (TCL)</h2>
      <ul>
        <li><code>BEGIN</code> / <code>START TRANSACTION</code></li>
        <li><code>COMMIT</code> – speichern</li>
        <li><code>ROLLBACK</code> – rückgängig machen</li>
        <li><code>SAVEPOINT</code> – Zwischenpunkt zum Zurückrollen</li>
      </ul>

      <h2>Isolation Levels</h2>
      <table>
        <thead>
          <tr><th>Level</th><th>Schutz gegen</th></tr>
        </thead>
        <tbody>
          <tr><td>Read Uncommitted</td><td>–</td></tr>
          <tr><td>Read Committed</td><td>Dirty Reads</td></tr>
          <tr><td>Repeatable Read</td><td>+ Non-repeatable Reads</td></tr>
          <tr><td>Serializable</td><td>+ Phantom Reads</td></tr>
        </tbody>
      </table>

      <Callout variant="warn">
        <strong>Deadlock:</strong> zwei Transaktionen warten wechselseitig auf Sperren. DB erkennt das
        und rollt eine zurück. Vermeiden: Sperren in gleicher Reihenfolge anfordern, kurze
        Transaktionen halten.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welcher ACID-Aspekt garantiert, dass committete Daten einen Crash überleben?",
      options: [
        { id: "a", text: "Atomicity", correct: false },
        { id: "b", text: "Durability", correct: true },
        { id: "c", text: "Isolation", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was schützt das Isolationslevel »Repeatable Read« (neben Dirty Reads) zusätzlich?",
      options: [
        { id: "a", text: "Phantom Reads", correct: false },
        { id: "b", text: "Non-repeatable Reads", correct: true },
        { id: "c", text: "Deadlocks", correct: false },
      ],
    },
  ],
  examTips: [
    "ACID – 4 Eigenschaften in 4 Sätzen parat.",
    "COMMIT persistiert, ROLLBACK verwirft.",
    "Deadlock = zwei Transaktionen kreuzweise gesperrt; Livelock = beschäftigt, kommen aber nicht voran.",
  ],
  resources: [
    {
      kind: "video",
      title: "Was ist eine Transaktion und ACID? (mit MySQL-Beispiel)",
      url: "https://www.youtube.com/watch?v=fgXvbnkPRzU",
      note: "Transaktionen erklärt am konkreten MySQL-Beispiel.",
    },
    {
      kind: "video",
      title: "13.72 Transaktionen und ACID",
      url: "https://www.youtube.com/watch?v=ZHq5f7eZPwA",
      note: "Aus einer Datenbanksysteme-Vorlesungsreihe.",
    },
  ],
  related: ["sql-grundlagen", "sql-update"],
};
