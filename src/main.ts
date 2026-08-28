import { Notice, Plugin, WorkspaceLeaf } from "obsidian";
import type { Workspace } from "obsidian";
import { BUILD_STAMP } from "./buildInfo";
import { MyPluginSettingTab } from "./settingsTab";
import { normalizeLoadedSettings, type MyPluginSettings } from "./settings";
import { SIDE_VIEW_TYPE } from "./types";
import { PluginSideView } from "./view";

const noop = (): void => {};

function revealQuietly(workspace: Workspace, leaf: WorkspaceLeaf): void {
	const result: unknown = workspace.revealLeaf(leaf);
	if (result && typeof (result as Promise<void>).catch === "function") {
		void (result as Promise<void>).catch(noop);
	}
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings = normalizeLoadedSettings({});
	private ribbonEl: HTMLElement | null = null;

	async onload(): Promise<void> {
		console.info(`[${this.manifest.name}] build ${BUILD_STAMP}`);
		this.installRejectionNet();
		await this.loadSettings();

		this.registerView(SIDE_VIEW_TYPE, (leaf) => new PluginSideView(leaf, this));
		this.syncRibbon();

		this.addCommand({
			id: "open-side-view",
			name: "Open side panel",
			callback: () => {
				void this.activateView();
			},
		});

		this.addSettingTab(new MyPluginSettingTab(this.app, this));
	}

	onunload(): void {}

	async activateView(): Promise<void> {
		const { workspace } = this.app;
		const leaves = workspace.getLeavesOfType(SIDE_VIEW_TYPE);
		if (leaves.length > 0) {
			revealQuietly(workspace, leaves[0]);
			return;
		}
		const leaf = workspace.getRightLeaf(false);
		await leaf?.setViewState({ type: SIDE_VIEW_TYPE, active: true });
		if (leaf) revealQuietly(workspace, leaf);
	}

	refreshViews(): void {
		for (const leaf of this.app.workspace.getLeavesOfType(SIDE_VIEW_TYPE)) {
			(leaf.view as PluginSideView).render?.();
		}
	}

	/** Show or hide the ribbon icon without requiring a plugin reload. */
	syncRibbon(): void {
		if (this.settings.ribbonIcon) {
			if (!this.ribbonEl) {
				this.ribbonEl = this.addRibbonIcon("puzzle", this.manifest.name, () => {
					void this.activateView();
				});
			}
			this.ribbonEl.show();
			return;
		}
		this.ribbonEl?.hide();
	}

	async loadSettings(): Promise<void> {
		this.settings = normalizeLoadedSettings((await this.loadData()) ?? {});
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
	}

	/** UI callbacks that discard the promise must use this, not a bare saveSettings(). */
	saveSettingsSafe(): void {
		void this.saveSettings().catch((err) => {
			const detail = err instanceof Error ? err.message : String(err);
			console.error(`[${this.manifest.name}] failed to save settings`, err);
			new Notice(`${this.manifest.name}: could not save settings — ${detail}`, 8000);
		});
	}

	private installRejectionNet(): void {
		const onRejection = (event: PromiseRejectionEvent): void => {
			const reason: unknown = event.reason;
			const stack = reason instanceof Error ? `${reason.stack ?? ""}` : "";
			if (!stack.includes(this.manifest.id)) return;
			const detail = reason instanceof Error ? reason.message : String(reason);
			console.error(`[${this.manifest.name}] unhandled promise rejection`, reason);
			new Notice(`${this.manifest.name}: background task failed — ${detail}`, 8000);
		};
		const target: unknown = typeof window === "undefined" ? undefined : window;
		if (
			!target ||
			typeof (target as Window).addEventListener !== "function" ||
			typeof (target as Window).removeEventListener !== "function"
		) {
			return;
		}
		const host = target as Window;
		try {
			host.addEventListener("unhandledrejection", onRejection);
		} catch {
			return;
		}
		this.register(() => {
			try {
				host.removeEventListener("unhandledrejection", onRejection);
			} catch {
				/* teardown is best-effort */
			}
		});
	}
}
