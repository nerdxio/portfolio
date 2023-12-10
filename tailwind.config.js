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
        secondary: "#f48e3a",
        accent: "#3a6cf4",
        "accent-light": "#601cfc",
      },
    },
  },
  plugins: [],
}

