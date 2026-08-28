import { readFileSync, writeFileSync } from "node:fs";

const manifest = JSON.parse(readFileSync("manifest.json", "utf8"));
const pkg = JSON.parse(readFileSync("package.json", "utf8"));
const versions = JSON.parse(readFileSync("versions.json", "utf8"));

const target = process.argv[2] ?? pkg.version;
manifest.version = target;
pkg.version = target;
versions[target] = manifest.minAppVersion;

writeFileSync("manifest.json", JSON.stringify(manifest, null, "\t") + "\n");
writeFileSync("package.json", JSON.stringify(pkg, null, "\t") + "\n");
writeFileSync("versions.json", JSON.stringify(versions, null, "\t") + "\n");
console.log(`bumped to ${target} (minAppVersion ${manifest.minAppVersion})`);
