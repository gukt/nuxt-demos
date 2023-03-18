<script setup lang="ts"></script>

<template>
  <div>
    <!-- 可以使用 ContentDoc 组件来解析单篇文档内容，它会自动解析 path 属性指定的文档，然后将 markdown 内容渲染成 html。如果 path 属性没填，默认为 $route.path 值，即当前路由地址 -->
    <ContentDoc path="/blog/1" />

    <!-- 在本例中，如果我们不指定 path 属性，而是使用默认的 $route.path 路径，会因为 ~/content/demos/conent-doc-demo.md 文档不存在，而提示 Document not found。 -->
    <ContentDoc />

    <!-- ContentDoc 组件只能解析单篇文档，如果你指定的是一个目录，则会提示 Document
    not found，比如这个例子： -->
    <ContentDoc path="/blog" />

    <!-- 如果想解析多篇文档，可以使用 ContentList 查询出多个文件内容后，再遍历使用  ContentRendererMarkdown 渲染文档内容，或者如果你只想取出每篇文档的个别信息加以输出也是可以的。-->
    <ContentList path="/blog" v-slot="{ list }">
      <div v-for="article in list" :key="article._path">
        <!-- 输出文档内容（渲染前的内容信息，JSON 格式） -->
        <!-- <pre>{{ article }}</pre> -->

        <!-- 你可以使用 ContentRendered 或 ContentRendererMarkdown 渲染最终的 HTML-->
        <ContentRendererMarkdown :value="article" />

        <!-- 以下是仅输出每篇文档的特定信息 -->
        <!-- <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p> -->
      </div>
    </ContentList>
  </div>
</template>
