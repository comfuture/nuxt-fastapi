export default {
  darkMode: 'media',
  attributify: true,
  analyze: true,
  plugins: [
    require('windicss/plugin/typography'),
    require('windicss/plugin/forms')
  ],
  preflight: {
    alias: {
      // add nuxt aliases
      'nuxt-link': 'a',
      // @nuxt/image module
      'nuxt-img': 'img',
    },
  },
  purge: {
    content: [
      'content/**/*.md'
    ]
  }
}
