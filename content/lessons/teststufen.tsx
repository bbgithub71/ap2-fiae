import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const teststufen: Lesson = {
  slug: "teststufen",
  objectives: [
    "Die klassischen Teststufen (Unit, Integration, System, Abnahme) einordnen",
    "Zuordnung zum V-Modell verstehen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Klassiker: V-Modell-Ansicht mit Entwicklungsphasen links und passenden Teststufen rechts.
      </Callout>

      <h2>Pyramiden-Sicht</h2>
      <ol>
        <li>
          <strong>Unit-Test:</strong> einzelne Klasse / Funktion in Isolation. Automatisiert, schnell.
        </li>
        <li>
          <strong>Integrationstest:</strong> Zusammenspiel mehrerer Module. Auch mit DB/API.
        </li>
        <li>
          <strong>Systemtest:</strong> gesamtes System in produktionsähnlicher Umgebung.
        </li>
        <li>
          <strong>Abnahmetest:</strong> Kunde prüft gegen Abnahmekriterien.
        </li>
      </ol>

      <h2>V-Modell-Zuordnung</h2>
      <table>
        <thead>
          <tr><th>Entwicklungsphase</th><th>Teststufe</th></tr>
        </thead>
        <tbody>
          <tr><td>Anforderung</td><td>Abnahmetest</td></tr>
          <tr><td>Architektur</td><td>Systemtest</td></tr>
          <tr><td>Design</td><td>Integrationstest</td></tr>
          <tr><td>Implementierung</td><td>Unit-Test</td></tr>
        </tbody>
      </table>

      <h2>Zusätzliche Tests</h2>
      <ul>
        <li><strong>Regressionstest:</strong> erneutes Testen nach Änderungen.</li>
        <li><strong>Smoke-Test:</strong> schneller Check, ob das Hauptsystem läuft.</li>
        <li><strong>Lasttest:</strong> Verhalten unter hoher Last (neu 2025).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Auf welcher Stufe prüft der Kunde gegen Abnahmekriterien?",
      options: [
        { id: "a", text: "Unit-Test", correct: false },
        { id: "b", text: "Integrationstest", correct: false },
        { id: "c", text: "Abnahmetest", correct: true },
      ],
    },
  ],
  examTips: [
    "Pyramide von unten (viele Units) nach oben (wenige Abnahmetests).",
    "Im V-Modell: horizontal zuordnen.",
  ],
  related: ["testmethoden", "unit-tests-coverage", "qualitaetssicherung"],
};
