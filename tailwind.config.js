/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minWidth: {
        '96': '24rem'
      },
      width: {
        '140vw': '140vw',
        '200vw': '200vw'
      },
      right: {
        'neg-40vw': '-40vw'
      },
      fontSize: {
        '2.5xl': '1.62rem',
        '3.5xl': '2rem',
        '10xl': '11rem'
      },
      fontFamily: {
        sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
        'space-grotesk': ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        'inter': ['"Inter"', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        'xl': '0 23px 28px -2px rgba(0, 0, 0, 0.1), 0 13px 13px -2px rgba(0, 0, 0, 0.04)',
        '2xl': '0 30px 60px -12px rgba(0, 0, 0, 0.55)',
      },
      colors: {
        'bg-color': '#FBFDFE',
        'color-primary': '#1654BF',
        'color-primary-light': '#E5F1FB',
        'color-primary-light-opaque': '#E5F1FB40',
        'color-secondary-light': '#FFF7EB',
        'color-primary-dark': '#114092',
        'color-accent': '#871CC4',
        'color-font-default': '#04080F',
        'color-font-detail': '#505860',
        'navy-blue': '#123859',
        transparent: "transparent",
        current: "currentColor",
        black: "#000",
        white: "#fff",
      },
      backgroundImage: {
        'gradient-showcase': 'linear-gradient(45deg, #FFC700 0%, #FFE999 100%)',
        'gradient-designsystem': 'linear-gradient(45deg, #2951DC 0%, #8098EA 100%);',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
        'gradient-conic-t': 'conic-gradient(at top, var(--tw-gradient-stops))',
        'gradient-conic-r': 'conic-gradient(at right, var(--tw-gradient-stops))',
        'gradient-conic-b': 'conic-gradient(at bottom, var(--tw-gradient-stops))',
        'gradient-conic-l': 'conic-gradient(at left, var(--tw-gradient-stops))',
        'gradient-conic-tr': 'conic-gradient(at top right, var(--tw-gradient-stops))',
        'gradient-conic-tl': 'conic-gradient(at top left, var(--tw-gradient-stops))',
        'gradient-conic-br': 'conic-gradient(at bottom right, var(--tw-gradient-stops))',
        'gradient-conic-bl': 'conic-gradient(at bottom left, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'fadeInUp': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'pop': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-6rem)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeInUp: 'fadeInUp 1s ease-out'
      }
    },
  },
  plugins: [],
}

