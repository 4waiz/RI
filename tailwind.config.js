/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["Rajdhani", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans", "system-ui", "sans-serif"],
      },
      colors: {
        base: "var(--color-base)",
        panel: "var(--color-panel)",
        steel: "var(--color-steel)",
        slate: "var(--color-slate)",
        accent: "var(--color-accent)",
        accentGlow: "var(--color-accent-glow)",
        warning: "#FF7A00",
        grid: "var(--color-grid)",
        muted: "var(--color-muted)",
        foreground: "var(--color-foreground)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(58,169,255,.5), 0 0 28px rgba(58,169,255,.18)",
        hard: "0 12px 30px rgba(0,0,0,.45)",
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(to right, rgba(58,169,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(58,169,255,0.08) 1px, transparent 1px)",
        "steel-sheen":
          "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0)), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseLine: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.9 },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-line": "pulseLine 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
