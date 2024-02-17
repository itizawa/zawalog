/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const { nextui } = require('@nextui-org/react');
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      layout: {},
      themes: {
        dark: {
          colors: {
            background: '#111122',
            text: '#eee',
            secondary: '#7856ff',
            selection: '#7856ff',
          },
          space: {},
          fonts: {
            sans: 'Hiragino Mincho Pro, Yu Mincho, YuMincho, MS PMincho, serif',
            mono: 'Hiragino Mincho Pro, Yu Mincho, YuMincho, MS PMincho, serif',
          },
        },
      },
    }),
  ],
};
