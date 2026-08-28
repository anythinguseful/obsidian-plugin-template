# Pull request workflow

## Before `gh pr create`

1. Work is on a session branch, never `main`.
2. Docs and Lessons updated in the same commits as the behavior change.
3. `npm run verify` is green.
4. Two-axis review per [`code-review.md`](code-review.md) when the diff is more than a typo (`requesting-code-review.md` says when; Matt `code-review` is how).
5. Handoff refreshed per [`handoff.md`](handoff.md)
   (`agents/arena/handoffs/YYYY-MM-DD--short-topic.md`).
6. Then open the PR (`finishing-a-development-branch.md`: prefer PR, do not merge `main` unless the owner asks).

If step 4 is skipped, stop and write the handoff. Do not open the PR first and
“fill the handoff later”.

## PR body

- User-visible change (concrete scenario).
- Verify result.
- Path to the workspace handoff (for the next Arena session; not in git).
- Threat-model / settings impact if any.

## After opening

Keep the same handoff file updated when the PR changes. Refresh it again before
marking the PR ready or asking for review.
