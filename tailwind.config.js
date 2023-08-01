/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        surface: {
          "000": "var(--color-surface-000)",
          "050": "var(--color-surface-050)",
          "100": "var(--color-surface-100)",
          "150": "var(--color-surface-150)",
          "200": "var(--color-surface-200)",
          "250": "var(--color-surface-250)",
          "300": "var(--color-surface-300)",
        },
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
