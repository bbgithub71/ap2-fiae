import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const generics: Lesson = {
  slug: "generics",
  objectives: [
    "Typparameter und generische Klassen/Methoden nutzen",
    "Bounded Generics und Wildcards einordnen",
    "Vorteile (Typsicherheit, Wiederverwendung) und Grenzen (Type Erasure) benennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Grundidee</h2>
      <ul>
        <li><strong>Typparameter</strong> <code>&lt;T&gt;</code> macht Klasse/Methode unabhängig vom konkreten Typ.</li>
        <li><strong>Typsicherheit</strong> zur Compile-Zeit – unsichere Casts entfallen.</li>
        <li><strong>Bounded Generics</strong>: <code>&lt;T extends Number&gt;</code> schränkt auf Number und Unterklassen ein.</li>
        <li><strong>Wildcards</strong> (Java): <code>? extends T</code> (Lesen), <code>? super T</code> (Schreiben) – PECS-Regel.</li>
        <li><strong>Type Erasure</strong> in Java: Typinfo wird zur Laufzeit entfernt – <code>new T()</code> geht nicht.</li>
      </ul>

      <h2>Beispiel</h2>
      <CodeBlock lang="java" caption="Generische Klasse + bounded Methode">
{`public class Box<T> {
    private T inhalt;
    public void setzen(T t) { this.inhalt = t; }
    public T holen() { return inhalt; }
}

Box<String> b = new Box<>();
b.setzen("Hallo");

public static <T extends Number> double summe(List<T> xs) {
    double s = 0;
    for (T x : xs) s += x.doubleValue();
    return s;
}`}
      </CodeBlock>

      <p>TypeScript-Pendant:</p>
      <CodeBlock lang="ts">
{`class Box<T> {
  constructor(public inhalt: T) {}
}
const b = new Box<string>("Hallo");`}
      </CodeBlock>

      <Callout variant="warn">
        <code>List&lt;Object&gt;</code> ist <em>nicht</em> dasselbe wie <code>List&lt;String&gt;</code>:
        keine Kovarianz bei Generics. Dafür gibt es Wildcards.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wofür steht `<T extends Number>`?",
      options: [
        { id: "a", text: "T erbt von T", correct: false },
        { id: "b", text: "Upper Bound: T muss Number oder Unterklasse sein", correct: true, explanation: "Bounded Generic, schränkt erlaubte Typen ein." },
        { id: "c", text: "T ist optional", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was ist der Hauptvorteil von Generics?",
      options: [
        { id: "a", text: "Schnellere Laufzeit", correct: false },
        { id: "b", text: "Typsicherheit zur Compile-Zeit, keine Casts", correct: true, explanation: "Weniger ClassCastException, lesbarer Code." },
        { id: "c", text: "Automatische Parallelisierung", correct: false },
      ],
    },
  ],
  examTips: [
    "Typsicherheit ist das stärkste Argument – immer zuerst nennen.",
    "Type Erasure-Nebenwirkung kennen: kein `new T()`, kein Array aus T direkt.",
    "TypeScript-Generics arbeiten nur zur Compile-Zeit, identisch zur Java-Idee.",
  ],
  related: ["klassen-objekte", "datenstrukturen", "paradigmen"],
};
