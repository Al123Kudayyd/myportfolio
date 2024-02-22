/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/Nav.{js,jsx,ts,tsx}",
    "./src/components/Main.{js,jsx,ts,tsx}",
    "./src/components/App.{js,jsx,ts,tsx}",
    "./src/components/Model.{js,jsx,ts,tsx}",
    "./src/components/Projects.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        smooth: {
          '0%': { transform: 'translateX(-100%)', opacity: '' },
          '100%': { transform: 'translateX(0%)' },
        }
      }
    },
  },
  plugins: [],
}

