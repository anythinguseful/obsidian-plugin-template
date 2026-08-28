# Arena adapter: writing-plans

Use `agents/skills/vendor/obra/writing-plans/SKILL.md`.

## Overrides

1. Save plans from `docs/plans/_TEMPLATE.md` under `docs/plans/`, never
   `docs/superpowers/plans/`. Keep required frontmatter.
2. Do not require `using-git-worktrees` or `subagent-driven-development`.
3. Execution choice: **inline** via `executing-plans` in this session. Do not
   offer Superpowers subagent-driven development as the default.
4. Verification commands in tasks must be `npm run verify` (or a named subset
   such as `npm test`) that actually exists in `package.json`.
5. Header “REQUIRED SUB-SKILL: subagent-driven-development” is ignored here.
