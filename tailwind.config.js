/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "40px",
        sm: "20px",
        md: "30px",
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      "circular-book": ["Circular Std Book", "sans-serif"],
      "circular-medium": ["Circular Std Medium", "sans-serif"],
      "circular-bold": ["Circular Std Bold", "sans-serif"],
    },
    colors: {
      txt: {
        primary: "#3D4F5C",
        secondary: "#FB8958",
      },

      complementary: {
        green: "#46B8C8",
        white: "#FFFFFF",
        gray: "#939393",
      },

      card: {
        first: "#A9BC87",
        second: "#8BB5C9",
        third: "#00A0B6",
        fourth: "#8B60D3",
      },

      bg: {
        primary: "#FFFFFF",
        secondary: "#FBFAFA",
        accent: "#FFC351",
        form: "#F3F3F3",
      },
    },
    fontSize: {
      xxxs: ["14px", { lineHeight: "14px" }],
      xxs: ["16px", { lineHeight: "20px", letterSpacing: "-0.16px" }],
      xs: ["18px", { lineHeight: "18px", letterSpacing: "-0.18px" }],
      s: ["24px", { lineHeight: "30px", letterSpacing: "-0.24px" }],
      base: ["30px", { lineHeight: "38px", letterSpacing: "-0.3px" }],
      l: ["40px", { lineHeight: "50px", letterSpacing: "-0.4px" }],
      xl: ["50px", { lineHeight: "50px", letterSpacing: "-1px" }],
      xxl: ["60px", { lineHeight: "55px", letterSpacing: "-1.2px" }],
      xxxl: ["85px", { lineHeight: "85px", letterSpacing: "-1.7px" }],
    },
    lineHeight: {
      none: "1",
      tight: "24px",
      snug: "30px",
      normal: "35px",
      relaxed: "45px",
    },
    letterSpacing: {
      tighter: "-0.5px",
      tight: "-0.32px",
      normal: "-0.3px",
    },
    backgroundPosition: {
      "l-r": "left, right",
      "r-b": "right bottom",
      c: "center",
    },
    extend: {},
  },
  plugins: [],
};
