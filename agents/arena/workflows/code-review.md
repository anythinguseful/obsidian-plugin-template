# Arena adapter: code-review

Use `agents/skills/vendor/mattpocock/code-review/SKILL.md` for the two-axis
review (Standards vs Spec).

## Overrides

1. Do **not** run `/setup-matt-pocock-skills`. There is no
   `docs/agents/issue-tracker.md` in this repo.
2. Spec source, in order: a path the user passed; a note under `docs/plans/`;
   the current handoff; then ask.
3. Standards source: `CONTRIBUTING.md`, `AGENTS.md`, `docs/working-agreement.md`,
   `agents/skills/internal/plugin-ui/SKILL.md`. Repo rules beat the smell baseline.
4. Do **not** spawn parallel subagents. Run Standards then Spec in this session
   (or the reverse); keep the reports under separate headings.
5. Run this **after** `npm run verify` and **after** the handoff file is current,
   **before** `gh pr create`. See `pr.md`.
6. Gate is `npm run verify`, not `npm test` alone.
