import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        '163300': '#163300',
        '0e0f0c1f': '#0e0f0c1f',
        '0e0f0c': '#0e0f0c',
        a8200d: '#a8200d',
        c9cbce: '#c9cbce',
        '454745': '#454745',
        e74848: '#e74848',
        '9fe870': '#9fe870',
        '80e142': '#80e142',
      },
      boxShadow: {
        input: 'inset 0 0 0 1px #868685',
        'input-hover': 'inset 0 0 0 2px #6c6c6b',
        'input-focus': 'inset 0 0 0 3px #163300',
        'input-error': 'inset 0 0 0 2px #a8200d',
        'input-error-focus': 'inset 0 0 0 3px #a8200d',
      },
    },
  },
  plugins: [],
} satisfies Config;
