/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color":"#15161C",
        "profile-nav-bg":"#1D2027",
        "side-nav-bg":"#17191F",
        "top-nav-bg-right":"#1D2028",
        'gradient': 'linear-gradient(90deg, #5A78FF 0%, #072AC8 100%)',
        "color":"#516382"
      }
    },
  },
  plugins: [],
}