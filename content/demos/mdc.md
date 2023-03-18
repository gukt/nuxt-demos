# MDC Demos

MDC (MarkDown Components) 增强了常规 Markdown 的功能，允许我们使用任意的 Vue 组件来渲染 Markdown。

<!-- HTML 注释不会被渲染  -->

## MDC 的基本用法

### 内联组件（Inline Component）示例

:greeting{name='MDC'}

### 块级组件（Block Component）示例

::hero

我是标题，被渲染到 `default` 插槽中

#description
我是描述，被渲染到 `description` 插槽中。
::

### 嵌套组件（Nested Component）示例

组件可以嵌套，比如这里的 👇🏻：

::hero

:greeting{name='MDC'}

::

也可以嵌套自身，比如这里的 👇🏻：

::hero
我是第一层 Hero

:::hero
我是第二层 Hero
:::
::

也可以嵌套多层，比如这里的 👇🏻：

::hero
我是第一层 Hero

:::hero
我是第二层 Hero

::::hero
我是第三层 Hero
::::
:::
::

### 组件的属性（Props）示例

组件的属性可以通过 `:` 来指定，比如这里的 👇🏻：
::hero{style="border:1px dashed blue; padding: 1rem;"}
我是一个 Hero，我有一个自定义的样式
::

::hero

#description

NOTE: 内嵌的组件只要可以多一个冒号也可以少一个冒号，主要不要和父级冲突就行，如果嵌套层级比较复杂，最好每一层多一个冒号，不然日后编辑源代码时，多层嵌套结构中，一会多一个冒号，一会少一个冒号，眼都看花了，不方便维护。

:greeting{name='MDC'}

原生的 HTML 组件也可以直接嵌入，使用起来和 SFC 没任何区别，比如这里 👇🏻：

:::section{style="border:1px dashed blue; padding: 1rem;"}

注意看源文件，我是可以写样式的，我被包含在了一个由自定义样式指定的有颜色的框里。

<div>I am a HTML native DIV element</div>

:::

Block Component (Card) 👇🏻

:::card

我是嵌入的卡片（我用的是三个冒号）

:::
Hero 也可以无限嵌套自己，屌不屌？请看下面的例子 👇🏻

:::hero
我是第二级的 Hero

::::hero
我是第三层的 Hero
::::
:::
::

### Greeting Component

:greeting{name='gukt'}
