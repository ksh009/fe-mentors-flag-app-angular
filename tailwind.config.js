// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}", "./src/index.html"
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlueDM: 'hsl(207, 26%, 17%)',
        veryDarkBlueLM: 'hsl(200, 15%, 8%)',
        darkGray: 'hsl(0, 0%, 52%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        bodyHomepage: '14px',
        bodyDetailPage: '16px',
      },
      fontWeight: {
        light: 300,
        semiBold: 600,
        bold: 800,
      },
    },
  },
  plugins: [],
};
