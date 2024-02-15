/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    extend: {
      colors: {
        primarygray: '#9B9A9A',             
      },
    },
  },
  plugins: [],
}

