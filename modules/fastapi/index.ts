import { resolve } from 'pathe'
import { spawn, ChildProcess } from 'child_process'
import { defineNuxtModule, addTemplate, addImports } from '@nuxt/kit'

export const meta = {
  name: 'fastapi',
  version: '0.2.0'
}

interface FastAPIModuleOptions {
  launchServer?: boolean
  backendHost?: string
  backendPort?: number | string
  module?: string
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    fastapi?: FastAPIModuleOptions
  }
  interface NuxtOptions {
    fastapi?: FastAPIModuleOptions
  }
}

const FastAPIModule = defineNuxtModule<FastAPIModuleOptions>({
  meta,
  defaults: {
    launchServer: true,
    backendHost: '127.0.0.1',
    backendPort: 4000,
    module: 'server:app'
  },
  async setup(options, nuxt) {
    // generate `useAPI` composable
    addTemplate({
      filename: 'use_api.ts',
      getContents() {
        return 'export const useAPI = async (fullPath) => useFetch(`/_fastapi${fullPath}`)'
      },
      write: true
    })

    // add `useAPI` auto import
    addImports({name: 'useAPI', from: resolve(nuxt.options.buildDir, 'use_api.ts')})

    // launch fastapi server if `launchServer` sets to `true`
    let backend: ChildProcess;
    if (options.launchServer) {
      nuxt.hook('modules:done', () => {
        backend = spawn('uvicorn', ['--port', '' + options.backendPort, options.module!], {
          env: process.env,
          detached: true,
          stdio: [0, 'pipe', process.stderr]
        })
        backend.unref()
        backend.ref()
        console.info('Backend process spawned')
        backend.stdout?.on('data', buffer => console.log(buffer.toString('utf8')))
      })
    }
    nuxt.hook('close', (nuxt) => {
      // kill server process when nuxt is closed gracefully
      console.info('Backend process closed')
      backend?.kill('SIGTERM')
    })
  
    process.on('SIGINT', () => {
      // kill server process when nuxt gets interrupt signal
      console.info('Backend process closed by SIGINT')
      backend?.kill('SIGTERM')
      process.exit()
    })
  }
})

export default FastAPIModule