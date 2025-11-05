import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0c1e3d", // Dark navy blue
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#1e3a5f", // Medium navy blue
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "gradient-chess":
          "linear-gradient(135deg, rgba(12, 30, 61, 0.95) 0%, rgba(30, 58, 95, 0.9) 25%, rgba(37, 99, 150, 0.85) 50%, rgba(59, 130, 180, 0.8) 75%, rgba(96, 165, 210, 0.75) 100%)",
        "gradient-chess-dark":
          "linear-gradient(135deg, rgba(6, 15, 30, 0.98) 0%, rgba(12, 30, 61, 0.95) 25%, rgba(30, 58, 95, 0.9) 50%, rgba(37, 99, 150, 0.85) 75%, rgba(59, 130, 180, 0.8) 100%)",
        "gradient-chess-light":
          "linear-gradient(135deg, rgba(147, 197, 253, 0.9) 0%, rgba(96, 165, 250, 0.85) 20%, rgba(59, 130, 246, 0.8) 40%, rgba(37, 99, 235, 0.75) 60%, rgba(30, 58, 138, 0.7) 80%, rgba(12, 30, 61, 0.65) 100%)",
        "gradient-calm":
          "linear-gradient(135deg, rgba(6, 15, 30, 0.9) 0%, rgba(12, 30, 61, 0.85) 30%, rgba(30, 58, 95, 0.8) 60%, rgba(37, 99, 150, 0.75) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
