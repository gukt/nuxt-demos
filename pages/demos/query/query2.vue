<template>
  <main>
    <!-- https://content.nuxtjs.org/api/components/content-query -->
    <!-- 更多查询的用法，请见：https://content.nuxtjs.org/api/composables/query-content -->
    <ContentQuery path="/docs/help" :only="['title']">
      <template v-slot:default="{ data }">
        <pre>{{ data }}</pre>
      </template>

      <template #not-found>
        <p>No documents found</p>
      </template>
    </ContentQuery>
  </main>
</template>
