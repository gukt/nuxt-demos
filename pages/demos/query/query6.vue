<template>
  <div>
    <h1>Query: /products/1:</h1>
    <ContentQuery path="/products/1" v-slot="{ data }" find="one">
      <!-- 这里输出原始文档数据 -->
      <h2>Row Data:</h2>
      <pre>{{ data }}</pre>

      <!-- 使用内置的 ContentRenderer 渲染数据并显示 -->
      <h2>Rendered Result:</h2>
      <ContentRenderer :value="data" />
    </ContentQuery>
  </div>
</template>
