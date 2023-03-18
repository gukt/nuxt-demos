<template>
  <div>
    <h1>Query: /products:</h1>

    <ContentList path="/products" v-slot="{ list }">
      <pre>{{ list }}</pre>
    </ContentList>

    <ContentQuery path="/products" v-slot="{ data }">
      <pre>{{ data }}</pre>
    </ContentQuery>
  </div>
</template>
