module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        space: "#2D8BA5",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
