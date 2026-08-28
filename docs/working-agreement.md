---
title: Working agreement
type: process
status: active
date: 2026-08-27
tags: [process]
---

# Working agreement

Binding process for coding agents on this repository.

Humans who do not write code: use [getting-started.md](getting-started.md). Do not treat this file as a tutorial.

## Communication

1. Concrete scenario first, jargon later.
2. Why before what.
3. Short sentences; one idea per line.
4. Before/after for anything visible on screen.

## Gate before "done"

```bash
npm run verify
```

Typecheck, production build, smoke tests, skill and docs gates. Do not report done on a green feeling.

Before a pull request: docs → `npm run verify` → refresh `agents/arena/handoffs/YYYY-MM-DD--topic.md` → then open the PR (`agents/arena/workflows/pr.md`). Do not open the PR with a missing or stale handoff.

## Lessons (starter set)

Copy new lessons here when a bug establishes a reusable rule.

1. **Docs ≠ source** — claims about a library require the raw source, not a docs page.
2. **Validate at I/O** — `JSON.parse` + `as T` is not validation. Normalize on load.
3. **UI callbacks drop promises** — use `saveSettingsSafe()` so a failed write shows a Notice.
4. **`revealLeaf` return type drifts** — feature-detect `.catch` before chaining.
5. **Pin Obsidian typings to minAppVersion** — `obsidian: ^1.5.x` floats to latest and lies about compile compatibility.
6. **Scope CSS** — Obsidian modals live on `document.body`; a selector under `.mp-settings` will not reach them.
7. **Negative string guards** — `!file.includes("Foo")` also matches comments. Pin a declaration pattern.
8. **Do not commit `main.js`** — Obsidian caches `require()`; the build stamp in Settings/console is how users prove they loaded the new bundle.
