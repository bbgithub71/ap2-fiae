import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const pseudocode: Lesson = {
  slug: "pseudocode",
  objectives: [
    "Einen Algorithmus in Pseudocode formulieren – sprachunabhängig und prüfungstauglich",
    "Gegebenen Pseudocode Zeile für Zeile tracen (Schreibtischtest)",
    "Kontrollstrukturen (Sequenz, Verzweigung, Schleife) korrekt verschachteln",
    "Typische Konventionen (Einrückung, Doppelpunkt, Großschreibung Schlüsselwörter) einhalten",
  ],
  keyTerms: [
    {
      term: "Algorithmus",
      definition:
        "Endliche, eindeutige Handlungsvorschrift zur Lösung einer Klasse von Problemen, die in endlicher Zeit ein Ergebnis liefert.",
    },
    {
      term: "Pseudocode",
      definition:
        "Informelle, sprachunabhängige Notation für Algorithmen. Mischung aus natürlicher Sprache und Programmier-Schlüsselwörtern.",
    },
    {
      term: "Schreibtischtest",
      definition:
        "Manuelles Tracen: Wertetabelle pro Variable, Zeile für Zeile durchgehen und Ausgabe notieren.",
    },
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam" title="Warum so wichtig?">
        In 100 % der letzten 12 AP2-Prüfungen kam mindestens eine Pseudocode-Aufgabe vor – mit rund
        <strong> 317 kumulierten Punkten</strong> der größte Einzelfaktor. Wenn du <em>eine</em> Technik
        vor der Prüfung sitzenhaben musst, dann diese.
      </Callout>

      <h2>1. Was ist Pseudocode?</h2>
      <p>
        Pseudocode ist eine <strong>programmiersprachen-unabhängige</strong> Darstellung eines Algorithmus.
        Er ist streng genug, um einen Ablauf präzise festzuhalten, aber locker genug, um nicht an der
        Syntax einer konkreten Sprache zu hängen. In der AP2 ist Pseudocode das Standard-Format, in dem du
        Lösungsalgorithmen notierst.
      </p>
      <p>
        Die IHK macht keine starren Formvorgaben, aber diese Konventionen sind üblich und sicher:
      </p>
      <ul>
        <li>
          Schlüsselwörter in GROSSBUCHSTABEN: <InlineCode>WENN</InlineCode>,{" "}
          <InlineCode>SOLANGE</InlineCode>, <InlineCode>FÜR</InlineCode>, <InlineCode>GIB</InlineCode>
          {" "}… (gleichermaßen erlaubt: <InlineCode>if</InlineCode>, <InlineCode>while</InlineCode>, …)
        </li>
        <li>Einrückung macht die Struktur sichtbar – kein Layout-Freestyle</li>
        <li>
          Zuweisung mit <InlineCode>←</InlineCode> oder <InlineCode>:=</InlineCode> – oder
          {" "}<InlineCode>=</InlineCode>, wenn der Unterschied zum Vergleich klar bleibt
        </li>
        <li>Blockgrenzen mit <InlineCode>ENDE WENN</InlineCode>, <InlineCode>ENDE SOLANGE</InlineCode>, …</li>
        <li>Variablen sprechend benennen – nicht <InlineCode>x</InlineCode>, sondern <InlineCode>summe</InlineCode></li>
      </ul>

      <h2>2. Kontrollstrukturen</h2>
      <h3>Sequenz</h3>
      <p>Anweisungen in der Reihenfolge ihres Auftretens abarbeiten – der triviale Fall.</p>

      <h3>Verzweigung</h3>
      <CodeBlock lang="pseudocode">
{`WENN alter >= 18 DANN
    GIB "volljährig" aus
SONST WENN alter >= 16 DANN
    GIB "begleitetes Fahren" aus
SONST
    GIB "minderjährig" aus
ENDE WENN`}
      </CodeBlock>

      <h3>Kopfgesteuerte Schleife (WHILE)</h3>
      <p>Bedingung wird <em>vor</em> dem Schleifenkörper geprüft – Schleife kann 0 mal laufen.</p>
      <CodeBlock lang="pseudocode">
{`i ← 1
SOLANGE i <= 5 TUE
    GIB i aus
    i ← i + 1
ENDE SOLANGE`}
      </CodeBlock>

      <h3>Fußgesteuerte Schleife (DO…WHILE)</h3>
      <p>Bedingung wird <em>nach</em> dem Durchlauf geprüft – mindestens 1 Durchlauf.</p>
      <CodeBlock lang="pseudocode">
{`WIEDERHOLE
    eingabe ← LIES_EINGABE()
BIS eingabe = "stop"`}
      </CodeBlock>

      <h3>Zählschleife (FOR)</h3>
      <CodeBlock lang="pseudocode">
{`FÜR i VON 1 BIS 10 TUE
    GIB i * i aus
ENDE FÜR`}
      </CodeBlock>

      <h2>3. Unterprogramme / Funktionen</h2>
      <CodeBlock lang="pseudocode">
{`FUNKTION istGerade(zahl: GANZZAHL) → BOOLEAN
    GIB (zahl MOD 2) = 0 zurück
ENDE FUNKTION

// Aufruf
WENN istGerade(42) DANN
    GIB "ja" aus
ENDE WENN`}
      </CodeBlock>

      <h2>4. Der Schreibtischtest (Tracing)</h2>
      <p>
        Ein Klassiker der AP2: Gegeben ist Pseudocode – gesucht ist die Ausgabe. Technik:
      </p>
      <ol>
        <li>Wertetabelle mit je einer Spalte pro Variable + einer Spalte »Ausgabe«</li>
        <li>Zeile für Zeile durchgehen, Werte eintragen, Ausgabe protokollieren</li>
        <li>Bei Schleifen: pro Durchlauf eine neue Zeile</li>
      </ol>

      <CodeBlock lang="pseudocode" caption="Beispiel-Trace">
{`a ← 1
b ← 2
SOLANGE a < b TUE
    a ← a + 1
    GIB a aus
ENDE SOLANGE`}
      </CodeBlock>

      <p>Trace (Wertetabelle):</p>

      <table>
        <thead>
          <tr>
            <th>Zeile</th>
            <th>a</th>
            <th>b</th>
            <th>a &lt; b?</th>
            <th>Ausgabe</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td><td>1</td><td>–</td><td>–</td><td>–</td>
          </tr>
          <tr>
            <td>2</td><td>1</td><td>2</td><td>–</td><td>–</td>
          </tr>
          <tr>
            <td>3 (Check)</td><td>1</td><td>2</td><td>true</td><td>–</td>
          </tr>
          <tr>
            <td>4</td><td>2</td><td>2</td><td>–</td><td>–</td>
          </tr>
          <tr>
            <td>5</td><td>2</td><td>2</td><td>–</td><td><strong>2</strong></td>
          </tr>
          <tr>
            <td>3 (Check)</td><td>2</td><td>2</td><td>false</td><td>Schleife endet</td>
          </tr>
        </tbody>
      </table>
      <p>Ergebnis: Ausgabe ist <InlineCode>2</InlineCode>.</p>

      <h2>5. Typische Stolperfallen</h2>
      <Callout variant="warn">
        <ul>
          <li>
            <strong>Off-by-One:</strong> <InlineCode>FÜR i VON 1 BIS 10</InlineCode> läuft 10-mal,
            <InlineCode>FÜR i VON 0 BIS 10</InlineCode> läuft 11-mal (je nach Konvention inklusive).
          </li>
          <li>
            <strong>Endlosschleife:</strong> Zählvariable nicht vergessen zu erhöhen.
          </li>
          <li>
            <strong>Index-Grenzen:</strong> Arrays sind je nach Sprache 0- oder 1-indexiert. In der
            Prüfung sicherheitshalber die Grenze explizit benennen.
          </li>
          <li>
            <strong>Zuweisung vs. Vergleich:</strong> <InlineCode>←</InlineCode> bzw. <InlineCode>=</InlineCode>{" "}
            für Zuweisen, <InlineCode>==</InlineCode> bzw. <InlineCode>=</InlineCode> für Vergleich –
            in derselben Notation nicht mischen.
          </li>
        </ul>
      </Callout>

      <Callout variant="tip">
        <strong>Schreibe immer den Algorithmus-Namen und die Parameter mit hin.</strong> Eine Aufgabe
        wie »Schreibe einen Algorithmus, der die Summe aller geraden Zahlen in einem Array liefert«
        beginnt mit <InlineCode>FUNKTION summeGerade(zahlen: ARRAY VON GANZZAHL) → GANZZAHL</InlineCode>.
        Das macht Rückgabetyp und Signatur für den Korrektor klar.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "trace",
      id: "trace-1",
      task: "Welche Ausgabe erzeugt dieser Pseudocode?",
      code: `i ← 0
SOLANGE i < 4 TUE
    WENN i MOD 2 = 0 DANN
        GIB i aus
    ENDE WENN
    i ← i + 1
ENDE SOLANGE`,
      expectedOutput: "0\n2",
      hint: "Welche Werte von i sind gerade und < 4?",
    },
    {
      kind: "trace",
      id: "trace-2",
      task: "Trace: Was kommt hier raus?",
      code: `a ← 3
b ← 2
FÜR k VON 1 BIS 3 TUE
    a ← a + b
    GIB a aus
ENDE FÜR`,
      expectedOutput: "5\n7\n9",
      hint: "Jeder Durchlauf addiert b=2 auf a.",
    },
    {
      kind: "mc",
      id: "mc-1",
      question:
        "Welche Aussage zur kopfgesteuerten Schleife (WHILE) trifft zu?",
      options: [
        {
          id: "a",
          text: "Der Schleifenkörper wird mindestens einmal ausgeführt.",
          correct: false,
          explanation: "Das trifft auf die fußgesteuerte Schleife (DO…WHILE) zu.",
        },
        {
          id: "b",
          text: "Die Bedingung wird vor dem ersten Durchlauf geprüft.",
          correct: true,
          explanation: "Genau – deshalb kann die Schleife auch 0-mal laufen.",
        },
        {
          id: "c",
          text: "Eine WHILE-Schleife hat immer eine feste Anzahl Durchläufe.",
          correct: false,
          explanation: "Das wäre eine Zählschleife (FOR).",
        },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was ist Ziel eines Schreibtischtests?",
      options: [
        { id: "a", text: "Einen Algorithmus in eine konkrete Sprache übersetzen.", correct: false },
        { id: "b", text: "Variablenwerte Zeile für Zeile manuell nachzuvollziehen.", correct: true,
          explanation: "Genau – so erkennst du Logikfehler ohne den Code auszuführen." },
        { id: "c", text: "Die Laufzeit in O-Notation zu bestimmen.", correct: false },
      ],
    },
  ],
  examTips: [
    "Rückgabetyp der Funktion explizit hinschreiben – Punkt in fast jedem Schema.",
    "Einrückung per Leerzeichen konsequent – Korrektor muss Struktur sofort sehen.",
    "Bei Schleifen: Abbruchbedingung UND Zähler-Update immer mitdenken.",
    "Wenn der Algorithmus nichts liefert, explizit mit Kommentar notieren: »gibt nichts zurück«.",
  ],
  resources: [
    {
      kind: "video",
      title: "Pseudocode erklärt für IT-Azubis (AP Teil 1 Vorbereitung)",
      url: "https://www.youtube.com/watch?v=uhDo89-ANLk",
      note: "Speziell für die IHK-Prüfung der IT-Berufe – direkt am Prüfungsniveau.",
    },
    {
      kind: "video",
      title: "Pseudocode (Programmieren) einfach erklärt",
      url: "https://www.youtube.com/watch?v=YpzmKOmmYrg",
      note: "Grundlagen kompakt: Sequenz, Verzweigung, Schleifen.",
    },
  ],
  related: ["kontrollstrukturen", "rekursion", "suchen-sortieren"],
};
