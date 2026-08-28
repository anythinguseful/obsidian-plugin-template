import { App, PluginSettingTab, Setting } from "obsidian";
import type MyPlugin from "./main";
import { BUILD_STAMP, PLUGIN_VERSION } from "./buildInfo";

export class MyPluginSettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();
		containerEl.addClass("mp-settings");

		containerEl.createEl("h2", { text: this.plugin.manifest.name });
		containerEl.createEl("p", {
			text: `v${PLUGIN_VERSION} · build ${BUILD_STAMP}`,
			cls: "mp-muted",
		});

		new Setting(containerEl)
			.setName("Show ribbon icon")
			.setDesc("Adds a puzzle icon in the left ribbon.")
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.ribbonIcon).onChange((value) => {
					this.plugin.settings.ribbonIcon = value;
					this.plugin.syncRibbon();
					this.plugin.saveSettingsSafe();
				}),
			);

		new Setting(containerEl)
			.setName("Example text")
			.setDesc("Shown in the side panel. Replace with a real setting.")
			.addText((text) =>
				text
					.setPlaceholder("Hello vault")
					.setValue(this.plugin.settings.exampleText)
					.onChange((value) => {
						this.plugin.settings.exampleText = value;
						this.plugin.saveSettingsSafe();
						this.plugin.refreshViews();
					}),
			);
	}
}
