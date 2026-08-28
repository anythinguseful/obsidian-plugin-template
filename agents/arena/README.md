# Arena workflow

Arena does not use a durable `.arena/` skill format. That directory is excluded from workspace snapshots.

Portable path:

1. Discover the repo through root `AGENTS.md`.
2. Route to tracked skills in `agents/skills/`.
3. `agents/skills/manifest.yaml` declares scope and source.
4. Workflow notes here cover handoff, TDD, and diagnosis.

`agents/skills/` is for **developing this plugin**. It is not a vault runtime skill library.

Handoffs go to `agents/arena/handoffs/` (gitignored except `.gitkeep` and `_TEMPLATE.md`).
Refresh the handoff **before** opening a pull request; see `workflows/pr.md`.
