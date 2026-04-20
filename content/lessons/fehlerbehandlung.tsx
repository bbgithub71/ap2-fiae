import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const fehlerbehandlung: Lesson = {
  slug: "fehlerbehandlung",
  objectives: [
    "try / catch / finally korrekt einsetzen",
    "Checked vs. Unchecked Exceptions (Java) unterscheiden",
    "Exit-Codes und Debugging-Grundlagen einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Grundbausteine</h2>
      <ul>
        <li><code>try</code>: überwacht einen Codeblock.</li>
        <li><code>catch</code>: fängt eine oder mehrere Exception-Typen.</li>
        <li><code>finally</code>: läuft immer – auch bei return oder Exception (außer <code>System.exit</code>).</li>
        <li><code>throw</code>: löst eine Exception aus.</li>
        <li><code>throws</code>: deklariert sie in der Methodensignatur.</li>
      </ul>

      <h2>Exception-Hierarchie (Java)</h2>
      <ul>
        <li><code>Throwable</code> → <code>Error</code> (z. B. <code>OutOfMemoryError</code>) – nicht fangen.</li>
        <li><code>Throwable</code> → <code>Exception</code> → <strong>Checked</strong> (z. B. <code>IOException</code>): müssen behandelt oder deklariert werden.</li>
        <li><code>Exception</code> → <code>RuntimeException</code> → <strong>Unchecked</strong> (z. B. <code>NullPointerException</code>).</li>
      </ul>

      <h2>Beispiel</h2>
      <CodeBlock lang="java">
{`try {
    int x = Integer.parseInt(eingabe);          // NumberFormatException möglich
} catch (NumberFormatException e) {
    System.err.println("Keine Zahl: " + e.getMessage());
} finally {
    scanner.close();                            // immer schließen
}

public void lese(String p) throws IOException { /* checked */ }`}
      </CodeBlock>

      <Callout variant="warn">
        <strong>Leere catch-Blöcke sind Code-Smell</strong>. Sie verschlucken Fehler und machen das
        Debugging unmöglich. Mindestens loggen.
      </Callout>

      <h2>Exit-Codes &amp; Debugging</h2>
      <ul>
        <li>Exit-Code <code>0</code> = OK, ≠0 = Fehler (Konvention in Shell-Skripten / CI).</li>
        <li>Debugger-Tools: Breakpoints, Watch-Expressions, Step-Over / Step-Into.</li>
        <li>Logs mit klaren Log-Leveln (ERROR, WARN, INFO, DEBUG).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Exception ist in Java **checked**?",
      options: [
        { id: "a", text: "NullPointerException", correct: false, explanation: "Unchecked (RuntimeException)." },
        { id: "b", text: "IOException", correct: true, explanation: "Checked – muss behandelt oder per throws deklariert werden." },
        { id: "c", text: "ArithmeticException", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wann läuft der `finally`-Block?",
      options: [
        { id: "a", text: "Nur bei Erfolg", correct: false },
        { id: "b", text: "Immer nach try (auch bei Exception oder return)", correct: true, explanation: "Einzige Ausnahme: System.exit." },
        { id: "c", text: "Nur bei Exception", correct: false },
      ],
    },
  ],
  examTips: [
    "Spezifische Exception-Typen VOR allgemeinen (`IOException` vor `Exception`).",
    "`finally` ist ideal für Ressourcen-Cleanup (Dateien, DB-Verbindungen).",
    "`try-with-resources` ersetzt `finally` für `AutoCloseable`.",
  ],
  related: ["pseudocode", "qualitaetssicherung", "testmethoden"],
};
