import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        surface:      'rgb(var(--color-surface) / <alpha-value>)',
        'surface-2':  'rgb(var(--color-surface-2) / <alpha-value>)',
        ink:          'rgb(var(--color-ink) / <alpha-value>)',
        'ink-muted':  'rgb(var(--color-ink-muted) / <alpha-value>)',
        amber:        'rgb(var(--color-amber) / <alpha-value>)',
        edge:         'rgb(var(--color-edge) / <alpha-value>)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}

export default config
