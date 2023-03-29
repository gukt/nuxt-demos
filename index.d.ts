// https://nuxt.com/docs/guide/directory-structure/plugins#advanced
// TODO 这里还没深入研究过
declare module "#app" {
  interface NuxtApp {
    $hello(msg: string): string;
  }
}
declare module "vue" {
  interface ComponentCustomProperties {
    $hello(msg: string): string;
  }
}
export {};
