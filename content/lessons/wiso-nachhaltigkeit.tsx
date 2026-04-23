import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const wisoNachhaltigkeit: Lesson = {
  slug: "wiso-nachhaltigkeit",
  objectives: [
    "Das 3-Säulen-Modell der Nachhaltigkeit erklären",
    "CSR, ESG und CSRD voneinander abgrenzen",
    "Abfallhierarchie kennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="new">
        Nachhaltigkeit ist im Katalog 2025+ <strong>verstärkt gewichtet</strong>. Kurzdefinitionen
        und Abgrenzungen sind MC-tauglich.
      </Callout>

      <h2>3-Säulen-Modell</h2>
      <ul>
        <li><strong>Ökologie</strong> – Umwelt, Ressourcen.</li>
        <li><strong>Ökonomie</strong> – wirtschaftliche Tragfähigkeit.</li>
        <li><strong>Soziales</strong> – Gerechtigkeit, Arbeitsbedingungen.</li>
      </ul>
      <p>Alle drei gelten als gleichrangig.</p>

      <h2>CSR, ESG, CSRD</h2>
      <ul>
        <li><strong>CSR</strong> (Corporate Social Responsibility): freiwillige gesellschaftliche Verantwortung.</li>
        <li>
          <strong>ESG</strong>: <u>E</u>nvironment, <u>S</u>ocial, <u>G</u>overnance – Bewertungsraster für Investoren.
        </li>
        <li>
          <strong>CSRD</strong> (Corporate Sustainability Reporting Directive): EU-Pflicht zur
          Nachhaltigkeitsberichterstattung. Nach dem EU-Omnibus-Paket ab 2026 für Unternehmen mit
          &gt; 1.000 Beschäftigten und &gt; 450 Mio. € Umsatz (Stand 2026, ggf. verifizieren).
        </li>
        <li><strong>ESRS</strong>: EU-Standards für die Berichterstattung, doppelte Wesentlichkeit (inside-out + outside-in).</li>
      </ul>

      <h2>Abfallhierarchie (KrWG)</h2>
      <ol>
        <li>Vermeidung</li>
        <li>Vorbereitung zur Wiederverwendung</li>
        <li>Recycling</li>
        <li>sonstige Verwertung (z. B. energetisch)</li>
        <li>Beseitigung</li>
      </ol>

      <h2>Weitere Begriffe</h2>
      <ul>
        <li><strong>UN-SDGs</strong>: 17 nachhaltige Entwicklungsziele (Agenda 2030).</li>
        <li><strong>Kreislaufwirtschaft</strong>: produzieren, nutzen, zurückführen statt «take-make-waste».</li>
      </ul>

      <Callout variant="warn">
        CSR ist freiwillig, CSRD gesetzliche Pflicht. Diese Abgrenzung ist häufige MC-Falle.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wofür steht das «G» in ESG?",
      options: [
        { id: "a", text: "Green", correct: false },
        { id: "b", text: "Growth", correct: false },
        { id: "c", text: "Governance", correct: true, explanation: "Verantwortungsvolle Unternehmensführung." },
        { id: "d", text: "Gender", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Aussage zur CSRD 2026 stimmt?",
      options: [
        { id: "a", text: "Sie ist rein freiwillig.", correct: false },
        { id: "b", text: "Sie gilt für alle Unternehmen ab 10 MA.", correct: false },
        { id: "c", text: "Sie verpflichtet große Unternehmen (nach Omnibus-Paket: > 1.000 MA und > 450 Mio. € Umsatz) zur Nachhaltigkeitsberichterstattung.", correct: true },
        { id: "d", text: "Sie ersetzt die Handelsbilanz.", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Welche Stufe steht in der Abfallhierarchie an erster Stelle?",
      options: [
        { id: "a", text: "Vermeidung", correct: true, explanation: "Oberstes Ziel vor Wiederverwendung und Recycling." },
        { id: "b", text: "Recycling", correct: false },
        { id: "c", text: "Entsorgung", correct: false },
        { id: "d", text: "Energetische Verwertung", correct: false },
      ],
    },
  ],
  examTips: [
    "3-Säulen-Modell und ESG-Abkürzung auswendig.",
    "CSR (freiwillig) vs. CSRD (Pflicht).",
    "Abfallhierarchie-Reihenfolge strikt einhalten.",
  ],
  resources: [
    {
      kind: "video",
      title: "Drei-Säulen-Modell (Triple Bottom Line): Nachhaltigkeit",
      url: "https://www.youtube.com/watch?v=JJqmYFaNMN0",
      note: "Ökologie, Ökonomie, Soziales in einem Video visualisiert.",
    },
    {
      kind: "page",
      title: "VERSO – CSR, ESG, Nachhaltigkeit: Was ist der Unterschied?",
      url: "https://verso.de/blog/csr-esg-nachhaltigkeit-was-ist-der-unterschied/",
      source: "verso.de",
      note: "Saubere Abgrenzung der drei Begriffe – genau, was die Prüfung verlangt.",
    },
    {
      kind: "page",
      title: "Haufe – Das 3-Säulen-Modell in Unternehmen",
      url: "https://www.haufe.de/corporate-sustainability/drei-saulen-modell",
      source: "haufe.de",
      note: "Mit Beispielen aus der Unternehmenspraxis.",
    },
  ],
  related: ["green-it", "wiso-wirtschaftsordnung"],
};
