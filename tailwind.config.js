/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080808',
        'bg-secondary': '#0F0F0F',
        'bg-card': '#141414',
        'gold': '#C9A84C',
        'gold-light': '#E8C97A',
        'gray-text': '#9A9A9A',
        'border-color': '#1E1E1E',
        'border-gold': '#C9A84C',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
