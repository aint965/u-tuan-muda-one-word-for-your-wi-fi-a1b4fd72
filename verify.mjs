import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const EXPECTED = "Teenager";
const EXPECTED_BYTES = 8;

function runInto(dir) {
  execFileSync(process.execPath, ["main.ts"], {
    cwd: root,
    env: { ...process.env, OUTPUT_DIR: dir },
    stdio: "inherit",
  });
  return readFileSync(join(dir, "entry.txt"));
}

function assertExact(buf, label) {
  const text = buf.toString("utf8");
  // Byte-exact: content, length, and UTF-8 round-trip.
  if (text !== EXPECTED) {
    throw new Error(`${label}: content mismatch, got ${JSON.stringify(text)}`);
  }
  if (buf.length !== EXPECTED_BYTES) {
    throw new Error(`${label}: expected ${EXPECTED_BYTES} bytes, got ${buf.length}`);
  }
  if (Buffer.from(text, "utf8").length !== buf.length) {
    throw new Error(`${label}: not valid UTF-8`);
  }
  // Gate: 1-20 UTF-8 characters, not only whitespace.
  if (EXPECTED.length < 1 || EXPECTED.length > 20 || EXPECTED.trim().length === 0) {
    throw new Error(`${label}: word fails the 1-20 character gate`);
  }
  console.log(`${label}: OK — exactly ${JSON.stringify(text)}, ${buf.length} bytes`);
}

const dir1 = mkdtempSync(join(tmpdir(), "wifi-verify-1-"));
const dir2 = mkdtempSync(join(tmpdir(), "wifi-verify-2-"));
const shmDir = mkdtempSync("/dev/shm/wifi-verify-shm-");

const out1 = runInto(dir1);
assertExact(out1, "run 1 (fresh dir)");

const out2 = runInto(dir2);
assertExact(out2, "run 2 (fresh dir)");

if (!out1.equals(out2)) {
  throw new Error("determinism check FAILED: two runs differ");
}
console.log("determinism: OK — two runs byte-identical");

const out3 = runInto(shmDir);
assertExact(out3, "run 3 (tmpfs mount /dev/shm)");
console.log("tmpfs mount: OK — program works on a mount, not just a plain directory");

console.log("ALL CHECKS PASSED");
