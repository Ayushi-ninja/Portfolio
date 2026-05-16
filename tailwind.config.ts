import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0f1e",
        "bg-secondary": "#0d1530",
        "bg-card": "#111827",
        cyan: {
          DEFAULT: "#00d4ff",
          dark: "#0099bb",
          glow: "rgba(0,212,255,0.15)",
        },
        violet: {
          DEFAULT: "#7c3aed",
          light: "#9d5cf6",
          glow: "rgba(124,58,237,0.15)",
        },
      },
      fontFamily: {
        mono: ["'Space Mono'", "monospace"],
        body: ["'Outfit'", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.6s ease forwards",
        "blink": "blink 1s step-end infinite",
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 8px rgba(0,212,255,0.4)" },
          "50%": { boxShadow: "0 0 24px rgba(0,212,255,0.8)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "50px 50px",
      },
    },
  },
  plugins: [],
};
export default config;
