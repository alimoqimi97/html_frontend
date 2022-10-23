/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '480px',
      // => @media (min-width: 640px) { ... }

      'md': '744px',
      // => @media (min-width: 640px) { ... }

      'lg': '980px',
      // => @media (min-width: 640px) { ... }

      'xl': '1442px',
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
}
