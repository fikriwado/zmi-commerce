/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1320px',
      '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      container: {
        padding: {
          DEFAULT: '1rem'
        }
      }
    }
  },
  plugins: []
}
