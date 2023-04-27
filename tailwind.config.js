module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gen: {
          rosita: "#FF7b8b",
          rosaPastel: "#FF95AF",
          verde: "#d6ea74",
          menta: "#AFeab9",
          coral: "#FFB3A3",
          amarillo: "#FFEB62",
          azul: "#BAE4E3",
          verdeMenta:"#CDEFAD",
        },
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
