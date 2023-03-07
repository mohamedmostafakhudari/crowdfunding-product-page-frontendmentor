/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "hsl(176, 50%, 47%)",
        primaryActive: "hsl(176, 72%, 28%)",
        neutralBlack: "hsl(0, 0%, 0%)",
        neutralGray: "hsl(0, 0%, 48%)",
      },
    },
    fontFamily: {
      body: ['"Commissioner"', "sans-serif"],
    },
  },
  plugins: [],
};
