import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./sections/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0A66C2",
        navy: "#07142a"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(10,102,194,.2),0 8px 40px rgba(10,102,194,.25)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
