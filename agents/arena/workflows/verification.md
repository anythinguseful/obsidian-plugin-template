# Arena adapter: verification-before-completion

Use `agents/skills/vendor/obra/verification-before-completion/SKILL.md`.

The command that proves “done” for this repo is:

```bash
npm run verify
```

Do not claim complete, fixed, or ready-for-PR until that command has been run
**in this turn** and the output was read. Subsets (`npm test`) are not enough
to claim the full gate.
