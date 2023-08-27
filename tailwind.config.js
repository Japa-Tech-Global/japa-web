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
        primary: '5vw',
      },
      minHeight: {
        main: 'calc(100vh - 72px)',
      },
      outlineColor: {
        primary: '#7D30EE',
      },
    },
  },
  plugins: [],
};
