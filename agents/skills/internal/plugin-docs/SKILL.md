---
name: plugin-docs
description: Documentation routing for this plugin repo. Use before creating, moving, or releasing docs, plans, or release notes.
---

# Documentation contract

Use after `doc-coauthoring` for substantial drafts and after `writing-guidelines` for prose review.

## Route by purpose

| Artifact | Location |
|---|---|
| First-day setup (coder and non-coder) | `docs/getting-started.md` |
| Feature/refactor plan | `docs/plans/` from `_TEMPLATE.md` |
| Upstream/source research | `docs/studies/` from `_TEMPLATE.md` |
| Audit of this plugin | `docs/audits/` from `_TEMPLATE.md` |
| Living contract | `docs/reference/` from `_TEMPLATE.md` |
| Deferred idea | `docs/backlog.md` |
| Superseded note | `docs/archive/` — mark `archived`, do not rewrite |
| Static mockup | `docs/previews/` |
| Raw logs, matrices, checksums | `evidence/` |
| Process / lessons | `docs/working-agreement.md` |
| Hub | `docs/README.md` |

## Format

1. Every `docs/**/*.md` note has frontmatter: `title`, `type`, `status`, `date`, `tags`.
2. Internal links are relative Markdown links, never wikilinks or machine paths.
3. Update the hub when adding a material note.
4. User-facing behavior changes land in the same commit as the code.
5. Do not create `.arena/` — Arena snapshots skip it.

## Workflow

1. Read `docs/README.md` and `docs/working-agreement.md`.
2. Pick the route.
3. Link proof relatively.
4. Run `npm run check:docs` and `npm run verify` before calling the work done.
