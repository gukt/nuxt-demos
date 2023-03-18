<template>
  <!-- Path: /pages/[...slug].vue -->
  <div style="border: 1px dashed blue; padding: 1rem; margin-top: 1rem">
    <code>Path: /pages/[...slug].vue (current route: {{ $route.path }})</code>
    <ContentDoc :excerpt="false"></ContentDoc>
  </div>
</template>
