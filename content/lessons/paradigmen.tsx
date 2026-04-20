import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const paradigmen: Lesson = {
  slug: "paradigmen",
  objectives: [
    "Imperativ, deklarativ, prozedural, OO, funktional und logisch unterscheiden",
    "Typische Sprachen den Paradigmen zuordnen",
    "Multiparadigmatische Sprachen einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Überblick</h2>
      <ul>
        <li><strong>Imperativ:</strong> Schritt-für-Schritt-Anweisungen mit veränderlichem Zustand (C, Pascal).</li>
        <li><strong>Prozedural</strong> (Unterart imperativ): Gliederung in Prozeduren / Funktionen (C).</li>
        <li><strong>Objektorientiert:</strong> Kapselung, Vererbung, Polymorphie (Java, C#, C++).</li>
        <li><strong>Deklarativ:</strong> beschreibt das «Was", nicht das «Wie» (SQL, HTML).</li>
        <li><strong>Funktional</strong> (Unterart deklarativ): reine Funktionen, Immutability (Haskell, F#, Lisp, Teile von JS).</li>
        <li><strong>Logisch:</strong> Fakten + Regeln, Inferenz durch die Laufzeit (Prolog).</li>
      </ul>

      <h2>Beispiele</h2>
      <CodeBlock lang="sql" caption="deklarativ (SQL)">
{`SELECT name FROM kunden WHERE plz = '10115';`}
      </CodeBlock>
      <CodeBlock lang="java" caption="objektorientiert (Java)">
{`class Kunde {
    private String name;
    public Kunde(String name) { this.name = name; }
}`}
      </CodeBlock>

      <Callout variant="tip">
        Moderne Sprachen sind oft <strong>multiparadigmatisch</strong>: Python, Kotlin oder JavaScript
        bedienen mehrere Paradigmen gleichzeitig. OOP-Code kann trotzdem imperativ sein.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>OOP ist <em>nicht</em> automatisch deklarativ – meist imperativ.</li>
        <li>SQL ist deklarativ, PL/SQL aber prozedural.</li>
        <li>«Funktional» heißt nicht «Funktionen benutzen» – es bedeutet reine Funktionen ohne Seiteneffekte.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Paradigma beschreibt SQL am besten?",
      options: [
        { id: "a", text: "imperativ", correct: false },
        { id: "b", text: "deklarativ", correct: true, explanation: "SQL beschreibt das Ergebnis, nicht die Ausführung." },
        { id: "c", text: "objektorientiert", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Prolog gehört zu welchem Paradigma?",
      options: [
        { id: "a", text: "funktional", correct: false },
        { id: "b", text: "objektorientiert", correct: false },
        { id: "c", text: "logisch", correct: true, explanation: "Prolog arbeitet mit Fakten und Regeln, Inferenz übernimmt die Laufzeit." },
      ],
    },
  ],
  examTips: [
    "Klassiker: Unterschied imperativ vs. deklarativ in 1 Satz erklären.",
    "Sprache → Paradigma-Zuordnung sicher können (Java=OO, SQL=deklarativ, Prolog=logisch).",
    "Bei «multiparadigmatisch» ein Beispiel (z. B. Python) nennen.",
  ],
  related: ["typisierung-compiler", "oo-grundprinzipien"],
};
