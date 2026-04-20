import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const webSicherheit: Lesson = {
  slug: "web-sicherheit",
  objectives: [
    "Die wichtigsten OWASP-Top-10-Risiken und Gegenmaßnahmen nennen",
    "XSS, CSRF und SQLi klar auseinanderhalten",
    "Sicherheitsheader (HSTS, CSP) einsetzen können",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        OWASP Top 10 ist prüfungsrelevant. Aktuell (Stand 2026) ist die <strong>2025er-Fassung</strong>{" "}
        veröffentlicht – bei Zahlenangaben der Kategorien ggf. gegen aktuelle Liste verifizieren.
      </Callout>

      <h2>Top-Risiken und Gegenmaßnahmen</h2>
      <table>
        <thead><tr><th>Kategorie</th><th>Typisch</th><th>Gegenmaßnahme</th></tr></thead>
        <tbody>
          <tr><td>Broken Access Control</td><td>IDOR, Pfad-Traversal</td><td>serverseitige Rechteprüfung, niemals auf Client vertrauen</td></tr>
          <tr><td>Security Misconfiguration</td><td>Default-Passwörter, offene Admin-Panels</td><td>Hardening-Checklisten, CI-Scans</td></tr>
          <tr><td>Cryptographic Failures</td><td>Klartext-Passwörter, TLS-Schwächen</td><td>bcrypt/argon2, TLS 1.3, HSTS</td></tr>
          <tr><td>Injection (SQLi, XSS, Command)</td><td>Benutzereingaben im Code</td><td>Prepared Statements, Output-Encoding, CSP</td></tr>
          <tr><td>Authentication Failures</td><td>schwache Passwörter, fehlendes MFA</td><td>MFA, Rate-Limit, starke Hashes</td></tr>
          <tr><td>Software Supply Chain</td><td>kompromittierte Abhängigkeiten</td><td>SBOM, Dependency-Scan, Signierte Releases</td></tr>
        </tbody>
      </table>

      <h2>XSS, CSRF, SQLi – die Klassiker</h2>
      <ul>
        <li><strong>XSS</strong>: fremdes JS läuft im Browser des Opfers. Schutz: Output-Encoding + Content-Security-Policy.</li>
        <li><strong>CSRF</strong>: Angreifer nutzt bestehende Session aus. Schutz: CSRF-Token + SameSite-Cookies.</li>
        <li><strong>SQLi</strong>: Schutz: Prepared Statements + Least Privilege.</li>
      </ul>

      <h2>Sicherheitsheader</h2>
      <CodeBlock caption="typische HTTP-Header">
{`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.example.com
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin`}
      </CodeBlock>

      <Callout variant="warn">
        CSRF ≠ XSS. CSRF missbraucht eine bestehende Session, XSS schleust eigenen Code ein. HSTS
        schützt nicht beim allerersten Request – daher Preload-Liste beantragen.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wirksamste Maßnahme gegen SQL-Injection?",
      options: [
        { id: "a", text: "Input nur clientseitig prüfen", correct: false },
        { id: "b", text: "Prepared Statements mit Parameter-Binding", correct: true, explanation: "Trennt Daten und SQL-Code sauber." },
        { id: "c", text: "Nur HTTPS verwenden", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welcher HTTP-Header erzwingt künftige Verbindungen über HTTPS?",
      options: [
        { id: "a", text: "Content-Security-Policy", correct: false },
        { id: "b", text: "Strict-Transport-Security (HSTS)", correct: true, explanation: "Der Browser merkt sich HTTPS-Pflicht für die Domain." },
        { id: "c", text: "X-Frame-Options", correct: false },
      ],
    },
  ],
  examTips: [
    "Zu jeder Lücke EINE konkrete Gegenmaßnahme kennen.",
    "CSP-Beispiel parat haben: `default-src 'self'`.",
    "XSS vs. CSRF in 1 Satz erklären können.",
  ],
  related: ["angriffe", "sql-injection", "kryptografie"],
};
