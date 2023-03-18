<script setup>
// 创建一个查询，返回 content 目录下的所有东西
const contentQuery = queryContent()
// 创建一个查询，返回 content/docs 目录下的所有东西
const docsQuery = queryContent('docs')
// 创建一个查询，返回 content/docs/help 目录下的所有东西
const helpQuery = queryContent('docs', 'help')

const contentQueryResult = await contentQuery.find()
const docsQueryResult = await docsQuery.find()
const helpQueryResult = await helpQuery.find()

</script>

<template>
  <div>
    <h1>1、Looking for anything in 'content/' directory</h1>
    <ContentNavigation :query="contentQuery" />

    <h1>2、Looking into 'content/docs/' directory</h1>
    <ContentNavigation :query="docsQuery" />

    <h1>2、Looking into 'content/docs/help/' directory</h1>
    <ContentNavigation :query="helpQuery" />

    <h1>Results</h1>

    <h2>contentQueryResult</h2>
    <pre>{{ contentQueryResult }}</pre>

    <h2>docsQueryResult</h2>
    <pre>{{ docsQueryResult }}</pre>

    <h2>helpQueryResult</h2>
    <pre>{{ helpQueryResult }}</pre>
  </div>
</template>