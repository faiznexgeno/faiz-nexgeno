/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        gl: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        dm: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        ms: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        sx: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
};
