/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#34C759',
        'secondary-color': '#6B7280',
        'background-light': '#F9FAFB',
        'background-dark': '#FFFFFF',
        'accent-color': '#2EA44F',
      },
    },
  },
  plugins: [],
}