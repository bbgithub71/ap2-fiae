import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const typisierungCompiler: Lesson = {
  slug: "typisierung-compiler",
  objectives: [
    "Statisch / dynamisch und stark / schwach sicher auseinanderhalten",
    "Compiler, Interpreter und JIT unterscheiden",
    "Sprachen in die 4 Felder einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Typisierung</h2>
      <ul>
        <li><strong>Statisch:</strong> Typ zur Compile-Zeit bekannt (Java, C, C#, Go).</li>
        <li><strong>Dynamisch:</strong> Typ zur Laufzeit (Python, JavaScript, Ruby).</li>
        <li><strong>Stark:</strong> keine impliziten Typumwandlungen (Python, Java).</li>
        <li><strong>Schwach:</strong> implizite Casts (JavaScript, C).</li>
      </ul>

      <h2>Übersetzungsarten</h2>
      <ul>
        <li><strong>Compiler:</strong> übersetzt kompletten Quellcode vor Ausführung in Maschinen- oder Bytecode (C → .exe).</li>
        <li><strong>Interpreter:</strong> führt Quellcode zeilenweise zur Laufzeit aus (Python).</li>
        <li><strong>JIT (Just-in-Time):</strong> Mischform, zur Laufzeit kompiliert (Java JVM, .NET CLR, V8).</li>
      </ul>

      <h2>Sprachen im Überblick</h2>
      <table>
        <thead>
          <tr><th>Sprache</th><th>Typisierung</th><th>Übersetzung</th></tr>
        </thead>
        <tbody>
          <tr><td>Java</td><td>statisch, stark</td><td>Compiler + JIT (JVM)</td></tr>
          <tr><td>Python</td><td>dynamisch, stark</td><td>Interpreter</td></tr>
          <tr><td>JavaScript</td><td>dynamisch, schwach</td><td>JIT (V8)</td></tr>
          <tr><td>C</td><td>statisch, schwach</td><td>Compiler</td></tr>
        </tbody>
      </table>

      <Callout variant="warn">
        «stark» ≠ «statisch»: Python ist dynamisch, aber stark typisiert. JavaScript ist dynamisch
        und schwach: <code>&quot;5&quot; + 3 = &quot;53&quot;</code>.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Sprache ist dynamisch und stark typisiert?",
      options: [
        { id: "a", text: "Java", correct: false },
        { id: "b", text: "Python", correct: true, explanation: "Typ zur Laufzeit, aber keine impliziten Casts." },
        { id: "c", text: "C", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was macht ein JIT-Compiler?",
      options: [
        { id: "a", text: "Er übersetzt vor der Ausführung komplett.", correct: false },
        { id: "b", text: "Er übersetzt zur Laufzeit in Maschinencode.", correct: true, explanation: "Kombination aus Interpreter und Compiler." },
        { id: "c", text: "Er interpretiert nur zeilenweise.", correct: false },
      ],
    },
  ],
  examTips: [
    "Vor-/Nachteile: statisch = frühe Fehler; dynamisch = flexibler, Fehler später.",
    "Unterschied Bytecode (JVM, CLR) vs. nativer Maschinencode kennen.",
    "JIT kombiniert die Vorteile von Compiler und Interpreter.",
  ],
  related: ["paradigmen", "fehlerbehandlung"],
};
