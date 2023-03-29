/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '25px',
        '8': '35px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
        autoGrid: "repeat(auto-fill,280px)",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
      backdropBlur: {
        'none': '0',
        'xs': '5px',
        'sm': '10px',
        'md': '15px',
        'lg': '20px',
        'xl': '25px',
        '2xl': '30px',
        '3xl': '35px',
        '4xl': '40px',
        '5xl': '45px',
        '6xl': '50px',
      },
      maxWidth: {
        "1/2": "50%",
        "13*100": "1350px",
        "50ppx":"100px",
        "20ppx":"350px",
      },
      width: {
        "3*100": "280px",

      },
      height: {
        "3*100": "280px",
      },
    },
  },
  variants: {
    backdropBlur: ['responsive'],
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
