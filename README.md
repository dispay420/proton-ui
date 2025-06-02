# Proton Roblox Executor

A clean, seamless Roblox script executor UI for macOS, built with Tauri (Rust backend + React frontend).  
Supports 10+ color themes & custom GitHub rap in settings.

---

## Features

- Clean, modern UI
- 10+ beautiful themes, selectable in settings
- Customizable GitHub rap/tag/quote
- Connects to OpiumwareExecution API (Rust/Tauri backend)
- macOS native (Tauri)
- Easy build and run

## Getting Started

1. **Install Tauri prerequisites**  
   See: [Tauri Docs](https://tauri.app/v1/guides/getting-started/prerequisites/)
2. **Install & Run**
   ```bash
   npm install
   npm run tauri dev
   ```
3. **Build macOS App**
   ```bash
   npm run tauri build
   ```

## Project Structure

- `src/` — React frontend (UI)
- `src-tauri/` — Rust backend (Tauri)
- `tauri.conf.json` — Tauri config

## License

MIT