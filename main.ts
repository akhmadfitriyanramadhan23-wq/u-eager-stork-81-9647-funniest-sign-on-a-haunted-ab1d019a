// Funniest Sign on a Haunted Server Room Door
// One line, max 120 chars. Writes the sign to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "NO ENTRY AFTER 3 A.M. The ghost in Rack 7 signed the log, rebooted DB-02, and now the on-call rota lists only him.";

const MAX_CHARS = 120;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${ENTRY.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outDir, "entry.txt")}`);
