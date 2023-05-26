/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        primary: ['var(--primary)'],
        secundary: ['var(--secundary)'],
        terciary: ['var(--terciary)'],
      },
      colors: {
          gray: {
            300: '#EEEEEE',
            800: '#222831',
            600: '#2F3742',
          },
          yellow:{
            300: '#FFD369',
          },
      },
    },
  },
  plugins: [],
}
