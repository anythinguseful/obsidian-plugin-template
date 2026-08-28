# Obsidian plugin template

Starter for a new [Obsidian](https://obsidian.md) community plugin.

**You can use this if you write code, or if you do not.**  
If you do not write code, an AI agent (for example Arena) edits the project. You still install Node.js once and turn the plugin on in Obsidian.

Full walkthrough: [docs/getting-started.md](docs/getting-started.md).

## Two tracks

### I do not write code

1. Install Obsidian and [Node.js LTS](https://nodejs.org/) (v20+).
2. Open this folder in Arena (or another coding agent).
3. Say: plugin **id**, **display name**, **CSS prefix**, and the **full path to your vault**.
4. The agent runs `npm install`, `npm run init`, `npm run verify`, then `npm run install-vault`.
5. In Obsidian: Community plugins → Restricted mode **off** → enable the plugin.
6. Check the **build stamp** in plugin Settings so you know the new build loaded.

Paste errors back to the agent. Do not edit `src/` yourself.

### I write code

```bash
npm install
npm run init -- --id my-notes --name "My Notes" --prefix mn
npm run verify
npm run dev
```

`init` with no flags asks for id, name, and prefix.

```bash
npm run build
npm run install-vault -- --vault "/full/path/to/YourVault"
```

Do not commit `main.js`. Details: [CONTRIBUTING.md](CONTRIBUTING.md).

## What is included

- TypeScript + esbuild (watch / production)
- Community plugin `manifest.json` + `versions.json`
- Settings normalized on load; `saveSettingsSafe()` for UI
- ItemView panel + ribbon + command
- Build stamp (Obsidian caches `require()`)
- `npm run verify` (types, build, tests, skills, docs)
- Agent bootstrap: `AGENTS.md` + `agents/skills/` + Arena handoff
- Docs hub: [docs/README.md](docs/README.md)

## License

MIT
