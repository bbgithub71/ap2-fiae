import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const projektphasen: Lesson = {
  slug: "projektphasen",
  objectives: [
    "Die klassischen Projektphasen benennen und abgrenzen",
    "Typische Aktivitäten und Artefakte je Phase zuordnen",
    "4-Phasen- und 5-Phasen-Modell unterscheiden",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Projektphasen sind die Grundlage jeder Projektmanagement-Aufgabe in der AP2. Häufig wird nach
        Phasen, typischen Dokumenten oder Meilensteinen gefragt.
      </Callout>

      <h2>Klassische 5 Phasen (PMI-Modell)</h2>
      <ol>
        <li>
          <strong>Initiierung</strong> – Projektidee prüfen, Projektauftrag, Machbarkeit grob,
          Stakeholder identifizieren.
        </li>
        <li>
          <strong>Planung</strong> – Lasten-/Pflichtenheft, Projektstrukturplan, Zeit- und
          Ressourcenplanung (Netzplan/Gantt), Risikoanalyse, Budget.
        </li>
        <li>
          <strong>Ausführung / Durchführung</strong> – Umsetzung der Planung, Teamführung,
          Kommunikation, Qualitätssicherung.
        </li>
        <li>
          <strong>Überwachung &amp; Steuerung</strong> – Fortschritt messen, Soll-Ist-Vergleich,
          Änderungen (Change Management), Berichte. <em>Läuft parallel zu Phase 3.</em>
        </li>
        <li>
          <strong>Abschluss</strong> – Abnahme, Übergabe, Abschlussbericht, Lessons Learned,
          Projektauflösung.
        </li>
      </ol>

      <h2>4-Phasen-Modell (häufig in Lehrbüchern)</h2>
      <table>
        <thead>
          <tr><th>Phase</th><th>Typische Artefakte</th></tr>
        </thead>
        <tbody>
          <tr><td>Initiierung</td><td>Projektauftrag, grobe Machbarkeit</td></tr>
          <tr><td>Planung</td><td>Lasten-/Pflichtenheft, PSP, Netzplan, Budget</td></tr>
          <tr><td>Durchführung</td><td>Teilergebnisse, Statusberichte</td></tr>
          <tr><td>Abschluss</td><td>Abnahmeprotokoll, Abschlussbericht, Lessons Learned</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Agile Projekte durchlaufen diese Phasen <strong>pro Sprint</strong>, nicht nur einmal
        gesamt. Im Scrum-Kontext heißen sie anders, die Grundidee bleibt.
      </Callout>

      <h2>Typische Prüfungsfragen</h2>
      <ul>
        <li>Welche Phase kommt vor der Durchführung?</li>
        <li>In welcher Phase wird das Pflichtenheft erstellt?</li>
        <li>Was gehört zum Projektabschluss?</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "In welcher Phase wird das Pflichtenheft erstellt?",
      options: [
        { id: "a", text: "Initiierung", correct: false, explanation: "Dort ist erst das Lastenheft / die Projektidee." },
        { id: "b", text: "Planung", correct: true, explanation: "Detaillierte Planung = Pflichtenheft." },
        { id: "c", text: "Durchführung", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was gehört NICHT typischerweise in die Abschlussphase?",
      options: [
        { id: "a", text: "Abnahmeprotokoll", correct: false },
        { id: "b", text: "Lessons Learned", correct: false },
        { id: "c", text: "Risikoanalyse für ein neues Projekt", correct: true, explanation: "Die findet in der Initiierung/Planung des neuen Projekts statt." },
      ],
    },
  ],
  examTips: [
    "4 oder 5 Phasen – beide Modelle sind in der Prüfung gültig. Entscheide dich und bleib dabei.",
    "Typische Artefakte pro Phase auswendig: Projektauftrag, Pflichtenheft, PSP, Netzplan, Abschlussbericht.",
    "Überwachung läuft parallel zur Durchführung, nicht sequenziell dahinter.",
  ],
  related: ["anforderungen", "vorgehensmodelle", "netzplan", "bedarfs-machbarkeitsanalyse"],
  resources: [
    {
      kind: "video",
      title: "Die 5 Projektmanagementphasen – Projektmanagement Grundlagen",
      url: "https://www.youtube.com/watch?v=lS6szGDlbhM",
      note: "Alle 5 Phasen im Überblick – gute Prüfungsvorbereitung.",
    },
    {
      kind: "video",
      title: "Die 4 Phasen eines Projekts einfach erklärt | Projektlebenszyklus im Überblick",
      url: "https://www.youtube.com/watch?v=wAAfsQ4EbS4",
      note: "Alternativ: das häufig in Lehrbüchern verwendete 4-Phasen-Modell.",
    },
    {
      kind: "video",
      title: "AP Teil 1 Übungsklausur: Kaufmännische Themen (Projektmanagement, Bedarfsanalyse, Netzplantechnik)",
      url: "https://www.youtube.com/watch?v=ko93mIwLGdA",
      note: "Direkte Prüfungsaufgabe durchgearbeitet – Projektmanagement im IHK-Kontext.",
    },
  ],
};
