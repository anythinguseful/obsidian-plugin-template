# Security

This plugin runs inside the user's vault.

- Treat vault files, settings JSON, clipboard, and network responses as untrusted. Validate after `JSON.parse`; never `as Type`.
- Do not log API keys, tokens, or note contents.
- Prefer Obsidian `requestUrl` over Node `http` so mobile stays possible unless you set `isDesktopOnly`.
- Destructive actions (overwrite, delete, shell) need an explicit user confirmation.
- Report vulnerabilities privately to the maintainer listed in `manifest.json`. Do not open a public issue with a working exploit.
