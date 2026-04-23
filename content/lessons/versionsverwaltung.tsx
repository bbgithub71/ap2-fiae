import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const versionsverwaltungLesson: Lesson = {
  slug: "versionsverwaltung",
  objectives: [
    "Das 3-Bereiche-Modell (Working Copy, Index, Repo) verstehen",
    "Die wichtigsten Git-Kommandos sicher anwenden",
    "Merge vs. Rebase unterscheiden und Workflows einordnen",
  ],
  body: (
    <div className="prose-content">
      <h2>Drei Bereiche</h2>
      <ol>
        <li><strong>Working Copy</strong> – Dateien auf der Platte.</li>
        <li><strong>Index / Staging</strong> – <code>git add</code>.</li>
        <li><strong>Repository</strong> – <code>git commit</code>.</li>
      </ol>

      <h2>Wichtige Kommandos</h2>
      <ul>
        <li><code>git init</code> / <code>git clone</code></li>
        <li><code>git add</code>, <code>git commit</code>, <code>git status</code>, <code>git log</code></li>
        <li><code>git push</code>, <code>git pull</code>, <code>git fetch</code></li>
        <li><code>git branch</code>, <code>git switch</code> (alt: <code>checkout</code>)</li>
        <li><code>git merge</code> vs. <code>git rebase</code></li>
      </ul>

      <h2>Merge vs. Rebase</h2>
      <ul>
        <li><strong>Merge:</strong> erzeugt einen Merge-Commit, History bleibt verzweigt.</li>
        <li><strong>Rebase:</strong> schreibt Commits auf eine neue Basis – lineare Historie, aber History-Rewrite.</li>
      </ul>

      <Callout variant="warn">
        Rebase niemals auf Branches, die bereits geteilt wurden. Pushen schreibt sonst die Historie
        für andere um.
      </Callout>

      <h2>Workflows</h2>
      <ul>
        <li><strong>GitFlow</strong>: main / develop / feature / release / hotfix – schwergewichtig, klassisch.</li>
        <li><strong>Trunk-Based</strong>: kurze Branches, schnell mergen in main – CI/CD-freundlich.</li>
        <li><strong>GitHub Flow</strong>: main + Feature-PRs, leichtgewichtig.</li>
      </ul>

      <CodeBlock lang="bash" caption="Typischer Ablauf">
{`git clone git@server:repo.git
git switch -c feature/login
# ... Änderungen ...
git add src/login.ts
git commit -m "feat: add login form"
git fetch origin
git rebase origin/main
git push -u origin feature/login`}
      </CodeBlock>

      <h2>Konfliktlösung</h2>
      <ol>
        <li>Datei editieren, Konflikt-Marker (<code>&lt;&lt;&lt;</code>, <code>===</code>, <code>&gt;&gt;&gt;</code>) entfernen.</li>
        <li><code>git add &lt;datei&gt;</code>.</li>
        <li><code>git commit</code> (bei Merge) oder <code>git rebase --continue</code>.</li>
      </ol>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Kommando überträgt lokale Commits zum Remote?",
      options: [
        { id: "a", text: "git fetch", correct: false, explanation: "Holt Infos vom Remote, ändert aber lokal nichts." },
        { id: "b", text: "git push", correct: true },
        { id: "c", text: "git commit", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Hauptunterschied zwischen merge und rebase?",
      options: [
        { id: "a", text: "Rebase erzeugt immer einen Merge-Commit", correct: false },
        { id: "b", text: "Rebase schreibt Commits auf eine neue Basis, Merge verbindet mit einem Commit", correct: true },
        { id: "c", text: "Merge funktioniert nur lokal", correct: false },
      ],
    },
  ],
  examTips: [
    "Drei-Bereiche-Modell (Working / Index / Repo) sicher skizzieren.",
    "Rebase = lineare Historie, Merge = echte Historie.",
    "Git ist verteilt – jedes Repo ist vollwertig, kein Single Point.",
  ],
  resources: [
    {
      kind: "video",
      title: "Lerne Git in 30 Minuten // Git Tutorial Deutsch",
      url: "https://www.youtube.com/watch?v=V0bXqLxIivo",
      note: "Schneller Einstieg in die wichtigsten Git-Kommandos.",
    },
    {
      kind: "video",
      title: "GIT Branch & Merge kurz erklärt – Die Git Grundlagen",
      url: "https://www.youtube.com/watch?v=6_KqHPG2uaI",
      note: "Fokus auf Branching und Merge – zentral für Teamwork.",
    },
  ],
  related: ["testautomatisierung", "anforderungen", "vorgehensmodelle"],
};
