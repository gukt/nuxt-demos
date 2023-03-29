<script setup>
  const nuxtApp = useNuxtApp();
  // $hello 函数是在自定义插件中定义的，如果要在脚本中访问，请在 nuxtApp 上调用
  // nuxtApp 实例通过 useNuxtApp() 可以方便获取
  // 如果在 template 中，就不用 nuxtApp 了，直接使用 $hello 即可
  // NOTE：插件定义时是没有前缀 $ 的，在调用时需要这个前缀，这是框架的规则。
  // 或者直接用解构语法：
  // const { $hello } = useNuxtApp();
  const s1 = nuxtApp.$hello("John");
</script>

<template>
  <div>
    <h1>{{ $hello("gukt") }}</h1>
    <p>{{ s1 }}</p>
  </div>
</template>
