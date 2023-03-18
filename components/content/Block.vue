<script setup lang="ts">
  defineProps<{ caption: string; fileName: string }>();
</script>

<template>
  <section class="container">
    <span>{{ caption }} 组件演示说明： </span>
    <code>Path: /componets/conent/{{ fileName || "unknown" }}.vue</code>
    <slot />
  </section>
</template>

<style scoped>
  .container {
    border: 1px dashed green;
    border-radius: 4px;
    padding: 2rem;
    line-height: 1.5;
    margin: 1rem 0;
  }
</style>
