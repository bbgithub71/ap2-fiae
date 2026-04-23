import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const wirtschaftlichkeitsanalyse: Lesson = {
  slug: "wirtschaftlichkeitsanalyse",
  objectives: [
    "Amortisationszeit, ROI und Break-Even-Point berechnen",
    "Statische und dynamische Verfahren unterscheiden",
    "TCO (Total Cost of Ownership) einordnen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Wirtschaftlichkeitsrechnung = klassische Rechenaufgabe im AP2-WiSo- oder PM-Teil. Die drei
        wichtigsten Kennzahlen: <strong>Amortisationszeit</strong>, <strong>ROI</strong>,
        <strong> Break-Even</strong>.
      </Callout>

      <h2>Amortisationsrechnung</h2>
      <p>
        Wie lange dauert es, bis sich eine Investition „bezahlt" gemacht hat?
      </p>
      <CodeBlock>
{`Amortisationszeit = Investition / jährlicher Rückfluss

Beispiel:
  Investition     = 50.000 €
  Jährlicher Nutzen/Einsparung = 20.000 €
  Amortisationszeit = 50.000 / 20.000 = 2,5 Jahre`}
      </CodeBlock>
      <p>Je kürzer, desto besser. Meistens wird die <em>statische</em> Variante geprüft (ohne Zins).</p>

      <h2>Return on Investment (ROI)</h2>
      <CodeBlock>
{`ROI = (Gewinn / eingesetztes Kapital) × 100 %

Beispiel:
  Gewinn   = 15.000 €
  Invest   = 100.000 €
  ROI      = 15.000 / 100.000 × 100 % = 15 %`}
      </CodeBlock>
      <p>Interpretiert: 15 % Rendite auf das eingesetzte Kapital pro betrachtetem Zeitraum.</p>

      <h2>Break-Even-Point (Gewinnschwelle)</h2>
      <p>Die Menge, ab der Erlöse die Gesamtkosten decken.</p>
      <CodeBlock>
{`Break-Even-Menge = Fixkosten / (Preis − variable Stückkosten)

Beispiel:
  Fixkosten           = 30.000 €
  Verkaufspreis       = 50 €
  variable Stückkosten= 20 €
  Break-Even = 30.000 / (50 − 20) = 1.000 Stück`}
      </CodeBlock>

      <h2>TCO (Total Cost of Ownership)</h2>
      <p>
        Nicht nur Anschaffung – auch Betrieb, Wartung, Lizenzen, Schulung, Migration über den
        Lebenszyklus. Pflicht bei Make-or-Buy-Entscheidungen.
      </p>

      <Callout variant="tip">
        <strong>Statisch vs. dynamisch:</strong> Statische Verfahren (Kostenvergleich,
        Amortisation, ROI) ignorieren Zinsen. Dynamische (Kapitalwertmethode, interner Zinsfuß)
        rechnen den Zeitwert des Geldes mit. Für die AP2 reicht meist die <strong>statische
        Variante</strong>.
      </Callout>

      <h2>Typische Prüfungsfrage</h2>
      <p>
        Eine Software kostet 40.000 € in der Anschaffung und spart 15.000 €/Jahr. Nach wie vielen
        Jahren ist sie amortisiert? <em>→ 40.000 / 15.000 ≈ 2,67 Jahre.</em>
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Ein System kostet 30.000 € und spart 10.000 € pro Jahr. Amortisationszeit?",
      options: [
        { id: "a", text: "1 Jahr", correct: false },
        { id: "b", text: "3 Jahre", correct: true, explanation: "30.000 / 10.000 = 3." },
        { id: "c", text: "10 Jahre", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wie berechnet man den ROI?",
      options: [
        { id: "a", text: "Gewinn / Umsatz × 100 %", correct: false, explanation: "Das ist die Umsatzrendite." },
        { id: "b", text: "(Gewinn / eingesetztes Kapital) × 100 %", correct: true },
        { id: "c", text: "Investition × Zinssatz", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Fixkosten 20.000 €, Preis 40 €/Stück, variable Stückkosten 20 €. Break-Even?",
      options: [
        { id: "a", text: "500 Stück", correct: false },
        { id: "b", text: "1.000 Stück", correct: true, explanation: "20.000 / (40 − 20) = 1.000." },
        { id: "c", text: "2.000 Stück", correct: false },
      ],
    },
  ],
  examTips: [
    "Amortisationszeit = Investition / jährlicher Rückfluss – einfachste Formel auswendig.",
    "ROI immer in Prozent angeben und auf Kapital (nicht Umsatz) beziehen.",
    "Break-Even-Formel = Fixkosten / Deckungsbeitrag je Stück.",
    "Bei Make-or-Buy TCO und nicht nur Anschaffungskosten vergleichen.",
  ],
  related: ["make-or-buy", "nutzwertanalyse", "projektphasen"],
  resources: [
    {
      kind: "video",
      title: "Amortisationsrechnung einfach erklärt",
      url: "https://www.youtube.com/watch?v=MEWmZkTmuUs",
      note: "Formel und Beispielaufgabe Schritt für Schritt.",
    },
    {
      kind: "video",
      title: "Statische Amortisationsrechnung | einfach erklärt | Überblick | Beispielaufgabe",
      url: "https://www.youtube.com/watch?v=mp0mZBpoorQ",
      channel: "wirtconomy",
      note: "Mit der statischen Variante – genau das, was in der AP2 meist geprüft wird.",
    },
    {
      kind: "page",
      title: "studyflix – Return on Investment (ROI)",
      url: "https://studyflix.de/wirtschaft/return-on-investment-roi-1702",
      source: "studyflix.de",
      note: "ROI Berechnung und Interpretation.",
    },
  ],
};
