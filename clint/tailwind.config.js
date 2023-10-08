

/** @type {import('tailwindcss').Config} */

import { themeColor } from './src/components/themeColor';


export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'heading': ['KoHo', 'sans-serif'],
        'content': ['Open Sans', 'sans-serif'],
      },
      colors: {
        "brand-blue": `#${themeColor}`,
        "ui-bg": "#f1f5f1",
      },
    },
  },
  plugins: [require("daisyui")],
};
