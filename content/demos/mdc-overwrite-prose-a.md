这个链接使用的是自定义的 ProseA 组件（Path: /components/content/ProseA.vue）覆盖了 @nuxt/content 中原有的实现：

[baidu.com](http://baidu.com)

如果你想改变 `@nuxt/content` 对 Markdown 文件的默认渲染，你只需要在 `~/components/content/` 目录下提供同名组件覆盖你想要的组件即可。

`@nuxt/content` 默认实现支持的 MDC 组件在 `~/node_modules/@nuxt/content/dist/runtime/components/Prose/` 目录中。
