// module.exports = {
//   purge: [],
//   darkMode: "class", // or 'media' or 'class'
//   theme: {
//     extend: {
//       colors: {
//         darkcol: "#011627"
//       }
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'], // Enables manual dark mode using a class
  theme: {
    extend: {
      colors: {
        darkcol: "#011627", // Custom dark color
      },
    },
  },
  plugins: [],
};
