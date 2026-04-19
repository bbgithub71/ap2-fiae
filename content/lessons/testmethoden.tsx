import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const testmethoden: Lesson = {
  slug: "testmethoden",
  objectives: [
    "Black-Box, White-Box und Graybox auseinanderhalten",
    "Typische Techniken je Methode nennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Regelmäßig MC-Fragen zum Unterschied. Merke: Black-Box schaut auf Schnittstellen, White-Box
        auf den Code.
      </Callout>

      <h2>Black-Box-Test</h2>
      <ul>
        <li>Fokus auf Eingabe/Ausgabe, Code unbekannt.</li>
        <li>Techniken: Äquivalenzklassen, Grenzwertanalyse, Entscheidungstabellen.</li>
        <li>Gut für funktionale Korrektheit aus Anwendersicht.</li>
      </ul>

      <h2>White-Box-Test</h2>
      <ul>
        <li>Code ist sichtbar, Tests zielen auf Code-Strukturen.</li>
        <li>Techniken: Statement/Branch/Path Coverage, bedingungsorientiertes Testen.</li>
        <li>Eignet sich gut für Unit-Tests.</li>
      </ul>

      <h2>Graybox-Test</h2>
      <ul>
        <li>Mischform: Tester kennt Teile der internen Struktur (z. B. DB-Schema), testet aber
          extern.</li>
      </ul>

      <h2>Weitere Kategorien</h2>
      <ul>
        <li><strong>Regressionstest:</strong> sicherstellen, dass Änderungen nichts kaputt machen.</li>
        <li><strong>Lasttest / Performance:</strong> Verhalten unter Last (neu im Katalog 2025).</li>
        <li><strong>Integrationstest:</strong> Module im Zusammenspiel.</li>
        <li><strong>Abnahmetest:</strong> Kunde prüft gegen Anforderungen.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Äquivalenzklassen und Grenzwertanalyse gehören zu …",
      options: [
        { id: "a", text: "White-Box", correct: false },
        { id: "b", text: "Black-Box", correct: true },
        { id: "c", text: "Graybox", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Code-Coverage ist typisch für welche Methode?",
      options: [
        { id: "a", text: "White-Box", correct: true },
        { id: "b", text: "Black-Box", correct: false },
        { id: "c", text: "Abnahme", correct: false },
      ],
    },
  ],
  examTips: [
    "Black vs. White vs. Gray als Tabelle lernen.",
    "Regressions- und Lasttest häufig als Zusatzfrage.",
  ],
  related: ["teststufen", "unit-tests-coverage", "tdd"],
};
