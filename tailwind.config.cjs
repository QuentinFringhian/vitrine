/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  mode: 'jit',
  theme: {
    colors: {
      primary: '#177283',
      secondary: '#79B0D6',
      light: '#E7E6E5',
      dark: '#242A3A',
      grey: '#7E898F',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
