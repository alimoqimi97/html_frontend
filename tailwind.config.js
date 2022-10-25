/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}"],
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
    fontSize: {
      xs: "0.6rem",
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
    },
    extend: {
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
  },
  plugins: [require("tailwindcss-dir")()],
}
};
