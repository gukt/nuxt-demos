<script setup lang="ts">
  defineProps({
    href: {
      type: String,
      required: true,
    },
    target: {
      type: String,
      default: "_self",
    },
  });
</script>

<!-- 定义一个同名组件，用来覆盖已有的任何 extends 过来的同名组件 -->
<template>
  <NuxtLink class="app-link" :href="href" :target="target">
    <slot />
  </NuxtLink>
</template>

<style scoped>
  .app-link {
    color: blue;
  }
</style>
