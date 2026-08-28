# Arena adapter: brainstorming

Use `agents/skills/vendor/obra/brainstorming/SKILL.md`.

## Overrides

1. Clarifying questions use Arena `ask_user`, one independent question per card.
2. Do **not** start the visual companion server (`scripts/server.cjs`). Text and
   `ask_user` only.
3. Architectural specs go under `docs/plans/` or `docs/studies/`, never
   `docs/superpowers/specs/`.
4. Stress-testing a design still loads Matt `grilling` (`workflows/grilling.md`).
   Brainstorming classifies and gets approval; grilling is optional after that.
5. Next skill after an architectural spec is `writing-plans`, then TDD. Do not
   skip `plugin-ui` for UI work.
6. `AGENTS.md` remains the discovery point. This skill does not run before
   reading `AGENTS.md`.
