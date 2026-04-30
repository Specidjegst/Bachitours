import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        deep: "#0A4D6E",
        primary: "#1E88B0",
        accent: "#38BFC9",
        sand: "#F4E7D1",
        cream: "#FBF7EE",
        ink: "#0E1F2C",
        muted: "#5C6B78",
        sun: "#F4A340",
        success: "#2EA66A",
        line: "#E5DFD2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 24px rgba(10, 77, 110, 0.08)",
        cardHover: "0 12px 40px rgba(10, 77, 110, 0.14)",
      },
      borderRadius: {
        xl2: "20px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
