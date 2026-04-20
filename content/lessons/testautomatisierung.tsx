import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const testautomatisierung: Lesson = {
  slug: "testautomatisierung",
  objectives: [
    "Die Testpyramide erklären und das Anti-Pattern Ice-Cream-Cone erkennen",
    "CI vs. CD vs. Continuous Deployment unterscheiden",
    "Typische Pipeline-Stufen benennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Testpyramide (Mike Cohn)</h2>
      <ul>
        <li>Viele <strong>Unit-Tests</strong> – schnell, isoliert, günstig.</li>
        <li>Weniger <strong>Integrationstests</strong> – Module im Zusammenspiel.</li>
        <li>Wenige <strong>E2E- / UI-Tests</strong> – langsam, wartungsintensiv.</li>
      </ul>

      <Callout variant="warn">
        Anti-Pattern «Eis-Tüte» (Ice-Cream-Cone): viele manuelle/E2E-Tests und wenige Units. Teurer,
        brüchiger und langsamer – das Gegenteil der Pyramide.
      </Callout>

      <h2>CI vs. CD</h2>
      <ul>
        <li><strong>CI</strong> (Continuous Integration): Code mergen + automatisch bauen + testen.</li>
        <li><strong>CD – Delivery</strong>: jederzeit freigabefähiger Stand, Deploy per manuellem Trigger.</li>
        <li><strong>CD – Deployment</strong>: jede grüne Version geht automatisch nach Prod.</li>
      </ul>

      <h2>Pipeline-Stufen</h2>
      <ol>
        <li>Build</li>
        <li>Unit- &amp; Integrationstests</li>
        <li>Security-Scan (SAST/DAST, Dependency-Check)</li>
        <li>Deploy (Staging / Prod)</li>
        <li>Smoke-Tests &amp; Monitoring</li>
      </ol>

      <CodeBlock lang="yaml" caption="GitHub-Actions-Skizze">
{`on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm test
      - run: npm run e2e`}
      </CodeBlock>

      <h2>Tools</h2>
      <ul>
        <li>GitHub Actions, GitLab CI, Jenkins, CircleCI, Azure DevOps</li>
        <li>Continuous Testing: Tests laufen in jeder Pipeline-Stufe (Shift-Left).</li>
        <li>Explorative / manuelle Tests bleiben nötig – nicht alles automatisieren.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Tests gehören laut Testpyramide am häufigsten?",
      options: [
        { id: "a", text: "Unit-Tests", correct: true, explanation: "Schnell, günstig, stabil." },
        { id: "b", text: "E2E-Tests", correct: false },
        { id: "c", text: "Akzeptanztests", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was ist Continuous Deployment?",
      options: [
        { id: "a", text: "Manuelles Freigeben auf Prod", correct: false, explanation: "Das wäre Continuous Delivery." },
        { id: "b", text: "Automatisches Ausrollen jeder grünen Version nach Prod", correct: true },
        { id: "c", text: "Tägliches Testen", correct: false },
      ],
    },
  ],
  examTips: [
    "Pyramide skizzieren können und begründen.",
    "Delivery ≠ Deployment: manueller Trigger vs. automatisch.",
    "Ein konkretes Tool je Kategorie nennen (z. B. GitHub Actions, Jenkins).",
  ],
  related: ["tdd", "teststufen", "versionsverwaltung"],
};
