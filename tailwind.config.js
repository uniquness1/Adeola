/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // darkMode: "selector",
  theme: {
    extend: {
      screens: {
        xs: "100px",
        sm: "500px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
