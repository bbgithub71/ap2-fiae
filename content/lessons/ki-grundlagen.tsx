import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const kiGrundlagen: Lesson = {
  slug: "ki-grundlagen",
  objectives: [
    "ML-Grundbegriffe (Training, Modell, Features, Overfitting) einordnen",
    "Supervised vs. Unsupervised vs. Reinforcement Learning unterscheiden",
    "Chancen und Risiken generativer KI benennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="new">
        KI-Grundlagen sind <strong>neu im Katalog 2024/25</strong>. Erwartbar sind MC-Fragen zum
        Grundverständnis und eine kleine Erläuterungsaufgabe zu Chancen/Risiken generativer KI.
      </Callout>

      <h2>Begriffswelt</h2>
      <ul>
        <li><strong>KI:</strong> Oberbegriff für Systeme, die Aufgaben lösen, die typischerweise menschliche Intelligenz erfordern.</li>
        <li><strong>Machine Learning (ML):</strong> Teilgebiet – lernt aus Daten, ohne explizit programmiert zu sein.</li>
        <li><strong>Deep Learning:</strong> ML mit tiefen neuronalen Netzen.</li>
        <li><strong>Generative KI (GenAI):</strong> erzeugt neue Inhalte (Text, Bilder, Code). Beispiele: LLMs, Diffusionsmodelle.</li>
        <li><strong>LLM:</strong> Large Language Model, z. B. für Chatbots.</li>
      </ul>

      <h2>Lern-Arten</h2>
      <ul>
        <li>
          <strong>Supervised Learning</strong> – Trainingsdaten mit Label (z. B. Spam/Nicht-Spam).
        </li>
        <li>
          <strong>Unsupervised Learning</strong> – keine Labels, Muster finden (z. B. Clustering).
        </li>
        <li>
          <strong>Reinforcement Learning</strong> – Agent lernt durch Belohnung/Strafe in einer Umgebung.
        </li>
      </ul>

      <h2>Typische Fallstricke</h2>
      <ul>
        <li><strong>Overfitting:</strong> Modell »memorisiert« Trainingsdaten, generalisiert schlecht.</li>
        <li><strong>Bias:</strong> Vorurteile in den Trainingsdaten werden verstärkt.</li>
        <li><strong>Halluzinationen:</strong> LLMs erfinden plausibel klingende, falsche Fakten.</li>
        <li><strong>Datenschutz:</strong> Trainings- oder Prompt-Daten können sensible Inhalte enthalten.</li>
      </ul>

      <h2>Chancen &amp; Risiken generativer KI</h2>
      <table>
        <thead>
          <tr><th>Chancen</th><th>Risiken</th></tr>
        </thead>
        <tbody>
          <tr><td>Produktivitätsgewinne (Code, Texte, Zusammenfassungen)</td><td>Plagiat, Urheberrechtsfragen</td></tr>
          <tr><td>Bessere Suche, Customer Support</td><td>Halluzinationen / falsche Antworten</td></tr>
          <tr><td>Barrierefreiheit (Übersetzung, Vorlesen)</td><td>Deepfakes, Manipulation</td></tr>
          <tr><td>Automatisierung repetitiver Tätigkeiten</td><td>Datenschutz, Jobverlust in manchen Bereichen</td></tr>
        </tbody>
      </table>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was bedeutet Overfitting?",
      options: [
        { id: "a", text: "Modell ist zu klein.", correct: false },
        { id: "b", text: "Modell performt auf Trainingsdaten gut, auf neuen Daten schlecht.", correct: true },
        { id: "c", text: "Es gibt zu viele Trainingsdaten.", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      multiple: true,
      question: "Welche Risiken bringt generative KI mit sich?",
      options: [
        { id: "a", text: "Halluzinationen", correct: true },
        { id: "b", text: "Bias aus Trainingsdaten", correct: true },
        { id: "c", text: "Garantierte Korrektheit", correct: false },
        { id: "d", text: "Datenschutzprobleme bei Prompts", correct: true },
      ],
    },
  ],
  examTips: [
    "ML-Kategorien parat: Supervised, Unsupervised, Reinforcement.",
    "Bei Erklärungen zur GenAI: Chancen UND Risiken nennen – bringt Punkte.",
    "Quellkritik betonen: LLMs können falsch liegen.",
  ],
  related: ["green-it"],
};
