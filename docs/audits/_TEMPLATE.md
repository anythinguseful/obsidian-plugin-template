---
title: "Audit: "
type: audit
status: draft
date: YYYY-MM-DD
tags: [audit]
---

# Audit template

Copy this file for an audit of **this** plugin (security, docs drift, API compat, UI). Baseline first, then findings. Raw logs go in `evidence/`; this note stays readable.

## Baseline

- Commit / version:
- Commands run:
- What "healthy" means for this audit:

## Method

How the surface was swept (grep, AST, harness, manual). If a scanner produced a count, say it is a **hypothesis** until each hit is read at its definition site.

## Findings

| ID | Severity | Surface | Evidence | Status |
| --- | --- | --- | --- | --- |
| F1 | high / med / low / info | | path + proof | open / fixed / wontfix |

Each finding: expected vs actual, why it matters, proposed fix. Do not mix "scanner said 10" with "2 were real".

## Limits

What the audit did not cover.

## Outcome

- Open:
- Fixed in this pass:
- Follow-up plan / backlog entries:
