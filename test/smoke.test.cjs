"use strict";

const fs = require("fs");
const path = require("path");
const assert = require("assert");

const ROOT = path.join(__dirname, "..");
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), "utf8");

let failed = 0;
function check(name, fn) {
	try {
		fn();
		console.log(`✓ ${name}`);
	} catch (err) {
		failed += 1;
		console.error(`✗ ${name}`);
		console.error(err instanceof Error ? err.message : err);
	}
}

const main = read("src/main.ts");
const settings = read("src/settings.ts");
const view = read("src/view.ts");
const css = read("styles.css");
const manifest = JSON.parse(read("manifest.json"));
const pkg = JSON.parse(read("package.json"));

check("manifest id is kebab-case", () => {
	assert.match(manifest.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
});

check("package version matches manifest", () => {
	assert.strictEqual(pkg.version, manifest.version);
});

check("settings go through normalizeLoadedSettings", () => {
	assert.ok(main.includes("normalizeLoadedSettings"));
	assert.ok(settings.includes("export function normalizeLoadedSettings"));
});

check("UI saves use saveSettingsSafe", () => {
	assert.ok(main.includes("saveSettingsSafe"));
	const tab = read("src/settingsTab.ts");
	assert.ok(tab.includes("saveSettingsSafe"));
	assert.ok(!/\.saveSettings\(\)\s*;/.test(tab));
});

check("revealLeaf is feature-detected", () => {
	assert.ok(main.includes("revealQuietly"));
});

check("ribbon toggle has a live sync path", () => {
	assert.ok(main.includes("syncRibbon"));
	assert.ok(read("src/settingsTab.ts").includes("syncRibbon"));
});

check("view CSS class exists in stylesheet", () => {
	const classes = [...view.matchAll(/addClass\("([^"]+)"\)/g)].map((m) => m[1]);
	assert.ok(classes.length > 0, "view.ts never addClass");
	for (const cls of classes) {
		assert.ok(css.includes(`.${cls}`), `styles.css missing .${cls}`);
	}
});

if (failed) {
	console.error(`\n${failed} smoke check(s) failed`);
	process.exit(1);
}
console.log("\nAll smoke checks passed");
