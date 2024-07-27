/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#3F5D45",
        "primary-200": "#EAF0ED",
        "primary-300": "#FFFFFF",
        "primary-400": "#FFE180",
        "primary-500": "#1F0F39",
        "primary-600": "#8DA291",
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      {
        mytheme: {
          primary: "#7000FF",
          secondary: "#11002D",
          accent: "#6E01F8",
          neutral: "#1F0F39",
          "base-100": "#FFFFFF",
          info: "#E9E2F3",
          success: "#380C7E",
          // warning: "#28085",
          error: "#000000",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
