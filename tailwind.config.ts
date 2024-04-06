import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#28166F",
        secondary: "#FFF500",
        baseWhite: "#F2F4F8",
        baseBlack: "#1F2328",
        input: "#F2F4F8",
        greyHero: "#8F97A6",
        greySale: "#B0B0B0",
      },
    },
  },
  plugins: [],
};
export default config;
