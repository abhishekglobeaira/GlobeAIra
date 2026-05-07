/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        vibrant: {
          pink: '#ec4899',
          purple: '#a855f7',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          emerald: '#10b981',
          yellow: '#fbbf24',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.5)',
        'glow': '0 0 30px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 60px rgba(59, 130, 246, 0.6)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.5)',
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.5)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.5)',
      },
    },
  },
  plugins: [],
};
