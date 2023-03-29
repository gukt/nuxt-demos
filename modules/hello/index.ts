// 如果我们要使用 defineNuxtModule 定义一个模块，必须从 nuxt/kit 中导入 defineNuxtModule
// 我们必须自己添加 @nuxt/kit 依赖，这个是 nuxt 框架的依赖，已经存在于本地依赖中了
// 使用: yarn list | grep @nuxt/kit -C10 可以检索出依赖关系
import { addServerHandler, createResolver, defineNuxtModule } from "nuxt/kit";

// modules/*.ts 以及 modules/**/index.ts 会自动注册为 Nuxt 模块
// 定义一个模块，传入的是一个对象
// https://nuxt.com/docs/guide/directory-structure/modules
export default defineNuxtModule({
  meta: {
    name: "hello",
  },
  setup() {
    const { resolve } = createResolver(import.meta.url);
    // Add an API route
    addServerHandler({
      route: "/api/hello",
      handler: resolve("./runtime/api-route"),
    });
  },
});
