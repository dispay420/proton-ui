import React from "react";
import type { Theme } from "./App";

type Props = {
  theme: Theme;
  themes: Theme[];
  themeIndex: number;
  setThemeIndex: (idx: number) => void;
  githubRap: string;
  setGithubRap: (s: string) => void;
};

export default function SettingsTab({ theme, themes, themeIndex, setThemeIndex, githubRap, setGithubRap }: Props) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <div style={{
        background: theme.background,
        borderRadius: 12,
        boxShadow: `0 4px 24px ${theme.accent}20`,
        padding: 32,
        maxWidth: 450,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 22,
        border: `1px solid ${theme.accent}30`
      }}>
        <h2 style={{ color: theme.accent, textAlign: "center", margin: 0, fontWeight: 600 }}>Settings</h2>
        <div>
          <label style={{
            fontWeight: 500,
            color: theme.foreground,
            marginBottom: 6,
            display: "block"
          }}>Choose Theme:</label>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {themes.map((t, idx) => (
              <button
                key={t.name}
                onClick={() => setThemeIndex(idx)}
                style={{
                  background: t.background,
                  color: t.foreground,
                  border: themeIndex === idx ? `2px solid ${theme.accent}` : `1px solid #8882`,
                  borderRadius: 7,
                  padding: "8px 6px",
                  fontWeight: 500,
                  cursor: "pointer",
                  boxShadow: themeIndex === idx ? `0 0 0 2px ${theme.accent}60` : "none"
                }}
              >{t.name}</button>
            ))}
          </div>
        </div>
        <div>
          <label style={{
            fontWeight: 500,
            color: theme.foreground,
            marginBottom: 6,
            display: "block"
          }}>Your GitHub Rap / Tag / Quote</label>
          <textarea
            value={githubRap}
            onChange={e => setGithubRap(e.target.value)}
            rows={4}
            style={{
              width: "100%",
              borderRadius: 8,
              border: `1px solid ${theme.accent}40`,
              padding: 10,
              fontSize: 15,
              background: theme.foreground + "10",
              color: theme.foreground,
              fontFamily: "Fira Mono, monospace"
            }}
            placeholder="Write your GitHub rap, tag, or quote!"
          />
        </div>
        <div style={{
          color: theme.accent,
          background: theme.background,
          border: `1px dashed ${theme.accent}`,
          borderRadius: 7,
          padding: "8px 10px",
          textAlign: "center",
          fontSize: 15
        }}>
          {githubRap}
        </div>
      </div>
    </div>
  );
}