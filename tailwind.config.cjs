/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {            
        sm: '1rem',
        md: '2rem',
        lg: 0,      
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
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
     
      
},
  },
  plugins: [],
}
