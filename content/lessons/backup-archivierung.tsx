import { Callout } from "@/components/Callout";
import type { Lesson } from "./_types";

export const backupArchivierung: Lesson = {
  slug: "backup-archivierung",
  objectives: [
    "Backup von Archivierung abgrenzen",
    "Backup-Arten (voll, differenziell, inkrementell) benennen",
    "3-2-1-Regel sowie RPO / RTO einsetzen",
  ],
  body: (
    <div className="prose-content">
      <h2>Backup vs. Archivierung</h2>
      <ul>
        <li><strong>Backup:</strong> kurzfristige Wiederherstellung nach Datenverlust. Daten bleiben zusätzlich am Original.</li>
        <li><strong>Archivierung:</strong> langfristige, unveränderbare Aufbewahrung (GoBD: 6-10 Jahre). Originaldaten dürfen gelöscht werden.</li>
      </ul>

      <h2>Backup-Arten</h2>
      <table>
        <thead>
          <tr><th>Art</th><th>Was wird gesichert?</th><th>Restore-Aufwand</th></tr>
        </thead>
        <tbody>
          <tr><td>Vollbackup</td><td>alles</td><td>nur das Voll-Backup</td></tr>
          <tr><td>Differenziell</td><td>alles seit letztem Voll</td><td>Voll + letzte Diff</td></tr>
          <tr><td>Inkrementell</td><td>alles seit letztem Backup (egal welcher Art)</td><td>Voll + alle Inkremente</td></tr>
        </tbody>
      </table>

      <Callout variant="tip">
        Differenziell wächst täglich, inkrementell bleibt klein — dafür ist inkrementell beim
        <strong> Restore aufwendiger</strong>.
      </Callout>

      <h2>3-2-1-Regel</h2>
      <ul>
        <li><strong>3</strong> Kopien der Daten</li>
        <li><strong>2</strong> verschiedene Medien</li>
        <li><strong>1</strong> Kopie extern / offline</li>
      </ul>

      <h2>RPO und RTO</h2>
      <ul>
        <li><strong>RPO</strong> (Recovery Point Objective): maximal tolerierbarer Datenverlust (Zeitfenster).</li>
        <li><strong>RTO</strong> (Recovery Time Objective): maximal tolerierbare Ausfallzeit.</li>
      </ul>

      <h2>Stolperfallen</h2>
      <ul>
        <li>Archiv ≠ Backup: Archive sind revisionssicher / WORM, Backups überschreibbar.</li>
        <li>RPO misst Datenmenge (zeitlich), RTO die Ausfallzeit — nicht verwechseln.</li>
        <li>RAID ersetzt KEIN Backup.</li>
      </ul>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welche Aussage zu inkrementellen Backups stimmt?",
      options: [
        { id: "a", text: "Sichert alles seit dem letzten Vollbackup", correct: false, explanation: "Das wäre differenziell." },
        { id: "b", text: "Sichert nur Änderungen seit dem letzten Backup", correct: true, explanation: "Restore braucht Voll + alle Inkremente." },
        { id: "c", text: "Ersetzt die Archivierung", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "RTO bezeichnet …",
      options: [
        { id: "a", text: "den maximal tolerierbaren Datenverlust", correct: false, explanation: "Das ist RPO." },
        { id: "b", text: "die maximal tolerierbare Wiederherstellungszeit", correct: true },
        { id: "c", text: "die Aufbewahrungsfrist", correct: false },
      ],
    },
  ],
  examTips: [
    "Backup-Intervall bestimmt den RPO: stündliches Backup → RPO ≤ 1 h.",
    "3-2-1-Regel nennen, wenn nach «sicherem Konzept» gefragt ist.",
    "GoBD: Handelsbücher 10 Jahre, sonstige Unterlagen 6 Jahre.",
  ],
  related: ["cloud-speicher", "schutzziele", "dsgvo"],
};
