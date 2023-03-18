<template>
  <div>
    <!-- TODO 以下这些组件的内在本质以及实现原理是什么？ -->
      <Html lang="zh" />
      <Title>This is a custom title</Title>
      <Base />
      <NoScript>
        No Script
      </NoScript>
      <Style>
        .bg {
          background-color: #ccc;
        }
      </Style>
      <Meta name="k1" content="v1" />
      <Link rel="icon" href="/fa" />

      <Body class="bg" />

      <!-- 这里为什么没有生效？ -->

      <Head>
        <meta name="k2" content="v2" />
      </Head>
  </div>
</template>