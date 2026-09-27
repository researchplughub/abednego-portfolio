import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#080c14",
        surface: {
          DEFAULT: "#0f172a",
          subtle: "#111b2e",
          card: "#0d1527",
          border: "#1e293b",
          borderHover: "#334155",
        },
        cyan: {
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },
        foreground: {
          DEFAULT: "#f8fafc",
          muted: "#94a3b8",
          subtle: "#64748b",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      boxShadow: {
        "cyan-subtle": "0 0 25px -5px rgba(6, 182, 212, 0.15)",
        "cyan-card": "0 4px 20px -2px rgba(6, 182, 212, 0.08)",
      },
      backgroundImage: {
        "technical-grid":
          "radial-gradient(circle, rgba(34, 211, 238, 0.07) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
