/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#000000',
          light: '#fafafa',
        },
        secondary: {
          dark: '#18181b',
          light: '#ffffff',
        },
        accent: {
          blue: '#5dbcfc',
          'blue-light': '#0095f6',
          orange: '#ff8c00',
          purple: '#9333ea',
          cyan: '#22d3ee',
        },
        border: {
          dark: 'rgba(63, 63, 70, 0.4)',
          light: 'rgba(202, 202, 202, 0.518)',
        },
        text: {
          title: {
            dark: 'rgba(244, 244, 245, 1)',
            light: 'rgba(39, 39, 42, 1)',
          },
          subtitle: {
            dark: 'rgba(161, 161, 170, 1)',
            light: 'rgba(82, 82, 91, 1)',
          },
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'cursor-blink': 'blink 1s step-end infinite',
        'modal-appear': 'modalAppear 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        modalAppear: {
          '0%': { transform: 'scale(0)' },
          '60%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
