export default defineNuxtPlugin((nuxtApp) => {
  // 提供一个 hello 函数，它可以在应用程序中的任何地方使用
  return {
    provide: {
      /**
       * 输出一段 Hello ${msg} 文本
       * 
       * @param msg the message to display
       * @returns a string
       */
      hello: (msg: string) => `Hello ${msg}!`,
    },
  };
});
