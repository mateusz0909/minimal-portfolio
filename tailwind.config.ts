import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: '#0B0B0B',
        foreground: '#D6D3D1',
        card: {
          DEFAULT: '#121212',
        },
        border: '#1F1F1F',
        muted: 'var(--muted)',
        black: '#0B0B0B',
        'off-black': '#121212',
        'warm-gray': '#A8A29E',
        'cold-gray': '#6B7280',
        forest: '#2F3E34',
        sand: '#D6D3D1',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        jost: ['var(--font-jost)', 'sans-serif'],
        hanken: ['var(--font-hanken)', 'sans-serif'],
      },
    },
  },
  plugins: [animate],
} satisfies Config
