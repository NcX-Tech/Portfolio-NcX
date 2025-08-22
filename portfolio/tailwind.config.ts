import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff0000",
        dark: "#000000",
        white: "#ffffff",
      },
      animation: {
        float: "float 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(30px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
