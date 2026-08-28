# Agent bootstrap

This is the entry point for any coding agent working on this repository,
including Arena Agent. Read it before inspecting or changing code.

## Start every session

1. Read [`docs/working-agreement.md`](docs/working-agreement.md).
2. Read [`agents/skills/README.md`](agents/skills/README.md), then load every skill required by the routing table below before acting.
3. Inspect the current workspace. Do not assume generated files, dependencies, Git metadata, or a prior session's local state exists.
4. Before code changes, restore dependencies when needed with `npm ci`. Before declaring completion, run `npm run verify`.
5. Before opening a pull request, refresh the session handoff (`agents/arena/workflows/handoff.md` then `agents/arena/workflows/pr.md`). Do not create the PR first.

## Skill routing

| When working on… | Load before acting |
| --- | --- |
| Any UI, CSS, visual state, or interface copy | `agents/skills/internal/plugin-ui/SKILL.md` **first**; then `frontend-design`, `functional-ui`, and `web-design-guidelines` as applicable |
| Visual direction, typography, or layout | `agents/skills/vendor/anthropics/frontend-design/SKILL.md` |
| Settings, side panel, or other functional surface | `agents/skills/internal/functional-ui/SKILL.md` |
| UI accessibility or UX review | `agents/skills/vendor/vercel/web-design-guidelines/SKILL.md` |
| User-facing behavior or documentation | `agents/skills/internal/plugin-docs/SKILL.md`; `docs/working-agreement.md`; first-day setup stays in `docs/getting-started.md` |
| Create/evaluate a skill or agent workflow | `agents/skills/vendor/anthropics/skill-creator/SKILL.md`; `agents/skills/manifest.yaml` |
| Write a substantial plan, spec, or decision document | `agents/skills/vendor/anthropics/doc-coauthoring/SKILL.md`; `docs/plans/_TEMPLATE.md` |
| Any new feature or behavior change (before code) | `agents/skills/vendor/obra/brainstorming/SKILL.md`; `agents/arena/workflows/brainstorming.md` |
| Stress-test a design before coding | `agents/skills/vendor/mattpocock/grilling/SKILL.md`; `agents/arena/workflows/grilling.md` |
| Write an implementation plan | `agents/skills/vendor/obra/writing-plans/SKILL.md`; `agents/arena/workflows/writing-plans.md` |
| Execute a written plan | `agents/skills/vendor/obra/executing-plans/SKILL.md`; `agents/arena/workflows/executing-plans.md` |
| Claim work is done / ready | `agents/skills/vendor/obra/verification-before-completion/SKILL.md`; `agents/arena/workflows/verification.md` |
| Primary-source research | `agents/skills/vendor/mattpocock/research/SKILL.md`; `agents/arena/workflows/research.md` |
| Module seams / deep vs shallow | `agents/skills/vendor/mattpocock/codebase-design/SKILL.md`; `agents/arena/workflows/codebase-design.md` |
| Continue work in a later Arena session | `agents/skills/vendor/mattpocock/handoff/SKILL.md`; `agents/arena/workflows/handoff.md` |
| Review before a pull request | `agents/skills/vendor/obra/requesting-code-review/SKILL.md` (when); `agents/skills/vendor/mattpocock/code-review/SKILL.md` (how); `agents/arena/workflows/code-review.md` |
| Address review comments | `agents/skills/vendor/obra/receiving-code-review/SKILL.md`; `agents/arena/workflows/receiving-code-review.md` |
| Finish a branch | `agents/skills/vendor/obra/finishing-a-development-branch/SKILL.md`; `agents/arena/workflows/finishing-a-development-branch.md` |
| Open or update a pull request | `agents/arena/workflows/pr.md` **after** the handoff file is current |
| Merge conflicts | `agents/skills/vendor/mattpocock/resolving-merge-conflicts/SKILL.md`; `agents/arena/workflows/merge-conflicts.md` |
| Diagnose a bug or performance regression | `agents/skills/vendor/mattpocock/diagnosing-bugs/SKILL.md` |
| Build a fix test-first | `agents/skills/vendor/mattpocock/tdd/SKILL.md`; `CONTRIBUTING.md` |

`plugin-ui` is the binding UI contract and wins if it conflicts with a more generic design skill.

## Repository conventions

- `docs/` holds curated project documentation.
- Use relative Markdown links in docs, never machine-specific workspace paths.
- Do not create `.arena/`: Arena excludes that directory from workspace snapshots, so it cannot be a durable project contract.
- Do not commit generated `main.js` or release ZIPs. See `CONTRIBUTING.md`.
- A repaired bug needs a regression guard and a Lessons-log entry when it establishes a reusable project rule.
- Development skills live under `agents/skills/`. A leftover root `skills/` folder is a regression.

## Arena-specific workflow notes

[`agents/arena/README.md`](agents/arena/README.md) explains the durable Arena workflow. Those files are project conventions, not an Arena auto-load format: this `AGENTS.md` is the discovery point.
