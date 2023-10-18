/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'navbar': ['Quciksand', 'sans-serif'],
    },
    colors: {
      'green': '#66ecaa',
      'active-nav-link': '#040667',
      'nav-link': '#17323e',
    }
  },
  plugins: [],
}

