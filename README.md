# AP2 Lernhub

Prüfungsorientierte Lernwebsite für die **schriftliche Abschlussprüfung Teil 2 (AP2)** im Ausbildungsberuf Fachinformatiker:in für Anwendungsentwicklung.

Die Inhalte sind priorisiert nach **Häufigkeit und Punktausbeute** der letzten 12 IHK-Prüfungen sowie dem aktualisierten Prüfungskatalog (Oktober 2024, gültig ab Sommer 2025).

## Features

- **72 Themen** aus dem kompletten AP2-Katalog, eingeteilt in 12 Kategorien
- **Prioritäts-Tags** (Essentiell / Sehr hoch / Hoch / Mittel / Niedrig) basierend auf Prüfungsstatistik
- **37 ausgearbeitete Lektionen** mit Beispielen und Übungen
- **Interaktive Übungen**:
  - Multiple Choice (Einzel- und Mehrfachauswahl)
  - SQL-Übungsaufgaben mit Musterlösung
  - Pseudocode-Schreibtischtest mit Output-Prüfung
- **Fokus-Modus**: Nur die Top-Themen für knappe Lernzeit
- **Statisch generiert** (101 Pages prerendered), schnell und günstig zu hosten

## Tech-Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Dev-Server läuft auf <http://localhost:3000>.

## Produktions-Build

```bash
npm run build
npm run start
```

## Deployment

Für Vercel-Deployment: Repository bei [vercel.com](https://vercel.com) importieren, Framework-Erkennung übernimmt den Rest (Next.js wird automatisch erkannt, keine zusätzliche Konfiguration nötig).

## Projektstruktur

```
app/                    Next.js App-Router (Layout, Home, /thema/[slug], /kategorie/[id], /fokus, /pruefung)
components/             Wiederverwendbare UI-Komponenten (PriorityBadge, Callout, Quiz-Komponenten)
content/lessons/        Einzelne Lektionsinhalte (jeweils mit Übungen + Prüfungstipps)
lib/                    Datenmodell: topics.ts, categories.ts, priority.ts
```

## Inhaltsquellen

Die Priorisierung basiert auf:
- Auswertung der letzten 12 schriftlichen AP2-Prüfungen (Häufigkeit + kumulierte Punkte)
- IHK-Prüfungskatalog für Fachinformatiker Anwendungsentwicklung (2. überarbeitete Auflage, Oktober 2024)
- Themenanalysen aus [it-berufe-podcast.de](https://it-berufe-podcast.de) von Stefan Macke
