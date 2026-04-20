import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const cloudSpeicher: Lesson = {
  slug: "cloud-speicher",
  objectives: [
    "Cloud-Servicemodelle (IaaS, PaaS, SaaS, FaaS) zuordnen",
    "Speicherarchitekturen DAS, NAS, SAN unterscheiden",
    "RAID-Level grob mit Kapazität und Redundanz kennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Servicemodelle</h2>
      <table>
        <thead><tr><th>Modell</th><th>Beispiel</th><th>Kunde verwaltet</th></tr></thead>
        <tbody>
          <tr><td>IaaS</td><td>AWS EC2, Azure VM</td><td>OS, App, Daten</td></tr>
          <tr><td>PaaS</td><td>App Service, Heroku</td><td>App, Daten</td></tr>
          <tr><td>SaaS</td><td>M365, Salesforce</td><td>nur Konfiguration</td></tr>
          <tr><td>FaaS / Serverless</td><td>AWS Lambda, Azure Functions</td><td>nur die Funktion</td></tr>
        </tbody>
      </table>

      <h2>Deployment-Modelle</h2>
      <ul>
        <li>Public, Private, Hybrid, Community</li>
      </ul>

      <h2>Speicherarchitekturen</h2>
      <ul>
        <li><strong>DAS</strong> (Direct Attached): Platte direkt am Server (SATA, SAS).</li>
        <li><strong>NAS</strong>: <em>Datei</em>-Ebene, NFS/SMB, eigenes LAN-Gerät.</li>
        <li><strong>SAN</strong>: <em>Block</em>-Ebene, FC/iSCSI, dediziertes Speichernetz.</li>
      </ul>

      <h2>RAID-Level</h2>
      <table>
        <thead><tr><th>Level</th><th>Prinzip</th><th>Min. Platten</th><th>Nutzkapazität</th></tr></thead>
        <tbody>
          <tr><td>0</td><td>Striping</td><td>2</td><td>n × Platte (keine Redundanz!)</td></tr>
          <tr><td>1</td><td>Mirror</td><td>2</td><td>50 %</td></tr>
          <tr><td>5</td><td>Striping + 1 Parität</td><td>3</td><td>(n-1) × Platte</td></tr>
          <tr><td>6</td><td>Striping + 2 Paritäten</td><td>4</td><td>(n-2) × Platte</td></tr>
          <tr><td>10</td><td>Mirror + Striping</td><td>4</td><td>50 %</td></tr>
        </tbody>
      </table>

      <Callout variant="warn">
        RAID ersetzt <strong>kein Backup</strong>. Bei versehentlichem «rm -rf» sind die Daten auf
        allen Spiegeln gleichzeitig weg.
      </Callout>

      <h2>Stolperfallen</h2>
      <ul>
        <li>NAS = Datei, SAN = Block – häufige Verwechslung.</li>
        <li>RAID 5 mit 4 × 1 TB = 3 TB nutzbar.</li>
        <li>FaaS ist kein offizielles NIST-Modell (ggf. je nach Lehrbuch unterschiedlich eingeordnet).</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "RAID 5 mit 4 × 1 TB liefert wie viel Nutzkapazität?",
      options: [
        { id: "a", text: "4 TB", correct: false },
        { id: "b", text: "3 TB", correct: true, explanation: "(n−1) × Platte, eine Parität verteilt über alle Platten." },
        { id: "c", text: "2 TB", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "AWS Lambda gehört zu …",
      options: [
        { id: "a", text: "IaaS", correct: false },
        { id: "b", text: "FaaS / Serverless", correct: true, explanation: "Code wird ereignisgesteuert ausgeführt, kein Server-Management." },
        { id: "c", text: "SaaS", correct: false },
      ],
    },
  ],
  examTips: [
    "Nutzkapazität: RAID 5 = (n−1) × Disk, RAID 6 = (n−2) × Disk, RAID 1/10 = 50 %.",
    "«Zwei Standorte mit eigenem Speichernetz» → SAN.",
    "FaaS-Beispiel immer mit einem konkreten Dienst (Lambda).",
  ],
  related: ["backup-archivierung", "container", "architektur-patterns"],
};
