/**
 * Rename the placeholder plugin identity.
 *
 *   npm run init -- --id my-notes --name "My Notes" --prefix mn
 *
 * With no flags, asks questions when the terminal is interactive.
 */
import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function arg(name) {
	const i = process.argv.indexOf(`--${name}`);
	return i >= 0 ? (process.argv[i + 1] ?? "") : "";
}

function usage() {
	console.error('Usage: npm run init -- --id my-notes --name "My Notes" --prefix mn');
	console.error("id: kebab-case folder name (a-z, 0-9, hyphens).");
	console.error("prefix: 1–8 letter CSS stem, e.g. mn");
}

const idOk = (v) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(v);
const prefixOk = (v) => /^[a-z][a-z0-9]{0,7}$/.test(v);

async function promptMissing(current) {
	if (current.id && current.name && current.prefix) return current;
	if (!input.isTTY || !output.isTTY) {
		usage();
		process.exit(1);
	}
	const rl = createInterface({ input, output });
	try {
		let id = current.id;
		let name = current.name;
		let prefix = current.prefix;
		while (!idOk(id)) {
			id = (await rl.question("Plugin id (kebab-case, e.g. garden-notes): ")).trim();
			if (!idOk(id)) console.error("Use only lowercase letters, digits, and hyphens.");
		}
		while (!name) {
			name = (await rl.question("Display name (e.g. Garden Notes): ")).trim();
		}
		while (!prefixOk(prefix)) {
			prefix = (await rl.question("CSS prefix (1–8 chars, e.g. gn): ")).trim();
			if (!prefixOk(prefix)) console.error("Start with a letter; keep it short.");
		}
		return { id, name, prefix };
	} finally {
		rl.close();
	}
}

const chosen = await promptMissing({
	id: arg("id").trim(),
	name: arg("name").trim(),
	prefix: arg("prefix").trim(),
});

const { id, name, prefix } = chosen;

function rewrite(rel, fn) {
	const path = resolve(root, rel);
	writeFileSync(path, fn(readFileSync(path, "utf8")));
	console.log(`updated ${rel}`);
}

rewrite("manifest.json", (text) => {
	const m = JSON.parse(text);
	m.id = id;
	m.name = name;
	return JSON.stringify(m, null, "\t") + "\n";
});

rewrite("package.json", (text) => {
	const m = JSON.parse(text);
	m.name = id;
	return JSON.stringify(m, null, "\t") + "\n";
});

rewrite("src/types.ts", (text) => text.replaceAll("my-plugin-view", `${id}-view`));

const prefixFiles = [
	"styles.css",
	"src/view.ts",
	"src/settingsTab.ts",
	"agents/skills/internal/plugin-ui/SKILL.md",
	"docs/working-agreement.md",
];
for (const rel of prefixFiles) {
	rewrite(rel, (text) =>
		text
			.replaceAll(".mp-", `.${prefix}-`)
			.replaceAll("mp-view", `${prefix}-view`)
			.replaceAll("mp-muted", `${prefix}-muted`)
			.replaceAll("mp-settings", `${prefix}-settings`),
	);
}

console.log(`\nIdentity set to id=${id} name=${name} prefix=.${prefix}-`);
console.log("Set author/description in manifest.json.");
console.log("Then: npm run verify");
console.log('Install: npm run build && npm run install-vault -- --vault "/path/to/YourVault"');
