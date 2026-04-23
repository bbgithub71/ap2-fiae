import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const ooGrundprinzipien: Lesson = {
  slug: "oo-grundprinzipien",
  objectives: [
    "Die vier OO-Säulen Abstraktion, Kapselung, Vererbung, Polymorphie benennen und erklären",
    "Typische Beispiele und Stolperfallen parat haben",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Die vier Säulen tauchen gern in Theorie-Fragen und im Fachgespräch auf. <strong>75 %</strong>
        {" "}der letzten Prüfungen hatten OO-Inhalte.
      </Callout>

      <h2>1. Abstraktion</h2>
      <p>
        Die wesentlichen Eigenschaften eines Objekts herausarbeiten, Details weglassen. Ein Klasse
        <code> Auto</code> hat Geschwindigkeit und beschleunigt() – der Verbrennungsprozess ist irrelevant.
      </p>

      <h2>2. Kapselung</h2>
      <p>
        Daten (Attribute) vor direktem Zugriff schützen und nur über Methoden (Getter/Setter)
        verfügbar machen. Sichtbarkeit: <code>private</code> Attribute + <code>public</code> Methoden.
      </p>
      <CodeBlock lang="pseudocode">
{`KLASSE Konto
    - saldo: ZAHL
    + einzahlen(betrag: ZAHL)
        WENN betrag > 0 DANN saldo ← saldo + betrag
    + getSaldo() → ZAHL
        GIB saldo zurück
ENDE KLASSE`}
      </CodeBlock>

      <h2>3. Vererbung</h2>
      <p>
        Eine Klasse (Unterklasse) übernimmt Attribute und Methoden einer anderen (Oberklasse) und
        erweitert/überschreibt sie. Ziel: Wiederverwendung.
      </p>
      <CodeBlock lang="pseudocode">
{`KLASSE Person
    - name: STRING
ENDE KLASSE

KLASSE Mitarbeiter ERBT Person
    - personalnummer: INT
ENDE KLASSE`}
      </CodeBlock>

      <h2>4. Polymorphie</h2>
      <p>
        »Vielgestaltigkeit«. Dieselbe Methoden-Signatur kann sich in Unterklassen unterschiedlich
        verhalten. Zur Laufzeit entscheidet die tatsächliche Klasse über das verwendete Verhalten
        (dynamisches Binden).
      </p>
      <CodeBlock lang="pseudocode">
{`KLASSE Form
    + flaeche() → ZAHL   // abstrakt
ENDE KLASSE

KLASSE Kreis ERBT Form
    - radius: ZAHL
    + flaeche() → ZAHL
        GIB 3.14159 * radius * radius zurück
ENDE KLASSE

KLASSE Rechteck ERBT Form
    - a, b: ZAHL
    + flaeche() → ZAHL
        GIB a * b zurück
ENDE KLASSE

// Aufruf, der Polymorphie zeigt:
formen: LISTE VON Form ← [neu Kreis(2), neu Rechteck(3,4)]
FÜR f IN formen TUE
    GIB f.flaeche() aus   // ruft die jeweils richtige Version auf
ENDE FÜR`}
      </CodeBlock>

      <h2>Bonus: Interfaces / Abstrakte Klassen</h2>
      <ul>
        <li><strong>Interface:</strong> reiner Vertrag – keine Implementierung, nur Signaturen.</li>
        <li><strong>Abstrakte Klasse:</strong> kann teilweise implementiert sein; nicht instanziierbar.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche der folgenden Beschreibungen trifft auf Polymorphie zu?",
      options: [
        { id: "a", text: "Attribute werden vor direktem Zugriff geschützt.", correct: false,
          explanation: "Das ist Kapselung." },
        { id: "b", text: "Dieselbe Methode kann in Unterklassen unterschiedlich implementiert sein.", correct: true },
        { id: "c", text: "Gemeinsame Eigenschaften werden in eine Oberklasse gezogen.", correct: false,
          explanation: "Das ist Vererbung." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      multiple: true,
      question: "Welche Aussagen zur Kapselung stimmen?",
      options: [
        { id: "a", text: "Attribute sind meistens private.", correct: true },
        { id: "b", text: "Getter/Setter steuern den Zugriff.", correct: true },
        { id: "c", text: "Kapselung steht im Widerspruch zu Vererbung.", correct: false,
          explanation: "Sie ergänzen sich – `protected` ist eine gekapselte Variante." },
      ],
    },
  ],
  examTips: [
    "Bei Erklärungen: 1 Satz Definition + 1 Beispiel pro Säule ist die sichere Struktur.",
    "Polymorphie != Überladung. Überladung ist statisch (gleicher Name, andere Parameter).",
  ],
  resources: [
    {
      kind: "video",
      title: "Objektorientierte Programmierung in 7 Minuten (die vier Säulen)",
      url: "https://www.youtube.com/watch?v=EdK_7QNj1Jk",
      note: "Sehr kompakt – die 4 Säulen (Kapselung, Abstraktion, Vererbung, Polymorphie) auf einen Schlag.",
    },
    {
      kind: "video",
      title: "Objektorientierung in 10 Minuten",
      url: "https://www.youtube.com/watch?v=w5M1IlvILLg",
      note: "Zweite Erklärung mit anderem Beispiel – gut zum Verfestigen.",
    },
  ],
  related: ["klassendiagramm", "klassen-objekte", "klassenbeziehungen"],
};
