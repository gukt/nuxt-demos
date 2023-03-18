<template>
  <div>
    <pre>
      简单总结一下：
    1. ContentQuery 是用来根据路径 path 和各种条件查询文档用的，对查询出的结果，可以在内部 slot 中根据自己需要进行遍历和展示。

    2. ContentDoc 只能接收单篇文档的 path，如果你指定的是一个目录，则会提示 Document not found。内部也是使用 ContentQuery 实现查询的。如果你不用 ContentDoc 而是使用 ContentQuery 可以实现同样的效果。

    3. ContentList 可以接受 path 和 query 两个参数，当 path 为目录是，它会返回该目录下及其子目录的所有文件，这一点和 ContentDoc 有点不一样。其内部也是使用 ContentQuery 实现查询的。 因此使用 ContentQuery 也完全可以实现同样的效果。

    4. ContentRendererMarkdown 可以接收一个文档对象，然后将其渲染成 HTML。 

    5. ContentRendred 也是用于渲染文档的，内部是使用 ContentRendererMarkdown 实现渲染的。

    最后：对于新手，提供了这么多功能类似的组件，但文档并没有讲清楚哪些只是快捷方式。让新手很是迷惑，还以为每个组件都有非常独特的功能。
    
    其实，熟练掌握 ContentQuery 和 ContentRendred/ContentRendererMarkdown 感觉就可以实现所有的文档查询和渲染了。
    </pre>
    <!-- ContentList 可以接收 path 和 query 两个参数。其内部使用 ContentQuery 组件实现查询的。

    - path: 
        默认 path 为 / 表示查询出 content/ 目录下的所有文件，如果你想查询 content/blog 目录下的所有文件，可以设置 path="/blog"。

    - query: QueryBuilder 类型的参数。 
    
    具体还是结合源码来看吧，这里只是简单演示一下。 

    简单总结一下：
    1. ContentQuery 是用来根据路径 path 和各种条件查询文档用的，对查询出的结果，可以在内部 slot 中根据自己需要进行遍历和展示。

    2. ContentDoc 只能接收单篇文档的 path，如果你指定的是一个目录，则会提示 Document not found。内部也是使用 ContentQuery 实现查询的。如果你不用 ContentDoc 而是使用 ContentQuery 可以实现同样的效果。

    3. ContentList 可以接受 path 和 query 两个参数，当 path 为目录是，它会返回该目录下及其子目录的所有文件，这一点和 ContentDoc 有点不一样。其内部也是使用 ContentQuery 实现查询的。 因此使用 ContentQuery 也完全可以实现同样的效果。

    4. ContentRendererMarkdown 可以接收一个文档对象，然后将其渲染成 HTML。 

    5. ContentRendred 也是用于渲染文档的，内部是使用 ContentRendererMarkdown 实现渲染的。
    -->
    <ContentList path="blog" v-slot="{ list }">
      <ul>
        <li v-for="doc in list" :key="doc.id">
          {{ doc._path }}
        </li>
      </ul>
    </ContentList>
  </div>
</template>
