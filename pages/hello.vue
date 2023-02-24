<script setup lang="ts">
import type { HelloResponse } from '~/server/types' // auto generated

const { fullPath } = useRoute()
const { data } = useAsyncData<HelloResponse>(fullPath, () => $fetch(fullPath))
</script>
<template>
  <div>
    Greeting from server: {{ data?.name }}
  </div>
</template>
