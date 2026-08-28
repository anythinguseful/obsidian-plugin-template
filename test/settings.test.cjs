"use strict";

const { mkdtempSync } = require("fs");
const os = require("os");
const path = require("path");
const assert = require("assert");
const esbuild = require("esbuild");

const ROOT = path.join(__dirname, "..");
const outfile = path.join(mkdtempSync(path.join(os.tmpdir(), "mp-settings-")), "settings.cjs");

async function main() {
	await esbuild.build({
		entryPoints: [path.join(ROOT, "src/settings.ts")],
		outfile,
		bundle: true,
		format: "cjs",
		platform: "node",
		logLevel: "silent",
	});
	const { normalizeLoadedSettings, DEFAULT_SETTINGS } = require(outfile);

	assert.deepStrictEqual(normalizeLoadedSettings({}), DEFAULT_SETTINGS);
	assert.deepStrictEqual(normalizeLoadedSettings(null), DEFAULT_SETTINGS);
	assert.deepStrictEqual(normalizeLoadedSettings("nope"), DEFAULT_SETTINGS);
	assert.strictEqual(normalizeLoadedSettings({ ribbonIcon: false }).ribbonIcon, false);
	assert.strictEqual(normalizeLoadedSettings({ ribbonIcon: 0 }).ribbonIcon, true);
	assert.strictEqual(normalizeLoadedSettings({ exampleText: 12 }).exampleText, "");
	assert.strictEqual(normalizeLoadedSettings({ exampleText: "hi" }).exampleText, "hi");
	assert.ok(!("extra" in normalizeLoadedSettings({ extra: 1 })));
	console.log("✓ normalizeLoadedSettings rejects junk and keeps defaults");
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
