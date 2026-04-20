import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const lastPerformanceTests: Lesson = {
  slug: "last-performance-tests",
  objectives: [
    "Last-, Stress-, Soak- und Spiketest unterscheiden",
    "Wichtige Metriken und ihre Aussagekraft kennen",
    "Ein passendes Tool nennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="new">
        Last- und Performance-Tests sind <strong>neu im Katalog 2025+</strong>. Sehr wahrscheinlich
        als Kurzdefinition oder Szenario-MC-Frage.
      </Callout>

      <h2>Testarten</h2>
      <table>
        <thead><tr><th>Test</th><th>Ziel</th><th>Dauer</th></tr></thead>
        <tbody>
          <tr><td>Lasttest</td><td>erwartete Normallast simulieren</td><td>~30 min</td></tr>
          <tr><td>Stresstest</td><td>Grenze finden – wann bricht es?</td><td>variabel</td></tr>
          <tr><td>Soaktest (Endurance)</td><td>Dauerlast über Stunden/Tage</td><td>8–24 h</td></tr>
          <tr><td>Spiketest</td><td>plötzliche Lastspitze</td><td>kurz</td></tr>
        </tbody>
      </table>

      <h2>Metriken</h2>
      <ul>
        <li><strong>Durchsatz</strong> (Req/s)</li>
        <li><strong>Latenz</strong> (ms) – immer mit <strong>Percentilen</strong> (p50, p95, p99) betrachten</li>
        <li><strong>Error-Rate</strong> (%)</li>
        <li><strong>Ressourcen</strong>: CPU, RAM, Netz, DB-IO</li>
      </ul>

      <Callout variant="warn">
        Der <strong>Mittelwert</strong> verdeckt Ausreißer. Ein System mit 100 ms Mittelwert kann bei
        p99 3 Sekunden brauchen – und genau dort beschweren sich User.
      </Callout>

      <h2>Tools</h2>
      <ul>
        <li>Apache <strong>JMeter</strong> (GUI, Java)</li>
        <li><strong>k6</strong> (JS-Skripte, cloud-nativ)</li>
        <li>Gatling, Locust</li>
      </ul>

      <h2>Stolperfallen</h2>
      <ul>
        <li>Testumgebung ≠ Prod – Ergebnisse vorsichtig übertragen.</li>
        <li>Memory Leaks findet man nur in Soaktests.</li>
        <li>Performance-Test misst nicht Funktionalität.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welcher Test deckt Memory Leaks auf?",
      options: [
        { id: "a", text: "Stresstest", correct: false },
        { id: "b", text: "Soaktest", correct: true, explanation: "Langer Dauerlauf offenbart sich langsam aufbauende Ressourcenprobleme." },
        { id: "c", text: "Lasttest", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Metrik ist aussagekräftiger als ein einfacher Mittelwert?",
      options: [
        { id: "a", text: "Mittelwert", correct: false },
        { id: "b", text: "p95-Latenz", correct: true, explanation: "Zeigt das Erleben der langsamsten 5 % der Requests." },
        { id: "c", text: "einmaliges Maximum", correct: false },
      ],
    },
  ],
  examTips: [
    "Testarten in 1-Satz-Definitionen auswendig.",
    "Percentile wichtiger als Mittelwert.",
    "Ein Tool je Kategorie nennen (JMeter, k6).",
  ],
  related: ["testmethoden", "qualitaetssicherung", "testautomatisierung"],
};
