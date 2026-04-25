import { Callout } from "@/components/Callout";
import { CodeBlock } from "@/components/CodeBlock";
import type { Lesson } from "./_types";

export const designPatterns: Lesson = {
  slug: "design-patterns",
  objectives: [
    "Die drei GoF-Kategorien (Erzeugungs-, Struktur-, Verhaltensmuster) sicher zuordnen",
    "Singleton, Factory, Observer, Strategy, Adapter, Decorator und MVC kennen und einsetzen können",
    "Pseudocode oder kurzes Java-Snippet je Pattern lesen und schreiben",
    "Zu einem Szenario das passende Pattern vorschlagen und begründen",
  ],
  body: (
    <div className="prose-content">
      <Callout variant="exam">
        Klassische AP2-Theorie-Aufgabe: «Wähle ein passendes Design Pattern für … und begründe.»
        Singleton, Factory, Observer und MVC sind absolute Pflichtkandidaten.
      </Callout>

      <h2>Die drei GoF-Kategorien</h2>
      <table>
        <thead>
          <tr><th>Kategorie</th><th>Frage</th><th>Wichtigste Patterns</th></tr>
        </thead>
        <tbody>
          <tr><td>Erzeugungsmuster</td><td>Wie werden Objekte erzeugt?</td><td>Singleton, Factory, Builder, Prototype</td></tr>
          <tr><td>Strukturmuster</td><td>Wie werden Objekte/Klassen zusammengesteckt?</td><td>Adapter, Decorator, Composite, Facade, Proxy</td></tr>
          <tr><td>Verhaltensmuster</td><td>Wie kommunizieren Objekte?</td><td>Observer, Strategy, Iterator, Template Method, Command</td></tr>
        </tbody>
      </table>

      <h2>Singleton (Erzeugung)</h2>
      <p>Genau eine Instanz einer Klasse, global zugreifbar. Typisch für Konfigurationen, Logger, Caches.</p>
      <CodeBlock lang="java">
{`public class Konfiguration {
    private static Konfiguration instanz;
    private Konfiguration() { /* privat verhindert direkten new */ }

    public static Konfiguration getInstanz() {
        if (instanz == null) {
            instanz = new Konfiguration();
        }
        return instanz;
    }
}

// Nutzung:
Konfiguration.getInstanz().getDbUrl();`}
      </CodeBlock>
      <Callout variant="warn">
        Singletons sind im Test schwer zu mocken und gelten heute oft als Anti-Pattern, wenn sie
        überall genutzt werden. In der Prüfung ist es trotzdem ein Pflichtbeispiel.
      </Callout>

      <h2>Factory Method (Erzeugung)</h2>
      <p>Ein Objekt entscheidet, welche Unterklasse instanziiert wird. Kein direktes <code>new</code> im Client.</p>
      <CodeBlock lang="java">
{`abstract class Logger {
    abstract void log(String msg);
}

class FileLogger    extends Logger { void log(String m) { /* … */ } }
class ConsoleLogger extends Logger { void log(String m) { /* … */ } }

class LoggerFactory {
    public static Logger create(String typ) {
        return switch (typ) {
            case "file"    -> new FileLogger();
            case "console" -> new ConsoleLogger();
            default        -> throw new IllegalArgumentException(typ);
        };
    }
}

// Nutzung:
Logger l = LoggerFactory.create("file");
l.log("Start");`}
      </CodeBlock>

      <h2>Observer (Verhalten)</h2>
      <p>Ein Subjekt benachrichtigt registrierte Beobachter bei Zustandsänderungen. Basis vieler Event-Systeme (UI, Pub/Sub).</p>
      <CodeBlock lang="pseudocode">
{`INTERFACE Beobachter
    METHODE update(zustand)
ENDE INTERFACE

KLASSE Subjekt
    - beobachter: LISTE
    METHODE registriere(b: Beobachter) → beobachter.add(b)
    METHODE benachrichtige(zustand)
        FÜR b IN beobachter TUE b.update(zustand)
ENDE KLASSE`}
      </CodeBlock>

      <h2>Strategy (Verhalten)</h2>
      <p>Austauschbare Algorithmen als Objekte. Beispiel: verschiedene Rabatt- oder Sortierstrategien.</p>
      <CodeBlock lang="java">
{`interface RabattStrategie {
    double berechne(double preis);
}

class KeinRabatt    implements RabattStrategie { public double berechne(double p) { return p; } }
class ProzentRabatt implements RabattStrategie {
    private double prozent;
    public ProzentRabatt(double p) { this.prozent = p; }
    public double berechne(double preis) { return preis * (1 - prozent / 100); }
}

class Bestellung {
    private RabattStrategie strategie;
    public Bestellung(RabattStrategie s) { this.strategie = s; }
    public double endpreis(double brutto) { return strategie.berechne(brutto); }
}`}
      </CodeBlock>

      <h2>Adapter (Struktur)</h2>
      <p>Übersetzt die Schnittstelle einer Klasse in eine andere – «Stromadapter»-Prinzip.</p>
      <CodeBlock lang="pseudocode">
{`KLASSE AlteAPI
    METHODE getKundennr() → STRING

KLASSE NeueAPI                  // Zielinterface
    METHODE getCustomerId() → STRING

KLASSE AlteAPIAdapter IMPLEMENTIERT NeueAPI
    - alt: AlteAPI
    METHODE getCustomerId()
        GIB alt.getKundennr()`}
      </CodeBlock>

      <h2>Decorator (Struktur)</h2>
      <p>Erweitert ein Objekt zur Laufzeit um neue Funktionalität, ohne die Klasse zu ändern.</p>
      <p>Beispiel: <code>BufferedReader(new FileReader(...))</code> in Java – jedes Wrapper-Objekt fügt Features hinzu.</p>

      <h2>Iterator (Verhalten)</h2>
      <p>
        Sequenzieller Zugriff auf Elemente einer Sammlung, ohne deren interne Struktur preiszugeben.
        In Java über <code>Iterable</code> und <code>Iterator</code>.
      </p>

      <h2>MVC (Architektur, kein GoF)</h2>
      <p>Trennt Datenmodell, Darstellung und Steuerung – Pflichtbeispiel in der Prüfung.</p>
      <ul>
        <li><strong>Model</strong>: Daten + Geschäftslogik</li>
        <li><strong>View</strong>: UI / Darstellung (z. B. HTML, Swing-Fenster)</li>
        <li><strong>Controller</strong>: nimmt Eingaben entgegen, ruft Model auf, liefert View zurück</li>
      </ul>
      <p>Vorteil: Austausch der UI ohne Eingriff in die Logik.</p>

      <Callout variant="tip">
        Merksatz: <strong>«Singleton, Factory, Observer, Strategy»</strong> – diese vier kommen am
        häufigsten in IHK-Aufgaben vor. Ergänze MVC und Adapter, dann hast du die Big Five gedeckt.
      </Callout>

      <h2>Pattern-Auswahl bei Szenarien</h2>
      <table>
        <thead>
          <tr><th>Szenario</th><th>Passendes Pattern</th></tr>
        </thead>
        <tbody>
          <tr><td>Globaler Zugriff auf eine Konfiguration</td><td>Singleton</td></tr>
          <tr><td>Verschiedene Versand-/Zahlarten austauschbar</td><td>Strategy</td></tr>
          <tr><td>UI soll bei Modelländerung automatisch updaten</td><td>Observer</td></tr>
          <tr><td>Alte Bibliothek mit neuer Schnittstelle nutzen</td><td>Adapter</td></tr>
          <tr><td>Funktionen zur Laufzeit nachrüsten (Logging-Wrapper)</td><td>Decorator</td></tr>
          <tr><td>Trennung Datenmodell / Darstellung / Steuerung in Webapp</td><td>MVC</td></tr>
          <tr><td>Erzeugung verschiedener Untertypen je nach Eingabe</td><td>Factory Method</td></tr>
        </tbody>
      </table>

      <Callout variant="warn">
        <strong>Antipatterns nicht verwechseln:</strong> Spaghetti-Code, God Class, Big Ball of Mud
        sind <em>schlechte</em> Muster. In der Prüfung kann nach «Was ist KEIN Design Pattern»
        gefragt werden.
      </Callout>
    </div>
  ),
  exercises: [
    {
      kind: "mc",
      id: "mc-1",
      question: "Welches Pattern garantiert genau eine Instanz einer Klasse?",
      options: [
        { id: "a", text: "Factory", correct: false },
        { id: "b", text: "Singleton", correct: true },
        { id: "c", text: "Observer", correct: false },
        { id: "d", text: "Adapter", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-2",
      question: "Für austauschbare Algorithmen (z. B. verschiedene Rabattarten) ist welches Pattern ideal?",
      options: [
        { id: "a", text: "Adapter", correct: false },
        { id: "b", text: "Strategy", correct: true, explanation: "Algorithmus wird als Objekt gekapselt und ist zur Laufzeit austauschbar." },
        { id: "c", text: "Composite", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-3",
      question: "Zu welcher Kategorie gehört Observer?",
      options: [
        { id: "a", text: "Erzeugungsmuster", correct: false },
        { id: "b", text: "Strukturmuster", correct: false },
        { id: "c", text: "Verhaltensmuster", correct: true },
      ],
    },
    {
      kind: "mc",
      id: "mc-4",
      question: "Eine alte API hat `getKundennr()`, deine neue Architektur erwartet `getCustomerId()`. Welches Pattern?",
      options: [
        { id: "a", text: "Singleton", correct: false },
        { id: "b", text: "Adapter", correct: true, explanation: "Übersetzt die alte Schnittstelle in das erwartete Zielinterface." },
        { id: "c", text: "Observer", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-5",
      question: "MVC wird welcher Komponente zugeordnet?",
      options: [
        { id: "a", text: "GoF-Verhaltensmuster", correct: false },
        { id: "b", text: "Architektur-Pattern (kein klassisches GoF)", correct: true, explanation: "MVC ist ein Architekturmuster, nicht aus dem GoF-Buch." },
        { id: "c", text: "Erzeugungsmuster", correct: false },
      ],
    },
    {
      kind: "mc",
      id: "mc-6",
      multiple: true,
      question: "Welche Patterns gehören zu den Erzeugungsmustern?",
      options: [
        { id: "a", text: "Singleton", correct: true },
        { id: "b", text: "Factory Method", correct: true },
        { id: "c", text: "Observer", correct: false },
        { id: "d", text: "Builder", correct: true },
        { id: "e", text: "Decorator", correct: false },
      ],
    },
  ],
  examTips: [
    "Bei «Welches Pattern?»-Fragen: 1-Satz-Definition jedes Patterns auswendig haben.",
    "Singleton + Factory + Observer + Strategy decken 80 % der IHK-Aufgaben ab.",
    "MVC ist Pflicht: «entkoppelt Daten, Darstellung und Steuerung» – Standardantwort.",
    "GoF-Kategorien (Erzeugung / Struktur / Verhalten) sicher zuordnen können.",
    "Antipatterns wie Spaghetti-Code als Negativbeispiel nennen können.",
  ],
  related: ["architektur-patterns", "oo-grundprinzipien", "klassendiagramm", "klassenbeziehungen"],
  resources: [
    {
      kind: "video",
      title: "Design Pattern für Fachinformatiker (Singleton, Observer, Factory, MVC) – IHK AP2 AE",
      url: "https://www.youtube.com/watch?v=H3NVSna8pk0",
      note: "Speziell auf die AP2-Prüfung zugeschnitten – die 4 Pflicht-Patterns.",
    },
    {
      kind: "video",
      title: "Teil 1 – OOP (Objekt Orientiert Programmierung) für Fachinformatiker – IHK AP2 AE",
      url: "https://www.youtube.com/watch?v=dedQltZhR1Q",
      note: "OO-Grundlagen vom selben Kanal als Vorbereitung auf Design Patterns.",
    },
    {
      kind: "page",
      title: "torsten-horn.de – Software-Patterns (kompakt mit Java-Beispielen)",
      url: "https://www.torsten-horn.de/techdocs/sw-patterns.htm",
      source: "torsten-horn.de",
      note: "Klassische deutsche Patterns-Referenz, ideal als Nachschlagewerk.",
    },
  ],
};
