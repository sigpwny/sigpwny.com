/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/pages_md/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        text: "var(--color-text)",
        transparent: "transparent",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      mono: [
        "Consolas",
        "Monaco",
        "Lucida Console",
        "ui-monospace",
        "SF Mono",
        "SFMono-Regular",
        "Menlo",
        "DejaVu Sans Mono",
        "monospace",
      ],
    },
  },
  plugins: [],
};
