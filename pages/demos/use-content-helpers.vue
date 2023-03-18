<script setup lang="ts">
  const { navBottomLink, navDirFromPath, navPageFromPath, navKeyFromPath } =
    useContentHelpers();

  const { navigation } = useContent();

  const page = navPageFromPath("/blog/1", navigation.value);
  const dir = navDirFromPath("/blog", navigation.value);
  const layout = navKeyFromPath("/blog/1", "layout", navigation.value);

  const docsIndexPage = navPageFromPath("/docs", navigation.value);
  const docsBottomLink = navBottomLink(docsIndexPage!);
</script>

<template>
  <div>
    docsBottoLink:
    <pre>{{ docsBottomLink }}</pre>
    page:
    <pre>{{ page }}</pre>
    dir:
    <pre>{{ dir }}</pre>
    layout:
    <pre>{{ layout }}</pre>
  </div>
</template>

<style scoped></style>
