import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      gridTemplateColumns: {
        'auto-fill-400': 'repeat(auto-fill, minmax(400px, 1fr))',
        'auto-fit-400': 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      colors: {
        // Brand palette
        teal: {
          50: '#e6fbfb',
          100: '#ccf7f8',
          200: '#99eff1',
          300: '#5ee2e6',
          400: '#22cdd3',
          500: '#00ADB5',
          600: '#008f96',
          700: '#0a7177',
          800: '#115a60',
          900: '#134b50',
        },
        navy: {
          400: '#2b4a9e',
          500: '#22397d',
          600: '#1A2A6C',
          700: '#16255C',
          800: '#101a40',
          900: '#0a1230',
        },
        // Dark surfaces
        ink: {
          900: '#05060c',
          800: '#080a14',
          700: '#0c0f1d',
          600: '#121627',
          500: '#1a2036',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'var(--font-inter)', 'sans-serif'],
        merriweather: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,173,181,0.18), 0 18px 60px -20px rgba(0,173,181,0.45)",
        "glow-sm": "0 10px 40px -15px rgba(0,173,181,0.5)",
        card: "0 20px 60px -25px rgba(0,0,0,0.6)",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.06)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 7s ease-in-out infinite",
        "pulse-glow": "pulse-glow 6s ease-in-out infinite",
        "gradient-x": "gradient-x 6s ease infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
