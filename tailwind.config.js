/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ['0.75rem', '1rem'], // Very small font
      },
      spacing: {
        '2': '0.5rem', // For smaller padding/margin
      },
    },
  },
  plugins: [],
}
