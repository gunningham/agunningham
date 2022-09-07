module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {
      colors: {
        hello: '#111319'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
