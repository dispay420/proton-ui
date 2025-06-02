import React, { useState } from "react";
import ExecutorTab from "./ExecutorTab";
import SettingsTab from "./SettingsTab";

export type Theme = {
  name: string;
  background: string;
  foreground: string;
  accent: string;
};

export const themes: Theme[] = [
  { name: "Midnight", background: "#18181B", foreground: "#FFF", accent: "#00C6AE" },
  { name: "Neon Purple", background: "#1a093e", foreground: "#fff", accent: "#b388ff" },
  { name: "Solarized Dark", background: "#002B36", foreground: "#93A1A1", accent: "#268BD2" },
  { name: "Gruvbox", background: "#282828", foreground: "#EBDBB2", accent: "#FE8019" },
  { name: "Nord", background: "#2E3440", foreground: "#D8DEE9", accent: "#88C0D0" },
  { name: "Material Ocean", background: "#0F111A", foreground: "#B6C2CF", accent: "#80CBC4" },
  { name: "Monokai", background: "#272822", foreground: "#F8F8F2", accent: "#FD971F" },
  { name: "Dracula", background: "#282A36", foreground: "#F8F8F2", accent: "#BD93F9" },
  { name: "Light", background: "#F9FAFB", foreground: "#2D3748", accent: "#3B82F6" },
  { name: "Cyberpunk", background: "#0f0326", foreground: "#ff36cb", accent: "#00ffe7" },
  { name: "Forest", background: "#232e26", foreground: "#aee9d1", accent: "#4ecb8f" },
];

export default function App() {
  const [tab, setTab] = useState<"executor" | "settings">("executor");
  const [themeIndex, setThemeIndex] = useState(0);
  const [githubRap, setGithubRap] = useState("Put your GitHub rap here!");

  const theme = themes[themeIndex];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: theme.background,
        color: theme.foreground,
        fontFamily: "Inter, sans-serif",
        transition: "background 0.3s"
      }}
    >
      <nav style={{
        display: "flex",
        justifyContent: "center",
        gap: 36,
        padding: "20px 0 6px 0",
        borderBottom: `2px solid ${theme.accent}10`,
        marginBottom: 28
      }}>
        <button
          onClick={() => setTab("executor")}
          style={{
            background: "none",
            border: "none",
            fontSize: 18,
            color: tab === "executor" ? theme.accent : theme.foreground,
            fontWeight: tab === "executor" ? 600 : 400,
            cursor: "pointer",
            borderBottom: tab === "executor" ? `2px solid ${theme.accent}` : "none",
            paddingBottom: 3,
            transition: "color 0.2s"
          }}
        >Executor</button>
        <button
          onClick={() => setTab("settings")}
          style={{
            background: "none",
            border: "none",
            fontSize: 18,
            color: tab === "settings" ? theme.accent : theme.foreground,
            fontWeight: tab === "settings" ? 600 : 400,
            cursor: "pointer",
            borderBottom: tab === "settings" ? `2px solid ${theme.accent}` : "none",
            paddingBottom: 3,
            transition: "color 0.2s"
          }}
        >Settings</button>
      </nav>

      {tab === "executor" ? (
        <ExecutorTab theme={theme} />
      ) : (
        <SettingsTab
          theme={theme}
          themes={themes}
          themeIndex={themeIndex}
          setThemeIndex={setThemeIndex}
          githubRap={githubRap}
          setGithubRap={setGithubRap}
        />
      )}

      <div style={{
        marginTop: 30,
        color: theme.foreground + "90",
        fontSize: 13,
        opacity: 0.7,
        textAlign: "center"
      }}>
        Opiumware Executor &copy; 2025
      </div>
    </div>
  );
}