import { Callout } from "@/components/Callout";
import { CodeBlock, InlineCode } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const klassendiagramm: Lesson = {
  slug: "klassendiagramm",
  objectives: [
    "Eine Klasse mit Attributen, Methoden und Sichtbarkeiten korrekt notieren",
    "Beziehungen (Vererbung, Assoziation, Aggregation, Komposition, Abhängigkeit) sicher auseinanderhalten",
    "Multiplizitäten richtig beschriften (1, 0..1, *, 1..*, 0..*)",
    "Ein Klassendiagramm aus einer Textbeschreibung ableiten",
  ],
  keyTerms: [
    { term: "Sichtbarkeit", definition: "+ public, − private, # protected, ~ package. Steht vor Attribut/Methode." },
    { term: "Multiplizität", definition: "Anzahl an Instanzen, die an einer Beziehung teilnehmen (z. B. 1..*)." },
    { term: "Assoziation", definition: "»kennt« – einfache Verbindung zweier Klassen, mit optionaler Rolle und Multiplizität." },
    { term: "Aggregation", definition: "»hat«/Teil-Ganzes, das Teil lebt unabhängig. Offene Raute an der Ganzes-Seite." },
    { term: "Komposition", definition: "Starkes Teil-Ganzes, Teil stirbt mit dem Ganzen. Gefüllte Raute." },
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Klassendiagramme erscheinen in <strong>83 %</strong> der letzten AP2-Prüfungen. Häufige Aufgabe:
        Lückenhaftes Diagramm ergänzen oder aus einem Szenario neu zeichnen.
      </Callout>

      <h2>1. Aufbau einer Klasse</h2>
      <p>Eine Klasse wird als Kasten mit drei Abschnitten dargestellt:</p>
      <CodeBlock caption="Textuelle Darstellung eines Kastens">
{`┌──────────────────────────────┐
│           Kunde              │
├──────────────────────────────┤
│ − id : Integer               │
│ − name : String              │
│ − kundenseit : Date          │
├──────────────────────────────┤
│ + aendereName(n : String)    │
│ + getAnzahlBestellungen() : Int │
└──────────────────────────────┘`}
      </CodeBlock>

      <ul>
        <li><strong>Abschnitt 1:</strong> Klassenname (bei abstrakten Klassen <em>kursiv</em>)</li>
        <li><strong>Abschnitt 2:</strong> Attribute <InlineCode>sichtbarkeit name : Typ [= Initialwert]</InlineCode></li>
        <li><strong>Abschnitt 3:</strong> Methoden <InlineCode>sichtbarkeit name(param : Typ) : Rückgabetyp</InlineCode></li>
      </ul>

      <h3>Sichtbarkeiten</h3>
      <ul>
        <li><InlineCode>+</InlineCode> public – überall sichtbar</li>
        <li><InlineCode>−</InlineCode> private – nur innerhalb der Klasse</li>
        <li><InlineCode>#</InlineCode> protected – Klasse + Unterklassen</li>
        <li><InlineCode>~</InlineCode> package – gleiches Paket</li>
      </ul>

      <h3>Statisches & Abstraktes</h3>
      <ul>
        <li>Statische Mitglieder: <strong>unterstrichen</strong></li>
        <li>Abstrakte Methoden / Klassen: <em>kursiv</em></li>
      </ul>

      <h2>2. Beziehungen</h2>
      <table>
        <thead>
          <tr>
            <th>Beziehung</th>
            <th>Notation</th>
            <th>Semantik</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Assoziation</td>
            <td>durchgezogene Linie</td>
            <td>A »kennt« B. Einfache Verbindung.</td>
          </tr>
          <tr>
            <td>Gerichtete Assoziation</td>
            <td>Pfeil →</td>
            <td>A weiß von B, aber nicht umgekehrt.</td>
          </tr>
          <tr>
            <td>Aggregation</td>
            <td>Linie mit offener Raute ◇ bei A</td>
            <td>A »hat« B, aber B kann ohne A existieren (lose Teil-Ganzes-Beziehung).</td>
          </tr>
          <tr>
            <td>Komposition</td>
            <td>Linie mit gefüllter Raute ◆ bei A</td>
            <td>A »besteht aus« B, B stirbt mit A (starke Teil-Ganzes-Beziehung).</td>
          </tr>
          <tr>
            <td>Vererbung</td>
            <td>Pfeil mit offener Spitze △ zu Oberklasse</td>
            <td>»B ist ein A«.</td>
          </tr>
          <tr>
            <td>Realisierung</td>
            <td>gestrichelte Linie mit offener Spitze △</td>
            <td>»B implementiert Schnittstelle A«.</td>
          </tr>
          <tr>
            <td>Abhängigkeit</td>
            <td>gestrichelter Pfeil</td>
            <td>A nutzt B temporär (z. B. als Parameter).</td>
          </tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Merksatz: <strong>Komposition = »stirbt mit«.</strong> Rechnung-Position: wenn die Rechnung
        gelöscht wird, sind die Positionen auch weg → Komposition. Auto-Reifen: die Reifen überleben
        das Auto ggf. → Aggregation.
      </Callout>

      <h2>3. Multiplizitäten</h2>
      <ul>
        <li><InlineCode>1</InlineCode> – genau eins</li>
        <li><InlineCode>0..1</InlineCode> – null oder eins (optional)</li>
        <li><InlineCode>*</InlineCode> oder <InlineCode>0..*</InlineCode> – beliebig viele</li>
        <li><InlineCode>1..*</InlineCode> – mindestens eins</li>
        <li><InlineCode>n</InlineCode> – genau n</li>
      </ul>
      <p>Schreibweise: An beiden Enden der Beziehung notiert, optional mit Rollenname.</p>

      <h2>4. Beispiel – Online-Shop</h2>
      <CodeBlock caption="Textuelle Skizze">
{`Kunde  1 ── 0..*  Bestellung  1 ──◆── 1..*  Bestellposition  *── 1 Artikel
                                                              (Komposition)
Person (abstrakt) ← Kunde, Mitarbeiter  (Vererbung)`}
      </CodeBlock>
      <ul>
        <li>Ein Kunde kann 0..n Bestellungen haben.</li>
        <li>Eine Bestellung enthält mindestens 1 Bestellposition (Komposition: ohne Bestellung keine Position).</li>
        <li>Eine Position bezieht sich auf genau einen Artikel.</li>
        <li>Kunde und Mitarbeiter erben von der abstrakten Klasse Person.</li>
      </ul>

      <h2>5. So gehst du in der Prüfung vor</h2>
      <ol>
        <li>Substantive im Text → Kandidatenklassen.</li>
        <li>Verben zwischen ihnen → Assoziationen.</li>
        <li>Pro Beziehung: Multiplizität <em>von beiden Seiten</em> aus bestimmen.</li>
        <li>Aggregation/Komposition nur, wenn Teil-Ganzes-Beziehung wirklich erkennbar ist.</li>
        <li>Attribute/Methoden pro Klasse nur so viele, wie der Text nahelegt.</li>
      </ol>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question:
        "Eine Rechnung besteht aus mehreren Positionen. Wird die Rechnung gelöscht, sollen auch die Positionen weg sein. Welche Beziehung?",
      options: [
        { id: "a", text: "Aggregation", correct: false, explanation: "Aggregation lässt das Teil unabhängig leben." },
        { id: "b", text: "Komposition", correct: true, explanation: "Starkes Teil-Ganzes – Position stirbt mit Rechnung." },
        { id: "c", text: "Assoziation", correct: false },
        { id: "d", text: "Vererbung", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Multiplizität bedeutet »mindestens einer«?",
      options: [
        { id: "a", text: "0..*", correct: false },
        { id: "b", text: "*", correct: false },
        { id: "c", text: "1..*", correct: true },
        { id: "d", text: "0..1", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Wie wird eine abstrakte Klasse im Klassendiagramm hervorgehoben?",
      options: [
        { id: "a", text: "Klassenname wird unterstrichen.", correct: false, explanation: "Unterstrichen = statisch." },
        { id: "b", text: "Klassenname steht in kursiv.", correct: true },
        { id: "c", text: "Der Kasten hat runde Ecken.", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-4",
      question: "Welche Sichtbarkeit bedeutet »nur für die Klasse und ihre Unterklassen«?",
      options: [
        { id: "a", text: "+", correct: false },
        { id: "b", text: "−", correct: false },
        { id: "c", text: "#", correct: true },
        { id: "d", text: "~", correct: false },
      ],
    },
  ],
  examTips: [
    "Multiplizitäten immer an BEIDEN Enden angeben.",
    "Komposition/Aggregation sparsam einsetzen – im Zweifel Assoziation.",
    "Sichtbarkeiten nicht vergessen – Standardfehler, der Teilpunkte kostet.",
    "Bei Vererbung: Gemeinsame Attribute in die Oberklasse, Spezifisches in die Unterklasse.",
  ],
  resources: [
    {
      kind: "video",
      title: "UML-Klassendiagramm für AP1 der IT-Berufe",
      url: "https://www.youtube.com/watch?v=F3RDwz-uoX8",
      channel: "IT-Berufe-Podcast (Stefan Macke)",
      note: "Lehrgespräch speziell für IT-Azubis – exakt auf IHK-Prüfungsniveau.",
    },
    {
      kind: "video",
      title: "UML-Klassendiagramm: Assoziation, Aggregation, Komposition",
      url: "https://www.youtube.com/watch?v=soH7f9ZxIME",
      note: "Fokus auf die Beziehungstypen – zentrales Prüfungsthema.",
    },
  ],
  related: ["oo-grundprinzipien", "klassenbeziehungen", "sequenzdiagramm"],
};
