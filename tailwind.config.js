// const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('./images/bg.jpg')",
        "about-bg": "url('.//images/about.png)",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   // ...
//   plugins: [
//     plugin(function ({ addBase, addComponents, addUtilities, theme }) {
//       main_bg({
  
//       });
//       addComponents({
//         ".card": {
//           backgroundColor: theme("colors.white"),
//           borderRadius: theme("borderRadius.lg"),
//           padding: theme("spacing.6"),
//           boxShadow: theme("boxShadow.xl"),
//         },
//       });
//       addUtilities({
//         ".content-auto": {
//           contentVisibility: "auto",
//         },
//       });
//     }),
//   ],
// };