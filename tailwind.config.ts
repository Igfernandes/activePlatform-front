import { bgColors, othersColors, textColors } from "./src/assets/colors/colors";
import {
  bgDefaultColor,
  borderColors,
  statusColors,
  textDefaultColors,
} from "./src/assets/colors/default";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        skeleton: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
      borderColor: {
        ...borderColors,
        ...othersColors,
      },
      backgroundColor: {
        ...bgDefaultColor,
        ...bgColors,
        ...othersColors,
      },
      colors: {
        ...textDefaultColors,
        ...textColors,
        ...othersColors,
        ...statusColors,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        skeleton: "skeleton 1.4s infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
