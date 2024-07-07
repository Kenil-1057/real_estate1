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
        'light_green':'#E7C873',
        'dark_green':'#1F4B43',
        'dark_maroon':'#3D3E3F',
        'light_blue' :'#F9F9F9',
        'blur_white' : 'rgba(255, 255, 255, 0.47)',
        'footer_border':'rgba(255, 255, 255, 0.08)',
        'footer_button':'#2C2C2C',
        'apps_color' :'#2A2A2A' 
      },
      fontFamily:{
        'roboto' : ['Roboto','sans-serif']
      },
      fontSize:{
        '40':'40px',
        '26':'26px',
        '30':'30px',
        '13px':'13px',
      },
      gap:{
        '10px':'10px',
        '30px':'30px',
        '185':'185px',
        '60':'60px'
      },
      backgroundImage:{
        'property_1':"url('../assets/c1.jpg.svg')",
        'property_2':"url('../assets/c2.jpg.svg')",
        'property_3':"url('../assets/c3.jpg.svg')",
        'property_4':"url('../assets/c4.jpg.svg')",
        'property_5':"url('../assets/c5.jpg.svg')",
        'property_6':"url('../assets/c6.jpg.svg')",
        'frontview_bunglaow':"url('../assets/9e29f44547287311e630a76b9d3682f8.jfif')",
        'bunglaow_hall':"url('../assets/ce6baf6e4fd62c7ea0c3c0eb1bcc724d.jfif')",
        'bunglaow_video':"url('../assets/d79f21d383175dd81978fa658d189b03.jfif')",
      },
      minHeight:{
        '395':'395px',
        '335':'335px',
        '333':'333px',
      },
      padding:{
        '155':'155px',
        '185':'185px',
        '165':'165px',
        '30':'30px',
        '75':'75px',
        '95':'95px',
        '7px':'7px',
        '14px':'14px',
        '6px':'6px',
        '220':'220px',
        '18px':'18px',
      },
      lineHeight:{
        '30':'30px',
        '60':'60px',
        '72':'72px',
        '52px':'52px',
        '22px':'22px',
        '18px':'18px',
        '19px':'19px',
        '78':'78px',
      },
      margin:{
        '2px':'2px',
        '30px':'30px',
        '10px':'10px',
        '55':'55px',
        '95':'95px'
      },
      width:{
        '90':'90px',
        '6px':'6px',
        '7px':'7px',
        '370':'370px',
        '150':'150px',
        '60':'60px'
      },
      height:{
        '90':'90px',
        '6px':'6px',
        '60':'60px'
      },
      borderRadius:{
        '33':'33px',
        '44':'44px',
        '50':'50px'
      }
    },
  },
  plugins: [],
}

