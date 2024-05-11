import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm-md': '650px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      sans: ['var(--font-raleway)'],
      wf: ['var(--font-waterfall)'],
    },
    extend: {
      backgroundImage: {},
    },
  },
  plugins: [],
};
export default config;
