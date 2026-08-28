# Arena adapter: requesting-code-review

Use `agents/skills/vendor/obra/requesting-code-review/SKILL.md` only for
**when** to review.

## Overrides

1. Do **not** dispatch a reviewer subagent.
2. Run the two-axis review in this session via Matt Pocock `code-review`
   (`workflows/code-review.md`). That is the review engine.
3. `code-reviewer.md` is a prompt you may follow yourself, not a subagent job.
4. Place this step after `npm run verify` and before the handoff/PR close-out.
