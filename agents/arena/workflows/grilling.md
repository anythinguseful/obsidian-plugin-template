# Arena adapter: grilling / grill-me

Use the pinned vendor skills:

- `agents/skills/vendor/mattpocock/grill-me/SKILL.md` (user trigger)
- `agents/skills/vendor/mattpocock/grilling/SKILL.md` (the interview)

## Overrides

1. **`ask_user` is the interview UI.** Do not dump a markdown questionnaire into chat and continue. One `ask_user` card = one independent decision. The vendor “whole frontier in one round” format loses to this repo’s one-question rule.
2. Look up facts yourself (files, grep, fetch). Do not spawn a background subagent; Arena does not guarantee one.
3. Map `CONTEXT.md` / ADRs to `AGENTS.md`, `docs/working-agreement.md`, and `docs/plans/` or `docs/reference/`.
4. When the frontier is empty, stop and wait for the user to confirm shared understanding **before** writing code.
5. After a design is confirmed, write or update a plan from `docs/plans/_TEMPLATE.md` if the work is more than a small patch.
