module.exports = {
  theme: {
    sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
      'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans',
      'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji']
  },
  darkMode: 'media',
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    future: {
      purgeLayersByDefault: true,
      removeDeprecatedGapUtilities: true
    },
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ],
    options: {
      whitelist: ['material-icons']
    }
  }
}
