/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit', // Enable JIT for faster builds and smaller CSS
  future: {
    hoverOnlyWhenSupported: true, // Optimize for mobile
    respectDefaultRingColorOpacity: true,
  },
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
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
    placeholderOpacity: false,
    ringOpacity: false,
    divideOpacity: false,
    backgroundOpacity: false,
    textOpacity: false,
    borderOpacity: false,
  },
};
