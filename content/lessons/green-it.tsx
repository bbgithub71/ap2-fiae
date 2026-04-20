import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const greenIt: Lesson = {
  slug: "green-it",
  objectives: [
    "PUE und typische Kennzahlen einordnen",
    "Green-Coding-Prinzipien benennen",
    "Nachhaltigkeit in Hardware und Cloud bewerten",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="new">
        Green IT ist <strong>neu / verstärkt</strong> im Katalog 2025+. Typisch: PUE-Definition,
        Abgrenzung zu klassischer IT, Green-Coding-Beispiele.
      </Callout>

      <h2>Kernkonzepte</h2>
      <ul>
        <li><strong>PUE</strong> (Power Usage Effectiveness) = Gesamtenergie RZ / IT-Energie. Ideal ≈ 1,0; Best-in-Class ≈ 1,1.</li>
        <li><strong>Hardware-Langlebigkeit</strong>: Reparierbarkeit, Refurbishment, längere Abschreibungsdauer.</li>
        <li>
          <strong>Green Coding</strong>: effiziente Algorithmen (O(n) statt O(n²)), weniger
          Datenverkehr, Caching, Lazy Loading.
        </li>
        <li>
          <strong>Cloud-Optimierung</strong>: Auto-Scaling, Serverless, Regionen mit grünem Strom
          wählen.
        </li>
        <li>
          <strong>CO₂-Bilanz</strong>: Rechenzentren verbrauchen ca. 2–4 % des weltweiten Stroms (ggf. verifizieren).
        </li>
        <li>
          <strong>Kreislaufwirtschaft</strong>: E-Waste reduzieren; in der EU via WEEE-Richtlinie
          geregelt.
        </li>
      </ul>

      <h2>Praxisbeispiel</h2>
      <p>
        Ein Unternehmen migriert von einem On-Prem-Server (PUE 2,0) in eine grüne Cloud-Region
        (PUE 1,15) → ~40 % weniger Stromverbrauch pro Workload.
      </p>

      <h2>Stolperfallen</h2>
      <ul>
        <li>PUE misst <em>Effizienz</em>, nicht direkt CO₂.</li>
        <li>«Cloud = grün» stimmt nur bei grüner Energiequelle.</li>
        <li>Green IT ist nicht nur Hardware – Software zählt stark mit.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wo liegt der ideale PUE-Wert?",
      options: [
        { id: "a", text: "≈ 1,0", correct: true, explanation: "PUE=1 heißt: gesamte Energie geht an die IT, keine Verluste." },
        { id: "b", text: "≈ 2,5", correct: false },
        { id: "c", text: "≈ 0,5", correct: false, explanation: "Unter 1 physikalisch unmöglich." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Maßnahme ist KEIN Green-Coding-Prinzip?",
      options: [
        { id: "a", text: "Effiziente Algorithmen", correct: false },
        { id: "b", text: "Mehr Redundanz im Code", correct: true, explanation: "Redundanter Code produziert unnötige Arbeit." },
        { id: "c", text: "Caching", correct: false },
      ],
    },
  ],
  examTips: [
    "PUE-Formel auswendig: RZ-Gesamtenergie / IT-Energie.",
    "2–3 Green-Coding-Maßnahmen nennen können.",
    "Kreislaufwirtschaft + WEEE als Stichworte parat halten.",
  ],
  related: ["cloud-speicher", "wiso-nachhaltigkeit"],
};
