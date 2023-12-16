/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        text: "#3a6cf4",
        background: "#050505",
        primary: "#3a6cf4",
        secondary: "#6e6e6e",
        accent: "#6e6e6e",
        "accent-light": "#601cfc",
      },
    },
  },
  plugins: [],
}

