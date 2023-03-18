<template>
  <section class="container">
    <code>Path: /componets/conent/Greeting.vue</code>
    <h1><slot /></h1>
    <slot name="description" />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
  .container {
    border: 1px dashed green;
    border-radius: 4px;
    padding: 2rem;
    line-height: 1.5;
  }
</style>
