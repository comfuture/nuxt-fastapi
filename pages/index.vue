<template>
  <div class="app">
    <header>
      <div class="container">
        <h1>
          Nuxt FastAPI
          <sup><span class="text-yellow-500">Python</span> <span class="text-blue-700">powered</span></sup>
        </h1>
        <p class="description">
          Webapp template that made with <a href="https://nuxtjs.org/">Nuxt</a> and <a href="https://fastapi.tiangolo.com/">FastAPI</a> backend. Out of box, battery included.
        </p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <a href="#api-proxy-module" class="primary button">Get started</a>
          <a href="https://github.com/comfuture/nuxt-flask" class="button">Github</a>
        </div>
      </div>
    </header>
    <section>
      <div class="container mx-auto py-8">
        <nuxt-content :document="content" />
      </div>
    </section>
    <section class="bg-gray-200">
      <div class="container mx-auto py-8">
        <address>Copyright &copy; 2021 comfuture under MIT License</address>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      content: ''
    }
  },
  async fetch() {
    this.content = await this.$content('getting-started').fetch()
  }
}
</script>

<style lang="postcss">
.app {
  @apply min-h-screen bg-gray-100;

  header {
    h1 {
      @apply text-4xl leading-none font-extrabold tracking-tight text-gray-900 py-4 mb-8;

      @screen md {
        @apply py-8 text-6xl;
      }

      sup {
        @apply text-sm align-top -ml-24;

        @screen md {
          @apply text-lg;
        }
      }
    }

    p.description {
      @apply max-w-screen-lg text-lg text-gray-600 mb-4;

      @screen sm {
        @apply text-2xl leading-10 mb-10;
      }

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

    @screen md {
      @apply mx-auto px-0;
    }
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

  .nuxt-content-container {
    h2 {
      @apply font-bold mt-4 mb-2 text-lg;

      @screen md {
        @apply text-xl;
      }
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

    :not(pre) > code {
      @apply bg-gray-200 border border-gray-400 rounded p-1;
    }

    blockquote {
      @apply block border-l-4 border-gray-600;

      > p {
        @apply mx-2;
      }
    }

    .nuxt-content-highlight > pre {
      @apply rounded-md;
    }
  }
}
</style>
