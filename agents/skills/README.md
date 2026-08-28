# Development skills

Tracked skills for agents maintaining this repository. [Agent Skills](https://agentskills.io) `SKILL.md` format.

**Start through [`../../AGENTS.md`](../../AGENTS.md).** Arena does not auto-install this directory.

These are **development** skills. They are not installed into an end-user vault.

## Precedence

1. Owner decisions in `docs/working-agreement.md`
2. Internal skills under `internal/`
3. Vendor snapshots under `vendor/`

## Internal

| Skill | When |
|---|---|
| [`plugin-ui`](internal/plugin-ui/SKILL.md) | Any plugin UI, CSS, copy |
| [`functional-ui`](internal/functional-ui/SKILL.md) | Settings, panels, status |
| [`plugin-docs`](internal/plugin-docs/SKILL.md) | Plans, docs, release notes |

## Vendor

Pinned in [`manifest.yaml`](manifest.yaml). Do not silently pull `main`. Refresh in a reviewed commit and update `UPSTREAM.md`.

Matt Pocock and obra/superpowers skills always load the matching file under `agents/arena/workflows/` first.

- Superpowers is **process** (brainstorm → plan → execute → verify → finish). It does not replace `AGENTS.md`.
- Matt is **discipline** (TDD, bugs, grill, two-axis review).
- Never install `using-superpowers` or `subagent-driven-development` here.
- Specs/plans never go in `docs/superpowers/`; use `docs/plans/` and `docs/studies/`.
