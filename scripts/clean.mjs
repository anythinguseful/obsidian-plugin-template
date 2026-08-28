import { rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
for (const rel of ["main.js", "release"]) {
	rmSync(resolve(root, rel), { recursive: true, force: true });
	console.log(`removed ${rel}`);
}
