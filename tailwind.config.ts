import type { Config } from "tailwindcss";
const preline = require('preline/plugin.js');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
      'sans': ["var(--font-figtree)"],
      'mono': ["var(--font-sometype)"],
      'display-en': ["Bahnschrift", "figtree"],
      'display-jp': ["YeFontAoYeHei", "figtree"],
    },
    colors: {
      'pink': '#FF9191',
      'pink-light': '#FFD7D7',
      'black': '#252A2C',
      'green': '#5F8972',
      'grey': '#E5E2E2',
      'white': '#FDF9F7',
      'brown': '#72595B'
    },
    extend: {
    },
  },
  plugins: [preline],
};
export default config;
