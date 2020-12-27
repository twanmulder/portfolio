module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["karla", "Oswald", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
    },
    extend: {
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
        "slide-up-1": {
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        "slide-up-2": {
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out 1.4s forwards",
        "slide-up-1": "slide-up-1 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s forwards",
        "slide-up-2": "slide-up-2 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.6s forwards",
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
