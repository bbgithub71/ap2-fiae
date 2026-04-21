import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const lizenzmodelle: Lesson = {
  slug: "lizenzmodelle",
  objectives: [
    "Open Source vs. proprietär abgrenzen",
    "Copyleft (GPL) vs. permissiv (MIT, Apache) unterscheiden",
    "Dual-Licensing, Freemium und SaaS einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Lizenzfamilien</h2>
      <table>
        <thead><tr><th>Lizenz</th><th>Typ</th><th>Closed-Source-Derivat erlaubt?</th></tr></thead>
        <tbody>
          <tr><td>GPL v2 / v3</td><td>starkes Copyleft</td><td>nein</td></tr>
          <tr><td>LGPL</td><td>schwaches Copyleft</td><td>eingeschränkt</td></tr>
          <tr><td>MPL</td><td>schwaches Copyleft</td><td>je Datei</td></tr>
          <tr><td>MIT, BSD</td><td>permissiv</td><td>ja</td></tr>
          <tr><td>Apache 2.0</td><td>permissiv + Patentklausel</td><td>ja</td></tr>
          <tr><td>AGPL</td><td>Copyleft über Netzwerk</td><td>nein – auch SaaS-Lücke geschlossen</td></tr>
          <tr><td>proprietär (EULA)</td><td>closed</td><td>—</td></tr>
        </tbody>
      </table>

      <Callout variant="warn">
        <strong>Viraler Effekt der GPL:</strong> Wer GPL-Code in sein Produkt einbaut, muss das
        gesamte Produkt unter GPL stellen. Vorsicht bei Firmensoftware.
      </Callout>

      <h2>Andere Geschäftsmodelle</h2>
      <ul>
        <li><strong>Dual-Licensing:</strong> Software unter zwei Lizenzen parallel (z. B. MySQL = GPL + kommerziell).</li>
        <li><strong>Freemium:</strong> Basis gratis, Premium kostenpflichtig (Spotify, Notion).</li>
        <li><strong>SaaS-Abo:</strong> nutzungsbasiert, monatlich/jährlich, kein Eigentum (Office 365).</li>
      </ul>

      <h2>Stolperfallen</h2>
      <ul>
        <li>«Kostenlos» ≠ «Open Source». Freeware ist oft Closed Source.</li>
        <li>SaaS konnte lange GPL umgehen – darauf reagiert <strong>AGPL</strong>.</li>
        <li>MIT ist maximal permissiv: nur Urhebervermerk, kommerzielle Nutzung OK.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Lizenz erlaubt Closed-Source-Derivate?",
      options: [
        { id: "a", text: "GPL v3", correct: false },
        { id: "b", text: "MIT", correct: true, explanation: "Permissiv, nur Urhebervermerk nötig." },
        { id: "c", text: "AGPL", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was ist Dual-Licensing?",
      options: [
        { id: "a", text: "Zwei Versionen einer Software", correct: false },
        { id: "b", text: "Software unter zwei Lizenzen parallel", correct: true, explanation: "Nutzer wählt die passende, z. B. GPL oder kommerziell." },
        { id: "c", text: "Doppelte Urheberregistrierung", correct: false },
      ],
    },
  ],
  examTips: [
    "Copyleft (GPL) vs. permissiv (MIT, Apache) mit je einem Beispiel.",
    "AGPL schließt die SaaS-Lücke der GPL.",
    "Apache 2.0 enthält zusätzlich eine Patentklausel.",
  ],
  resources: [
    {
      kind: "page",
      title: "WBS Legal – Open-Source-Lizenzen: Ein Überblick",
      url: "https://www.wbs.legal/allgemein/open-source-lizenzen-ein-uberblick-14575/",
      source: "wbs.legal",
      note: "Von Rechtsanwalt Christian Solmecke – verständlich und praxisnah.",
    },
    {
      kind: "page",
      title: "bitfactory – Open-Source-Lizenzen: Grundlagen & Entscheidungshilfen",
      url: "https://www.bitfactory.io/de/blog/open-source-lizenzen/",
      source: "bitfactory.io",
      note: "Entwickler-Perspektive, inkl. Auswahlkriterien.",
    },
    {
      kind: "page",
      title: "ifrOSS – Die wichtigsten Open-Source-Lizenzen im Überblick",
      url: "https://www.ifross.org/welches-sind-wichtigsten-open-source-lizenzen-und-welchem-lizenztyp-gehoeren-sie",
      source: "ifross.org",
      note: "Das maßgebliche Institut für Open-Source-Recht in Deutschland.",
    },
  ],
  related: ["recht", "make-or-buy", "no-low-code"],
};
