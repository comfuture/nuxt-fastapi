// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { getHighlighter } from 'shiki';

export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  content: {
    highlight: {
      theme: 'github-dark-dimmed',
      preload: ['python', 'vue', 'vue-html']
    }
  }
})
