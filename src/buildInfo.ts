declare const __PLUGIN_BUILD_STAMP__: string | undefined;
declare const __PLUGIN_VERSION__: string | undefined;

/** Replaced by esbuild `define`. Logged on load so you can tell which bundle Obsidian actually ran. */
export const BUILD_STAMP: string =
	typeof __PLUGIN_BUILD_STAMP__ !== "undefined" && __PLUGIN_BUILD_STAMP__
		? __PLUGIN_BUILD_STAMP__
		: "dev-build";

export const PLUGIN_VERSION: string =
	typeof __PLUGIN_VERSION__ !== "undefined" && __PLUGIN_VERSION__ ? __PLUGIN_VERSION__ : "dev";
