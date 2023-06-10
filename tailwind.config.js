/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "430px",
      // => @media (min-width: 640px) { ... }

      sm: "680px",
      // => @media (min-width: 640px) { ... }

      md: "835px",
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
    "bg-lime-600",
    "bg-rose-600",
    "bg-blue-600",
    "hover:bg-lime-400",
    "hover:bg-rose-400",
    "hover:bg-blue-400",
    "border-lime-700",
    "border-rose-700",
    "border-blue-700",
    "hover:border-lime-500",
    "hover:border-rose-500",
    "hover:border-blue-500",
  ],
  plugins: [],
};
