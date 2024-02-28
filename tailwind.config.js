/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Space: ["Space Grotesk", "Sans-serif"],
      },
    },
  },

  plugins: [require("daisyui")],
};
