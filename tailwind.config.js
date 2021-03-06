module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'elements': "url('/images/background.svg')"
      },
      fontFamily: {
        'sans': ['poppins']
      },
      colors: {
        'red-brand': '#FB6C6C',
        'blue-brand': '#86CAFF',
        'green-brand': '#5EDFC5',
        'yellow-brand': '#FEDD86',
        'gray-brand': '#484848',
        'dark-brand': '#545454',
      },
      width: {
        '480': '480px'
      },
      height: {
        '10%': '10%',
        '90%': '90%',
        '480': '480px'
      },
      margin: {
        '98': '26rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
