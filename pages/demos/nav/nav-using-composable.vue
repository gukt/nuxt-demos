<script setup>
// https://content.nuxtjs.org/api/composables/fetch-content-navigation
const { data: navigation } = useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <nav>
    <pre>{{ navigation }}</pre>
  </nav>
</template>