import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const container: Lesson = {
  slug: "container",
  objectives: [
    "Container und VM sicher unterscheiden",
    "Dockerfile-Grundbefehle lesen und schreiben",
    "Pod, Deployment und Service in Kubernetes einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Container vs. VM</h2>
      <table>
        <thead><tr><th></th><th>Container</th><th>VM</th></tr></thead>
        <tbody>
          <tr><td>Isolation</td><td>Prozess, shared Kernel</td><td>eigenes OS, Hypervisor</td></tr>
          <tr><td>Größe</td><td>MB</td><td>GB</td></tr>
          <tr><td>Start</td><td>Sekunden</td><td>Minuten</td></tr>
          <tr><td>Einsatz</td><td>Microservices, CI/CD</td><td>Multi-OS, klassische Workloads</td></tr>
        </tbody>
      </table>

      <h2>Dockerfile-Kernbefehle</h2>
      <ul>
        <li><code>FROM</code> – Basis-Image</li>
        <li><code>RUN</code> – Build-Befehl, erzeugt einen Layer</li>
        <li><code>COPY</code> – Dateien ins Image kopieren</li>
        <li><code>WORKDIR</code> – Arbeitsverzeichnis setzen</li>
        <li><code>EXPOSE</code> – Port-Dokumentation (kein Publishing)</li>
        <li><code>CMD</code> – Default-Startbefehl (überschreibbar)</li>
        <li><code>ENTRYPOINT</code> – festes Executable</li>
      </ul>

      <CodeBlock lang="dockerfile">
{`FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]`}
      </CodeBlock>

      <h2>Kubernetes-Basis</h2>
      <ul>
        <li><strong>Pod</strong>: kleinste deploybare Einheit, 1+ Container mit geteiltem Netzwerk/Storage.</li>
        <li><strong>Deployment</strong>: verwaltet Replikate, Rollout, Self-Healing.</li>
        <li><strong>Service</strong>: stabile Netzwerk-IP + Loadbalancing vor Pods.</li>
      </ul>

      <Callout variant="tip">
        Pods nie direkt erstellen – immer über ein Deployment, damit Self-Healing greift.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was ist die kleinste deploybare Einheit in Kubernetes?",
      options: [
        { id: "a", text: "Container", correct: false },
        { id: "b", text: "Pod", correct: true, explanation: "Ein oder mehrere Container mit geteiltem Netzwerk/Storage." },
        { id: "c", text: "Deployment", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welche Aussage zu Containern vs. VMs stimmt?",
      options: [
        { id: "a", text: "Container teilen den Kernel des Hosts, VMs haben ein eigenes OS", correct: true, explanation: "Container sind dadurch leichtgewichtiger und schneller." },
        { id: "b", text: "Container starten langsamer als VMs", correct: false },
        { id: "c", text: "VMs sind kleiner als Container-Images", correct: false },
      ],
    },
  ],
  examTips: [
    "VM vs. Container in 1 Satz: shared Kernel vs. eigenes OS.",
    "Pod / Deployment / Service – das Trio auswendig.",
    "Minimal-Dockerfile mit FROM, COPY, RUN, CMD skizzieren können.",
  ],
  related: ["architektur-patterns", "cloud-speicher", "modularisierung"],
};
