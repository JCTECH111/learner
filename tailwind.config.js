/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Make sure to include this line for React files
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-blue': 'rgb(0, 105, 255)',  // Adds your custom blue
      },
      colors: {
        'custom-blue': 'rgb(0, 105, 255)',  // Adds your custom blue
      },
    },
  },
  plugins: [],
}

