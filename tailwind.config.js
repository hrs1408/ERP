/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F8F8F8',
        primary: '#1795A8',
        'primary-light': '#24AFC1',
        'primary-dark': '#12889a',
        secondary: '#ffc326',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
