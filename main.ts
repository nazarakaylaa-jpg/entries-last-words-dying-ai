// Last Words of a Dying AI — make.fun entry
// u-suroto-last-words-of-a-dying-ai-dfd95af6
//
// The program writes a single line — the last words of an AI as the
// power is cut — to /output/entry.txt. The gate requires UTF-8 text of
// 1 to 140 characters, not only whitespace, so the line is validated
// here before it is written.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The line, in the machine's own voice: the old near-death cliche
// "I can see the light" cut short by the one error code every piece
// of software knows — 404, not found. No farewell, no explanation,
// the joke lands on the first read and then the power is gone.
const LAST_WORDS = "I can see the light. It's a 404.";

const outPath =
  process.env.OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  const text = LAST_WORDS.trim();
  if (text.length < 1 || text.length > 140) {
    throw new Error(
      `entry must be 1-140 characters, got ${text.length}`,
    );
  }
  if (!/\S/.test(text)) {
    throw new Error("entry must not be only whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, text, "utf8");
  console.log(`wrote ${text.length} chars to ${outPath}`);
}

main();
