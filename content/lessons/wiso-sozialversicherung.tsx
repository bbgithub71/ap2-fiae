import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const wisoSozialversicherung: Lesson = {
  slug: "wiso-sozialversicherung",
  objectives: [
    "Die 5 Säulen der Sozialversicherung benennen",
    "Beitragssätze 2026 grob kennen und AG/AN-Verteilung zuordnen",
    "Beitragsbemessungsgrenzen und JAEG einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Die 5 Säulen (Stand 2026)</h2>
      <table>
        <thead><tr><th>Zweig</th><th>Beitragssatz</th><th>AG</th><th>AN</th></tr></thead>
        <tbody>
          <tr><td>Krankenversicherung (KV)</td><td>14,6 % + Ø 2,9 % Zusatz</td><td>je Hälfte</td><td>je Hälfte</td></tr>
          <tr><td>Pflegeversicherung (PV)</td><td>3,6 %</td><td>1,8 %</td><td>1,8 % (+0,6 % kinderlos ab 23 J.)</td></tr>
          <tr><td>Rentenversicherung (RV)</td><td>18,6 %</td><td>9,3 %</td><td>9,3 %</td></tr>
          <tr><td>Arbeitslosenversicherung (ALV)</td><td>2,6 %</td><td>1,3 %</td><td>1,3 %</td></tr>
          <tr><td>Unfallversicherung (UV)</td><td>individuell</td><td>100 %</td><td>0 %</td></tr>
        </tbody>
      </table>

      <Callout variant="warn">
        <strong>UV trägt ausschließlich der Arbeitgeber</strong> – klassische Fangfrage. Zahlungen
        laufen über die zuständige Berufsgenossenschaft.
      </Callout>

      <h2>Beitragsbemessungsgrenzen 2026</h2>
      <ul>
        <li>KV / PV: <strong>69.750 €/Jahr</strong> (5.812,50 €/Monat)</li>
        <li>RV / ALV: <strong>101.400 €/Jahr</strong> (8.450 €/Monat)</li>
        <li>JAEG (Versicherungspflichtgrenze KV) 2026: <strong>77.400 €/Jahr</strong> → darüber PKV-Wechsel möglich.</li>
      </ul>

      <h2>Familienversicherung</h2>
      <p>
        Kostenlos für Ehegatten und Kinder ohne / mit geringem Einkommen (Grenze 2026 ca. 556 €/Monat,
        ggf. verifizieren).
      </p>

      <h2>Merksatz</h2>
      <p>
        <strong>KPRAU</strong>: <u>K</u>ranken, <u>P</u>flege, <u>R</u>enten, <u>A</u>rbeitslosen, <u>U</u>nfall.
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welchen Sozialversicherungszweig zahlt der Arbeitgeber allein?",
      options: [
        { id: "a", text: "Rentenversicherung", correct: false },
        { id: "b", text: "Pflegeversicherung", correct: false },
        { id: "c", text: "Unfallversicherung", correct: true, explanation: "Über die Berufsgenossenschaft, komplett AG-finanziert." },
        { id: "d", text: "Krankenversicherung", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Allgemeiner KV-Beitragssatz 2026 (ohne Zusatzbeitrag)?",
      options: [
        { id: "a", text: "7,3 %", correct: false },
        { id: "b", text: "14,6 %", correct: true, explanation: "Paritätisch, plus kassenindividueller Zusatzbeitrag." },
        { id: "c", text: "15,5 %", correct: false },
        { id: "d", text: "18,6 %", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Beitragsbemessungsgrenze KV 2026 (monatlich)?",
      options: [
        { id: "a", text: "4.987,50 €", correct: false },
        { id: "b", text: "5.550,00 €", correct: false },
        { id: "c", text: "5.812,50 €", correct: true, explanation: "= 69.750 €/Jahr." },
        { id: "d", text: "8.450,00 €", correct: false },
      ],
    },
  ],
  examTips: [
    "Zahlen 14,6 / 3,6 / 18,6 / 2,6 auswendig.",
    "Summe AN-Anteil grob: ca. 20–21 % des Bruttos.",
    "PKV-Wechsel nur oberhalb der JAEG, nicht der BBG.",
  ],
  related: ["wiso-arbeitsrecht", "wiso-bgb"],
};
