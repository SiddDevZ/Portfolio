/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xss': '220px', 
        'xs': '480px', 
        '3xl': '1920px',
      },
      fontFamily: {
        pop: ["Poppins", "serif"],
        inter: ['Inter', 'serif'],
        prata: ['Prata', 'serif'],
        // merri: ['Merriweather', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
