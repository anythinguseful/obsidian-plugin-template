# Arena adapter: codebase-design

Use `agents/skills/vendor/mattpocock/codebase-design/SKILL.md` plus
`DESIGN-IT-TWICE.md` and `DEEPENING.md` beside it.

## Overrides

1. There is no `CONTEXT.md`. Use `AGENTS.md` and `docs/reference/`.
2. Living module contracts go in `docs/reference/`, not a new top-level doc family.
3. UI/CSS still obey `plugin-ui`. This skill does not override the CSS prefix or token rules.
4. For an Obsidian plugin, prefer few deep modules (`settings` normalize, `ItemView`, plugin entry) over a large folder tree.
