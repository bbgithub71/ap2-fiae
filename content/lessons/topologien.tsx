import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const topologien: Lesson = {
  slug: "topologien",
  objectives: [
    "Stern, Bus, Ring, Mesh und Baum unterscheiden",
    "Vor- und Nachteile je Topologie nennen",
    "Praktische Relevanz (moderne LANs) einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Topologien im Vergleich</h2>
      <table>
        <thead><tr><th>Topologie</th><th>Aufbau</th><th>Vor/Nachteile</th></tr></thead>
        <tbody>
          <tr><td>Stern</td><td>alles am zentralen Switch</td><td>+ einfache Fehlersuche / − Switch = Single Point of Failure</td></tr>
          <tr><td>Bus</td><td>ein Medium mit Terminatoren</td><td>+ wenig Kabel / − Kollisionen, historisch</td></tr>
          <tr><td>Ring</td><td>jeder leitet zum Nachbarn weiter</td><td>+ deterministisch (Token) / − Ausfall bricht Ring</td></tr>
          <tr><td>Mesh</td><td>jeder mit jedem (voll) oder teilvermascht</td><td>+ hochredundant / − teuer, n·(n−1)/2</td></tr>
          <tr><td>Baum</td><td>mehrere Sterne kaskadiert (Core/Distribution/Access)</td><td>+ strukturiert, gängig / − Root = SPoF</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        <strong>Heute dominiert Stern/Baum</strong>. Ethernet ist physisch ein Stern, logisch bei
        klassischem Shared-Medium ein Bus (CSMA/CD-Ursprung).
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>«Switch fällt aus → alles weg» ist das Hauptargument gegen reinen Stern.</li>
        <li>Mesh skaliert schlecht: bei 10 Knoten 45 Verbindungen, bei 20 schon 190.</li>
        <li>WLAN im Infrastrukturmodus ist logisch ein Stern (AP = Zentrum).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Warum dominiert die Stern-Topologie moderne LANs?",
      options: [
        { id: "a", text: "Geringste Kabelmenge", correct: false },
        { id: "b", text: "Einfache Fehlerdiagnose und strukturierte Verkabelung", correct: true, explanation: "Switch ermöglicht Vollduplex und zentrale Administration." },
        { id: "c", text: "Keine SPoF", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Topologie bietet die höchste Ausfallsicherheit?",
      options: [
        { id: "a", text: "Bus", correct: false },
        { id: "b", text: "Voll-Mesh", correct: true, explanation: "Mehrere alternative Pfade zwischen Knoten." },
        { id: "c", text: "Stern", correct: false },
      ],
    },
  ],
  examTips: [
    "Bei «moderne LANs» immer Stern/Baum nennen.",
    "Redundanz-Argumente → Mesh oder Ring (Dual-Ring).",
    "Physisch vs. logisch unterscheiden können.",
  ],
  related: ["osi-modell", "vpn-wlan", "protokolle"],
};
