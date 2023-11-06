/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: '#7D30EE',
        success: '#25AD25',
        secondary: '#FFBD17',
        error: '#FF0606',
      },
      backgroundColor: {
        primary: '#7D30EE',
        secondary: '#FFBD17',
        error: '#FF0606',
        grey: '#DEDCDC',
      },
      borderColor: {
        primary: '#7D30EE',
      },
      fontFamily: {
        primary: ['var(--font-primary)'],
      },
      padding: {
        primary: '3vw',
      },
      minHeight: {
        main: 'calc(100vh - 72px)',
      },
      outlineColor: {
        primary: '#7D30EE',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
