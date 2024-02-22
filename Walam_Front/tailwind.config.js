/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primarygray: '#9B9A9A'
      },
      backgroundImage: {
        'gradient-center': 'radial-gradient(circle, var(--tw-gradient-stops))'
      },
      backgroundSize: {
        '200%': '200%'
      },
      backgroundPosition: {
        'right-center': 'right center'
      },
      gradientColorStops: theme => ({
        ...theme('colors')
      })
    }
  },
  plugins: []
}
