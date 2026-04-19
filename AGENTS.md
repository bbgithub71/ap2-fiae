<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Branching-Policy

- `master` — Produktionsstand (das, was live auf Vercel deployed wird). Darauf nur Merges aus `develop` oder Hotfix-Merges aus `maintenance`, **niemals** direkt committen.
- `develop` — **alle neuen Features.** Neue Arbeit wird hier vorgenommen und gepusht. Merge nach `master`, sobald ein Feature stabil und getestet ist.
- `maintenance` — **alle Bugfixes.** Korrekturen an Produktionscode werden hier entwickelt, in `master` gemerged und anschließend in `develop` zurück-gemerged.

**Regel für den Agenten**:
- Neues Feature → `git checkout develop`, dort committen und pushen.
- Bugfix an Live-Code → `git checkout maintenance`, dort committen und pushen.
- Niemals ungefragt auf `master` committen oder pushen.
