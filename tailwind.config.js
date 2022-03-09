module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Poppins", "Oswald", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    extend: {
      colors: {
        blue: {
          550: "#08f",
        },
      },
      height: {
        "9/10-screen": "90vh",
      },
      zIndex: {
        "-1": "-1",
      },
      margin: {
        screen: "100vh",
      },
      keyframes: {
        "fade-in": {
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out 1.8s forwards",
      },
      typography: {
        DEFAULT: {
          css: {
            blockquote: {
              fontWeight: "700",
            },
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
