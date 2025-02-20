import { bgColors, textColors } from "./src/assets/colors/colors";
import {
  bgDefaultColor,
  borderColors,
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
      borderColor: {
        ...borderColors,
      },
      backgroundColor: {
        ...bgDefaultColor,
        ...bgColors,
      },
      colors: {
        ...textDefaultColors,
        ...textColors,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
