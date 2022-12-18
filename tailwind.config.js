/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      background: "var(--color-background)",
      surface: "var(--color-surface)",
      text: "var(--color-text)",
    },
    container: {
      center: true,
    },
    extend: {},
    fontFamily: {
      mono: ["Consolas", "Monaco", "Lucida Console", "monospace"],
    },
  },
  plugins: [],
}