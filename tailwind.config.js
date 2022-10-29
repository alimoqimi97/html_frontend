/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  content: ["./**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: "0.6rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
    },
    extend: {
      boxShadow: {
        'card-shadow': '-1px 2px 6px 0px rgba(212,226,237,1)'
      },
      height: {
        264: "66rem",
      },
      width: {
        22: "5.5rem",
        34: "8.5rem",
      },
      translate: {
        0.75: "0.1875rem",
      },
    },
    screens: {
      xs: "360px",
      sm: "480px",
      md: "744px",
      lg: "980px",
      xl: "1442px",
    },
  },
  plugins: [require("tailwindcss-dir")()],
};