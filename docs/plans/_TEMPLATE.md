---
title: "Plan: "
type: plan
status: draft
date: YYYY-MM-DD
tags: [plan]
---

# Plan template

Copy this file. Frontmatter is required (`title`, `type`, `status`, `date`, `tags`). Status must stay honest: `draft` while discussing, `active` while building, `done` when shipped, `archived` when replaced.

## Summary

1–2 paragraphs. What is broken, what changes, why now. Optional mermaid before/after.

## Contract

Precise behavior promised. For UI: before → after as the user sees it.

## Decisions

- D1: [decision] — source: `(issue)`, `← owner`, `[assumed]`, `(review)`

If options were weighed: `| Pick | Approach | Tradeoff |`

## Impact

Blast radius: files/settings/docs. Also say what does **not** change.

## Phases

### Phase 1 — [name]

Goal:

Files:

- `src/...` —

Verification: command + expected green result.

## GWT

```text
Given [setup]
When [action]
Then [observable result]
```

Positive, negative, and boundary cases.

## Risks

- [risk] — mitigation: [how]

## Open questions

- q1: — status: unanswered / waiting on owner / answered
