import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const osiModell: Lesson = {
  slug: "osi-modell",
  objectives: [
    "Die 7 OSI-Schichten in korrekter Reihenfolge nennen",
    "Typische Protokolle / Geräte je Schicht zuordnen",
    "TCP/IP-Modell auf OSI mappen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Klassisches Zuordnungs-Quiz: Schicht ↔ Protokoll. Merksatz hilft!
      </Callout>

      <h2>Die 7 Schichten</h2>
      <table>
        <thead>
          <tr><th>#</th><th>Schicht</th><th>Einheit</th><th>Beispiele</th></tr>
        </thead>
        <tbody>
          <tr><td>7</td><td>Anwendung</td><td>Daten</td><td>HTTP, SMTP, FTP, DNS</td></tr>
          <tr><td>6</td><td>Darstellung</td><td>Daten</td><td>TLS, Kompression, Zeichensätze</td></tr>
          <tr><td>5</td><td>Sitzung</td><td>Daten</td><td>NetBIOS, RPC</td></tr>
          <tr><td>4</td><td>Transport</td><td>Segmente</td><td>TCP, UDP</td></tr>
          <tr><td>3</td><td>Vermittlung</td><td>Pakete</td><td>IP, ICMP, Router</td></tr>
          <tr><td>2</td><td>Sicherung</td><td>Frames</td><td>Ethernet, MAC, Switch</td></tr>
          <tr><td>1</td><td>Bitübertragung</td><td>Bits</td><td>Kabel, Hub, Funkwelle</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Merksätze: <strong>»Alle Deutschen Schüler Trinken Verkehrt Schlechten Blumenkaffee«</strong>{" "}
        (von oben nach unten) oder <strong>»Please Do Not Throw Sausage Pizza Away«</strong> (englisch).
      </Callout>

      <h2>TCP/IP-Modell</h2>
      <ul>
        <li>Anwendung (OSI 5–7)</li>
        <li>Transport (OSI 4)</li>
        <li>Internet (OSI 3)</li>
        <li>Netzzugang (OSI 1–2)</li>
      </ul>

      <h2>Geräte-Zuordnung</h2>
      <ul>
        <li>Hub: Schicht 1</li>
        <li>Switch: Schicht 2</li>
        <li>Router: Schicht 3</li>
        <li>Firewall / Gateway: 3–7 (je nach Typ)</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Auf welcher Schicht arbeitet ein Router?",
      options: [
        { id: "a", text: "1", correct: false },
        { id: "b", text: "2", correct: false },
        { id: "c", text: "3", correct: true },
        { id: "d", text: "4", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "TCP und UDP gehören zu welcher Schicht?",
      options: [
        { id: "a", text: "Vermittlung (3)", correct: false },
        { id: "b", text: "Transport (4)", correct: true },
        { id: "c", text: "Sitzung (5)", correct: false },
      ],
    },
  ],
  examTips: [
    "Merksatz auswendig = 4 kostenlose Punkte.",
    "Hub vs. Switch vs. Router nicht verwechseln.",
    "TLS steht formal auf Schicht 6, im Alltag zwischen 4 und 7 diskutiert.",
  ],
  resources: [
    {
      kind: "video",
      title: "Das OSI-Modell – 7 Schichten in unter 5 Minuten einfach erklärt",
      url: "https://www.youtube.com/watch?v=9F_AwkOmXZk",
      note: "Sehr kompakt – ideal für die schnelle Wiederholung.",
    },
    {
      kind: "video",
      title: "Aus diesen 7 Schichten besteht das OSI-Modell!",
      url: "https://www.youtube.com/watch?v=4Prd_ngsJRk",
      note: "Alle Schichten einzeln mit Beispielen durchgegangen.",
    },
  ],
  related: ["ip-subnetting", "protokolle"],
};
