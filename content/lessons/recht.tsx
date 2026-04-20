import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const recht: Lesson = {
  slug: "recht",
  objectives: [
    "Urheber-, Marken- und Wettbewerbsrecht für ITler einordnen",
    "Widerrufsfristen und Impressumspflicht kennen",
    "Typische Fallstricke benennen",
  ],
  body: (
    <div className="prose-content">
      <h2>Wichtige Gesetze</h2>
      <ul>
        <li>
          <strong>UrhG (Urheberrecht)</strong>: Software ist geschützt (<code>§ 69a</code> ff.);
          entsteht automatisch bei Schöpfung, <em>keine</em> Anmeldung; erlischt 70 Jahre nach Tod
          des Urhebers.
        </li>
        <li>
          <strong>Nutzungsrechte</strong>: einfach vs. ausschließlich; übertragbar per Lizenz.
        </li>
        <li>
          <strong>MarkenG (Markenrecht)</strong>: geschützte Kennzeichen für Waren/Dienstleistungen,
          Eintragung beim DPMA.
        </li>
        <li>
          <strong>UWG (Gesetz gegen unlauteren Wettbewerb)</strong>: irreführende Werbung,
          unzumutbare Belästigung (Spam <code>§ 7 UWG</code>).
        </li>
        <li>
          <strong>DSGVO / BDSG</strong>: Verarbeitung personenbezogener Daten nur mit Rechtsgrundlage
          (<code>Art. 6</code>).
        </li>
        <li>
          <strong>Widerruf im Fernabsatz</strong>: <strong>14 Tage</strong> ab Erhalt (<code>§§ 312g, 355 BGB</code>),
          B2C. Ausnahmen bei Individualsoftware.
        </li>
      </ul>

      <h2>Typische Fälle</h2>
      <ul>
        <li>Stack-Overflow-Snippet (CC BY-SA) ohne Attribution in Code kopiert → Urheberrechts- und Lizenzverstoß.</li>
        <li>Newsletter ohne Einwilligung versendet → UWG + DSGVO.</li>
        <li>Impressum fehlt auf gewerblicher Website → Abmahnung möglich (<code>§ 5 DDG</code>).</li>
      </ul>

      <Callout variant="tip">
        Urheberrecht entsteht <strong>automatisch</strong>, Markenrecht <strong>durch Eintragung</strong>.
        Diese Unterscheidung kommt gern als MC-Frage.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Wann entsteht das Urheberrecht an einer Software?",
      options: [
        { id: "a", text: "Automatisch bei Schöpfung", correct: true },
        { id: "b", text: "Erst nach Eintragung beim DPMA", correct: false },
        { id: "c", text: "Erst bei kommerzieller Nutzung", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Wie lang ist die Widerrufsfrist im Fernabsatz (B2C)?",
      options: [
        { id: "a", text: "7 Tage", correct: false },
        { id: "b", text: "14 Tage ab Erhalt", correct: true },
        { id: "c", text: "30 Tage", correct: false },
      ],
    },
  ],
  examTips: [
    "UrhG vs. MarkenG unterscheiden: automatisch vs. Eintragung.",
    "Widerruf: 14 Tage.",
    "§ 7 UWG für Spam-Fragen merken.",
  ],
  related: ["lizenzmodelle", "dsgvo", "kundenbeziehungen"],
};
