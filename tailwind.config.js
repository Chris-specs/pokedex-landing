module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['poppins']
      },
      colors: {
        'red-brand': '#FB6C6C'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
