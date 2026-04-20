import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const noLowCode: Lesson = {
  slug: "no-low-code",
  objectives: [
    "No-Code und Low-Code definieren und voneinander abgrenzen",
    "Einsatzgebiete und Plattformbeispiele nennen",
    "Chancen und Risiken (Vendor-Lock-in, Schatten-IT) benennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="new">
        No-/Low-Code ist neu im Prüfungskatalog 2025+. Erwartbar: Kurzdefinition, Einsatzfälle und
        Chancen-/Risiken-Abwägung.
      </Callout>

      <h2>Begriffe</h2>
      <ul>
        <li><strong>No-Code:</strong> rein visuell (Drag-and-Drop). Keine Programmierkenntnisse nötig.</li>
        <li><strong>Low-Code:</strong> visuell + optionaler Code für Erweiterungen.</li>
        <li><strong>Citizen Developer:</strong> Fachanwender:in ohne IT-Ausbildung, die selbst Apps baut.</li>
      </ul>

      <h2>Plattformen</h2>
      <ul>
        <li>Microsoft Power Apps + Power Automate</li>
        <li>Mendix, OutSystems, Appian</li>
        <li>Bubble (No-Code-Webapps)</li>
      </ul>

      <h2>Typische Einsatzfälle</h2>
      <ul>
        <li>Interne Tools, Formulare, Genehmigungs-Workflows</li>
        <li>Prototypen / MVPs</li>
        <li>Automatisierung einfacher Geschäftsprozesse</li>
      </ul>

      <h2>Chancen &amp; Risiken</h2>
      <table>
        <thead>
          <tr><th>Chancen</th><th>Risiken</th></tr>
        </thead>
        <tbody>
          <tr><td>Time-to-Market, geringe Entwicklungskosten</td><td>Vendor-Lock-in, schwieriger Wechsel</td></tr>
          <tr><td>Fachbereiche werden handlungsfähig</td><td>Schatten-IT ohne Governance → Compliance-Risiko</td></tr>
          <tr><td>IT-Abteilung entlastet</td><td>Performance- und Skalierungsgrenzen</td></tr>
        </tbody>
      </table>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was ist ein typischer Nachteil von No-Code-Plattformen?",
      options: [
        { id: "a", text: "hoher Programmieraufwand", correct: false },
        { id: "b", text: "Vendor-Lock-in", correct: true, explanation: "Abhängigkeit vom Plattformanbieter, schwerer Wechsel." },
        { id: "c", text: "keine grafische Oberfläche", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wer ist ein «Citizen Developer»?",
      options: [
        { id: "a", text: "Fachanwender:in ohne klassische IT-Ausbildung, die Apps mit Low-/No-Code baut.", correct: true },
        { id: "b", text: "Ein zertifizierter Cloud-Architekt.", correct: false },
        { id: "c", text: "Ein Open-Source-Maintainer.", correct: false },
      ],
    },
  ],
  examTips: [
    "Chancen und Risiken gegenüberstellen — 2-Spalten-Tabelle im Kopf haben.",
    "Abgrenzung: No-Code (gar kein Code) vs. Low-Code (wenig Code, erweiterbar).",
    "Typische Anwendungsfälle nennen: interne Tools, Prototypen, Workflows.",
  ],
  related: ["paradigmen", "make-or-buy"],
};
