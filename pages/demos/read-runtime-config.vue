<script setup lang="ts">
  import { useRuntimeConfig } from "#app";
  const runtimeConfig = useRuntimeConfig();

  console.log("runtimeConfig.apiSecret:", runtimeConfig.apiSecret);
  console.log("runtimeConfig.public.apiBase:", runtimeConfig.public.apiBase);

  console.info("runtimeConfig", runtimeConfig);
</script>

<template>
  <div>
    <pre>
      可以使用 useRuntimeConfig() 这个 composable 函数来获取 runtimeConfig 里的配置信息，
      
      你会发现不仅仅只有 nuxt.config 里配置的那些，还会有很多其他模块，每个模块都能在 runtimeConfig 里写一些数据，最后会合并起来，

      只能看到 public 下的配置信息。因为public 以外的配置是只在服务器上使用的，并不会暴露到客户端。

      可以通过环境变量来修改 runtimeConfig 里配置的值，
      
      配置时需要加上 NUXT_ 前缀，比如：
      NUXT_API_SECRET=456

      如果要覆盖 public 下的配置，需要加上 NUXT_PUBLIC_ 前缀，比如：
      NUXT_PUBLIC_API_BASE=/api/v2

      也可以在系统环境变量中指定，系统环境变量的优先级高于 .env 文件中的配置。（使用的环境变量名称是一样的。）

      runtimeConfig: {{ runtimeConfig }}
    </pre>
  </div>
</template>
