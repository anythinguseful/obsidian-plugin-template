import { ItemView, WorkspaceLeaf } from "obsidian";
import type MyPlugin from "./main";
import { SIDE_VIEW_TYPE } from "./types";
import { PLUGIN_VERSION } from "./buildInfo";

export class PluginSideView extends ItemView {
	plugin: MyPlugin;

	constructor(leaf: WorkspaceLeaf, plugin: MyPlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getViewType(): string {
		return SIDE_VIEW_TYPE;
	}

	getDisplayText(): string {
		return this.plugin.manifest.name;
	}

	getIcon(): string {
		return "puzzle";
	}

	async onOpen(): Promise<void> {
		this.render();
	}

	async onClose(): Promise<void> {
		this.contentEl.empty();
	}

	render(): void {
		const root = this.contentEl;
		root.empty();
		root.addClass("mp-view");

		root.createEl("h3", { text: this.plugin.manifest.name });
		root.createEl("p", {
			text: `v${PLUGIN_VERSION}. Edit src/view.ts to build your panel.`,
			cls: "mp-muted",
		});

		const sample = this.plugin.settings.exampleText.trim();
		if (sample) {
			root.createEl("p", { text: sample });
		}
	}
}
