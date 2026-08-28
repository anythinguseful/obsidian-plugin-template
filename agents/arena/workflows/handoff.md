# Arena Handoff Workflow

Use the pinned vendor skill `agents/skills/vendor/mattpocock/handoff/SKILL.md` for the
content contract, with these Arena-specific overrides.

## Persistent destination

Do **not** save handoff output to the OS temporary directory. Write it to:

```text
agents/arena/handoffs/YYYY-MM-DD--short-topic.md
```

Start from [`../handoffs/_TEMPLATE.md`](../handoffs/_TEMPLATE.md). The `*.md`
handoffs (except the template and `.gitkeep`) are ignored by Git but remain in
the Arena workspace snapshot. They are a session bridge, not product
documentation, and they will **not** appear in the GitHub pull request.

## When a handoff is required

Update or create the handoff **before** any of these:

1. Opening a pull request (`gh pr create` or the GitHub UI).
2. Marking a PR ready for review.
3. Ending a substantial session that another agent may continue.
4. Switching away from a branch that still has unfinished work.

Do this **after** documentation and `npm run verify`, **before** the PR exists.
A PR opened with a stale or missing handoff is incomplete even if CI is green.

Skip a handoff only when the change is already fully merged, verify is green,
and there is nothing for a future session to continue.

## Close-out order

1. User-facing docs and Lessons, in the same commit as the code.
2. `npm run verify`
3. Write or refresh `agents/arena/handoffs/YYYY-MM-DD--short-topic.md`
4. Then create or update the pull request.

## Required content

- Current goal and exact state (branch, verify result, PR number if any).
- What changed, verified facts, and failed/blocked work.
- Next smallest safe action.
- Exact paths to plans, audits, release artifacts, and evidence instead of
  duplicating their contents.
- Suggested skills selected from `agents/skills/manifest.yaml`.
- Commands already run and their result.
- Redact secrets, API keys, tokens, credentials, and personal data.

## Project overrides

- If the vendor skill mentions `CONTEXT.md`, use `AGENTS.md`,
  `docs/working-agreement.md`, and the relevant docs note instead.
- Do not assume native background subagents or a local web server exist.
- Do not commit handoff notes (they are gitignored). The requirement is that
  the file exists and is current in the workspace **before** the PR is opened.
