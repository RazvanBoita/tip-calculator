/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'forBg':'#26c0ab',
        'vdark':'#00494d',
        'dark':'#5e7a7d',
        'normal':'#7f9c9f',
        'lighter':'#c5e4e7',
        'xlight':'#f4fafa'
      },
      fontFamily : {
        'mono':['Space Mono','sans-serif']
      }
    },
  },
  plugins: [],
}

