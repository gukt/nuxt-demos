<script setup lang="ts">
  /**
   * 这里的 useContent 虽然没有指定参数，它总是返回被匹配到的文件内容相关信息。
   */
  const content = useContent();
  const { page } = content;
</script>

<!-- 定义一个 Catch-all 路由，换句话说，这个路由可以匹配所有路径
-->
<template>
  <div>
    <!-- 我们一般使用 ContentDoc 来渲染匹配到的文档。我们也可以获得页面的 body 属性，然后自己使用 ContentRender 渲染 -->
    <ContentDoc>
      <template #default>
        <pre>{{ content }}</pre>
      </template>
      <!-- Empty slot -->
      <template #empty>
        <div class="text-center">
          <p class="text-xl">Document is empty.</p>
          <pre>{{ $route }}</pre>
        </div>
      </template>
      <template v-slot:not-found>
        <div class="text-center">
          <h1 class="text-4xl font-bold">404</h1>
          <p class="text-xl">Page not found - {{ $route.path }}</p>
          <pre>{{ $route }}</pre>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>
