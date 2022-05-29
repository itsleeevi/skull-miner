module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#000",
        orange: "#333",
        peach: "#F9924D",
        yellow: "#FBCD5F",
        light: "#fff",
        black: "#000",
      },
    },
    letterSpacing: {
      widest: ".22rem",
    },
    fontFamily: {
      mystery: ["Mystery Quest", "cursive"],
      inter: ["Inter", "sans-serif"],
    },
    dropShadow: {
      xl: "0 20px 20px rgba(0, 0, 0, 0.75)",
      "4xl": [
        "0 35px 35px rgba(0, 0, 0, 0.25)",
        "0 45px 65px rgba(0, 0, 0, 0.15)",
      ],
    },
    borderRadius: {
      button: "0.5rem",
      lg: "1rem",
    },
  },
  plugins: [],
};
