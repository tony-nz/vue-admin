const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@tony-nz/vue-admin-core/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@tony-nz/vue-form-generator/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      spacing: {
        80: "20rem",
        108: "27rem",
        160: "40rem",
      },
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        dark: colors.gray,
        blue: {
          50: "#32d1ff",
          100: "#28c7ff",
          200: "#1ebdff",
          300: "#14b3ff",
          400: "#0aa9ff",
          500: "#009ffe",
          600: "#0095f4",
          700: "#008bea",
          800: "#0081e0",
          900: "#0077d6",
        },
        "bg-blue": {
          50: "#32d1ff",
          100: "#28c7ff",
          200: "#1ebdff",
          300: "#14b3ff",
          400: "#0aa9ff",
          500: "#009ffe",
          600: "#0095f4",
          700: "#008bea",
          800: "#0081e0",
          900: "#0077d6",
        },
        // "breadcrumb-hero": "#222E50",
        // primvue tailwind
        "primary-50": "rgb(var(--primary-50))",
        "primary-100": "rgb(var(--primary-100))",
        "primary-200": "rgb(var(--primary-200))",
        "primary-300": "rgb(var(--primary-300))",
        "primary-400": "rgb(var(--primary-400))",
        "primary-500": "rgb(var(--primary-500))",
        "primary-600": "rgb(var(--primary-600))",
        "primary-700": "rgb(var(--primary-700))",
        "primary-800": "rgb(var(--primary-800))",
        "primary-900": "rgb(var(--primary-900))",
        "primary-950": "rgb(var(--primary-950))",
        "surface-0": "rgb(var(--surface-0))",
        "surface-50": "rgb(var(--surface-50))",
        "surface-100": "rgb(var(--surface-100))",
        "surface-200": "rgb(var(--surface-200))",
        "surface-300": "rgb(var(--surface-300))",
        "surface-400": "rgb(var(--surface-400))",
        "surface-500": "rgb(var(--surface-500))",
        "surface-600": "rgb(var(--surface-600))",
        "surface-700": "rgb(var(--surface-700))",
        "surface-800": "rgb(var(--surface-800))",
        "surface-900": "rgb(var(--surface-900))",
        "surface-950": "rgb(var(--surface-950))",
      },
    },
    height: {
      "8v": "8vh",
    },
    fontFamily: {
      sans: ["Poppins", ...fontFamily.sans],
    },
  },
  plugins: [],
  darkMode: "class",
  safelist: [
    {
      pattern: /^(bg-)/,
      // pattern: /^(bg-|border-|text-)/,
      // variants: ["hover", "active"],
    },
  ],
  variants: {
    extend: {
      inset: ["group-hover"],
    },
  },
  purge: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./node_modules/@tony-nz/vue-admin-core/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/@tony-nz/vue-form-generator/**/*.{vue,js,ts,jsx,tsx}",
    // etc.
  ],
};
