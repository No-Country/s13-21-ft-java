/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primarygray: '#9B9A9A',
        loginColor: '#4B573E'
      },
      backgroundImage: {
        'gradient-center': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'login-pattern': "url('/src/assets/Bento_login.jpg')"
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
