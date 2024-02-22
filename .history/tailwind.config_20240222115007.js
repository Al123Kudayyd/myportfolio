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
        fade: {
          '0%': { transform: 'translateX(-100%)', opacity: '1' },
          '100%': { transform: 'translateX(0%)' },
        },
        in: {
          '0%': { transform: 'translateX(100%)', opacity: '1' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        fade: 'fade 0.7s ease',
        in: 'fades 0.7 ease'
      }
    },
  },
  plugins: [],
}

