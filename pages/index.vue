<script setup lang="ts">
</script>
<template>
  <div class="app">
    <header>
      <div class="container">
        <h1>
          Nuxt FastAPI
          <sup><span class="text-yellow-500">Python</span> <span class="text-blue-700">powered</span></sup>
        </h1>
        <p class="description">
          Webapp template that made with <a href="https://v3.nuxtjs.org/" target="_blank">Nuxt3</a> and <a
            href="https://fastapi.tiangolo.com/" target="_blank">FastAPI</a> backend. Out of box, battery included.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a href="#api-proxy-module" class="primary button">Get started</a>
          <a href="https://github.com/comfuture/nuxt-fastapi" class="button">Github</a>
        </div>
      </div>
    </header>
    <section>
      <div class="docs container mx-auto py-8">
        <ContentDoc path="/getting-started" />
      </div>
    </section>
    <nuxt-link to="/hello">/hello</nuxt-link>
    <section class="bg-gray-200">
      <div class="container mx-auto py-8">
        <address>Copyright &copy; 2021 comfuture under MIT License</address>
      </div>
    </section>
  </div>
</template>

<style lang="postcss">
.app {
  @apply min-h-screen bg-gray-100;

  header {
    h1 {
      @apply text-4xl leading-none font-extrabold tracking-tight text-gray-900 py-4 mb-8;
      @apply md:py-8 md:text-6xl;

      sup {
        @apply text-sm align-top -ml-24;
        @apply md:text-lg;
      }
    }

    p.description {
      @apply text-lg text-gray-600 mb-4;
      @apply sm:text-2xl sm:leading-10 sm:mb-10;

      a {
        @apply text-indigo-600 font-bold;

        &:hover {
          @apply text-indigo-900 underline;
        }
      }
    }
  }

  .container {
    @apply px-2;
    @apply md:mx-auto md:px-0;
  }

  .button {
    @apply rounded-xl bg-gray-400 font-semibold px-4 py-2;

    &.primary {
      @apply bg-black text-white transition-colors duration-300;

      &:hover {
        @apply bg-gray-700;
      }
    }
  }

  a[target="_blank"] {
    &::after {
      content: '(외부)'
    }
  }

  .docs.container {
    h2 {
      @apply font-bold mt-4 mb-2 text-lg md:text-xl;
    }

    h3 {
      @apply font-semibold my-2;
    }

    a {
      @apply text-indigo-600 font-semibold;

      &:hover {
        @apply text-indigo-900 underline;
      }
    }

    p {
      @apply text-gray-700 leading-relaxed mb-2;
    }

    pre > code {
      counter-reset: line-count;
      @apply block rounded-md bg-gray-800 p-2;

      @screen lg { 
        > .line {
          counter-increment: line-count;
        }
        > .line::before {
          @apply inline-block w-10 text-sm text-gray-400;
          content: counter(line-count) ": ";
        }
      }
    }

    blockquote {
      @apply block border-l-4 border-gray-600;

      > p {
        @apply mx-2;
      }
    }

    code[lang] {
      @apply rounded-md bg-gray-800 p-1;
    }
  }
}
</style>
