# Contributing

If you do not write code, stop here and follow [docs/getting-started.md](docs/getting-started.md) Track A.

## Requirements

- Node.js 20 or newer (CI uses 22)
- npm
- `zip` only if you run `npm run package`

## Setup

```bash
npm ci
node scripts/init.mjs --id my-notes --name "My Notes" --prefix mn
```

## Validation

```bash
npm run verify
```

## Install into a vault

1. `npm run build`
2. Copy `main.js`, `manifest.json`, and `styles.css` to `<vault>/.obsidian/plugins/<manifest.id>/`
3. Enable the plugin. Confirm the build stamp in the developer console.

Do not commit `main.js`. Install zip: `npm run package` writes `release/<id>-<version>.zip`.

## Pull requests

Work on a branch. Close-out order is docs → `npm run verify` → refresh
`agents/arena/handoffs/YYYY-MM-DD--topic.md` → then open the PR. See
`agents/arena/workflows/pr.md`. Handoff files are gitignored; they must still
exist in the workspace before the PR is created.
