/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '640px',
      // => @media (min-width: 576px) { ... }

      'tablet': '960px',
      // => @media (min-width: 960px) { ... }

      'largeScreen': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
    }
    },
    fontFamily: {
      'sans': 'ui-sans-serif',
      // 'serif': ['ui-serif', 'Georgia', ...],
      // 'display': ['Oswald', ...]
    }
    
  },
  plugins: [],
}
