---
title: Markdown 扩展功能
published: 2024-12-01
updated: 2025-02-02
description: "了解更多 Markdown 功能"
tags: [Demo, Markdown, Feature]
category: "Examples"
hidden: true
---

## Table of contents

## Table of contents

可以通过在 Markdown 文件中添加 `Table of contents`、`toc` 或 `contents` 标题来添加目录。

只有第一个匹配的标题会生成目录。

```markdown
## Table of contents
```
```markdown
## toc
```
```markdown
## contents
```

## GitHub 仓库卡片

你可以添加 GitHub 仓库卡片，仓库信息会在页面加载时从 GitHub API 中获取。

::github{repo="Yuhanawa/astro-charm"}

使用 `::github{repo="<owner>/<repo>"}` 创建一个 GitHub 仓库卡片。

```markdown
::github{repo="Yuhanawa/astro-charm"}
```

## 警示 (Admonitions)

支持以下类型的警示：`note` `tip` `question` `warning` `notice` `important` `caution` `danger`

:::note
突出显示用户应该注意的信息，即使是粗略浏览时也应注意。
:::

:::tip
可选信息，帮助用户更成功。
:::

:::question
用户应该问自己的问题。
:::

:::warning
由于潜在风险，需要用户立即注意的关键内容。
:::

:::notice
需要用户注意的一些信息。
:::

:::important
用户成功所必需的关键信息。
:::

:::caution
操作的潜在负面后果。
:::

:::danger
样式类似于 `caution`，但图标和标题不同。
:::

```markdown
:::note
突出显示用户应该注意的信息，即使是粗略浏览时也应注意。
:::

:::tip
可选信息，帮助用户更成功。
:::
```

可以自定义警示的标题。

:::note[自定义标题]
这是一个带有自定义标题的注释。
:::

```markdown
:::note[自定义标题]
这是一个带有自定义标题的注释。
:::
```

> [!TIP]
> 也支持 [GitHub 语法的警示(Admonitions)](https://github.com/orgs/community/discussions/16925)。

```
> [!TIP]
> 也支持 GitHub 语法的警示(Admonitions)。
```

## 视频嵌入

你可以从 YouTube 或其他平台复制嵌入代码，并将其粘贴到 Markdown 文件中。
或者粘贴 YouTube 或 Bilibili 链接以嵌入视频。

:::note
我们支持两种 YouTube 链接格式：`https://www.youtube.com/watch?v=id` 和 `https://youtu.be/id`。
对于 Bilibili，我们同时接受 `链接` 和 `【标题】 链接` 格式。
除了视频 ID 之外的任何 URL 参数（例如跟踪参数）都将被忽略。
:::

```markdown
https://www.youtube.com/watch?v=oZpYEEcvu5I

【【乐正绫AI】《世末歌者》——“我仍然在无人问津的阴雨霉湿之地”【原创PV付】】 https://www.bilibili.com/video/BV1jG4y1C7uv/?share_source=copy_web
```

https://www.youtube.com/watch?v=oZpYEEcvu5I

【【乐正绫AI】《世末歌者》——“我仍然在无人问津的阴雨霉湿之地”【原创PV付】】 https://www.bilibili.com/video/BV1jG4y1C7uv/?share_source=copy_web

## 代码块

我们支持以下功能：

- 语法高亮
- 复制按钮
- 彩色括号
  - 默认启用
- 差异标注
  - 使用 `!code ++` 和 `!code --` 标记添加和删除的行。
- 高亮标注
  - 允许在代码中使用 `!code highlight` 标记高亮行。
- 单词高亮标注
  - 根据代码片段上提供的元字符串高亮显示单词。
- 焦点标注
  - 允许在代码中使用 `!code focus` 标记聚焦的行。
- 错误级别标注
  - 允许在代码中使用 `!code error` `!code warning` 标记高亮的行。
- 元数据高亮
  - 允许在代码片段元数据中使用 `{1,3-5}` 标记高亮行。
- 元数据单词高亮
  - 允许在代码片段元数据中使用 `/word/` 标记高亮单词。
- 移除标注转义
  - 移除标注转义。当你想在 Markdown 中编写 `// [!code]` 时很有用。如果你处理 `// [\!code ...]` 表达式，你可以在输出中获得 `// [!code ...]`。
- TypeScript Twoslash
  - 需要显式触发

你可能需要的参考：[shiki transformers](https://shiki.style/packages/transformers)

```ts twoslash title="TypeScript Twoslash"
// @errors: 2540
interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Go to bed early'.toUpperCase(),
//  ^?
}

todo.title = 'Go to bed Right now'.toUpperCase()

Number.parseInt('123', 10)
//      ^|
```

自定义 twoslash 消息
```ts twoslash
const log = "custom message"
// @log: 你可以使用 `// @log message` 来自定义消息
type type = "log" | "error" | "warn" | "annotate"
// @annotate: 也支持 `@error` `@warn` 和 `@annotate`
const cat_touch_water = "cat" + "water"
// @warn: 猫猫不能碰水
const perpetual_motion_machine = "cat" + "butter"
// @error: 这是不可能的
const twoslash = "https://www.typescriptlang.org/dev/twoslash/"
```
