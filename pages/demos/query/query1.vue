<template>
  <!-- 查询出 content 目录下的所有内容，使用 default slot 可以接收到内容 -->
  <ContentQuery>
    <!-- 使用 default slot 可以接收到查询结果
    NOTE: 如果不是提供多个 slot，可以将 v-slot:default 写到 ContentQuery 上面。
    -->
    <template v-slot:default="{ data }">
      <pre>{{ data }}</pre>
    </template>

    <!-- 如果文档的 body 是空的，empty 槽可以用来显示一个默认的内容。 -->
    <template #empty>
      <p>No data</p>
    </template>

    <!-- not-found 槽可以用来在渲染文档之前显示一个默认的内容。 -->
    <template #not-found>
      <p>Loading</p>
    </template>
  </ContentQuery>
</template>