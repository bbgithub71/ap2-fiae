import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const ipSubnetting: Lesson = {
  slug: "ip-subnetting",
  objectives: [
    "IPv4-Adressen in Dezimal und Binär umrechnen",
    "CIDR-Präfixe interpretieren",
    "Netz-, Broadcast- und Hostadressen eines Subnetzes bestimmen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Wenn Subnetting drankommt, ist es meist eine saubere Rechenaufgabe. Ein Subnetz-Schema auf
        dem Schmierzettel spart viel Zeit.
      </Callout>

      <h2>Grundlagen</h2>
      <ul>
        <li>IPv4 = 32 Bit = 4 Oktette à 8 Bit.</li>
        <li>Subnetzmaske trennt Netz- und Hostanteil.</li>
        <li>CIDR /n = »die ersten n Bit gehören zum Netz«.</li>
      </ul>

      <table>
        <thead>
          <tr><th>/n</th><th>Subnetzmaske</th><th>Hosts</th></tr>
        </thead>
        <tbody>
          <tr><td>/24</td><td>255.255.255.0</td><td>254</td></tr>
          <tr><td>/25</td><td>255.255.255.128</td><td>126</td></tr>
          <tr><td>/26</td><td>255.255.255.192</td><td>62</td></tr>
          <tr><td>/27</td><td>255.255.255.224</td><td>30</td></tr>
          <tr><td>/28</td><td>255.255.255.240</td><td>14</td></tr>
          <tr><td>/29</td><td>255.255.255.248</td><td>6</td></tr>
          <tr><td>/30</td><td>255.255.255.252</td><td>2</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Formeln: Hostbits = <code>32 - Präfix</code>. Nutzbare Hosts = <code>2^hostbits - 2</code> (Netz- und Broadcast abziehen).
      </Callout>

      <h2>Beispiel: 192.168.10.200/27</h2>
      <ol>
        <li>/27 → Maske 255.255.255.224 → Blockgröße 32 im letzten Oktett.</li>
        <li>200 liegt im Block 192–223 (192 + 31).</li>
        <li>Netzadresse: 192.168.10.192</li>
        <li>Broadcast: 192.168.10.223</li>
        <li>Nutzbare Hosts: 192.168.10.193 – 192.168.10.222</li>
      </ol>

      <CodeBlock>
{`IP        = 192.168.10.200
Maske /27 = 255.255.255.224   (binär: 11111111.11111111.11111111.11100000)
Blockgrösse = 256 - 224 = 32
Netze je Oktett: .0, .32, .64, .96, .128, .160, .192, .224
200 → gehört zum Netz .192 (bis .223)`}
      </CodeBlock>

      <h2>Privat vs. öffentlich</h2>
      <ul>
        <li>10.0.0.0/8</li>
        <li>172.16.0.0/12</li>
        <li>192.168.0.0/16</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wie viele nutzbare Hosts hat ein /26-Subnetz?",
      options: [
        { id: "a", text: "64", correct: false },
        { id: "b", text: "62", correct: true, explanation: "2^6 - 2 = 62" },
        { id: "c", text: "30", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Netzadresse hat 10.0.5.77/28?",
      options: [
        { id: "a", text: "10.0.5.64", correct: true, explanation: "/28 = Blockgröße 16 → 77 liegt in 64..79." },
        { id: "b", text: "10.0.5.0", correct: false },
        { id: "c", text: "10.0.5.80", correct: false },
      ],
    },
  ],
  examTips: [
    "Tabelle /24–/30 + Blockgrößen (256, 128, 64, 32, 16, 8, 4) auswendig.",
    "Erst Blockgröße bestimmen, dann IP in den Block einsortieren.",
    "Netz = erste Adresse, Broadcast = letzte, alles dazwischen = Hosts.",
  ],
  resources: [
    {
      kind: "video",
      title: "Subnetting einfach erklärt! Netzanteil, Hostanteil, Subnetzmaske, Netz-IP",
      url: "https://www.youtube.com/watch?v=jgwWFKryrOw",
      note: "Schritt-für-Schritt mit Rechenbeispielen.",
    },
    {
      kind: "video",
      title: "IPv4 endlich verstehen: VLSM und CIDR/Supernetting",
      url: "https://www.youtube.com/watch?v=Z9WghxvNw6c",
      note: "Für Fortgeschrittene – CIDR-Notation tiefergehend.",
    },
  ],
  related: ["osi-modell", "protokolle"],
};
