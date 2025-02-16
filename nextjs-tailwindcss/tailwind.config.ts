import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      orbitron: ['Orbitron', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      'spin-forever': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
      'spin-reserve-forever': {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(-360deg)' },
      },
      bounce: {
        '0%': { transform: 'translateY(0)' },
        '40%': { transform: 'translateY(20px)' },
        '60%': { transform: 'translateY(10px)' },
        '100%': { transform: 'rotate(0)' },
      },
      'move-left-to-right': {
        '0%': { transform: 'rotate(-360deg)', left: '-3%', opacity: '1' },
        '99%': { transform: 'rotate(0deg)', left: '110%', opacity: '1' },
        '100%': { transform: 'rotate(0deg)', left: '200%', opacity: '0' },
      },
      'fade-down': {
        '0%': { opacity: '0', transform: 'translateY(-20px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      'reduce-width': {
        '0%': {
          width: '100%',
          opacity: '1',
          visibility: 'visible',
        },
        '100%': {
          width: '0%',
          visibility: 'hidden',
        },
      },
      'fade-in': {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      'fade-out': {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },
      'fade-in-scale': {
        '0%': { opacity: '0', transform: 'scale(0.5)' },
        '100%': { opacity: '1', transform: 'scale(1)' },
      },
      'fade-out-scale': {
        '0%': { opacity: '1', transform: 'scale(1)' },
        '100%': { opacity: '0', transform: 'scale(0.5)' },
      },
      pulse: {
        '0%, 100%': { opacity: '1' },
        '50%': { opacity: '0.5' },
      },

      'move-up': {
        '0%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-100%)' },
        '100%': { transform: 'translateY(0)' },
      },
      'move-down': {
        '0%': { transform: 'translateY(-100%)' },
        '50%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-100%)' },
      },
      scrollUp: {
        '0%': { transform: 'translateY(100%)' },
        '80%': { transform: 'translateY(10%)' },
        '100%': { transform: 'translateY(0)' },
      },
    },
    animation: {
      'spin-forever': 'spin-forever 20s linear infinite',
      'spin-fast-forever': 'spin-forever 5s linear infinite',
      'spin-reserve-fast-forever': 'spin-reserve-forever 5s linear infinite',
      'spin-reserve-forever': 'spin-reserve-forever 20s linear infinite',
      bounce: 'bounce 5s ease-in-out infinite',
      'ball-spin': 'move-left-to-right 3s ease-in-out forwards',
      'show-text': '0.4s reduce-width 1.2s ease-in-out forwards',
      'fade-down': 'fade-down 0.5s ease-in-out',
      'fade-in': 'fade-in 0.3s ease-in-out',
      'fade-out': 'fade-out 0.3s ease-in-out',
      'fade-in-scale': 'fade-in-scale 0.3s ease-in-out',
      'fade-out-scale': 'fade-out-scale 0.3s ease-in-out ',
      pulse: 'pulse 1.5s ease-in-out infinite',
      'move-up': 'move-up 20s linear infinite',
      'move-down': 'move-down 20s linear infinite',
      'scroll-up': 'scrollUp 3s ease-out',
    },
  },
  plugins: [],
};
export default config;
