import { Container } from "postcss";
import { CgEnter } from "react-icons/cg";
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
        container : {
          center: "true",
          padding: "15px"
        },
        accent: "#08495E"
      },
    },
  },
  plugins: [],
};
export default config;
