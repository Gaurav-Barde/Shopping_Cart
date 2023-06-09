/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "680px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  safelist: [
    "bg-lime-500",
    "bg-rose-500",
    "hover:bg-lime-400",
    "hover:bg-rose-400",
    "border-lime-700",
    "border-rose-700",
    "hover:border-lime-500",
    "hover:border-rose-500",
  ],
  plugins: [],
};
