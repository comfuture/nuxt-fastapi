import accepts from 'accepts'
import type { IncomingMessage } from 'http'


export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-proxy',
    './modules/fastapi',
  ],
  proxy: {
    options: {
      target: 'http://localhost:4000',
      changeOrigin: true,
      // pathFilter: [
      //   '/api/hello',
      // ]
      pathFilter(pathname: string, req: IncomingMessage) {
        console.log('Path:', pathname)
        console.info('Path filter:', accepts(req).type(['html', 'json']))
        return false
        /* eslint-disable operator-linebreak */
        return accepts(req).type(['html', 'json']) === 'json'
          || req.method !== 'GET'
          // || pathname.startsWith('/api')
          /* || yourOwnConditionTestFunction() */
      }
    }
  },
  fastapi: {
    launchServer: true,
  },
  content: {
    highlight: {
      theme: 'github-dark-dimmed',
      preload: ['python', 'vue', 'vue-html']
    }
  },
  tailwindcss: {
    viewer: false
  }
})
