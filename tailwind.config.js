/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary: "#3238f2",
        heroBg: "#3498db",
      },
      fontFamily: {
        'display': ["Poppins", "sans-serif"],
        'body': ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}

