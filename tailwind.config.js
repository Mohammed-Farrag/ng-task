/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#FF7F5C',
        secondry: '#F9F5F3',
        active: '#F4DBD4',
        black: '#3D5161'
      },
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif'],
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif']
    }

},
  plugins: [],
}

