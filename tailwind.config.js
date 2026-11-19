/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#14532d',
          900: '#0d3823',
          950: '#072416',
        },
        leaf: {
          50: '#f4fbf4',
          100: '#e5f6e5',
          200: '#cceecb',
          300: '#a3dfa2',
          400: '#6fc76d',
          500: '#44aa42',
          600: '#348e32',
          700: '#2c702b',
          800: '#275a26',
          900: '#224a22',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        cream: {
          50: '#fffdf9',
          100: '#fbf9f4',
          200: '#f6f2e8',
          300: '#ece5d4',
          400: '#ded3bc',
          500: '#ccbba1',
        },
        charcoal: {
          800: '#252f2a',
          900: '#17201c',
          950: '#0f1512',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(13, 56, 35, 0.08)',
        'card': '0 10px 30px -4px rgba(13, 56, 35, 0.1)',
        'elevated': '0 20px 40px -10px rgba(13, 56, 35, 0.16)',
        'glow': '0 0 25px rgba(34, 197, 94, 0.35)',
        'gold-glow': '0 0 25px rgba(245, 158, 11, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delay': 'float 7s ease-in-out 2s infinite',
        'sway': 'sway 8s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
