import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const manifest = JSON.parse(readFileSync(resolve(root, "manifest.json"), "utf8"));
const outDir = resolve(root, "release");

for (const file of ["main.js", "manifest.json", "styles.css"]) {
	if (!existsSync(resolve(root, file))) {
		console.error(`missing ${file} — run npm run build first`);
		process.exit(1);
	}
}

rmSync(outDir, { recursive: true, force: true });
mkdirSync(outDir, { recursive: true });

for (const file of ["main.js", "manifest.json", "styles.css"]) {
	writeFileSync(resolve(outDir, file), readFileSync(resolve(root, file)));
}

const zipName = `${manifest.id}-${manifest.version}.zip`;
try {
	execFileSync("zip", ["-q", "-j", resolve(outDir, zipName), "main.js", "manifest.json", "styles.css"], {
		cwd: outDir,
	});
} catch (err) {
	console.error("zip is required for npm run package (install zip, or copy the three files from release/ manually).");
	console.error(err instanceof Error ? err.message : err);
	process.exit(1);
}
console.log(`wrote release/${zipName}`);
