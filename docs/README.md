---
title: Documentation
type: index
status: active
date: 2026-08-27
tags: [documentation, index]
---

# Documentation

Notes are meant to read on **GitHub** and in **Obsidian**. Internal links are relative Markdown (not wikilinks).

Start: [Getting started](getting-started.md) (coders and non-coders) · [Working agreement](working-agreement.md) · [Backlog](backlog.md) · [Reference sources](reference/sources.md)

## Status field

| Status | Meaning |
| --- | --- |
| `draft` | In progress; claims may be incomplete |
| `active` | Living document |
| `done` | Planned/studied work shipped; kept as a record |
| `archived` | Superseded; see [archive](archive/README.md) |

## Where a new note goes

| Kind | Folder | Start from |
| --- | --- | --- |
| First-day setup (both audiences) | [getting-started.md](getting-started.md) | |
| Feature / refactor plan | [plans/](plans/_TEMPLATE.md) | `_TEMPLATE.md` |
| Upstream / parity research | [studies/](studies/_TEMPLATE.md) | `_TEMPLATE.md` |
| Audit of this plugin | [audits/](audits/_TEMPLATE.md) | `_TEMPLATE.md` |
| Living contract | [reference/](reference/_TEMPLATE.md) | `_TEMPLATE.md` or [sources.md](reference/sources.md) |
| Deferred idea | [backlog.md](backlog.md) | copy the entry block |
| Superseded note | [archive/](archive/README.md) | move, do not rewrite |
| Static mockup | [previews/](previews/README.md) | |
| Raw logs / checksums | [evidence](../evidence/README.md) | |

## Required frontmatter

Every `docs/**/*.md` note: `title`, `type`, `status`, `date`, `tags`.
