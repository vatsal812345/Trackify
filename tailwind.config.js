/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          dark: '#2563eb',
        },
        dark: {
          bg: '#1a1c23',
          card: '#24262d',
          sidebar: '#12141a',
        }
      }
    },
  },
  plugins: [],
}
