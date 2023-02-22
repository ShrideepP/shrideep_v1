/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": "#655EE8",
        "secondary": "#FB7185",
        "tirtiary": "#17127D",
        "dominant": "#061537",
        "compliment": "#4B5563",
        "background": "#F9FAFB",
      }, fontFamily: {
        "barlow-extrabold": "Barlow-ExtraBold",
        "barlow-bold": "Barlow-Bold",
        "barlow-semibold": "Barlow-SemiBold",
        "barlow-medium": "Barlow-Medium",
        "barlow-regular": "Barlow-Regular",
        "anonymouspro-bold": "AnonymousPro-Bold",
      }
    },
  },
  plugins: [],
};