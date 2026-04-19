export const metadata = { title: "Prüfungsinfo · AP2 Lernhub" };

const parts = [
  {
    title: "Planen und Umsetzen eines Softwareprojektes",
    nick: "Projektarbeit",
    weight: "50 %",
    duration: "ca. 80 Std. + 15 min Präsentation + 15 min Fachgespräch",
    format: "Projektdokumentation, Präsentation, Fachgespräch",
    focus: [
      "Anforderungsanalyse und Konzeption",
      "Umsetzung + Qualitätssicherung",
      "Reflexion und Dokumentation",
    ],
  },
  {
    title: "Planen eines Softwareproduktes",
    nick: "ehem. GA1",
    weight: "10 %",
    duration: "90 Min",
    format: "4 ungebundene Aufgaben, schriftlich",
    focus: [
      "UML-Diagramme zeichnen/ergänzen",
      "ER-Modell & Normalisierung",
      "Architektur & Design Patterns",
      "Vorgehensmodelle (Scrum, Kanban)",
      "BPMN 2.0 (neu 2025)",
    ],
  },
  {
    title: "Entwicklung und Umsetzung von Algorithmen",
    nick: "ehem. GA2",
    weight: "10 %",
    duration: "90 Min",
    format: "4 ungebundene Aufgaben, schriftlich (SQL-Beiblatt liegt bei)",
    focus: [
      "Pseudocode schreiben & tracen",
      "SQL: SELECT, JOIN, INSERT, UPDATE, DELETE",
      "OOP-Konzepte",
      "Testverfahren & Coverage",
      "Sortieralgorithmen (Bubble, Selection, Insertion – neu 2025)",
    ],
  },
  {
    title: "Wirtschafts- und Sozialkunde",
    nick: "WiSo",
    weight: "10 %",
    duration: "60 Min",
    format: "ca. 30 Multiple-Choice-Aufgaben",
    focus: [
      "Arbeitsrecht, Ausbildungsrecht",
      "Sozialversicherung",
      "BGB, Vertragsarten",
      "Rechtsformen",
      "Nachhaltigkeit (neu verstärkt)",
    ],
  },
];

export default function PruefungsInfoPage() {
  return (
    <div className="space-y-10">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-widest text-sky-400">Prüfungsinfo</p>
        <h1 className="mt-1 text-3xl font-semibold text-white">So läuft die AP2 ab</h1>
        <p className="mt-3 text-zinc-300">
          Vier Prüfungsbereiche auf Basis des aktualisierten Prüfungskatalogs (Oktober 2024). AP1 zählt
          zusätzlich mit 20 % zur Gesamtnote. Bestehen: Gesamtnote ≥ „ausreichend", kein Bereich
          „ungenügend", max. ein Bereich „mangelhaft" (mit Ergänzungsprüfung).
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {parts.map((p) => (
          <article
            key={p.title}
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-zinc-500">{p.nick}</p>
                <h2 className="mt-1 text-lg font-semibold text-white">{p.title}</h2>
              </div>
              <span className="rounded-md bg-sky-500/15 px-2 py-1 text-xs font-semibold text-sky-300 ring-1 ring-inset ring-sky-400/30">
                {p.weight}
              </span>
            </div>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs text-zinc-400">
              <dt className="text-zinc-500">Dauer</dt>
              <dd>{p.duration}</dd>
              <dt className="text-zinc-500">Format</dt>
              <dd>{p.format}</dd>
            </dl>
            <ul className="mt-3 space-y-1 text-sm text-zinc-200">
              {p.focus.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
                  {f}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="rounded-xl border border-amber-400/30 bg-amber-500/5 p-5">
        <h3 className="text-sm font-semibold text-amber-200">⏱ Zeitmanagement-Tipps</h3>
        <ul className="mt-2 space-y-1 text-sm text-zinc-200">
          <li>• UML-Diagramme pro Stück max. 15 Minuten – nicht in Perfektionismus versinken.</li>
          <li>• SQL: Syntax-Beiblatt zuerst überfliegen, bevor du loslegst.</li>
          <li>• Pseudocode-Tracing braucht eine Wertetabelle – lohnt sich, Zeile für Zeile.</li>
          <li>• Unsichere Aufgaben überspringen, zuerst Punkte sichern.</li>
        </ul>
      </section>
    </div>
  );
}
