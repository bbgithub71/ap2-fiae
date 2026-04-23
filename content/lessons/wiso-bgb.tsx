import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const wisoBgb: Lesson = {
  slug: "wiso-bgb",
  objectives: [
    "Geschäftsfähigkeit und Willenserklärung einordnen",
    "Vertragsarten (Kauf-, Werk-, Dienst-, Miet-, Darlehensvertrag) unterscheiden",
    "Leistungsstörungen und Widerrufsrecht kennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Geschäftsfähigkeit</h2>
      <ul>
        <li><strong>Geschäftsunfähig</strong> &lt; 7 Jahre (§ 104 BGB).</li>
        <li><strong>Beschränkt geschäftsfähig</strong> 7–17 Jahre (§ 106 BGB).</li>
        <li><strong>Voll geschäftsfähig</strong> ab 18 Jahren.</li>
        <li>
          <strong>Taschengeldparagraph § 110 BGB</strong>: Minderjährige können mit eigenen Mitteln
          bewirken – greift nicht bei Ratenkauf!
        </li>
      </ul>

      <h2>Vertragsarten</h2>
      <table>
        <thead><tr><th>Vertrag</th><th>Geschuldet</th><th>Beispiel</th></tr></thead>
        <tbody>
          <tr><td>Kaufvertrag (§ 433)</td><td>Übereignung &amp; Kaufpreis</td><td>Notebook kaufen</td></tr>
          <tr><td>Werkvertrag (§ 631)</td><td>Erfolg / Werk</td><td>Website programmieren</td></tr>
          <tr><td>Dienstvertrag (§ 611)</td><td>Tätigkeit</td><td>Arbeitsvertrag, Anwalt</td></tr>
          <tr><td>Mietvertrag (§ 535)</td><td>Gebrauchsüberlassung</td><td>Serverhosting</td></tr>
          <tr><td>Darlehen (§ 488)</td><td>Geld auf Zeit</td><td>Kredit</td></tr>
        </tbody>
      </table>

      <h2>Leistungsstörungen &amp; Rechtsfolgen bei Mangel</h2>
      <ul>
        <li><strong>Sachmangel</strong> (§ 434), <strong>Verzug</strong> (§ 286), <strong>Unmöglichkeit</strong> (§ 275).</li>
        <li>
          Rechte des Käufers: <strong>Nacherfüllung</strong>, <strong>Rücktritt</strong>,
          <strong> Minderung</strong>, <strong>Schadensersatz</strong>.
        </li>
        <li>Gewährleistung 2 Jahre Neuware (§ 438); Beweislastumkehr 12 Monate B2C.</li>
        <li>Gewährleistung ≠ Garantie. Garantie ist freiwillig vom Hersteller/Händler.</li>
      </ul>

      <h2>Widerrufsrecht Fernabsatz</h2>
      <p>
        14 Tage ab Erhalt der Ware (§§ 312g, 355 BGB) im B2C-Fernabsatz (online, Telefon). Gilt
        <strong>nicht im Ladengeschäft</strong> – dort nur Kulanz.
      </p>

      <Callout variant="warn">
        Werkvertrag vs. Dienstvertrag: Werk = Erfolg, Dienst = Bemühen. Arzt schuldet Bemühen
        (Dienst), Laborarbeit schuldet Ergebnis (Werk).
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Ein 15-Jähriger kauft ohne Eltern einen Laptop für 600 € auf Raten. Was gilt?",
      options: [
        { id: "a", text: "Vertrag sofort gültig", correct: false },
        { id: "b", text: "Schwebend unwirksam – bis Eltern zustimmen (§ 108 BGB)", correct: true, explanation: "Taschengeldparagraph greift bei Ratenkauf nicht." },
        { id: "c", text: "Automatisch nichtig", correct: false },
        { id: "d", text: "Gültig, Eltern müssen zahlen", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Widerrufsfrist bei einem Onlinekauf B2C?",
      options: [
        { id: "a", text: "7 Tage", correct: false },
        { id: "b", text: "14 Tage ab Erhalt der Ware", correct: true, explanation: "§ 355 BGB." },
        { id: "c", text: "24 Monate", correct: false },
        { id: "d", text: "30 Tage", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Welcher Vertrag schuldet einen Erfolg?",
      options: [
        { id: "a", text: "Dienstvertrag", correct: false },
        { id: "b", text: "Werkvertrag", correct: true, explanation: "z. B. Erstellung einer Software." },
        { id: "c", text: "Arbeitsvertrag", correct: false },
        { id: "d", text: "Mietvertrag", correct: false },
      ],
    },
  ],
  examTips: [
    "Die 4 Rechtsfolgen bei Mangel: Nacherfüllung, Rücktritt, Minderung, Schadensersatz.",
    "§§ 104 / 106 / 110 BGB immer präsent haben.",
    "Fernabsatz: 14 Tage, nicht 7 oder 28.",
  ],
  resources: [
    {
      kind: "video",
      title: "Vertragsarten einfach erklärt – Wichtige Rechtsgeschäfte",
      url: "https://www.youtube.com/watch?v=8MQ1GrpB8b0",
      note: "Guter Gesamtüberblick über Kauf-, Werk-, Dienst- & Mietvertrag.",
    },
    {
      kind: "video",
      title: "§ 631 BGB // Werkvertrag – einfach erklärt",
      url: "https://www.youtube.com/watch?v=ZocN8RdE57g",
      note: "Wichtig für die Abgrenzung Werkvertrag vs. Dienstvertrag.",
    },
    {
      kind: "page",
      title: "studyflix – Vertragsarten",
      url: "https://studyflix.de/wirtschaft/vertragsarten-4479",
      source: "studyflix.de",
      note: "Azubi-Niveau mit eingebettetem Video und Zusammenfassung.",
    },
  ],
  related: ["wiso-arbeitsrecht", "wiso-rechtsformen", "recht"],
};
