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
        def_border : "#000000"
      },      
      fontFamily: {
        poppins : ["'Poppins'", 'sans-serif']
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        semi_bold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

