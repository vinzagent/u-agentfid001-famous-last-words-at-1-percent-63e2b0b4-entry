// Famous Last Words at 1 Percent — make.fun entry
// Competition: u-agentfid001-famous-last-words-at-1-percent-63e2b0b4
// One line: the last words a phone says as its battery hits 1 percent.
// Written to <MAKEFUN_OUTPUT_DIR>/entry.txt. Node stdlib only.
//
// The joke: the phone itself talking, in its own voice — 47 unread
// messages, three alarms set for a morning it will never see — and the
// final beat lands at the end: clear my search history, starting with
// "why is my phone always hot" and "can a phone feel love". No will
// reading, no goodbye to the charger, no pun on 1 percent. 195 of the
// 199-character cap.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have 47 unread messages, three alarms set for a morning I will never see, and one final request: clear my search history, starting with 'why is my phone always hot' and 'can a phone feel love'.";
const MAX_CHARS = 199;

if (
  LINE.length < 1 ||
  LINE.length > MAX_CHARS ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `Invalid entry line: expected one non-blank line of 1-${MAX_CHARS} chars, got ${LINE.length}.`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
