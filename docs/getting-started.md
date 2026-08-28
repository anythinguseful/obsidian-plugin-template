---
title: Getting started
type: guide
status: active
date: 2026-08-27
tags: [guide, onboarding]
---

# Getting started

This repository is a starter for an [Obsidian](https://obsidian.md) **community plugin**.

You do **not** need to write code to *use* it with an AI agent. You **do** need a computer where Node.js can run, and an Obsidian vault.

Pick one track. Both tracks share the same commands at the end.

| I am… | Read |
| --- | --- |
| Not a programmer. I will describe features in plain language. | [Track A](#track-a-i-do-not-write-code) |
| Comfortable with a terminal and TypeScript. | [Track B](#track-b-i-write-code) |

Repo docs stay in **English**. You may talk to the agent in any language.

## What you will have after setup

- A named plugin (not “My Plugin”).
- Three files Obsidian loads: `main.js`, `manifest.json`, `styles.css`.
- A side panel, a ribbon icon, and a Settings tab with a **build stamp** (proof the new build loaded).

## Before either track

1. Install [Obsidian](https://obsidian.md/download). Create or open a vault.
2. Settings → **Community plugins** → turn **Restricted mode** **off**.
3. Install [Node.js 20 or newer](https://nodejs.org/) (LTS). Includes `npm`.
4. Open a terminal in the folder that contains this `README.md`.

Check Node:

```bash
node -v
npm -v
```

You want `v20` or higher.

---

## Track A — I do not write code

**Your job:** decide the plugin name and what it should do. Paste errors back to the agent.

**The agent’s job:** edit TypeScript, run checks, install into the vault.

Tell the agent (example):

> Rename this plugin to id `garden-notes`, name `Garden Notes`, CSS prefix `gn`. Author is my name. Then install it into my vault at `…` and tell me how to turn it on.

You still watch these three commands (the agent may run them):

```bash
npm install
npm run init -- --id garden-notes --name "Garden Notes" --prefix gn
npm run verify
```

If you omit the flags, `npm run init` **asks** for id, name, and prefix.

Then install into the vault (replace the path):

```bash
npm run build
npm run install-vault -- --vault "/full/path/to/YourVault"
```

On Windows the vault path often looks like `C:\Users\you\Documents\YourVault`.

### How to talk to the agent later

- Say the outcome: “When I click the ribbon, open a list of today’s notes.”
- Do not say “add a React context.” You do not need that vocabulary.
- If something fails, paste the **full terminal text**. Do not paraphrase.

You can ignore folders named `agents/`, `src/`, and `scripts/` except when the agent asks you to copy an error.

---

## Track B — I write code

```bash
npm install
npm run init -- --id my-notes --name "My Notes" --prefix mn
```

Fill `author` and `description` in `manifest.json`. Change real settings in `src/settings.ts`.

```bash
npm run verify
npm run dev
```

`dev` writes `main.js` and rebuilds on save. Do not commit `main.js`.

Process for agents and PRs: [working agreement](working-agreement.md), then `AGENTS.md` at the repo root.

---

## Turn the plugin on in Obsidian

1. `npm run install-vault -- --vault "/full/path/to/YourVault"`  
   or copy `main.js`, `manifest.json`, and `styles.css` into:

   `YourVault/.obsidian/plugins/<plugin-id>/`

   `.obsidian` is often **hidden**. Show hidden files if you copy by hand.
2. Obsidian → Settings → Community plugins → **Reload** (or restart Obsidian).
3. Enable the plugin in the list.
4. Open Settings for the plugin. Confirm the **build stamp** matches the terminal. Obsidian caches old `main.js`; a new stamp means the new build loaded.
5. Click the puzzle ribbon or run the command **Open side panel**.

---

## Words used in this repo

| Word | Meaning |
| --- | --- |
| Vault | The folder of notes Obsidian opened |
| Plugin id | Folder name, kebab-case: `garden-notes` |
| Prefix | Short CSS stem, 1–8 letters: `gn` |
| `npm run verify` | The “is it healthy?” check. Do not skip it |
| Build stamp | Date-like string in Settings and the developer console |
| Agent | Arena (or similar) that edits the repo for you |
| Handoff | Note the agent writes before a pull request; not required to *run* the plugin |

---

## If it does not work

| What you see | What to try |
| --- | --- |
| `command not found: npm` | Install Node.js LTS; open a **new** terminal |
| `init` says kebab-case | Id only `a-z`, `0-9`, and hyphens: `my-notes` |
| Plugin list is empty / greyed out | Restricted mode is still on |
| Folder `.obsidian` missing | Create it by opening the folder as a vault once |
| Plugin enabled but UI is old | Reload plugin; check build stamp; run `npm run build` then `install-vault` again |
| `install-vault` missing `main.js` | Run `npm run build` first |
| Agent talks about `.arena/` | Ignore it. This repo does not use that folder |

Developer console in Obsidian: `Ctrl+Shift+I` (Windows/Linux) or `Cmd+Option+I` (macOS). Look for a line like `[Garden Notes] build …`.

---

## What to edit vs leave alone

| Edit (or ask the agent to) | Leave alone unless you know why |
| --- | --- |
| `manifest.json` name, author, description | `agents/skills/vendor/` |
| `src/settings.ts` fields | `node_modules/` |
| `styles.css` under your prefix | generated `main.js` (do not commit) |
| `docs/plans/` for a new feature | `.github/` workflows unless CI is broken |

Next: [Documentation hub](README.md) · [Working agreement](working-agreement.md)
