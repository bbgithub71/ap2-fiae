import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const sqlInjection: Lesson = {
  slug: "sql-injection",
  objectives: [
    "Angriffsmuster von SQL-Injection erkennen (Tautologie, UNION, Blind)",
    "Prepared Statements als Hauptgegenmaßnahme sicher anwenden",
    "Weitere Maßnahmen (Input-Validierung, Least Privilege) einordnen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        OWASP Top 10, Kategorie «Injection» — Dauerbrenner in Sicherheitsfragen. Typisch: unsicheres
        vs. sicheres Code-Snippet vergleichen.
      </Callout>

      <h2>Klassische Angriffsmuster</h2>
      <ul>
        <li><strong>Tautologie:</strong> <code>&apos; OR &apos;1&apos;=&apos;1</code> umgeht die WHERE-Bedingung.</li>
        <li><strong>UNION-based:</strong> <code>UNION SELECT ...</code> hängt fremde Daten an das Ergebnis an.</li>
        <li><strong>Blind (zeitbasiert):</strong> <code>SLEEP(5)</code> verrät Erfolg über die Antwortzeit.</li>
        <li><strong>Fehlerbasiert:</strong> provozierte DB-Fehler leaken Schemadetails.</li>
      </ul>

      <h2>Unsicher vs. sicher</h2>
      <CodeBlock lang="java" caption="UNSICHER – String-Konkatenation">
{`String sql = "SELECT * FROM user WHERE name='" + name + "'";
stmt.executeQuery(sql);`}
      </CodeBlock>
      <CodeBlock lang="java" caption="SICHER – Prepared Statement">
{`PreparedStatement ps = con.prepareStatement(
    "SELECT * FROM user WHERE name = ?");
ps.setString(1, name);
ps.executeQuery();`}
      </CodeBlock>

      <h2>Gegenmaßnahmen (Reihenfolge nach Wirksamkeit)</h2>
      <ol>
        <li><strong>Prepared Statements / Parameter-Binding</strong> – trennt SQL-Code und Daten.</li>
        <li><strong>ORM</strong> (Hibernate, Entity Framework) nutzt intern Prepared Statements.</li>
        <li><strong>Input-Validierung</strong> (Whitelist) – ergänzend, nicht ersetzend.</li>
        <li><strong>Least Privilege</strong> für den DB-User der Anwendung.</li>
        <li><strong>WAF</strong> (Web Application Firewall) als zusätzliche Schicht.</li>
        <li><strong>Keine Fehlerdetails</strong> an den Client ausgeben.</li>
      </ol>

      <Callout variant="warn">
        Einfaches Escaping reicht nicht. Encoding-Unterschiede oder verschachtelte Zeichen machen
        jede naive Ersetzungslogik angreifbar. <strong>Immer Prepared Statements.</strong>
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Maßnahme schützt am wirksamsten gegen SQL-Injection?",
      options: [
        { id: "a", text: "HTML-Escaping der Ausgabe", correct: false, explanation: "Das hilft gegen XSS, nicht gegen SQLi." },
        { id: "b", text: "Prepared Statements mit Parameter-Binding", correct: true, explanation: "Trennt Code und Daten — Angreifereingaben werden als Wert behandelt." },
        { id: "c", text: "Passwort-Hashing", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Was bewirkt «' OR '1'='1» in einem Login-Query ohne Schutz?",
      options: [
        { id: "a", text: "Die WHERE-Bedingung wird immer wahr → Authentifizierung umgangen.", correct: true },
        { id: "b", text: "Das Passwort wird verschlüsselt.", correct: false },
        { id: "c", text: "Die Datenbank stürzt ab.", correct: false },
      ],
    },
  ],
  examTips: [
    "Unsicheres vs. sicheres Snippet erklären können — Prepared Statement ist die Musterantwort.",
    "Mindestens 3 Gegenmaßnahmen nennen (Prepared Statements, Validierung, Least Privilege).",
    "SQLi ist in OWASP Top 10 unter «Injection» (A03:2021) einsortiert.",
  ],
  resources: [
    {
      kind: "video",
      title: "SQL Injection – API Sicherheit #5",
      url: "https://www.youtube.com/watch?v=8UKctJyDSUo",
      note: "Fokus auf SQL-Injection im API-Kontext mit Gegenmaßnahmen.",
    },
    {
      kind: "video",
      title: "Security Shorts – Was ist eine SQL Injection und wie funktioniert dieser Angriff?",
      url: "https://www.youtube.com/watch?v=bel0ACoN10E",
      note: "Kompaktes Security-Short mit klarem Angriffsbeispiel.",
    },
  ],
  related: ["angriffe", "web-sicherheit", "sql-grundlagen"],
};
