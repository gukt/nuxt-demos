<!-- Similar to <ContentDoc :path="$route.path" /> -->
<template>
  <main>
    <ContentQuery :path="$route.path" v-slot="{ data }">
      <ContentRenderer :value="data" />
    </ContentQuery>
  </main>
</template>
