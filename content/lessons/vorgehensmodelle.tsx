import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const vorgehensmodelle: Lesson = {
  slug: "vorgehensmodelle",
  objectives: [
    "Klassische und agile Vorgehensmodelle unterscheiden",
    "Wasserfall, V-Modell, Spiralmodell, Scrum, Kanban typisch beschreiben",
    "Je nach Situation das passende Modell vorschlagen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Häufige Theorie-Aufgabe: »Nenne 2 Vor- und 2 Nachteile von X.« Oder ein Szenario, für das du
        das richtige Modell wählen sollst.
      </Callout>

      <h2>Klassische Modelle</h2>
      <h3>Wasserfall</h3>
      <ul>
        <li>Phasen sequenziell: Analyse → Design → Implementierung → Test → Abnahme.</li>
        <li>+ Einfach, klare Meilensteine. − Kein Rückkanal, spät erkennbare Fehler.</li>
      </ul>
      <h3>V-Modell</h3>
      <ul>
        <li>Erweitertes Wasserfall: jeder Entwicklungsphase ist eine Teststufe zugeordnet (V-Form).</li>
        <li>+ Testen ab Beginn geplant. − Immer noch starr, dokumentations­lastig (besonders V-Modell XT).</li>
      </ul>
      <h3>Spiralmodell</h3>
      <ul>
        <li>Iterative Schleifen mit Risikoanalyse pro Zyklus.</li>
        <li>+ Risikoorientiert. − Overhead, setzt erfahrene Teams voraus.</li>
      </ul>

      <h2>Agile Modelle</h2>
      <h3>Scrum</h3>
      <ul>
        <li>Iterativ-inkrementell, Sprints (2–4 Wochen), Rollen + Events + Artefakte.</li>
        <li>+ Schnelles Feedback, Anpassbarkeit. − Disziplin erforderlich, Anforderungen müssen fließen.</li>
      </ul>
      <h3>Kanban</h3>
      <ul>
        <li>Kontinuierlicher Fluss, WIP-Limits, Pull-Prinzip.</li>
        <li>+ Flexibel, gut für Betrieb/Support. − Ohne Disziplin sammeln sich zu viele Tasks.</li>
      </ul>

      <h2>Hybride Ansätze</h2>
      <p>
        »Wasserfall außen, Scrum innen« – große Rahmenplanung, intern agile Sprints. Typisch für
        regulierte Umgebungen.
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Modell ist sequenziell, ohne Rückkopplung zwischen Phasen?",
      options: [
        { id: "a", text: "Scrum", correct: false },
        { id: "b", text: "Wasserfall", correct: true },
        { id: "c", text: "Kanban", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      multiple: true,
      question: "Welche Aussagen zum V-Modell stimmen?",
      options: [
        { id: "a", text: "Jede Entwicklungsphase hat eine passende Teststufe.", correct: true },
        { id: "b", text: "Es ist agil.", correct: false },
        { id: "c", text: "Es eignet sich für stark regulierte Projekte (Luftfahrt, Medizintechnik).", correct: true },
      ],
    },
  ],
  examTips: [
    "Vor-/Nachteile immer als Listen-Antwort formulieren – bringt Teilpunkte einzeln.",
    "Bei Szenarien: unscharfe Anforderungen → agil; stark regulierter Kontext → V-Modell.",
  ],
  related: ["scrum", "anforderungen"],
};
