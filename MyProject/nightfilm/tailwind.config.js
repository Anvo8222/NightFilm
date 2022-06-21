/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        navbar: '0 0 10px #999',
      },
    },
    screens: {
      sm: { max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px', max: '1023px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px', max: '1280px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px', max: '1535px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primaryColor: '#000',
      primaryTextColor: '#fc4c00',
      textWhiteColor: '#f5f5f5',
      textHeaderColor: '#f5f5f5',
      iconHeaderColor: '#ffff00',
      textHeaderHoverColor: '#ffff00',
      backgroundColorSelectUser: '#000000cc',
      backgroundName: '#080808f2',
      borderPrimaryColor: '#fc4c00',
      borderItemWhiteColor: '#999',
      backgroundLable: '#a21d0a',
      backgroundTransparent: '#00000000',
      backgroundHeaderCategory: '#a21d0a',
      borderImgGrey: '#ffffff33',
      ratingColorHave: '#ffff00',
      backgroundLabel2: '#ffa500',
      ratingColorNo: '#ffffff',
      boderColorLayout: '#25252566',
      backgroundNavBar: '#000000cc',
      backgroundBlockNavbar: '#141414cc',
      backgroundViewDetail: '#181818',
      backgroundButtonTrailer: '#337ab7',
      backgroundButtonWatch: '#cf1b16',
      backgroundDescreptionDetail: '#222',
    },
  },
  plugins: [],
};
