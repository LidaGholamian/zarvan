import { colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";
import type { Config } from "tailwindcss";

extend([mixPlugin]);

const generateDarkenColorFrom = (input: string, percentage= 0.07): string => 
  colord(input).darken(percentage).toHex();

const generateForegroundColorFrom = (input: string, percentage= 0.8): string =>
  colord(input).mix(colord(input).isDark() ? 'white' : 'black', percentage).toHex();

export const tailwindColors: {[key: string]: string} = {
  current: "currentColor",
    transparent: "transparent",
    white: "#F9F9F9",
    primary: "#262630",
    "primary-content": "#FFFFFF",
    "primary-focus": generateDarkenColorFrom("#262630"),
    secondary: "#FF4500",
    "secondary-content": "#FFFFFF",
    "secondary-focus": generateDarkenColorFrom("#FF4500", 0.03),
    accent: "#1FB2A5",
    "accent-content": "#FFFFFF",
    "accent-focus": generateDarkenColorFrom("#1FB2A5"),
    grey: "#9A9A9A",
    "grey-content": "#F3F3F3",
    neutral: "#2a323c",
    "neutral-content": generateForegroundColorFrom("#FFFFFF"),
    "neutral-focus": generateDarkenColorFrom("#2a323c", 0.03),
    "base-25": "#353d47",
    "base-50": "#2a323c",
    "base-75": "#20272e",
    "base-100": "#1d232a",
    "base-200": "#191e24",
    "base-300": "#15191e",
    "base-content": "#A6ADBB",
    error: "#f87272",
    "error-content": generateForegroundColorFrom("#f87272"),
    "error-focus": generateDarkenColorFrom("#f87272", 0.03),
    "gradient-first": "#FF4500",
    "gradient-second": "#FFBCBC",
    blue: "#4B9CD3",
    
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    container: {
      center: true
    },
    colors: tailwindColors,
    extend: {
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
  
};
export default config;

