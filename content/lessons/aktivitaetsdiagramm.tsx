import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const aktivitaetsdiagramm: Lesson = {
  slug: "aktivitaetsdiagramm",
  objectives: [
    "Ein Aktivitätsdiagramm lesen und selbst zeichnen",
    "Die wichtigsten Symbole (Start/Ende, Aktion, Entscheidung, Fork/Join, Swimlane) einsetzen",
    "Abläufe aus einer Textbeschreibung (Use-Case-Text) in ein Diagramm überführen",
  ],
  keyTerms: [
    { term: "Aktion", definition: "Abgerundetes Rechteck – ein Arbeitsschritt (z. B. »Login prüfen«)." },
    { term: "Entscheidungsknoten", definition: "Raute – Kontrollfluss verzweigt sich abhängig von Bedingungen." },
    { term: "Zusammenführung", definition: "Raute mit mehreren eingehenden Pfaden – Alternativen laufen wieder zusammen." },
    { term: "Fork / Join", definition: "Dicker waagrechter Balken – parallele Abläufe starten (Fork) bzw. synchronisieren (Join)." },
    { term: "Swimlane", definition: "Senkrechte Spalte pro Akteur/System – zeigt, wer für welche Aktion zuständig ist." },
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Aktivitätsdiagramme kommen in <strong>92 % der letzten Prüfungen</strong> (~130 Pkt. kumuliert)
        vor. Typische Aufgabe: Ein Ablauf wird in Worten beschrieben, du zeichnest das Diagramm.
      </Callout>

      <h2>1. Die Symbol-Palette</h2>
      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Symbol</th>
            <th>Bedeutung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Startknoten</td>
            <td><InlineCode>●</InlineCode> (voller Kreis)</td>
            <td>Eintrittspunkt. Genau 1.</td>
          </tr>
          <tr>
            <td>Endknoten</td>
            <td><InlineCode>⦿</InlineCode> (Kreis mit Punkt)</td>
            <td>Endet den gesamten Ablauf. Beliebig viele möglich.</td>
          </tr>
          <tr>
            <td>Flussende</td>
            <td><InlineCode>⊗</InlineCode> (Kreis mit X)</td>
            <td>Beendet nur diesen Pfad, Rest läuft weiter (bei parallelen Flüssen).</td>
          </tr>
          <tr>
            <td>Aktion</td>
            <td>abgerundetes Rechteck</td>
            <td>Ein Arbeitsschritt.</td>
          </tr>
          <tr>
            <td>Entscheidung</td>
            <td>Raute ◇</td>
            <td>
              Kontrollfluss verzweigt, jeder ausgehende Pfeil trägt eine Bedingung in
              <InlineCode>[eckigen Klammern]</InlineCode>.
            </td>
          </tr>
          <tr>
            <td>Zusammenführung</td>
            <td>Raute ◇</td>
            <td>Mehrere alternative Pfade laufen wieder zusammen.</td>
          </tr>
          <tr>
            <td>Fork / Join</td>
            <td>breiter Balken ▬</td>
            <td>Fork: 1 Eingang, mehrere Ausgänge (parallel). Join: mehrere Eingänge, 1 Ausgang.</td>
          </tr>
          <tr>
            <td>Objektknoten</td>
            <td>Rechteck mit Namen</td>
            <td>Daten/Objekt, das zwischen Aktionen fließt.</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Mini-Beispiel: Login</h2>
      <p>
        Jede Aktion ist ein Kasten, jede Raute eine Verzweigung. So könnte ein Login-Ablauf aussehen:
      </p>
      <CodeBlock caption="Pseudo-textuelle Darstellung (Mermaid-ähnlich)">
{`● Start
 │
 ▼
[Benutzername & Passwort erfassen]
 │
 ▼
[Anmeldedaten prüfen]
 │
 ▼
◇  Daten korrekt?
 ├─ [nein] ──▶ [Fehlermeldung anzeigen] ──▶ ⦿ Ende
 └─ [ja]  ──▶ [Session erzeugen] ──▶ [Startseite anzeigen] ──▶ ⦿ Ende`}
      </CodeBlock>

      <h2>3. Swimlanes – wer macht was?</h2>
      <p>
        Sobald mehrere Akteure oder Systeme beteiligt sind, helfen Swimlanes (Verantwortungsbereiche).
        Jede Spalte steht für einen Akteur, die Aktionen werden in der jeweiligen Spur platziert.
      </p>
      <Callout variant="tip">
        Klassisches AP2-Szenario: »Kunde ↔ Webshop ↔ Zahlungsdienstleister«. Drei Lanes, jeder Pfeil,
        der eine Lane-Grenze überquert, kostet Punkte, wenn er fehlt.
      </Callout>

      <h2>4. Fork / Join – Parallelität</h2>
      <p>
        Wenn zwei Dinge gleichzeitig geschehen (z. B. »Rechnung verschicken« UND »Ware ausliefern«),
        werden sie mit einem Fork-Balken gesplittet und später mit einem Join wieder synchronisiert.
      </p>
      <CodeBlock>
{`[Bestellung bestätigt]
 │
 ▬▬▬▬▬▬▬▬▬▬  (Fork)
 │        │
 ▼        ▼
[Rechnung] [Kommissionieren]
 │        │
 ▼        ▼
[Versenden] [Liefern]
 │        │
 ▬▬▬▬▬▬▬▬▬▬  (Join)
 │
 ▼
[Bestellung abgeschlossen]`}
      </CodeBlock>

      <h2>5. So gehst du in der Prüfung vor</h2>
      <ol>
        <li>Text 2× lesen – einmal Schnelldurchlauf, einmal Akteure und Abläufe notieren.</li>
        <li>Alle Aktionen als Liste sammeln. Fragewörter helfen: »und dann?", »außer wenn?", »parallel?«.</li>
        <li>Entscheidungen suchen (»wenn", »falls", »andernfalls«) – das werden Rauten.</li>
        <li>Start und Ende(n) setzen, Symbole korrekt verwenden.</li>
        <li>Pfeile prüfen: keine offenen Enden, jede Raute hat eine ausgehende Bedingung für jeden Fall.</li>
      </ol>

      <Callout variant="warn">
        Typische Fehler: Startknoten vergessen, Rauten ohne Bedingung, mehrfach gleiche Aktionen,
        Swimlane übersehen. Checkliste vor der Abgabe!
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wofür steht der dicke waagrechte Balken?",
      options: [
        { id: "a", text: "Start des gesamten Ablaufs.", correct: false },
        { id: "b", text: "Fork (paralleler Start) bzw. Join (paralleler Zusammenfluss).", correct: true },
        { id: "c", text: "Eine Entscheidung mit mehreren Alternativen.", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Aussage zur Raute stimmt?",
      options: [
        { id: "a", text: "Sie steht entweder für Entscheidung oder für Zusammenführung.", correct: true,
          explanation: "Dasselbe Symbol, unterschiedliche Rolle je nach Anzahl der ein-/ausgehenden Pfeile." },
        { id: "b", text: "Eine Raute darf keine eingehenden Pfeile haben.", correct: false },
        { id: "c", text: "Bedingungen an ausgehenden Pfeilen sind optional.", correct: false,
          explanation: "Bei Entscheidung sind Bedingungen Pflicht, sonst ist das Diagramm unvollständig." },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Was tun Swimlanes?",
      options: [
        { id: "a", text: "Sie unterteilen Aktivitäten nach Zuständigkeit (Akteur/System).", correct: true },
        { id: "b", text: "Sie markieren parallele Abläufe.", correct: false },
        { id: "c", text: "Sie kennzeichnen optionale Schritte.", correct: false },
      ],
    },
  ],
  examTips: [
    "Start = 1 voller Kreis. End = 1 oder mehrere Kreise mit Punkt.",
    "Jede Raute an der Verzweigung braucht Bedingungen in [eckigen Klammern].",
    "Bei Prozessen mit mehreren Akteuren: Swimlanes zeichnen – das gibt oft Teilpunkte.",
    "Parallelität: Ausgehende Pfeile vom Fork enden IMMER wieder in einem Join.",
  ],
  related: ["klassendiagramm", "sequenzdiagramm", "pseudocode", "bpmn"],
};
