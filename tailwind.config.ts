import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        yellow: {
          light: '#FCE588'
        },
        blue: {
          text: '#127FBF',
          bg: '#E3F8FF'
        },
        white: {
          text: '#F7F7F7'
        },
        black: {
          text: '#222222'
        }
      },
    },
  },
  plugins: [],
};
export default config;
