import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const projektdokumentation: Lesson = {
  slug: "projektdokumentation",
  objectives: [
    "Die formalen IHK-Vorgaben (Seitenanzahl, Schrift, Zeilenabstand) sicher kennen",
    "Eine prüfungstaugliche Gliederung aufbauen",
    "Wissen, was in den Hauptteil gehört – und was NICHT",
    "Best Practices für Sprache, Code und Anhänge umsetzen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Die Projektdokumentation ist <strong>50 % deiner AP2-Endnote</strong> (zusammen mit
        Präsentation und Fachgespräch). Hier verlierst du keine Punkte unnötig durch Formfehler.
        <strong> Wichtig: Vorgaben variieren je IHK – immer das Merkblatt deiner zuständigen IHK
        zuerst lesen.</strong>
      </Callout>

      <h2>1. Formale IHK-Vorgaben</h2>
      <p>Stand: aktuelle Merkblätter (z. B. IHK München 2025, IHK Köln, IHK Rhein-Neckar):</p>
      <ul>
        <li><strong>Umfang</strong>: maximal <strong>15 Seiten</strong> Hauptteil ohne Anhang.</li>
        <li><strong>Schriftart/-größe</strong>: Arial 11 pt oder Times New Roman 12 pt.</li>
        <li><strong>Zeilenabstand</strong>: 1,5-zeilig.</li>
        <li><strong>Ränder</strong>: typischerweise 2,5 cm rundum (siehe IHK-Vorgabe).</li>
        <li>
          <strong>Nicht mitgezählt</strong>: Deckblatt, Inhalts-, Abbildungs-, Tabellen-,
          Abkürzungs-, Glossar- und Literaturverzeichnis sowie Anhang.
        </li>
        <li>
          <strong>Zeitumfang</strong>: 80 Stunden Projektarbeit gemäß Ausbildungsverordnung
          (FIAusbV).
        </li>
        <li>
          <strong>Quellcode</strong>: bei FIAE <strong>Pflicht im Anhang</strong> – nicht in den
          Hauptteil.
        </li>
        <li>
          <strong>Abgabe</strong>: meistens als PDF + Online-Upload, in manchen IHKs zusätzlich
          gedruckt + signierte Erklärung über die selbstständige Erstellung.
        </li>
      </ul>

      <h2>2. Empfohlene Gliederung (IHK-Standard)</h2>
      <CodeBlock caption="Typische Inhaltsstruktur einer 15-Seiten-Doku">
{`1.  Einleitung / Projektbeschreibung               (~1–2 S.)
    1.1 Projektumfeld / Unternehmensvorstellung
    1.2 Ist-Analyse / Ausgangssituation
    1.3 Ziel des Projekts (Soll-Zustand)
    1.4 Projektabgrenzung (was NICHT Teil des Projekts ist)

2.  Projektplanung                                 (~2–3 S.)
    2.1 Projektphasen mit Zeitplanung (Soll-Plan)
    2.2 Stakeholder-Analyse
    2.3 Risikoanalyse
    2.4 Wirtschaftlichkeitsanalyse / Kosten-Nutzen

3.  Analysephase                                   (~2 S.)
    3.1 Anforderungsanalyse (funktional / nicht-funktional)
    3.2 Make-or-Buy-Entscheidung / Nutzwertanalyse
    3.3 Auswahl Technologien

4.  Entwurfsphase                                  (~2–3 S.)
    4.1 Architekturentwurf
    4.2 Datenmodell (ERM, ggf. Klassendiagramm)
    4.3 Schnittstellen / GUI-Mockups

5.  Implementierungsphase                          (~3–4 S.)
    5.1 Umgesetzte Funktionen (kein Code-Listing!)
    5.2 Wichtige Designentscheidungen mit Begründung
    5.3 Abweichungen vom Plan

6.  Test- und Abnahmephase                         (~1–2 S.)
    6.1 Testkonzept (Unit, Integration, Abnahme)
    6.2 Testdokumentation
    6.3 Abnahmeprotokoll

7.  Projektabschluss                               (~1 S.)
    7.1 Soll-Ist-Vergleich (Zeit, Kosten, Funktionen)
    7.2 Lessons Learned / Reflexion
    7.3 Ausblick / mögliche Erweiterungen`}
      </CodeBlock>

      <h2>3. Was in den Anhang gehört</h2>
      <ul>
        <li><strong>Quellcode</strong> (Pflicht für FIAE) – ggf. nur die wichtigsten Klassen, nicht der ganze Build-Output</li>
        <li>Vollständige <strong>Diagramme</strong> in lesbarer Größe (Klassen-, Aktivitäts-, Sequenzdiagramm)</li>
        <li><strong>SQL-Skripte</strong> und Datenbankschema</li>
        <li><strong>Mockups / Screenshots</strong> der finalen Anwendung</li>
        <li><strong>Testfälle / Testprotokolle</strong></li>
        <li><strong>Installationsanleitung</strong> oder Benutzerhandbuch (oft erwünscht)</li>
        <li><strong>Abnahmeprotokoll</strong> mit Unterschrift des Auftraggebers</li>
        <li><strong>Glossar / Abkürzungsverzeichnis</strong></li>
      </ul>

      <Callout variant="warn" title="Was NICHT in die Doku gehört">
        <ul>
          <li><strong>Kein Code-Listing</strong> im Hauptteil – das gehört in den Anhang.</li>
          <li><strong>Keine Lehrbuchabschnitte</strong>: «Was ist OO?» – die Prüfer wissen das.</li>
          <li><strong>Keine kompletten Software-Manuals</strong> – Verweis statt Vollabdruck.</li>
          <li><strong>Kein selbst kalkulierter Stundensatz</strong> – nutze die Vorgabe deines Betriebs.</li>
          <li><strong>Keine fremden Inhalte ohne Quellenangabe</strong> – alles korrekt referenzieren.</li>
          <li><strong>Keine Marketingfloskeln</strong> über das Unternehmen.</li>
          <li><strong>Keine Phrasen wie</strong> «sehr modern», «hochinnovativ», «State of the Art» ohne Beleg.</li>
        </ul>
      </Callout>

      <h2>4. Best Practices</h2>
      <h3>Inhaltlich</h3>
      <ul>
        <li>
          <strong>Eigene Leistung klar kennzeichnen</strong>: Was hast <em>du</em> gemacht, was haben
          andere beigesteuert? Bei Co-Working: Schnittstellen sauber benennen.
        </li>
        <li>
          <strong>Begründen, nicht nur beschreiben</strong>: «Wir haben Postgres gewählt, weil …» statt
          «Wir haben Postgres gewählt.»
        </li>
        <li>
          <strong>Soll-Ist-Vergleich</strong> ist Pflicht: Plan vs. Realität bei Zeit, Kosten und
          Funktionen.
        </li>
        <li>
          <strong>Wirtschaftlichkeitsbetrachtung</strong> mit Amortisation oder ROI – meistens
          erwartet.
        </li>
      </ul>

      <h3>Formell</h3>
      <ul>
        <li>
          <strong>Automatisches Inhaltsverzeichnis</strong> mit klickbaren Seitenzahlen (Word /
          LibreOffice / LaTeX).
        </li>
        <li>
          Konsistente <strong>Formatierung</strong>: Überschriftenebenen, Schriftart, Aufzählungen.
        </li>
        <li><strong>Nummerierte Abbildungen und Tabellen</strong> mit Bildunterschrift.</li>
        <li><strong>Quellenangaben</strong> nach einem konsistenten Stil (DIN 1505 oder Harvard).</li>
        <li>
          <strong>Rechtschreibung &amp; Grammatik</strong>: Mind. 2 Personen Korrekturlesen lassen.
          Sprache fließt in die Bewertung ein.
        </li>
        <li>
          <strong>Bilder/Screenshots</strong> in lesbarer Auflösung – verkleinerte UML-Diagramme
          frusten den Korrektor.
        </li>
      </ul>

      <h3>Sprache</h3>
      <ul>
        <li>Sachlich, knapp, präzise. Keine Ich-Erzählung im Hauptteil – Passivkonstruktionen sind ok, aber nicht zwanghaft.</li>
        <li>Fachbegriffe einmalig erklären (Glossar).</li>
        <li>Englisch-deutsche Mischbegriffe vermeiden («wir haben das deployt» → «… ausgeliefert»).</li>
      </ul>

      <h2>5. Bewertungskriterien der IHK (typisch)</h2>
      <table>
        <thead>
          <tr><th>Kriterium</th><th>Worauf Prüfer achten</th></tr>
        </thead>
        <tbody>
          <tr><td>Projektplanung</td><td>realistische Zeit-/Kostenplanung, Stakeholder, Risiken</td></tr>
          <tr><td>Analyse &amp; Entwurf</td><td>nachvollziehbare Anforderungen, sinnvoller Entwurf, begründete Architekturentscheidungen</td></tr>
          <tr><td>Implementierung</td><td>strukturierte Vorgehensweise, eigene Leistung erkennbar</td></tr>
          <tr><td>Test &amp; Qualität</td><td>Testkonzept, Abnahme, Soll-Ist-Vergleich</td></tr>
          <tr><td>Wirtschaftlichkeit</td><td>Kosten-Nutzen, Amortisation</td></tr>
          <tr><td>Form &amp; Sprache</td><td>Layout, Rechtschreibung, sauberer Aufbau</td></tr>
          <tr><td>Anhänge</td><td>Quellcode, Diagramme, Abnahmeprotokoll, lesbar und vollständig</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        <strong>Tipp aus erfahrener Korrektor-Sicht (it-berufe-podcast):</strong> Die IHK bewertet
        nicht den schönsten Code, sondern <strong>deine Fähigkeit, ein Projekt zu strukturieren,
        Entscheidungen zu treffen und sinnvoll zu dokumentieren</strong>. Klare Begründungen schlagen
        bunte Diagramme.
      </Callout>

      <h2>6. Typische Fehler (aus IHK-Auswertungen)</h2>
      <ul>
        <li>Unklare Trennung «eigene Leistung» vs. «Team-/Fremdleistung»</li>
        <li>Keine oder oberflächliche Wirtschaftlichkeitsbetrachtung</li>
        <li>Soll-Ist-Vergleich fehlt komplett</li>
        <li>Anforderungen nicht systematisch erfasst</li>
        <li>Diagramme zu klein oder fehlerhaft (z. B. UML-Notation falsch)</li>
        <li>Code-Snippets im Hauptteil → Verschwendung von Seiten</li>
        <li>Lehrbuchabschnitte als Füllmaterial</li>
        <li>Ich-Erzählungen, Plauderton</li>
        <li>Anhang ohne Inhaltsverzeichnis / Bezug</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wie viele Seiten umfasst der Hauptteil einer IHK-Projektdokumentation maximal?",
      options: [
        { id: "a", text: "10 Seiten", correct: false },
        { id: "b", text: "15 Seiten ohne Anhang", correct: true, explanation: "15 Seiten ist der typische Standard. Verzeichnisse + Anhang zählen nicht mit." },
        { id: "c", text: "30 Seiten", correct: false },
        { id: "d", text: "Beliebig", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wo gehört der Quellcode in der FIAE-Doku hin?",
      options: [
        { id: "a", text: "In den Hauptteil als Listing", correct: false, explanation: "Verschwendet die knappen 15 Seiten." },
        { id: "b", text: "In den Anhang (Pflicht!)", correct: true, explanation: "Quellcode gehört bei FIAE pflichtgemäß in den Anhang." },
        { id: "c", text: "Wird gar nicht eingereicht", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Welche Schrifteinstellung ist typisch IHK-konform?",
      options: [
        { id: "a", text: "Arial 11pt, 1,5-zeilig", correct: true, explanation: "Alternativ Times New Roman 12pt." },
        { id: "b", text: "Comic Sans 14pt", correct: false },
        { id: "c", text: "Calibri 9pt", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-4",
      question: "Was sollte NICHT in den Hauptteil der Doku?",
      options: [
        { id: "a", text: "Soll-Ist-Vergleich am Projektende", correct: false },
        { id: "b", text: "Begründung der Architekturentscheidung", correct: false },
        { id: "c", text: "Lehrbuchabschnitte zu OO-Grundlagen", correct: true, explanation: "Die Prüfer kennen das. Kostet Seiten und Punkte." },
      ],
    },
    {
      kind: "mc",
      id: "mc-5",
      multiple: true,
      question: "Welche Bestandteile zählen NICHT zur 15-Seiten-Grenze?",
      options: [
        { id: "a", text: "Deckblatt", correct: true },
        { id: "b", text: "Inhaltsverzeichnis", correct: true },
        { id: "c", text: "Anhang", correct: true },
        { id: "d", text: "Hauptteil-Kapitel «Implementierung»", correct: false },
        { id: "e", text: "Abkürzungsverzeichnis", correct: true },
      ],
    },
  ],
  examTips: [
    "Vorgaben deiner zuständigen IHK ZUERST lesen – Werte können regional abweichen.",
    "15 Seiten / Arial 11 / 1,5-zeilig / Quellcode in den Anhang.",
    "Soll-Ist-Vergleich + Wirtschaftlichkeit immer drin lassen – Standard-Bewertungspunkte.",
    "Eigene Leistung explizit kennzeichnen – «Ich habe …» an den richtigen Stellen.",
    "Korrekturlesen zu zweit. Sprache &amp; Form fließen in die Note ein.",
    "Quellcode-Snippets im Hauptteil sind verlorene Seiten – immer in den Anhang.",
  ],
  related: [
    "anforderungen",
    "projektphasen",
    "wirtschaftlichkeitsanalyse",
    "nutzwertanalyse",
    "risikomanagement",
    "bedarfs-machbarkeitsanalyse",
  ],
  resources: [
    {
      kind: "video",
      title: "IHK-Prüfungsvorbereitung zur Projektdokumentation für Fachinformatiker – Alles, was du wissen musst",
      url: "https://www.youtube.com/watch?v=Y0mXF75JIGE",
      note: "Kompletter Überblick zur IHK-Doku.",
    },
    {
      kind: "video",
      title: "100 Punkte in der Projektdokumentation und Fachgespräch – So geht's!",
      url: "https://www.youtube.com/watch?v=ybcbS15xVIw",
      note: "Best-Practice-Video von einem 100-Punkte-Absolventen.",
    },
    {
      kind: "video",
      title: "Projektarbeit schreiben in der IHK Abschlussprüfung – einfach erklärt von Plakos",
      url: "https://www.youtube.com/watch?v=PJgYoNr-VB4",
      note: "Kompakt für den Einstieg.",
    },
    {
      kind: "page",
      title: "IHK München – Orientierungshilfe zur Dokumentation IT-Berufe (PDF, 2025)",
      url: "https://www.ihk-muenchen.de/Bildung/DiPa/Dokumente/Merkblatt_Dokumentation-_2025.pdf",
      source: "ihk-muenchen.de",
      note: "Offizielles Merkblatt mit allen formalen Vorgaben.",
    },
    {
      kind: "page",
      title: "IHK Köln – Formale Vorgaben für die Projektdokumentation der IT-Berufe",
      url: "https://www.ihk.de/koeln/hauptnavigation/ausbildung/pruefungen/formale-vorgaben-fuer-die-it-projektdokumentation-5700424",
      source: "ihk.de",
      note: "Übersicht der formalen Anforderungen je IHK.",
    },
    {
      kind: "page",
      title: "IT-Berufe-Podcast – Inhalte der Projektdokumentation",
      url: "https://it-berufe-podcast.de/inhalte-der-projektdokumentation/",
      source: "it-berufe-podcast.de",
      note: "Stefan Macke geht jedes Kapitel der Doku im Detail durch.",
    },
    {
      kind: "page",
      title: "IT-Berufe-Podcast – Beispiele für IHK-Abschlussprojekte",
      url: "https://it-berufe-podcast.de/vorbereitung-auf-die-ihk-abschlusspruefung-der-it-berufe/beispiele-fuer-ihk-abschlussprojekte-in-den-it-berufen/",
      source: "it-berufe-podcast.de",
      note: "Echte AP2-Projekt-Beispiele und veröffentlichte Dokumentationen mit 93–100 Punkten.",
    },
    {
      kind: "page",
      title: "Die perfekte Projektdokumentation – Vorlage zur IHK-Projektdokumentation",
      url: "https://dieperfekteprojektdokumentation.de/",
      source: "dieperfekteprojektdokumentation.de",
      note: "Word-/LibreOffice-Vorlage mit Beispielinhalten (kostenlose PDF-Vorschau verfügbar).",
    },
    {
      kind: "page",
      title: "testhelden.com – Projektdokumentation FIAE 2026: Das solltest du nicht vergessen",
      url: "https://testhelden.com/projektdokumentation-fachinformatiker-anwendungsentwicklung/",
      source: "testhelden.com",
      note: "Aktuelle Stolperfallen für die Prüfung 2026.",
    },
  ],
};
