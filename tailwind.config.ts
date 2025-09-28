import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        profitable: {
          DEFAULT: "#10b981",
          foreground: "#064e3b",
          light: "#10b98120"
        },
        fair: {
          DEFAULT: "#f59e0b",
          foreground: "#7c2d12",
          light: "#f59e0b20"
        },
        overpriced: {
          DEFAULT: "#ef4444",
          foreground: "#7f1d1d",
          light: "#ef444420"
        }
      }
    }
  },
  plugins: [],
} satisfies Config;
