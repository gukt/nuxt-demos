<script setup lang="ts">
  const content = useContent();
  const { page } = content;
  console.log("page.value:", page.value);
</script>

<template>
  <!-- Path: /layouts/custom.vue -->
  <div style="border: 1px dashed blue; padding: 1rem; margin-top: 1rem">
    <code>Path: /layouts/article.vue (current route: {{ $route.fullPath }})</code>

    <div style="border: 1px dashed blue; padding: 1rem; margin-top: 1rem">
      <code>以下内容是显示在 article 布局文件的默认 slot 中的：</code>
      <slot />
    </div>

    <h2>Content Details</h2>
    <pre>{{ content }}</pre>
  </div>
</template>
