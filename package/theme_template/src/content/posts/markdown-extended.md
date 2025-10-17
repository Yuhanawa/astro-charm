---
title: Markdown Extended Features
published: 2024-12-01
updated: 2024-12-22
description: "Read more about Markdown features"
tags: [Demo, Markdown, Feature]
category: "Examples"
---

## Table of contents

## Table of contents

You can add table of contents by adding `Table of contents`, `toc` or `contents` heading in the markdown file.

Only the first matching heading will generate the table of contents.

```markdown
## Table of contents
```
```markdown
## toc
```
```markdown
## contents
```

## GitHub repository cards

You can add dynamic cards that link to GitHub repositories, on page load, the repository information is pulled from the GitHub API.

::github{repo="Yuhanawa/astro-charm"}

Create a GitHub repository card with the code `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="Yuhanawa/astro-charm"}
```

## Admonitions

Following types of admonitions are supported: `note` `tip` `question` `warning` `notice` `important` `caution` `danger`

:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::

:::question
Questions that users should ask themselves.
:::

:::warning
Critical content demanding immediate user attention due to potential risks.
:::

:::notice
Notice some information that users should be aware of.
:::

:::important
Crucial information necessary for users to succeed.
:::

:::caution
Negative potential consequences of an action.
:::

:::danger
style is similar to `caution`, but icon and title are different.
:::

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

The title of the admonition can be customized.

:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```

> [!TIP] 
> [The GitHub syntax](https://github.com/orgs/community/discussions/16925) is also supported.

```
> [!TIP]
> The GitHub syntax is also supported.
```

## Video embed

You can copy the embed code from YouTube or other platforms, and paste it in the markdown file.
Or paste youtube or bilibili link to embed a video.

:::note
We support two YouTube link formats: `https://www.youtube.com/watch?v=id` and `https://youtu.be/id`.
For Bilibili, we accept both plain `link` and `【title】 link` formats.
Any URL parameters beyond the video ID (such as tracking parameters) will be disregarded.
:::

```markdown
https://www.youtube.com/watch?v=oZpYEEcvu5I

【【乐正绫AI】《世末歌者》——“我仍然在无人问津的阴雨霉湿之地”【原创PV付】】 https://www.bilibili.com/video/BV1jG4y1C7uv/?share_source=copy_web
```

https://www.youtube.com/watch?v=oZpYEEcvu5I

【【乐正绫AI】《世末歌者》——“我仍然在无人问津的阴雨霉湿之地”【原创PV付】】 https://www.bilibili.com/video/BV1jG4y1C7uv/?share_source=copy_web

## Code blocks

We support the following features:

- Syntax highlighting
- Copy button
- Colorized Brackets
  - Enable by default
- Notation Diff
  - Use `!code ++` and `!code --` to mark added and removed lines.
- Notation Highlight
  - Allow using `!code highlight` notation in code to mark highlighted lines.
- Notation Word Highlight
  - Highlight words based on the meta string provided on the code snippet.
- Notation Focus
  - Allow using `!code focus` notation in code to mark focused lines.
- Notation Error Level
  - Allow using `!code error` `!code warning` notation in code to mark highlighted lines.
- Meta Highlight
  - Allow using `{1,3-5}` in the code snippet meta to mark highlighted lines.
- Meta Word Highlight
  - Allow using `/word/` in the code snippet meta to mark highlighted words.
- Remove Notation Escape
  - Remove notation escapes. Useful when you want to write `// [!code]` in markdown. If you process `// [\!code ...]` expression, you can get `// [!code ...]` in the output.
- TypeScript Twoslash
  - Need explicit trigger

The reference for you might need: [shiki transformers](https://shiki.style/packages/transformers)


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

Custom twoslash message
```ts twoslash
const log = "custom message"
// @log: You can use `// @log message` to make custom message
type type = "log" | "error" | "warn" | "annotate"
// @annotate: `@error` `@warn` and `@annotate` are also supported
const cat_touch_water = "cat" + "water"
// @warn: Cat couldn't touch water
const perpetual_motion_machine = "cat" + "butter" 
// @error: It can't be done
const twoslash = "https://www.typescriptlang.org/dev/twoslash/"
```

