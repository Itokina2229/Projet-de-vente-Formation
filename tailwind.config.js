/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D4A5A5",
        secondary: "#E8D7D7",
        accent: "#C7A89E",
        dark: "#1a1a1a",
        light: "#F9F5F3",
      },
    },
  },
  plugins: [],
}
