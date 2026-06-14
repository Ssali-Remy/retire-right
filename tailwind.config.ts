import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2744",
          50: "#f2f5f9",
          100: "#dde5ef",
          200: "#bccbdd",
          300: "#90a8c4",
          400: "#5e7ea5",
          500: "#3d5d87",
          600: "#2c466b",
          700: "#1d3354",
          800: "#0F2744",
          900: "#0a1c33",
          950: "#06101f",
        },
        emerald: {
          DEFAULT: "#2E8B57",
          50: "#f0f9f3",
          100: "#dcf0e3",
          200: "#bbe1c9",
          300: "#8dcaa6",
          400: "#5aac7e",
          500: "#2E8B57",
          600: "#287a4c",
          700: "#21603d",
          800: "#1d4d33",
          900: "#193f2b",
        },
        gold: {
          DEFAULT: "#D4AF37",
          50: "#fbf8ed",
          100: "#f5edcf",
          200: "#ecda9f",
          300: "#e1c266",
          400: "#D4AF37",
          500: "#c2992a",
          600: "#a47a22",
          700: "#835d1f",
          800: "#6e4d20",
          900: "#5e4220",
        },
        beige: {
          DEFAULT: "#F5F1E8",
          light: "#FAF8F2",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "fade-in": "fade-in 0.9s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 39, 68, 0.18)",
        glow: "0 0 0 1px rgba(212, 175, 55, 0.25), 0 18px 50px -12px rgba(46, 139, 87, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
