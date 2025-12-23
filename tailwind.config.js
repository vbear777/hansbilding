/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "rubik": ['Rubik-Regular', 'sans-serif'],
        "rubik-bold": ['Rubik-Bold', 'sans-serif'],
        "rubik-semibold": ['Rubik-SemiBold', 'sans-serif'],
        "rubik-medium": ['Rubik-Medium', 'sans-serif'],
        "beaurivage": ['BeauRivage', 'sans-serif'],
        "kalnia": ['Kalnia', 'sans-serif'],
        "kania-regular": ["Kalnia-Regular", "sans-serif"],
        "kania-bold": ["Kalnia-Bold", "sans-serif"],
      },
      colors: {
        "navy": "#2f4156",
        "teal": "#567c8d",
        "skyblue": "#c8d9e6",
        "beige": "#f5efeb",
        "white": "#ffffff",
        "cream": "#b39a84",
      }
    },
  },
  plugins: [],
}