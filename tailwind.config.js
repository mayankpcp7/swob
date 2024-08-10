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
      screens: {
        'custom-xs':'425px',
      },
      colors: {
        "off-black": "#16151c",
        "light-black": "#171717",
        gray: "#404040",
        "light-orange": "#fff4e8",
        yellow: "#ffc229",
        "dark-gray": "#18181b",
        "light-gray": "#f5f5f5",
        "light-black": "#090914",
        "border-white": "#dedede",
        "input-gray": "#646464",
      },
      backgroundImage: {
        "yellow-gradient":
          " linear-gradient(192.34deg, #FFD364 0%, #FFBB10 98.09%)",
        comment: "url(/assets/images/webp/bg-comment.webp)",
      },
      backgroundSize: {
        "Size-100": "100% 100%",
      },
      borderRadius: {
        "custom-xl": "20px",
        "custom-lg": "10px",
        "custom-md": "3.75px",
        "custom-sm": "2.89px",
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
        "custom-xxs": "9.95px",
        "custom-3xs": "6.51px",
        "custom-4xs": "4.34px",
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
        145: "145%",
        111: "111%",
        133: "133%",
        120: "120%",
        164: "164%",
        140: "140%",
        127: "127%",
        156: "156%",
      },
      letterSpacing: {
        tighter: "-0.14px",
        tight: "-0.09px",
        normal: "-2%",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "accordain-shadow":
          "0px 0px 6px 0px #00000012, 0px 10px 15px -3px #0000001A",
      },
      dropShadow: {
        "comment-box": "-10px 18px 18px #0000004a",
      },
      transitionProperty: {
        "height-opacity": "max-height, opacity",
      },
      transitionDuration: {
        500: "500ms",
      },
      transitionTimingFunction: {
        "ease-custom": "ease 0.5s",
      },
      transitionDelay: {
        100: "100ms",
      },
    },
  },
  plugins: [],
};
