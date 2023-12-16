import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "#f5f5f7",
        darkMain: "#161617",
        primary: "#ABACAD",
        secondary: "#F7F6F5",
        tertiary: "#caa1a4",
        button: "#0071e3",
      },
      colors: {
        uniqueWord: "#6e6e73",
      },
      boxShadow: {
        main: "2px 4px 12px rgba(0,0,0,.08)",
      },
      gap: {
        sm: ".5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      gridTemplateColumns: {
        lg: "repeat(auto-fit,minmax(9.5rem,1fr))",
        xl: "repeat(auto-fit,minmax(16rem,1fr))",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  tailwindAttributes: ["myClassList"],
};
export default config;
