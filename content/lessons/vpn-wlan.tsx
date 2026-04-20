import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const vpnWlan: Lesson = {
  slug: "vpn-wlan",
  objectives: [
    "VPN-Typen unterscheiden und Split-Tunneling einordnen",
    "WLAN-Standards (Wi-Fi 4–7) und Verschlüsselung (WPA2/WPA3) benennen",
    "VLAN (802.1Q) Tagging-Prinzip erklären",
  ],
  body: (
    <div className="prose-content">
      <h2>VPN</h2>
      <ul>
        <li><strong>Site-to-Site</strong>: zwei Gateways verbinden Netze (IPsec).</li>
        <li><strong>Client-to-Site</strong>: Einzel-PC → Firmennetz (IPsec, OpenVPN, WireGuard).</li>
        <li><strong>Split-Tunneling</strong>: nur Firmen-Traffic durchs VPN, Rest direkt ins Internet. Komfort, aber Sicherheitsrisiko.</li>
      </ul>

      <h2>WLAN-Standards</h2>
      <table>
        <thead><tr><th>Standard</th><th>Name</th><th>Band</th></tr></thead>
        <tbody>
          <tr><td>802.11n</td><td>Wi-Fi 4</td><td>2,4 + 5 GHz</td></tr>
          <tr><td>802.11ac</td><td>Wi-Fi 5</td><td>5 GHz</td></tr>
          <tr><td>802.11ax</td><td>Wi-Fi 6 / 6E</td><td>2,4 / 5 / 6 GHz</td></tr>
          <tr><td>802.11be</td><td>Wi-Fi 7</td><td>alle, 320 MHz Kanäle, MLO</td></tr>
        </tbody>
      </table>

      <h2>Verschlüsselung</h2>
      <ul>
        <li><strong>WPA2</strong>: AES/CCMP, PSK (Pre-Shared Key).</li>
        <li>
          <strong>WPA3</strong>: <strong>SAE</strong> ersetzt PSK → Schutz gegen
          Offline-Wörterbuchangriffe, Forward Secrecy. Enterprise 192 Bit, Enhanced Open für offene
          Netze.
        </li>
      </ul>

      <Callout variant="tip">
        Wi-Fi 6 = 802.11<strong>ax</strong>, nicht «ac». Wi-Fi 7 = 802.11<strong>be</strong>.
      </Callout>

      <h2>VLAN (802.1Q)</h2>
      <ul>
        <li>4-Byte-Tag im Ethernet-Frame mit 12-Bit VLAN-ID (1–4094).</li>
        <li><strong>Trunk</strong>: mehrere VLANs über eine Leitung.</li>
        <li><strong>Access</strong>: nur ein VLAN pro Port.</li>
        <li>Trennt Broadcast-Domänen <em>logisch</em>.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Verfahren löst das PSK-Handshake in WPA3-Personal ab?",
      options: [
        { id: "a", text: "TKIP", correct: false },
        { id: "b", text: "SAE (Simultaneous Authentication of Equals)", correct: true, explanation: "Schützt vor Offline-Wörterbuchangriffen, bietet Forward Secrecy." },
        { id: "c", text: "WEP", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wofür dient 802.1Q?",
      options: [
        { id: "a", text: "WLAN-Verschlüsselung", correct: false },
        { id: "b", text: "VLAN-Kennzeichnung via Ethernet-Tag", correct: true },
        { id: "c", text: "VPN-Kapselung", correct: false },
      ],
    },
  ],
  examTips: [
    "Split-Tunneling ist Komfort, kein Sicherheitsfeature.",
    "Wi-Fi 6 = 802.11ax merken (nicht ac!).",
    "Bei «unsichere Passwörter im WLAN schützen» → WPA3 / SAE.",
  ],
  related: ["protokolle", "topologien", "kryptografie"],
};
