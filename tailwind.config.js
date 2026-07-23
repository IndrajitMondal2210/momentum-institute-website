/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          primary: '#082B6F',
          deep: '#041B45'
        },
        electric: '#135DCC',
        clean: '#F7FAFF',
        accent: {
          yellow: '#FFC928',
          red: '#D62828'
        },
        text: {
          dark: '#172033',
          muted: '#5F6B7A'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        brand: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}