/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#54595F',
        textBase: '#7A7A7A',
        accent: '#030303',
        darkGray: '#222222',
        olive: '#949B34',
        themeGreen: '#919734',
        themeLight: '#d4da46',
      },
      animation: {
        vibrate: 'vibrate 0.5s linear infinite',
      },
      keyframes: {
        vibrate: {
      '0%': { transform: 'translateX(0)' },
      '25%': { transform: 'translateX(-2px)' },
      '50%': { transform: 'translateX(2px)' },
      '75%': { transform: 'translateX(-2px)' },
      '100%': { transform: 'translateX(0)' },
    },
      },
      boxShadow: {
        green: '0 4px 20px rgba(34, 197, 94, 0.5)',
      },
      fontFamily: {
        primary: ['Oswald', 'sans-serif'],
        secondary: ['"Roboto Condensed"', 'sans-serif'],
        text: ['Roboto', 'sans-serif'],
        accent: ['Roboto', 'sans-serif'],
      },
      fontWeight: {
        primary: '600',
        secondary: '400',
        text: '400',
        accent: '500',
      },
    },
  },
  plugins: [],
};