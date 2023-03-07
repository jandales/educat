/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
        'noto-serif': ['Noto-serif'],
      },
      colors: {
        mantis: '#7BC144',
        indigo: '#3966D8',
        black: '#000000',
        darker : '#222222',
        blue: '#3966D8',
        'ligth-blue': '#4474FF14',
        yellow: '#ffce41',       
      },
      backgroundImage: {
        'gradient-radial-before': 'radial-gradient(circle,#ffce41 50%,rgba(255,255,255,0) 62%)',
        'gradient-radial-after': 'radial-gradient(circle, #ffce41 25%, #fff 70%)',
      },
      keyframes: {
        pulse: {
          '0%': { transform: 'scale(0.95)' }, '70%': { transform: 'scale(1)' }, '100%': { transform: 'scale(0.95)' }
        },

        animation: { pulse: 'pulse 2s ease-in-out infinite', }

      }, 
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      
},
  },
  plugins: [],
}
