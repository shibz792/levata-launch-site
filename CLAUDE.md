# Levata Deck

## Writing rules
- Never use em dashes (the U+2014 character or its HTML/JS escapes) anywhere: site copy, prospect data, code comments, commit messages or docs. Use a period, comma, colon or parentheses instead. En dashes in ranges (7–10) are fine.
- A pre-commit hook in `.githooks/` blocks em dashes. Enable it in a fresh clone with `git config core.hooksPath .githooks`.

## Structure
- `index.html` is the Levata Rapid sales deck (the whole site). Prospect data lives in `prospects/<slug>.js` and loads via `/?p=<slug>`.
- Portfolio entries: `data/portfolio.js`. Screenshots: `node tools/capture.mjs <slug> name=url ...`.
