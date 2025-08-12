/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  media: false, // No dark mode
  theme: {
    extend: {
      colors: {
        blue: {
          600: "hsl(231, 69%, 60%)", // Primary blue
          950: "hsl(229, 31%, 21%)"  // Neutral dark blue
        },
        red: {
          400: "hsl(0, 94%, 66%)" // Primary red
        },
        grey: {
          50: "hsl(0, 0%, 97%)" // Neutral light grey
        }
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"]
      },
      fontSize: {
        base: "18px" // Body copy font size
      },
      screens: {
        mobile: "375px",
        desktop: "1440px",
        midlg: "950px"
      }
    }
  },
  plugins: []
}
