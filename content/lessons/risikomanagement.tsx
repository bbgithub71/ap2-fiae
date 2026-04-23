import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const risikomanagement: Lesson = {
  slug: "risikomanagement",
  objectives: [
    "Den Risikomanagement-Prozess (Identifikation → Analyse → Steuerung → Überwachung) beschreiben",
    "Den Risikowert (Eintrittswahrscheinlichkeit × Schadenshöhe) berechnen",
    "Die 4 Risikostrategien (vermeiden / vermindern / übertragen / akzeptieren) zuordnen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Risikomanagement ist ein beliebtes Theorie-Thema. Merksatz:
        <strong> Risikowert = Eintrittswahrscheinlichkeit × Schadenshöhe.</strong>
      </Callout>

      <h2>Der Prozess in 4 Schritten</h2>
      <ol>
        <li><strong>Identifikation</strong> – Welche Risiken gibt es? Brainstorming, Interviews, Lessons Learned.</li>
        <li><strong>Analyse / Bewertung</strong> – Eintrittswahrscheinlichkeit und Schadenshöhe schätzen.</li>
        <li><strong>Steuerung / Reaktion</strong> – Wie gehen wir mit dem Risiko um? (4 Strategien, s. u.)</li>
        <li><strong>Überwachung</strong> – Kontinuierlich prüfen, ob Risiken eintreten oder neue dazukommen.</li>
      </ol>

      <h2>Risikowert</h2>
      <CodeBlock>
{`Risikowert = Eintrittswahrscheinlichkeit × Schadenshöhe

Beispiel:
  EW = 20 %  (0,2)
  Schaden = 50.000 €
  Risikowert = 0,2 × 50.000 = 10.000 €`}
      </CodeBlock>

      <h2>Risiko-Matrix</h2>
      <table>
        <thead>
          <tr><th></th><th>niedrige EW</th><th>mittlere EW</th><th>hohe EW</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>hoher Schaden</strong></td><td>🟡 mittel</td><td>🟠 hoch</td><td>🔴 kritisch</td></tr>
          <tr><td><strong>mittlerer Schaden</strong></td><td>🟢 gering</td><td>🟡 mittel</td><td>🟠 hoch</td></tr>
          <tr><td><strong>niedriger Schaden</strong></td><td>🟢 gering</td><td>🟢 gering</td><td>🟡 mittel</td></tr>
        </tbody>
      </table>

      <h2>Die 4 Risikostrategien</h2>
      <ul>
        <li>
          <strong>Vermeiden</strong> – Risiko umgehen, z. B. Feature streichen, Technologie wechseln.
        </li>
        <li>
          <strong>Vermindern</strong> – EW oder Schaden senken, z. B. zusätzliche Tests,
          Monitoring, Schulung.
        </li>
        <li>
          <strong>Übertragen</strong> – Versicherung abschließen, an Partner outsourcen.
        </li>
        <li>
          <strong>Akzeptieren</strong> – Restrisiko bewusst in Kauf nehmen (wenn Gegenmaßnahmen
          teurer wären als der Schaden).
        </li>
      </ul>

      <Callout variant="tip">
        Merksatz: <strong>VVÜA – Vermeiden, Vermindern, Übertragen, Akzeptieren.</strong>
      </Callout>

      <h2>Beispiele aus dem IT-Projekt</h2>
      <ul>
        <li>Server-Ausfall → Vermindern durch Redundanz / Übertragen durch SLA mit Dienstleister</li>
        <li>Schlüsselmitarbeiter verlässt Firma → Vermindern durch Dokumentation und Vertretung</li>
        <li>Datenschutzverletzung → Vermeiden durch Datensparsamkeit, Vermindern durch Verschlüsselung</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wie berechnet man den Risikowert?",
      options: [
        { id: "a", text: "Schaden + Eintrittswahrscheinlichkeit", correct: false },
        { id: "b", text: "Eintrittswahrscheinlichkeit × Schadenshöhe", correct: true },
        { id: "c", text: "Schadenshöhe ÷ Eintrittswahrscheinlichkeit", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Strategie ist KEINE der 4 Standardstrategien?",
      options: [
        { id: "a", text: "Vermeiden", correct: false },
        { id: "b", text: "Ignorieren", correct: true, explanation: "Akzeptieren wäre die bewusste Variante; Ignorieren nicht." },
        { id: "c", text: "Übertragen", correct: false },
        { id: "d", text: "Vermindern", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Eine Versicherung gegen Datenverlust abzuschließen ist ein Beispiel für …",
      options: [
        { id: "a", text: "Vermeiden", correct: false },
        { id: "b", text: "Übertragen", correct: true, explanation: "Das finanzielle Risiko geht an den Versicherer." },
        { id: "c", text: "Akzeptieren", correct: false },
      ],
    },
  ],
  examTips: [
    "Risikowert-Formel EW × Schaden auswendig – klassische Rechenfrage.",
    "Die 4 Strategien VVÜA immer in dieser Reihenfolge nennen.",
    "Bei Risiko-Beispielen mit IT-Bezug antworten (Server, Datenschutz, Key-Person).",
  ],
  related: ["projektphasen", "bedarfs-machbarkeitsanalyse", "anforderungen"],
  resources: [
    {
      kind: "video",
      title: "Risikoanalyse einfach erklärt: Schritt-für-Schritt Anleitung",
      url: "https://www.youtube.com/watch?v=PZgmA3llLso",
      note: "Kompletter Durchlauf des Risikomanagement-Prozesses.",
    },
    {
      kind: "video",
      title: "Risikoanalyse einfach erklärt: Der Risikowert im Projektmanagement",
      url: "https://www.youtube.com/watch?v=ire2x4HLDws",
      note: "Fokus auf die Risikowert-Berechnung.",
    },
    {
      kind: "video",
      title: "Risiko, Ursache, Auswirkung – Die drei Grundbegriffe des Risikomanagements",
      url: "https://www.youtube.com/watch?v=KJlVEvzWUf4",
      note: "Klärt wichtige Begriffsabgrenzungen.",
    },
  ],
};
