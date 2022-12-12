<script lang="ts" setup>
const title = ref('title');
useHead({
  title
})
</script>

<template>

  <div>
    <Metatags />
    <h1>
      {{ title }}
    </h1>
    <input type="text" v-model="title">
  </div>
</template>

<style scoped>

</style>
