import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
let checks = 0;

function check(ok, pass, fail = pass) {
	checks++;
	if (ok) console.log(`✓ ${pass}`);
	else failures.push(fail);
}

function walk(dir) {
	const out = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const child = join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walk(child));
		else if (entry.name.endsWith(".md")) out.push(child);
	}
	return out;
}

const requiredKeys = ["title", "type", "status", "date", "tags"];
const allowedStatus = new Set(["draft", "active", "done", "archived"]);
const docsRoot = join(root, "docs");
const notes = existsSync(docsRoot) ? walk(docsRoot) : [];

check(existsSync(join(root, "docs/README.md")), "docs hub exists", "docs/README.md is missing");
check(existsSync(join(root, "docs/working-agreement.md")), "working agreement exists", "docs/working-agreement.md is missing");

for (const file of notes) {
	const rel = relative(root, file).replaceAll("\\", "/");
	const text = readFileSync(file, "utf8");
	const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
	check(Boolean(fm), `${rel} has YAML frontmatter`, `${rel} is missing YAML frontmatter`);
	if (!fm) continue;
	const fields = {};
	for (const line of fm[1].split("\n")) {
		const m = line.match(/^([a-z]+):\s*(.*)$/);
		if (m) fields[m[1]] = m[2].trim();
	}
	for (const key of requiredKeys) {
		check(Boolean(fields[key]), `${rel} has ${key}`, `${rel} frontmatter missing ${key}`);
	}
	if (fields.status) {
		const status = fields.status.replaceAll('"', "");
		check(allowedStatus.has(status), `${rel} status is ${status}`, `${rel} has unknown status ${status}`);
	}
	const links = [...text.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]);
	for (const href of links) {
		if (/^(https?:|mailto:|#)/i.test(href)) continue;
		const pathOnly = href.split("#")[0];
		if (!pathOnly) continue;
		const target = resolve(dirname(file), pathOnly);
		check(existsSync(target), `${rel} link ${href}`, `${rel} broken relative link: ${href}`);
	}
}

check(!existsSync(join(root, "skills")), "no leftover root skills/", "root skills/ exists; development skills belong under agents/skills/");
check(statSync(join(root, "agents/skills")).isDirectory(), "agents/skills exists", "agents/skills is missing");

console.log(`\n${checks} doc checks, ${failures.length} failure(s)`);
if (failures.length) {
	for (const failure of failures) console.error(`✗ ${failure}`);
	process.exit(1);
}
console.log("All documentation checks passed.");
