import React, { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import type { Theme } from "./App";

const PORTS = ["8392", "8393", "8394", "8395", "8396", "8397", "ALL"];

export default function ExecutorTab({ theme }: { theme: Theme }) {
  const [script, setScript] = useState("");
  const [port, setPort] = useState("8392");
  const [status, setStatus] = useState("");
  const [wsEnabled, setWsEnabled] = useState(false);

  const executeScript = async () => {
    setStatus("Sending...");
    try {
      if (wsEnabled) {
        await invoke("OpiumwareExecution", {
          code: "OpiumwareSetting EnableWS true",
          port,
        });
      }
      const res = await invoke<string>("OpiumwareExecution", {
        code: "OpiumwareScript " + script,
        port,
      });
      setStatus(res ?? "No response");
    } catch (e: any) {
      setStatus("Error: " + e.message);
    }
  };

  return (
    <div style={{
      background: theme.background,
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
        gap: 18,
        border: `1px solid ${theme.accent}30`
      }}>
        <h1 style={{
          textAlign: "center",
          margin: 0,
          fontWeight: 600,
          fontSize: 26,
          letterSpacing: 1,
          color: theme.accent
        }}>Roblox Executor</h1>
        <textarea
          rows={8}
          style={{
            width: "100%",
            borderRadius: 8,
            border: `1px solid ${theme.accent}40`,
            padding: 12,
            fontSize: 16,
            resize: "vertical",
            background: theme.foreground + "10",
            color: theme.foreground,
            fontFamily: "Fira Mono, monospace"
          }}
          placeholder="Paste your script here..."
          value={script}
          onChange={e => setScript(e.target.value)}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <select
            style={{
              borderRadius: 6,
              border: `1px solid ${theme.accent}30`,
              padding: "7px 14px",
              fontSize: 16,
              background: theme.background,
              color: theme.foreground
            }}
            value={port}
            onChange={e => setPort(e.target.value)}
          >
            {PORTS.map(p => (
              <option key={p} value={p}>{p === "ALL" ? "All Ports" : `Port ${p}`}</option>
            ))}
          </select>
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 14 }}>
            <input
              type="checkbox"
              checked={wsEnabled}
              onChange={e => setWsEnabled(e.target.checked)}
              style={{ accentColor: theme.accent }}
            />
            Enable WS
          </label>
        </div>
        <button
          style={{
            background: theme.accent,
            border: "none",
            borderRadius: 7,
            padding: "13px 0",
            color: theme.background,
            fontWeight: 500,
            fontSize: 17,
            cursor: "pointer",
            marginTop: 10,
            transition: "background 0.2s"
          }}
          onClick={executeScript}
        >Execute</button>
        <div style={{ textAlign: "center", marginTop: 10, color: theme.accent, minHeight: 22 }}>{status}</div>
      </div>
    </div>
  );
}