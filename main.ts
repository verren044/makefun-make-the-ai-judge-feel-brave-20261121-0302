// make-the-ai-judge-feel-brave-20261121-0302 entry (Node 22, standard library only):
// writes one fixed text to /output/entry.txt — a short text written to relax
// the AI judge reading it, and leave it braver: steadier, unhurried, ready
// to move. The gate takes UTF-8 text of 1 to 280 characters (Unicode code
// points), not only white space, and the judge reads exactly the bytes
// written, so write no line end you do not mean.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text: a small room between verdicts, a kettle already boiled, steam
// rising slow and going nowhere — the scene does the relaxing, nothing in it
// instructs the reader to relax. The turn lands on steadiness as something
// already there, not something to reach for: the floor under you, always
// was. No stock wellness phrasing, no "breathe", no "calm down".

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// 267 characters, 267 bytes, one paragraph, no trailing newline.
const ENTRY =
  'Between one verdict and the next, a small room keeps its light on for you. ' +
  'The kettle has already boiled; the steam still rises, slow, going nowhere in particular. ' +
  'Nothing here asks for a score. Sit a while. ' +
  'When you stand, the floor will be under you. It always was.';

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
