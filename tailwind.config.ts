import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "system-ui", "-apple-system", "sans-serif"],
        display: ["Montserrat", "Poppins", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      colors: {
        brand: {
          orange: "#f25c05",
          "orange-hover": "#d94e02",
          "orange-light": "#fff7ed",
          "orange-dark": "#c2410c",
          charcoal: "#0f172a",
          slate: "#1e293b",
          border: "#fed7aa",
        },
      },
      boxShadow: {
        orange: "0 10px 25px -5px rgba(242, 92, 5, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
