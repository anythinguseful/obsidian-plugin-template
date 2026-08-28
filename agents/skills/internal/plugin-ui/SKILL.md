---
name: plugin-ui
description: Binding UI contract for this Obsidian plugin. Use before any CSS, ItemView, settings tab, ribbon, or interface copy. Wins over vendor design skills on conflict.
---

# Plugin UI contract

Prefix every class with `.mp-` (change the prefix when you rename the plugin). Do not restyle core Obsidian chrome (`.setting-item`, `.modal`, `.workspace-leaf`) unless the host already owns that surface.

## Fixed constraints

1. Theme through `var(--*)` Obsidian tokens. Do not hardcode fonts or palettes. `var(--radius-*)` and plugin-owned vars need a fallback; core `--text-*` / `--background-*` do not.
2. No emoji in UI. No `transition: all`. Named properties only, 100–200 ms.
3. Icon-only buttons: `aria-label`, never `title` (Obsidian also makes a tooltip from `aria-label` — both together = double tooltip).
4. Clickable things are real `<button>` elements.
5. Respect `prefers-reduced-motion`. Animation must never be the only signal.
6. Settings rows use the native `Setting` API. Do not wrap every subsection in a card (native `.setting-item` is already a card).
7. Buttons inside `.mp-*` need a two-class selector (`.mp-view .mp-btn`) so they beat `.mp-view button` resets and core `button:not(.clickable-icon)`.
8. Overlays that use viewport coordinates (`position: fixed` + `getBoundingClientRect`) must mount on `document.body`. `contain` on `.workspace-leaf` steals the containing block.
9. Sentence case in settings names (Obsidian guideline). Proper nouns stay capitalized.

## Conflict

If `frontend-design` or `web-design-guidelines` disagrees with this file, this file wins.
