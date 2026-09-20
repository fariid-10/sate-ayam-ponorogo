/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          body: '#A48873',
          header: '#3B2A26',
          card: '#2D1F1C',
          light: '#F3E9DF',
          accent: '#CBA158',
          'accent-hover': '#A8803D',
        },
      },
    },
  },
  plugins: [],
};