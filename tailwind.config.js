/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0A',
          50:  '#0F0F0F',
          100: '#141414',
          200: '#1A1A1A',
          300: '#1F1F1F',
          400: '#2A2A2A',
          500: '#3A3A3A',
        },
        bone: {
          DEFAULT: '#FFFFFF',
          dim:     '#E5E5E5',
        },
        ash: {
          DEFAULT: '#888888',
          soft:    '#6B6B6B',
          faint:   '#4A4A4A',
        },
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif:   ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
        mono:    ['var(--font-jetbrains-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        display: ['var(--font-display)', 'ui-serif', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.35' },
        },
      },
      animation: {
        'fade-up':   'fade-up 0.6s ease-out both',
        'pulse-dot': 'pulse-dot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
