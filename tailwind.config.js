/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ece5db",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
    },
  },
};
