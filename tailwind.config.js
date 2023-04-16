/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    colors: {
      white: '#ffffff',
      red: "#f65351",
      blue: "#0a317b",
      "vl-grayish-blue": "#f7fafd",
      "l-grayish-blue-1": "#e5effa",
      "l-grayish-blue-2": "#dde7ee",
      "grayish-blue": "#939dae",
      "d-grayish-blue": "#5e6778",
      "vd-blue": "#1c202b",
    },
    extend: {},
  },
  plugins: [],
};
