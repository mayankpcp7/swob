/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "off-black": "#16151c",
        "light-black": "#171717",
        gray: "#404040",
        "light-orange": "#fff4e8",
        yellow: "#ffc229",
        "dark-gray": "#18181b",
        "light-gray": "#f5f5f5",
        "border-white": "#dedede",
      },
      backgroundImage: {
        "yellow-gradient":
          " linear-gradient(192.34deg, #FFD364 0%, #FFBB10 98.09%)",
      },
      borderRadius: {
        "custom-xl": "20px",
      },
      fontSize: {
        "custom-4xl": "60px",
        "custom-3xl": "56px",
        "custom-2xl": "52px",
        "custom-xl": "40px",
        "custom-lg": "36px",
        "custom-xmd": "30px",
        "custom-md": "27.02px",
        "custom-sm": "17px",
        "custom-xs": "11px",
      },
      lineHeight: {
        118: "118%",
        119: "119%",
        110: "110%",
        122: "122%",
        150: "150%",
        170: "170%",
        121: "121%",
        144: "144%",
        111: "111%",
        133: "133%",
        120: "120%",
      },
      letterSpacing: {
        tighter: "-0.14px",
        tight: "-0.09px",
        normal: "-2%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
