module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        light:{
          primary:'#9381FF',
          secondary:'#B8B8FF',
          tertiary:'#F8F7FF',
          quaternary:'#FFEEDD',
          quinary:'#FFD8BE',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
