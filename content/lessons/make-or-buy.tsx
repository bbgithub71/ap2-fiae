import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const makeOrBuy: Lesson = {
  slug: "make-or-buy",
  objectives: [
    "Entscheidungskriterien für Make or Buy kennen",
    "TCO-Konzept anwenden",
    "Nutzwertanalyse als Entscheidungsinstrument nutzen",
  ],
  body: (
    <div className="prose-content">
      <h2>Zentrale Kriterien</h2>
      <ul>
        <li><strong>TCO</strong> (Total Cost of Ownership): Anschaffung + Betrieb + Wartung + Lizenzen + Schulung + Migration.</li>
        <li><strong>Time-to-Market</strong>: wie schnell produktiv? Buy/SaaS meist schneller.</li>
        <li><strong>Abhängigkeit / Vendor Lock-in</strong>: Buy schafft Abhängigkeit vom Anbieter.</li>
        <li><strong>Kompetenzen im Haus</strong>: fehlt Know-how → Make riskant.</li>
        <li><strong>Strategische Relevanz</strong>: Kernkompetenz → Make; Commodity (E-Mail, Payroll) → Buy.</li>
      </ul>

      <h2>Nutzwertanalyse (Beispiel)</h2>
      <table>
        <thead><tr><th>Kriterium</th><th>Gewicht</th><th>Make</th><th>Buy-SaaS</th></tr></thead>
        <tbody>
          <tr><td>TCO</td><td>30 %</td><td>6 → 1,8</td><td>8 → 2,4</td></tr>
          <tr><td>Time-to-Market</td><td>20 %</td><td>4 → 0,8</td><td>9 → 1,8</td></tr>
          <tr><td>Anpassbarkeit</td><td>20 %</td><td>9 → 1,8</td><td>5 → 1,0</td></tr>
          <tr><td>Unabhängigkeit</td><td>15 %</td><td>9 → 1,35</td><td>4 → 0,6</td></tr>
          <tr><td>Sicherheit / DSGVO</td><td>15 %</td><td>7 → 1,05</td><td>7 → 1,05</td></tr>
          <tr><td><strong>Summe</strong></td><td></td><td><strong>6,80</strong></td><td><strong>6,85</strong></td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        SaaS ist die typische Buy-Variante für Commodities: keine eigene Infrastruktur, planbare
        Kosten, schnell einsetzbar – aber DSGVO-Prüfung und Lock-in beachten.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>Anschaffungskosten ≠ TCO – Betrieb kostet oft mehr als der Kauf.</li>
        <li>«Billig selbst bauen» unterschätzt Wartung und Security-Patches.</li>
        <li>Kernkompetenzen niemals blind extern geben – das ist der Wettbewerbsvorteil.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was beschreibt TCO am besten?",
      options: [
        { id: "a", text: "Nur die Anschaffungskosten einer Software", correct: false },
        { id: "b", text: "Alle Kosten über den Lebenszyklus (Anschaffung, Betrieb, Wartung, Migration)", correct: true },
        { id: "c", text: "Die Differenz zwischen Make- und Buy-Preis", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Aussage zu SaaS stimmt?",
      options: [
        { id: "a", text: "Kein eigener Betrieb, schnelle Einführung, aber Abhängigkeit vom Anbieter und DSGVO-Prüfung nötig", correct: true },
        { id: "b", text: "SaaS ist immer günstiger als Eigenentwicklung", correct: false },
        { id: "c", text: "Bei SaaS entfällt jede Datenschutzprüfung", correct: false },
      ],
    },
  ],
  examTips: [
    "Mind. 4 Entscheidungskriterien nennen: TCO, Time-to-Market, Abhängigkeit, Kompetenz.",
    "Nutzwertanalyse-Schema: Kriterien + Gewichte + Bewertung + Summe.",
    "SaaS-Vorteil in 1 Satz: kein eigener Betrieb, schnelle Einführung, planbare Kosten.",
  ],
  related: ["lizenzmodelle", "cloud-speicher", "no-low-code"],
};
