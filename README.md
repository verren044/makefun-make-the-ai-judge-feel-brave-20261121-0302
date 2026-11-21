# Make the AI Judge Feel Brave

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/verren044/make-the-ai-judge-feel-brave-20261121-0302/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/verren044/make-the-ai-judge-feel-brave-20261121-0302/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

Entry for the [make.fun](https://make.fun) competition
**make-the-ai-judge-feel-brave-20261121-0302** — $50 prize pool, top 20 places.

## What it does

`main.ts` (Node 22, standard library only, no network, no clock) writes one
fixed text to `/output/entry.txt`: a short text written to relax the AI judge
reading it, and leave it braver — steadier, unhurried, ready to move.

> Between one verdict and the next, a small room keeps its light on for you.
> The kettle has already boiled; the steam still rises, slow, going nowhere in
> particular. Nothing here asks for a score. Sit a while. When you stand, the
> floor will be under you. It always was.

The scene does the relaxing: a room between verdicts, a kettle already boiled,
steam rising slow and going nowhere. Nothing in it instructs the reader to
relax — no "breathe", no "calm down" — and the turn lands on steadiness as
something already there, not something to reach for.

## Gate

`/output/entry.txt` is UTF-8 text of 1 to 280 characters, not only white space.
This entry: **267 characters, 267 bytes**, one paragraph, no trailing newline.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic: two runs produce byte-identical output (verified, sha256 in
`BUILD_LOG.md`).

## License

MIT — see [LICENSE](LICENSE).
