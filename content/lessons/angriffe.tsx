import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const angriffe: Lesson = {
  slug: "angriffe",
  objectives: [
    "Typische Angriffsarten erkennen und abgrenzen",
    "Geeignete Gegenmaßnahmen benennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Angriffs-Zuordnung ist ein MC-Dauerbrenner. Das Schema »Szenario → welcher Angriff?« kommt
        häufig.
      </Callout>
      <table>
        <thead>
          <tr><th>Angriff</th><th>Kurzbeschreibung</th><th>Gegenmaßnahme</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Phishing</strong></td>
            <td>Täuschende Mails/Seiten, um Zugangsdaten zu klauen.</td>
            <td>Schulung, 2FA, SPF/DKIM/DMARC.</td>
          </tr>
          <tr>
            <td><strong>Spear Phishing</strong></td>
            <td>Gezielt auf eine Person zugeschnitten.</td>
            <td>Schulung + Rollen-basierte Rechte.</td>
          </tr>
          <tr>
            <td><strong>Man-in-the-Middle</strong></td>
            <td>Angreifer schaltet sich zwischen Kommunikation.</td>
            <td>TLS, Zertifikatsprüfung, HSTS.</td>
          </tr>
          <tr>
            <td><strong>DoS / DDoS</strong></td>
            <td>Service mit Requests überfluten.</td>
            <td>Rate-Limiting, CDN, WAF, Traffic-Shaping.</td>
          </tr>
          <tr>
            <td><strong>SQL Injection</strong></td>
            <td>Bösartiger SQL-Code über Eingabe eingeschleust.</td>
            <td>Prepared Statements, Parametrisierung.</td>
          </tr>
          <tr>
            <td><strong>XSS</strong></td>
            <td>Fremder JS-Code im Browser des Opfers.</td>
            <td>Output escapen, Content-Security-Policy.</td>
          </tr>
          <tr>
            <td><strong>CSRF</strong></td>
            <td>Angreifer missbraucht Sitzung des Opfers über Drittseite.</td>
            <td>CSRF-Token, SameSite-Cookies.</td>
          </tr>
          <tr>
            <td><strong>Ransomware</strong></td>
            <td>Dateien werden verschlüsselt, Lösegeld gefordert.</td>
            <td>Backups (3-2-1), EDR, Awareness.</td>
          </tr>
          <tr>
            <td><strong>Social Engineering</strong></td>
            <td>Manipulation von Menschen (Anruf, Vorwand).</td>
            <td>Schulung, Freigabe-Prozesse.</td>
          </tr>
          <tr>
            <td><strong>Zero-Day</strong></td>
            <td>Ausnutzung einer noch unbekannten Schwachstelle.</td>
            <td>Patch-Management, Hardening, Monitoring.</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question:
        "Ein Angreifer speichert in einem Kommentarfeld JS, das bei anderen Nutzern ausgeführt wird. Welcher Angriff?",
      options: [
        { id: "a", text: "CSRF", correct: false },
        { id: "b", text: "XSS", correct: true },
        { id: "c", text: "SQL Injection", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wirksamste Gegenmaßnahme gegen SQL Injection?",
      options: [
        { id: "a", text: "Fehlermeldungen verstecken.", correct: false },
        { id: "b", text: "Prepared Statements / parametrisierte Queries.", correct: true },
        { id: "c", text: "Nur GET-Requests verwenden.", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Bei welchem Angriff spielt TLS + Zertifikatsprüfung eine zentrale Rolle als Schutz?",
      options: [
        { id: "a", text: "DoS", correct: false },
        { id: "b", text: "Man-in-the-Middle", correct: true },
        { id: "c", text: "Social Engineering", correct: false },
      ],
    },
  ],
  examTips: [
    "XSS = fremdes Script läuft im Browser. CSRF = eigener Browser sendet ungewollt Request.",
    "DDoS = viele Quellen (Botnetz), DoS = eine.",
    "SQLi immer mit Prepared Statements beantworten.",
  ],
  resources: [
    {
      kind: "page",
      title: "ProSec – CSRF und XSS: Angriffsmethoden und Abwehr",
      url: "https://www.prosec-networks.com/blog/cross-site-request-forgery/",
      source: "prosec-networks.com",
      note: "Seriöser Leitfaden mit Angriff und Gegenmaßnahmen nebeneinander.",
    },
    {
      kind: "page",
      title: "Trend Micro – Was ist Cross-Site-Scripting (XSS)?",
      url: "https://www.trendmicro.com/de_de/what-is/cyber-attack/xss-cross-site-scripting.html",
      source: "trendmicro.com",
      note: "XSS im Detail, reflektiert vs. persistent.",
    },
  ],
  related: ["schutzziele", "web-sicherheit", "sql-injection"],
};
