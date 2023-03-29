export default defineNuxtPlugin((nuxtApp) => {
  // Doing something with nuxtApp

  // 我们可以在 plugin 中使用 composable 函数
  // 然而，请记住，有一些限制和差异：
  // 1. 如果一个 composable 依赖于后来注册的另一个插件，它可能无法工作。原因是：插件是按顺序调用的
  // 2. 如果一个 composable 依赖于 Vue.js 的生命周期，它就不能工作。原因是什么？通常情况下，Vue.js的 composable 会绑定到当前的组件实例，而插件只绑定到nuxtApp实例。
  const route = useRoute();
});
