<script setup lang="ts">
  defineProps<{ name: string }>();
</script>

<template>
  <div class="container">
    <code>Path: /componets/conent/Greeting.vue</code>
    <p>Hello {{ name }}</p>
    <slot />
  </div>
</template>

<style scoped>
  .container {
    border: 1px dashed green;
    border-radius: 4px;
    padding: 2rem;
    line-height: 1.5;
  }
</style>
