/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'selector', //important for Them switching
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var( --foreground)',
      },
    },
  },
  plugins: [],
}
