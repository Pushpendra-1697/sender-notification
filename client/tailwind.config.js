/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': { 'min': '360px', 'max': '575px' },

        'md': { 'min': '576px', 'max': '768px' },

        'lg': { 'min': '769px', 'max': '1199px' },

        'xl': { 'min': '1200px', 'max': '1439px' },

        '2xl': { 'min': '1440px' },
      },
    },
  },
  plugins: [],
};
