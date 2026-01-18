import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'bmx-orange': '#ff6b35',
        'bmx-yellow': '#f7931e',
        'bmx-cyan': '#00d9ff',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: {
          primary: '#ff6b35',
          secondary: '#f7931e',
          accent: '#00d9ff',
          neutral: '#3d4451',
          'base-100': '#1a1a1a',
          'base-200': '#2d2d2d',
          'base-300': '#404040',
          'base-content': '#ffffff',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272',
        },
      },
    ],
    darkTheme: 'dark',
    base: true,
    styled: true,
    utils: true,
    prefix: '',
    logs: true,
    themeRoot: ':root',
  },
};

