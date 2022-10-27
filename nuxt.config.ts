// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '~/modules/fastapi/index.ts'
  ],
  content: {
    highlight: {
      theme: 'github-dark-dimmed',
      preload: ['python', 'vue', 'vue-html']
    }
  }
})
