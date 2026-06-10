import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#E07A12',
          dark: '#c4680b',
          soft: '#fdeedd',
        },
        'brand-blue': {
          DEFAULT: '#1B5FA8',
          dark: '#164e89',
        },
        ink: {
          DEFAULT: '#1b1c1e',
          2: '#4a4d52',
          3: '#7c8089',
        },
        line: '#e7e8ea',
        surface: {
          2: '#f5f6f7',
          3: '#eef0f2',
        },
      },
      fontFamily: {
        head: ['var(--font-chakra)', 'sans-serif'],
        body: ['var(--font-barlow)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1180px',
      },
    },
  },
  plugins: [],
}

export default config
