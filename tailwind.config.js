/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#242424',
        primaryText: '#337CCF',
        secondaryText: '#F2F2F2',
      }
    },
    screens: {
      'sm': '576px',
      'md': '960px',
    },
  },
  plugins: [],
}
