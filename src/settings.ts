/** Persistent plugin settings. Keep this JSON-serializable. */

export interface MyPluginSettings {
	ribbonIcon: boolean;
	exampleText: string;
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
	ribbonIcon: true,
	exampleText: "",
};

/**
 * Always go through this on load. Disk data is untrusted: missing keys,
 * wrong types, and extra fields must not crash the plugin.
 */
export function normalizeLoadedSettings(raw: unknown): MyPluginSettings {
	const src = raw && typeof raw === "object" && !Array.isArray(raw) ? (raw as Record<string, unknown>) : {};
	return {
		ribbonIcon: src.ribbonIcon !== false,
		exampleText: typeof src.exampleText === "string" ? src.exampleText : DEFAULT_SETTINGS.exampleText,
	};
}
