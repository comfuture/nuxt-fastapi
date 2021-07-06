<template>
  <div>
    <nuxt />
  </div>
</template>
<script>
export default {
  name: 'default-layout',
  head() {
    return {
      title: 'Nuxt Flask',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {name: 'description', content: 'Webapp template that made with Nuxt and flask backend. Out of box, battery included.', hid: 'description'}
      ]
    }
  }
}
</script>
