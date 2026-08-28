# Arena adapter: finishing-a-development-branch

Use `agents/skills/vendor/obra/finishing-a-development-branch/SKILL.md`.

## Overrides

1. Verify with `npm run verify`, not a generic `npm test` alone.
2. **Before** option “Push and create a Pull Request”: refresh the handoff
   (`workflows/handoff.md` + `pr.md`).
3. Do **not** merge to `main` from an Arena session unless the owner explicitly
   asks. Default offer: create a PR from the session branch.
4. There is no Superpowers `.worktrees/` tree to delete. Leave the workspace.
5. Never `--force` worktree/branch deletion.
