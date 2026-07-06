/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          black: '#0d0d0d',
          'black-soft': '#161616',
          'black-mid': '#1e1e1e',
          sand: '#c8b99a',
          'sand-light': '#e8ddd0',
          beige: '#f2ede6',
          'beige-warm': '#ede5d8',
          olive: '#5c6b4a',
          'olive-light': '#7a8c62',
          terracotta: '#b85c38',
          'terracotta-light': '#d4703f',
          'off-white': '#f7f4ef',
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
