import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const protokolle: Lesson = {
  slug: "protokolle",
  objectives: [
    "Die wichtigsten Ports und Protokolle auswendig nennen",
    "Protokolle der richtigen OSI-Schicht zuordnen",
    "TCP vs. UDP einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Portliste (Pflicht)</h2>
      <table>
        <thead>
          <tr><th>Dienst</th><th>Port</th><th>Transport</th><th>OSI</th></tr>
        </thead>
        <tbody>
          <tr><td>HTTP</td><td>80</td><td>TCP</td><td>7</td></tr>
          <tr><td>HTTPS</td><td>443</td><td>TCP</td><td>7</td></tr>
          <tr><td>DNS</td><td>53</td><td>UDP/TCP</td><td>7</td></tr>
          <tr><td>DHCP</td><td>67 (Server) / 68 (Client)</td><td>UDP</td><td>7</td></tr>
          <tr><td>SMTP</td><td>25</td><td>TCP</td><td>7</td></tr>
          <tr><td>SMTPS</td><td>465</td><td>TCP</td><td>7</td></tr>
          <tr><td>Submission</td><td>587</td><td>TCP</td><td>7</td></tr>
          <tr><td>IMAP / IMAPS</td><td>143 / 993</td><td>TCP</td><td>7</td></tr>
          <tr><td>POP3 / POP3S</td><td>110 / 995</td><td>TCP</td><td>7</td></tr>
          <tr><td>FTP</td><td>21 (Steuer) + 20 (Daten aktiv)</td><td>TCP</td><td>7</td></tr>
          <tr><td>SSH</td><td>22</td><td>TCP</td><td>7</td></tr>
          <tr><td>LDAP / LDAPS</td><td>389 / 636</td><td>TCP</td><td>7</td></tr>
          <tr><td>RDP</td><td>3389</td><td>TCP</td><td>7</td></tr>
          <tr><td>SNMP</td><td>161</td><td>UDP</td><td>7</td></tr>
          <tr><td>ICMP (Ping)</td><td>—</td><td>—</td><td>3</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        <strong>ICMP hat keinen Port</strong>. Ping und Traceroute nutzen ICMP direkt auf Schicht 3.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>SMTP 25 (MTA↔MTA) vs. 587 (Client-Submission mit Auth) vs. 465 (SMTPS) – alle drei kennen.</li>
        <li>DHCP nutzt UDP, nicht TCP.</li>
        <li>DNS kann auch über TCP/53 – etwa für Zone Transfer oder große Antworten mit DNSSEC.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "DNS nutzt welchen Port?",
      options: [
        { id: "a", text: "TCP 80", correct: false },
        { id: "b", text: "UDP/TCP 53", correct: true, explanation: "UDP für Queries, TCP z. B. für Zonentransfer." },
        { id: "c", text: "UDP 67", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welches Protokoll arbeitet auf OSI-Schicht 3?",
      options: [
        { id: "a", text: "HTTP", correct: false },
        { id: "b", text: "ICMP", correct: true, explanation: "Wie IP auf der Vermittlungsschicht." },
        { id: "c", text: "SSH", correct: false },
      ],
    },
  ],
  examTips: [
    "Portliste als Karteikarte lernen – typische Frage: «welcher Port für X?».",
    "TCP (verbindungsorientiert, Handshake) vs. UDP (verbindungslos, stateless).",
    "HTTPS, SSH, IMAPS, SMTPS ersetzen Klartext-Varianten.",
  ],
  related: ["osi-modell", "ip-subnetting", "vpn-wlan"],
};
