/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary : "#111111",
        secondary : "#666666",
        tertiary : "#999999",
        background : "#F4F5F5",
      },
    },
  },
  plugins: [],
}

