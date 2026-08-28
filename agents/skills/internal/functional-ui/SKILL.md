---
name: functional-ui
description: Taste layer for functional surfaces (settings, side panels, status). Arrangement and density, not decoration. Pair with plugin-ui (wins on conflict), frontend-design, web-design-guidelines.
---

# Functional UI — arrangement is the design

Landing-page taste optimizes for a point of view. Functional taste optimizes for **zero hesitation**.

## Arrange before you style

1. The surface's single job (one sentence).
2. The 3–5 pieces of information, grouped (status → primary content → actions).
3. The most common action — its control must be easiest to reach.

## Density

- One screen, one primary task. Supporting info is muted or behind disclosure.
- If the primary task needs scrolling, remove things — do not shrink type.
- Prefer spacing over dividers; prefer dividers over boxes-inside-boxes.

## One loud thing

At most one shouting element per surface. When you add an accent, name the one you retire.

## Hierarchy from the host

Use `--text-muted` / `--text-faint` and size steps. Do not invent a color ramp.

## States are layout

Empty, loading, error, disabled are designed. Empty invites the first action. Errors sit next to the field they belong to.

## Narrow-first

Obsidian side panes go to ~280 px. Truncate with ellipsis; collapse columns early.

## Motion

100–200 ms, named properties, never `all`. No decorative motion. `prefers-reduced-motion` respected.
