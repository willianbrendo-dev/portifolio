import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0f1e",
        foreground: "#f1f5f9",
        brand: "#3b82f6",
        card: "#111827",
        border: "#1f2937",
      },
    },
  },
  plugins: [],
};

export default config;
