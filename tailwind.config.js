module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        skatestheme: {
          primary: "#06b6d4",
          // secondary: "#74a8f2",
          secondary: "#c0f5f9",
          accent: "#2E5B9E",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],

}
