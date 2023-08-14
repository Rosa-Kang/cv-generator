/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx",
    "./src/**/*.ts",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f8f4eb",
        "gray-50": "#efe6e6",
        "gray-100": "#dfcccc",
        "gray-500": "#5e0000",
        "primary-100": "#ffe1e0",
        "primary-300": "#ffa6a3",
        "primary-500": "#ff6b66",
        "primary-600": "#704c2c",
        "secondary-400": "#ffcd58",
        "secondary-500": "#ffc132",
      }
    },
  },
  plugins: [],
}
