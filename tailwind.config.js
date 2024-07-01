/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    screens: {
      xsm: '480px',
      sm: '575px',
      md: '768px',
      lg: '1024px',
      xl: '1430px'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xsm:'480px',
        sm: '575px',
        md: '768px',
        lg: '1024px',
        xl: '1430px'
      },
    },
    extend: {
      colors:{
        'primary':'#1A1A1A',
        'secondary':'#EB664E',
        'border_color':'#E9E9E9',
        'light_bg':'#F6F8FA', 
      },
      fontFamily:{
        'roboto' : ['Roboto','sans-serif']
      },
      fontSize:{
        '40':'40px'
      },
      lineHeight:{
        '52px':'52px',
        '22px':'22px'
      },
      gap:{
        '10px':'10px',
        '30px':'30px',
      }
    },
  },
  plugins: [],
}

