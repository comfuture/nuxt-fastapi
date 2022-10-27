<script setup lang="ts">
import type { GreetingResponse } from './server/types' // auto generated
const { fullPath } = useRoute()
const { data } = useAsyncData<GreetingResponse>(fullPath, () => useAPI(fullPath))
</script>
<template>
  <div>
    Greeting from server: {{ data.greet }}
  </div>
</template>
