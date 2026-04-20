import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const klassenObjekte: Lesson = {
  slug: "klassen-objekte",
  objectives: [
    "Klasse und Objekt sauber unterscheiden (Bauplan vs. Instanz)",
    "Konstruktor, Attribute, Methoden und Sichtbarkeiten einsetzen",
    "UML-Klassennotation lesen und schreiben",
  ],
  body: (
    <div className="prose-content">
      <h2>Grundbegriffe</h2>
      <ul>
        <li><strong>Klasse</strong> = Bauplan. <strong>Objekt</strong> = konkrete Instanz der Klasse im Speicher.</li>
        <li><strong>Attribute</strong> (Zustand) und <strong>Methoden</strong> (Verhalten) bilden die Member.</li>
        <li>Der <strong>Konstruktor</strong> initialisiert ein frisch erzeugtes Objekt – gleicher Name wie die Klasse, kein Rückgabetyp.</li>
        <li>Sichtbarkeiten im UML: <code>-</code> private, <code>#</code> protected, <code>+</code> public, <code>~</code> package.</li>
        <li><code>this</code> referenziert das aktuelle Objekt – nützlich bei Namensgleichheit Parameter ↔ Attribut.</li>
        <li>Getter/Setter kapseln Zugriffe (Information Hiding).</li>
      </ul>

      <h2>Beispiel</h2>
      <CodeBlock lang="java">
{`public class Konto {
    private double saldo;              // - saldo: double
    public Konto(double start) {       // Konstruktor
        this.saldo = start;
    }
    public void einzahlen(double b) { this.saldo += b; }
    public double getSaldo() { return saldo; }
}

Konto k = new Konto(100.0);            // Instanziierung
k.einzahlen(50.0);`}
      </CodeBlock>

      <Callout variant="warn">
        Sobald du einen eigenen Konstruktor definierst, entfällt der implizite Default-Konstruktor.
        Wenn du beides brauchst, definiere beide explizit.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>Klasse ≠ Objekt. Du erzeugst Objekte aus einer Klasse mit <code>new</code>.</li>
        <li><code>static</code>-Member gehören zur <em>Klasse</em>, nicht zu einem Objekt.</li>
        <li>In Textaufgaben: Nomen → Kandidatenklassen, Verben → Methoden.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wozu dient `this` in einer Methode?",
      options: [
        { id: "a", text: "Aufruf der Oberklasse", correct: false, explanation: "Das macht super bzw. parent." },
        { id: "b", text: "Referenz auf das aktuelle Objekt", correct: true, explanation: "Besonders bei Namensgleichheit Parameter/Attribut nützlich." },
        { id: "c", text: "Instanziierung einer Klasse", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was bedeutet `-` im UML-Klassendiagramm?",
      options: [
        { id: "a", text: "public", correct: false },
        { id: "b", text: "private", correct: true, explanation: "Nur innerhalb der Klasse sichtbar." },
        { id: "c", text: "protected", correct: false },
      ],
    },
  ],
  examTips: [
    "UML-Notation sauber: `- name: Typ`, `+ methode(p: Typ): Rückgabe`.",
    "Konstruktor hat NIE einen Rückgabetyp.",
    "In Szenariotexten: Nomen als Klassenkandidaten markieren, Verben als Methoden.",
  ],
  related: ["klassendiagramm", "klassenbeziehungen", "oo-grundprinzipien"],
};
