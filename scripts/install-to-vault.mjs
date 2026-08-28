/**
 * Copy the built plugin into an Obsidian vault.
 *
 *   npm run build
 *   npm run install-vault -- --vault "/path/to/Vault"
 *
 * Vault path may also come from OBSIDIAN_VAULT.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function arg(name) {
	const i = process.argv.indexOf(`--${name}`);
	return i >= 0 ? process.argv[i + 1] : "";
}

const vault = (arg("vault") || process.env.OBSIDIAN_VAULT || "").trim();
if (!vault) {
	console.error('Usage: npm run install-vault -- --vault "/full/path/to/YourVault"');
	console.error("Or set OBSIDIAN_VAULT to that folder.");
	process.exit(1);
}

const manifest = JSON.parse(readFileSync(resolve(root, "manifest.json"), "utf8"));
const id = typeof manifest.id === "string" ? manifest.id : "";
if (!id) {
	console.error("manifest.json is missing id — run npm run init first");
	process.exit(1);
}

for (const file of ["main.js", "manifest.json", "styles.css"]) {
	if (!existsSync(resolve(root, file))) {
		console.error(`missing ${file} — run npm run build first`);
		process.exit(1);
	}
}

const dest = resolve(vault, ".obsidian", "plugins", id);
mkdirSync(dest, { recursive: true });
for (const file of ["main.js", "manifest.json", "styles.css"]) {
	copyFileSync(resolve(root, file), resolve(dest, file));
}

console.log(`Installed ${manifest.name} (${id}) → ${dest}`);
console.log("In Obsidian: Community plugins → reload → enable this plugin.");
console.log("Check the build stamp in plugin Settings.");
