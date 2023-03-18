# I am a partial file

我和其他没有 \_ 开头的文件一样，可以被查询到，但我不会出现在 navigation 中。

请看所有内容的导航树：

:content-navigation

在上面的导航树中，你会发现并没有 content:partial 这个节点。

如果你想将真个目录都作为 partial 你可以在目录名称前加上 \_。

注意：文件或目录前加上 `.` 会隐藏文件或目录，这符合 Unix 风格。

Access Example：`http://localhost:3000/_partial`