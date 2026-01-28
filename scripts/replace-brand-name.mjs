import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(process.cwd());
const SRC_DIR = path.join(ROOT, "src");
const INDEX_HTML = path.join(ROOT, "index.html");

const FROM = "Newcastle Local Roofers";
const TO_CODE = "Sydney Roofing & Gutters";
const TO_HTML = "Sydney Roofing &amp; Gutters";

const TEXT_EXTS = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".html", ".md"]);

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const out = [];
  for (const ent of entries) {
    // Skip common large/irrelevant dirs if they exist
    if (ent.isDirectory() && (ent.name === "node_modules" || ent.name === "dist" || ent.name === "build")) {
      continue;
    }
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

async function replaceInFile(filePath, replacement) {
  const ext = path.extname(filePath);
  if (!TEXT_EXTS.has(ext)) return { changed: false, occurrences: 0 };

  const before = await fs.readFile(filePath, "utf8");
  const occurrences = before.split(FROM).length - 1;
  if (occurrences === 0) return { changed: false, occurrences: 0 };

  const after = before.split(FROM).join(replacement);
  if (after === before) return { changed: false, occurrences: 0 };

  await fs.writeFile(filePath, after, "utf8");
  return { changed: true, occurrences };
}

async function main() {
  let totalFiles = 0;
  let totalOccurrences = 0;

  // Replace under src with code-safe text
  const srcFiles = await walk(SRC_DIR);
  for (const f of srcFiles) {
    const res = await replaceInFile(f, TO_CODE);
    if (res.changed) {
      totalFiles += 1;
      totalOccurrences += res.occurrences;
      console.log(`[src] updated ${path.relative(ROOT, f)} (${res.occurrences})`);
    }
  }

  // Replace in index.html with escaped HTML
  const indexRes = await replaceInFile(INDEX_HTML, TO_HTML);
  if (indexRes.changed) {
    totalFiles += 1;
    totalOccurrences += indexRes.occurrences;
    console.log(`[root] updated index.html (${indexRes.occurrences})`);
  }

  console.log(`Done. Updated files: ${totalFiles}. Replacements: ${totalOccurrences}.`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

