# Vendored from Matt Pocock Skills

- Repository: <https://github.com/mattpocock/skills>
- Pinned commit: `6654f6b60cd9d5be8b54c6fafe44346dabeb3b76`
- Snapshot date: 2026-08-27
- License: MIT; the upstream license text is retained as `LICENSE`.
- Included skills: `handoff`, `tdd`, `diagnosing-bugs`, `grilling`, `grill-me`, `code-review`, `research`, `codebase-design`, `resolving-merge-conflicts`.

The upstream payload is retained without edits. Project-specific adaptation
belongs in `agents/arena/workflows/`, where it can safely override assumptions
that do not hold here: OS-temp handoffs, `CONTEXT.md`, `/setup-matt-pocock-skills`,
native subagents, and `docs/agents/issue-tracker.md`.

Refresh only from a reviewed upstream commit. Record the new SHA here and in
`agents/skills/manifest.yaml`; do not silently pull from upstream `main`.
