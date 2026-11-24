import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word for Your Wi-Fi — make.fun bounty
// u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
//
// The entry is a single word: "Teenager".
// Home Wi-Fi behaves like a moody teenager: it disappears into its room
// (dead zones), ignores you when you call on it, and only works when it
// feels like it.
//
// The word is written with no trailing newline, so /output/entry.txt is
// exactly 8 bytes: T-e-e-n-a-g-e-r. The gate allows 1-20 UTF-8 characters.

const WORD = "Teenager";

// The grading sandbox mounts the output directory at /output.
// OUTPUT_DIR exists only so local verification can point the program at a
// fresh directory (including a tmpfs mount); when unset it defaults to
// /output, exactly as the grader expects.
const outputDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
