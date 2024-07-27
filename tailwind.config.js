module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        orange: "hsl(25, 97%, 53%)",
        white: "hsl(0, 0%, 100%)",
        "light-gray": "hsl(217,12%, 63%)",
        "dark-blue": "hsl(213,19%,18%)",
        "very-dark-blue": "hsl(216,12%,8%)",
      },
      fontSize: {
        base: "15px",
      },
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      height: {
        "custom-26em": "26em",
        108: "27rem",
      },
      screens: {
        "sm-375": { max: "375px" },
      },
      plugins: [],
    },
  },
};
