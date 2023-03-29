// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // 添加运行时配置
  // https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    // The private keys which are only available server-side
    // 没有写在 public 下的配置只能在服务端可用，不会暴露给客户端
    apiSecret: "123",
    // Keys within public are also exposed client-side
    // 写在 public 下的配置会暴露给客户端
    public: {
      apiBase: "/api",
      content: {
        anchorLinks: {
          // 测试显示锚点深度为 0，同时忽略 H1 锚点
          depth: 6,
          // exclude 默认值是 1， 表示 H1 不要渲染为锚点链接
          // exclude: [],
        },
      },
    },
  },
  components: true,
  modules: [
    "@nuxt/content",
    // https://nuxt.com/modules/tailwindcss
    "@nuxtjs/tailwindcss",
    // https://nuxt.com/modules/headlessui
    "nuxt-headlessui",
  ],
  // Optionally change the default prefix.
  headlessui: {
    prefix: "Headless",
  },
  content: {
    // 最简单的启动 documentDriven 的方式是设置该字段为 true
    // documentDriven: true,
    // 如果有其他更高级的需求，请将 documentDriven 指定为一个对象，并配置相关选项
    documentDriven: {
      // 扩展 documentDriven 模式下的全局变量
      // 这里可以定义一些自定义的查询
      // https://content.nuxtjs.org/guide/writing/document-driven#extend-global-variables
      globals: {
        theme: {
          where: [
            {
              _id: "content:_theme.yml",
            },
          ],
          without: ["_"],
        },
        foo: {
          where: [
            {
              _id: "content:data:foo.json",
            },
          ],
          without: ["_"],
        },
        bar: {
          where: [
            {
              _id: "content:data:baz.csv",
            },
          ],
        },
      },
    },
    markdown: {
      // 是否支持 MDC 语法，默认 true
      // mdc: false,
    },
  },
});
