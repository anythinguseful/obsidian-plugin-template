# Arena adapter: executing-plans

Use `agents/skills/vendor/obra/executing-plans/SKILL.md`.

## Overrides

1. Work in the current workspace. Do not create git worktrees.
2. Ignore the note to prefer `subagent-driven-development`. Stay in this session.
3. After all tasks: `npm run verify`, then `finishing-a-development-branch`
   (with its Arena adapter), not a local merge to `main`.
4. Stop on the first failing gate; do not skip verifications.
