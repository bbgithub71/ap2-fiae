import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const kundenbeziehungen: Lesson = {
  slug: "kundenbeziehungen",
  objectives: [
    "CRM als Strategie und System verstehen",
    "Operatives, analytisches und kollaboratives CRM unterscheiden",
    "Die Phasen eines Kundengesprächs einhalten",
  ],
  body: (
    <div className="prose-content">
      <h2>CRM-Arten</h2>
      <ul>
        <li><strong>Operatives CRM:</strong> tägliche Kundenkontakte – Vertrieb, Marketing, Service, Ticket-System.</li>
        <li><strong>Analytisches CRM:</strong> Daten auswerten, Segmente bilden, Forecasting (BI, Data Warehouse).</li>
        <li><strong>Kollaboratives CRM:</strong> Kanäle und Abteilungen synchronisieren (E-Mail, Chat, Telefon, Social).</li>
      </ul>

      <h2>Relationship Marketing</h2>
      <ul>
        <li>Langfristige Bindung statt Einzelabschluss.</li>
        <li>Fokus auf <strong>Customer Lifetime Value</strong>.</li>
        <li>Wirkungskette: Zufriedenheit → Vertrauen → Loyalität → Weiterempfehlung.</li>
      </ul>

      <h2>Phasen eines Kundengesprächs</h2>
      <ol>
        <li><strong>Vorbereitung</strong> – Ziel, Unterlagen, Hintergrundinfos.</li>
        <li>
          <strong>Durchführung</strong> – Begrüßung, Bedarfsanalyse, Argumentation, Einwand-Behandlung,
          Abschluss.
        </li>
        <li><strong>Nachbereitung</strong> – Protokoll, CRM-Eintrag, Follow-up.</li>
      </ol>

      <Callout variant="warn">
        Bei der Datenerfassung greift die <strong>DSGVO</strong>: Einwilligung einholen,
        Zweckbindung einhalten, nur nötige Daten speichern.
      </Callout>

      <h2>Typische Tools</h2>
      <table>
        <thead><tr><th>CRM-Art</th><th>Beispiel</th></tr></thead>
        <tbody>
          <tr><td>operativ</td><td>Salesforce Sales Cloud, HubSpot</td></tr>
          <tr><td>analytisch</td><td>Power BI, Tableau</td></tr>
          <tr><td>kollaborativ</td><td>MS Teams + CRM-Integration</td></tr>
        </tbody>
      </table>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche CRM-Art nutzt BI-Tools zur Auswertung?",
      options: [
        { id: "a", text: "operatives CRM", correct: false },
        { id: "b", text: "analytisches CRM", correct: true, explanation: "Auswertung, Segmente, Forecasting." },
        { id: "c", text: "kollaboratives CRM", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was gehört zur Nachbereitung eines Kundengesprächs?",
      options: [
        { id: "a", text: "Bedarfsanalyse", correct: false },
        { id: "b", text: "Gesprächsprotokoll + Follow-up planen", correct: true },
        { id: "c", text: "Begrüßung", correct: false },
      ],
    },
  ],
  examTips: [
    "Die drei CRM-Arten klar abgrenzen und je ein Beispiel nennen.",
    "Phasen des Kundengesprächs in Reihenfolge.",
    "DSGVO-Bezug immer mit erwähnen.",
  ],
  resources: [
    {
      kind: "video",
      title: "Was ist Customer Relationship Management (CRM)?",
      url: "https://www.youtube.com/watch?v=JaXX1IgNu28",
      note: "Grundlagen CRM in wenigen Minuten erklärt.",
    },
    {
      kind: "video",
      title: "Was ist CRM? – Alternative Erklärung",
      url: "https://www.youtube.com/watch?v=yIKUI617bZk",
      note: "Zweite Perspektive, zum Verfestigen.",
    },
    {
      kind: "page",
      title: "Haufe-Akademie – CRM-Glossar",
      url: "https://www.haufe-akademie.de/blog/glossar/crm/",
      source: "haufe-akademie.de",
      note: "Kompakt und prüfungsnah.",
    },
    {
      kind: "page",
      title: "StudySmarter – CRM einfach erklärt",
      url: "https://www.studysmarter.de/studium/bwl/marketing/customer-relationship-management/",
      source: "studysmarter.de",
      note: "Operatives, analytisches und kollaboratives CRM mit Beispielen.",
    },
  ],
  related: ["dsgvo", "recht", "praesentieren"],
};
