import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const bedarfsMachbarkeitsanalyse: Lesson = {
  slug: "bedarfs-machbarkeitsanalyse",
  objectives: [
    "Bedarfsanalyse von Anforderungsanalyse abgrenzen",
    "Die 4–5 Dimensionen einer Machbarkeitsanalyse nennen",
    "Stakeholder identifizieren und in einer Matrix einordnen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        In fast jeder AP2-PM-Aufgabe geht es am Anfang um diese Frage: „Was will der Kunde?" und
        „Ist das überhaupt machbar?". Die Begriffe sauber trennen = Punkte.
      </Callout>

      <h2>Bedarfsanalyse</h2>
      <p>
        Die <strong>Bedarfsanalyse</strong> klärt, <em>was</em> der Kunde / das Unternehmen
        wirklich braucht. Methoden:
      </p>
      <ul>
        <li><strong>Interviews / Workshops</strong> mit Stakeholdern</li>
        <li><strong>Beobachtung</strong> am Arbeitsplatz (Ist-Zustand verstehen)</li>
        <li><strong>Fragebögen</strong> für große Nutzergruppen</li>
        <li><strong>Ist-Soll-Vergleich</strong>: Wo liegt die Lücke?</li>
      </ul>
      <p>Ergebnis: grober Bedarf / Problemstellung → Basis fürs Lastenheft.</p>

      <h2>Machbarkeitsanalyse</h2>
      <p>
        Die Machbarkeitsanalyse (feasibility study) prüft <em>ob</em> das Projekt realisierbar ist.
        Klassisch in <strong>vier Dimensionen</strong>:
      </p>
      <table>
        <thead>
          <tr><th>Dimension</th><th>Frage</th><th>Beispiele</th></tr>
        </thead>
        <tbody>
          <tr><td>Technisch</td><td>Haben wir das Know-how und die Technik?</td><td>Frameworks, Hardware, Architektur</td></tr>
          <tr><td>Wirtschaftlich</td><td>Rechnet sich das?</td><td>Kosten, Nutzen, Amortisation, TCO</td></tr>
          <tr><td>Rechtlich</td><td>Dürfen wir das umsetzen?</td><td>DSGVO, Urheberrecht, Lizenzen, Verträge</td></tr>
          <tr><td>Zeitlich / organisatorisch</td><td>Schaffen wir das in der Zeit?</td><td>Deadlines, Ressourcen, Mitarbeiter</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Merksatz: <strong>«TWRZ» – Technisch, Wirtschaftlich, Rechtlich, Zeitlich.</strong>
      </Callout>

      <h2>Stakeholder-Analyse</h2>
      <p>
        <strong>Stakeholder</strong> = alle Personen und Gruppen, die ein Interesse am Projekt
        haben oder davon betroffen sind.
      </p>
      <ul>
        <li><strong>Intern</strong>: Management, Team, Mitarbeiter</li>
        <li><strong>Extern</strong>: Kunden, Lieferanten, Behörden, Endnutzer</li>
      </ul>
      <p>Schritte:</p>
      <ol>
        <li>Identifizieren (wer ist alles betroffen?)</li>
        <li>Kategorisieren (Einfluss × Interesse)</li>
        <li>Einordnen in die Stakeholder-Matrix (Power/Interest-Grid)</li>
        <li>Maßnahmen ableiten (informieren, einbinden, zufriedenstellen, beobachten)</li>
      </ol>

      <h2>Typische Prüfungsfragen</h2>
      <ul>
        <li>Nenne 3 Dimensionen einer Machbarkeitsanalyse mit je einem Beispiel.</li>
        <li>Unterscheide interne und externe Stakeholder mit je einem Beispiel.</li>
        <li>Welche Methoden zur Bedarfsermittlung kennst du?</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Dimension gehört NICHT klassisch zur Machbarkeitsanalyse?",
      options: [
        { id: "a", text: "Technisch", correct: false },
        { id: "b", text: "Wirtschaftlich", correct: false },
        { id: "c", text: "Ästhetisch", correct: true, explanation: "Gehört nicht zum Standard. TWRZ: Technisch, Wirtschaftlich, Rechtlich, Zeitlich." },
        { id: "d", text: "Rechtlich", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wer zählt als EXTERNER Stakeholder?",
      options: [
        { id: "a", text: "Projektteam", correct: false },
        { id: "b", text: "Geschäftsführung des eigenen Unternehmens", correct: false },
        { id: "c", text: "Endkunden / Lieferanten / Behörden", correct: true },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Was unterscheidet Bedarfsanalyse von Anforderungsanalyse?",
      options: [
        { id: "a", text: "Bedarfsanalyse = was wird benötigt (grober Problemraum); Anforderungsanalyse = konkrete funktionale/nicht-funktionale Anforderungen.", correct: true },
        { id: "b", text: "Bedarfsanalyse findet nach der Abnahme statt.", correct: false },
        { id: "c", text: "Es gibt keinen Unterschied.", correct: false },
      ],
    },
  ],
  examTips: [
    "Merksatz TWRZ für die 4 Machbarkeits-Dimensionen.",
    "Stakeholder-Matrix: Power hoch / Interesse hoch → eng einbinden (Key Player).",
    "Bedarfs- vor Anforderungsanalyse – erst «was brauchen wir überhaupt?», dann «was muss das System konkret können?».",
  ],
  related: ["anforderungen", "projektphasen", "nutzwertanalyse", "risikomanagement"],
  resources: [
    {
      kind: "video",
      title: "Stakeholderanalyse im Projektmanagement | So identifizierst & steuerst du deine Stakeholder richtig",
      url: "https://www.youtube.com/watch?v=YYgGeJ6KL1A",
      note: "Stakeholder-Matrix und praktische Steuerung.",
    },
    {
      kind: "page",
      title: "projektmagazin – Machbarkeitsstudie: Definition, Einsatz, Ergebnisse",
      url: "https://www.projektmagazin.de/glossarterm/machbarkeitsstudie",
      source: "projektmagazin.de",
      note: "Autoritative Definition der Machbarkeitsstudie.",
    },
    {
      kind: "page",
      title: "Asana – Machbarkeitsstudie im Projektmanagement",
      url: "https://asana.com/de/resources/feasibility-study",
      source: "asana.com",
      note: "Praxis-Anleitung mit den 4 Dimensionen.",
    },
  ],
};
