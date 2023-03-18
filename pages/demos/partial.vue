<script setup lang="ts">
  // 因为这个 page 的地址是 /demos/partial，所以它会被 catch-all route 匹配到并试图渲染 /demos/partial 这个文件（不存在），而我们要测试的文件路径是：content/_partial，所以就不会匹配到，因此会得到 page 为 null。所以我们不能用这种方式测试 content/_partial 文件。
  // const { page, navigation } = useContent();
  //
  // 所以对于这种需要查询其他地方文件的情况，我们需要手动查询
  const page = await queryContent("_partial").findOne();
</script>

<template>
  <div>
    <h1>Partial 文件可以查询，但不会出现在 Navigation 里</h1>

    <!-- ContentRenderer 和 ContentRendererMarkdown 都可以用来渲染 Content，实际上 ContentRender 内部就是使用 ContentRendererMarkdown 实现渲染的。 -->
    <!-- <ContentRendererMarkdown :value="page" /> -->
    <ContentRenderer :value="page" />

    <!-- Rendedered Content: -->
    <!-- <ContentRenderer :value="page">
      <ContentRendererMarkdown :value="page" />
    </ContentRenderer> -->

    <!-- Navigation Tree:
    <ContentNavigation :data="navigation" /> -->

    <!-- Navigation data:
    <pre>{{ navigation }}</pre> -->
  </div>
</template>
