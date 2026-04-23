import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const netzplan: Lesson = {
  slug: "netzplan",
  objectives: [
    "Vorwärts- und Rückwärtsterminierung sicher rechnen",
    "FAZ, FEZ, SAZ, SEZ, freien Puffer und Gesamtpuffer bestimmen",
    "Den kritischen Pfad erkennen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Netzplan-Aufgaben sind <strong>klassische Rechenaufgaben</strong> in der AP2. Wer die
        Formeln im Schlaf beherrscht, sammelt sichere Punkte.
      </Callout>

      <h2>Grundbausteine</h2>
      <ul>
        <li><strong>Vorgang</strong> (Knoten / Rechteck): eine Aktivität mit einer <em>Dauer D</em>.</li>
        <li><strong>Anordnungsbeziehung</strong> (Pfeil): Reihenfolge – Vorgänger → Nachfolger.</li>
        <li><strong>FAZ</strong>: frühester Anfangszeitpunkt</li>
        <li><strong>FEZ</strong>: frühester Endzeitpunkt = FAZ + D</li>
        <li><strong>SAZ</strong>: spätester Anfangszeitpunkt = SEZ − D</li>
        <li><strong>SEZ</strong>: spätester Endzeitpunkt</li>
        <li><strong>GP</strong> (Gesamtpuffer) = SAZ − FAZ = SEZ − FEZ</li>
        <li><strong>FP</strong> (Freier Puffer) = frühester Anfang Nachfolger − FEZ</li>
      </ul>

      <h2>Vorwärtsterminierung (FAZ &amp; FEZ)</h2>
      <p>Beginne beim ersten Vorgang mit FAZ = 0. Für jeden nächsten Vorgang:</p>
      <CodeBlock>
{`FAZ(V) = max( FEZ aller Vorgänger )
FEZ(V) = FAZ(V) + D(V)`}
      </CodeBlock>

      <h2>Rückwärtsterminierung (SEZ &amp; SAZ)</h2>
      <p>Beginne beim Ende: SEZ = projektende = größtes FEZ. Dann rückwärts:</p>
      <CodeBlock>
{`SEZ(V) = min( SAZ aller Nachfolger )
SAZ(V) = SEZ(V) − D(V)`}
      </CodeBlock>

      <h2>Kritischer Pfad</h2>
      <p>
        Der kritische Pfad ist der <strong>längste Weg</strong> durch den Netzplan. Alle Vorgänge
        auf dem kritischen Pfad haben <strong>Gesamtpuffer = 0</strong> – jede Verzögerung
        verzögert das gesamte Projekt.
      </p>

      <Callout variant="tip">
        Merke: <strong>GP = 0 → kritisch.</strong> Mehr als einen kritischen Pfad gleichzeitig gibt
        es, wenn mehrere Wege dieselbe Länge haben.
      </Callout>

      <h2>Mini-Beispiel</h2>
      <CodeBlock caption="4 Vorgänge, Dauern">
{`A (D=3)  →  B (D=4)  →  D (D=2)
         →  C (D=5)  →  D`}
      </CodeBlock>
      <p>
        Vorwärts: A startet mit FAZ=0, FEZ=3. B: FAZ=3, FEZ=7. C: FAZ=3, FEZ=8. D hat zwei
        Vorgänger → FAZ = max(7, 8) = 8, FEZ = 10.<br />
        Rückwärts: D: SEZ=10, SAZ=8. C: SEZ=8, SAZ=3. B: SEZ=8, SAZ=4.<br />
        Pfad A → C → D hat GP=0 → <strong>kritischer Pfad</strong>. Pfad über B hat GP=1.
      </p>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Was gilt für alle Vorgänge auf dem kritischen Pfad?",
      options: [
        { id: "a", text: "Sie haben die längste Dauer", correct: false },
        { id: "b", text: "Gesamtpuffer = 0", correct: true, explanation: "Jede Verzögerung verzögert das Projektende." },
        { id: "c", text: "Sie haben keine Vorgänger", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Formel für den frühesten Endzeitpunkt FEZ?",
      options: [
        { id: "a", text: "FEZ = SEZ − D", correct: false },
        { id: "b", text: "FEZ = FAZ + D", correct: true },
        { id: "c", text: "FEZ = SAZ + D", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Wie berechnet man den Gesamtpuffer?",
      options: [
        { id: "a", text: "GP = FEZ − FAZ", correct: false, explanation: "Das ist die Dauer D." },
        { id: "b", text: "GP = SAZ − FAZ", correct: true, explanation: "Oder äquivalent SEZ − FEZ." },
        { id: "c", text: "GP = D × Anzahl Nachfolger", correct: false },
      ],
    },
  ],
  examTips: [
    "Reihenfolge: erst komplette Vorwärtsterminierung, dann rückwärts, dann Puffer, dann kritischer Pfad.",
    "FAZ eines Vorgangs = Maximum(FEZ aller Vorgänger) — nicht das erste, das du siehst.",
    "Bei Pufferfragen immer klar sagen: Gesamtpuffer vs. freier Puffer.",
  ],
  related: ["projektphasen", "vorgehensmodelle", "anforderungen"],
  resources: [
    {
      kind: "video",
      title: "Netzplantechnik einfach erklärt + Beispiel mit kritischem Pfad",
      url: "https://www.youtube.com/watch?v=OfrfVY-eYQY",
      note: "Klassischer Einstieg – komplette Beispielaufgabe.",
    },
    {
      kind: "video",
      title: "Netzplan erstellen | Gesamtpuffer, freier Puffer & kritischer Pfad | Einfach erklärt mit Übung",
      url: "https://www.youtube.com/watch?v=_6VYLi2ZboM",
      note: "Fokus auf Pufferarten und den kritischen Pfad.",
    },
    {
      kind: "video",
      title: "Netzplan einfach erklärt | Kritischer Pfad, Pufferzeiten & IHK",
      url: "https://www.youtube.com/watch?v=t0a2-1rqqm0",
      note: "Aktuell und IHK-orientiert.",
    },
  ],
};
