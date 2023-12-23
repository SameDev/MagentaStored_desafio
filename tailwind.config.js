/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9D43B6",
          secondary: "#f46036",
          accent: "#08a4bd",
          neutral: "#17183B",
          "base-100": "#F1F1FA",
          info: "#0a014f",
          success: "#3ddc97",
          warning: "#facc15",
          error: "#e11d48",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
