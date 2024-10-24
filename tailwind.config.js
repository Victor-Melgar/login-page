/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx",
    "./src/components/Login/Login.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fundo': "url('/assets/bg.webp')"
      },
    },
  },
  plugins: [],
}

