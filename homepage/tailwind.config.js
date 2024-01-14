module.exports = {
  content: ["./**/*.html", "./**/*.md", "hugo.toml"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        warmgray: {
          700: "#2f3335",
          800: "#1e2022",
          900: "#181a1b",
        },
      },
      spacing: {
        '9': '2.25rem',
      }
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
