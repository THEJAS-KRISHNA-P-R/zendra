import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue:          '#1555EF',
        'blue-dark':   '#0d3fc4',
        cream:         '#F0E8D0',
        brand:         '#0f0f0f',
        'green-badge': '#2E7D32',
        'red-badge':   '#E53935',
        'yellow-badge':'#F9D200',
        'pink-card':   '#F8B4C0',
        'yellow-card': '#F5E642',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        body:    ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
