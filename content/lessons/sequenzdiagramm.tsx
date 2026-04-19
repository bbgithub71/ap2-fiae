import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const sequenzdiagramm: Lesson = {
  slug: "sequenzdiagramm",
  objectives: [
    "Sequenzdiagramme lesen und aus Anwendungsfällen ableiten",
    "Synchrone und asynchrone Nachrichten unterscheiden",
    "Aktivierungsbalken, Lifelines und Rückgabepfeile korrekt einzeichnen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Sequenzdiagramme kamen in ~58 % der letzten Prüfungen vor (~64 Pkt. kumuliert). Typische
        Aufgabe: Ein Ablauf (z. B. »Kunde bestellt Artikel«) als Sequenz zwischen mehreren Objekten.
      </Callout>

      <h2>1. Bausteine</h2>
      <ul>
        <li><strong>Lifeline (Lebenslinie):</strong> Kopf mit Objektname, gestrichelte senkrechte Linie.</li>
        <li><strong>Aktivierungsbalken:</strong> schmales Rechteck auf der Lifeline – Objekt ist aktiv.</li>
        <li><strong>Nachricht (synchron):</strong> durchgezogener Pfeil mit gefüllter Spitze.</li>
        <li><strong>Antwort:</strong> gestrichelter Pfeil mit offener Spitze.</li>
        <li><strong>Nachricht (asynchron):</strong> durchgezogener Pfeil mit offener Spitze (kein Warten).</li>
        <li><strong>Selbstaufruf:</strong> Pfeil, der auf dieselbe Lifeline zurückgeht.</li>
      </ul>

      <h2>2. Struktur-Fragmente</h2>
      <ul>
        <li><code>alt</code> – Alternative (if/else)</li>
        <li><code>opt</code> – optionaler Block (if ohne else)</li>
        <li><code>loop</code> – Wiederholung</li>
        <li><code>par</code> – parallele Abläufe</li>
      </ul>

      <h2>3. Beispiel – Login</h2>
      <CodeBlock caption="Textuelle Skizze">
{`User → LoginController : login(u, p)
         LoginController → UserRepo : findByName(u)
         LoginController ← UserRepo : User
         LoginController → User     : checkPassword(p)
         LoginController ← User     : boolean
alt [passwort ok]
    LoginController → SessionService : create(user)
    LoginController ← SessionService : token
    User           ← LoginController : {token}
else [nicht ok]
    User           ← LoginController : 401 Unauthorized
end`}
      </CodeBlock>

      <h2>4. Tipps fürs Zeichnen</h2>
      <ul>
        <li>Zuerst die beteiligten Objekte horizontal anordnen.</li>
        <li>Pfeile immer vom Absender zum Empfänger.</li>
        <li>Zeit läuft von oben nach unten.</li>
        <li>Aktivierungsbalken nur so lang, wie das Objekt wirklich arbeitet.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was kennzeichnet eine asynchrone Nachricht?",
      options: [
        { id: "a", text: "Durchgezogener Pfeil mit gefüllter Spitze.", correct: false, explanation: "Das ist synchron." },
        { id: "b", text: "Durchgezogener Pfeil mit offener Spitze – Sender wartet nicht auf Antwort.", correct: true },
        { id: "c", text: "Gestrichelter Pfeil.", correct: false, explanation: "Gestrichelt ist die Antwort." },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Welches Struktur-Fragment modelliert eine if/else-Entscheidung?",
      options: [
        { id: "a", text: "opt", correct: false },
        { id: "b", text: "alt", correct: true },
        { id: "c", text: "loop", correct: false },
      ],
    },
  ],
  examTips: [
    "Aktivierungsbalken nicht vergessen – zeigen klar, welches Objekt gerade aktiv ist.",
    "Antwort-Pfeile (gestrichelt, offene Spitze) sind oft Teilpunkte.",
    "Bei alt/opt/loop: Rahmen mit Titel in eckigen Klammern beschriften.",
  ],
  related: ["klassendiagramm", "aktivitaetsdiagramm", "zustandsdiagramm"],
};
