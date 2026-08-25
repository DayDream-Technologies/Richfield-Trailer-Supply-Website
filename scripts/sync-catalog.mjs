import { writeFileSync, readFileSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const productsRoot = join(root, "data", "products");

const all = [];
for (const category of readdirSync(productsRoot, { withFileTypes: true })) {
  if (!category.isDirectory()) continue;
  const catDir = join(productsRoot, category.name);
  for (const file of readdirSync(catDir)) {
    if (!file.endsWith(".json")) continue;
    const items = JSON.parse(readFileSync(join(catDir, file), "utf8"));
    all.push(...items);
  }
}

const combined = join(root, "src", "data", "catalog.json");
mkdirSync(dirname(combined), { recursive: true });
writeFileSync(combined, `${JSON.stringify(all, null, 2)}\n`);
console.log(`Synced ${all.length} products into src/data/catalog.json`);
