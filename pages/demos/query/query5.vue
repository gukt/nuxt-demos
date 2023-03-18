<template>
  <div>
    <h2>Query all json/yml/csv file from: /data</h2>
    <!-- where 条件中的 _extension 也可以换成 _type, 这两个字段显示的内容是一样的 -->
    <ContentQuery
      path="/data"
      :where="{ _extension: { $in: ['json', 'yml', 'yaml', 'csv'] } }"
      v-slot="{ data }"
    >
      <pre>{{ data }}</pre>
    </ContentQuery>

    <h2>Query JSON data from a path: /data/foo</h2>
    <ContentQuery path="/data/foo" v-slot="{ data }" find="one">
      <pre>{{ data }}</pre>
    </ContentQuery>

    <h2>Query JSON data from a path: /data/foo (only: title)</h2>
    <ContentQuery
      path="/data/foo"
      :only="['title']"
      v-slot="{ data }"
      find="one"
    >
      <pre>{{ data }}</pre>
    </ContentQuery>

    <h2>Query YAML/YML from a path: /data/bar</h2>
    <ContentQuery path="/data/bar" v-slot="{ data }" find="one">
      <pre>{{ data }}</pre>
    </ContentQuery>

    <h2>Query CSV from a path: /data/baz</h2>
    <ContentQuery path="/data/baz" v-slot="{ data }" find="one">
      <pre>{{ data }}</pre>
    </ContentQuery>
  </div>
</template>
