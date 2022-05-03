module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#6D1616",
        orange: "#B43A06",
        peach: "#F9924D",
        yellow: "#FBCD5F",
        light: "#FFE5A8",
        black: "#111111",
      },
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
