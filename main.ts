// Two Lines to Your Past Self — make.fun entry
// https://make.fun/bounty/u-suga-two-lines-to-your-past-self-f36c83ca
//
// Writes exactly two lines (1-280 characters total, UTF-8) to
// /output/entry.txt: line one warns the writer's past self about one
// specific moment; line two says why that moment mattered and what
// changed because of it.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: two lines, one sentence each.
const LINE_ONE =
  "Don't send the text at 2 a.m. from the kitchen table, the one that ends the friendship in one sentence.";
const LINE_TWO =
  "It cost you three years of silence, and the only thing that ever brought him back was you learning to say sorry first.";

// The gate: /output/entry.txt must hold UTF-8 text of 1 to 280
// characters, not only white space, and exactly two lines.
const MIN_CHARS = 1;
const MAX_CHARS = 280;
const EXPECTED_LINES = 2;

function buildEntry(): string {
  return `${LINE_ONE}\n${LINE_TWO}`;
}

function validateEntry(text: string): void {
  const charCount = [...text].length;
  if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
    throw new Error(
      `Entry must be ${MIN_CHARS}-${MAX_CHARS} characters, got ${charCount}.`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only white space.");
  }
  const lines = text.split("\n");
  if (lines.length !== EXPECTED_LINES) {
    throw new Error(`Entry must be exactly ${EXPECTED_LINES} lines, got ${lines.length}.`);
  }
  for (const [index, line] of lines.entries()) {
    if (line.trim().length === 0) {
      throw new Error(`Line ${index + 1} must not be empty.`);
    }
  }
}

function main(): void {
  const entry = buildEntry();
  validateEntry(entry);

  // The grader mounts /output, so create it if needed and never
  // delete or remove it.
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, entry, "utf8");

  // Read-back round trip: the file on disk must be byte-identical to
  // the entry we validated, and still pass the gate when re-read.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== entry) {
    throw new Error("Read-back mismatch: /output/entry.txt differs from the entry.");
  }
  validateEntry(roundTrip);

  console.log(`Wrote ${outPath} (${[...entry].length} characters, 2 lines).`);
  console.log(entry);
}

main();
