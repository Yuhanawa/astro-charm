---
title: Markdown 拡張機能
published: 2024-12-01
updated: 2025-02-02
description: "Markdown の機能について詳しく見る"
tags: [Demo, Markdown, Feature]
category: "Examples"
hidden: true
---

## Table of contents

## Table of contents

Markdown ファイルに `Table of contents`、`toc`、または `contents` の見出しを追加することで目次を追加できます。

最初に一致した見出しのみが目次を生成します。

```markdown
## Table of contents
```
```markdown
## toc
```
```markdown
## contents
```

## GitHub リポジトリカード

GitHub リポジトリへのリンクを含む動的なカードを追加できます。ページ読み込み時に、リポジトリ情報は GitHub API から取得されます。

::github{repo="Yuhanawa/astro-charm"}

`::github{repo="<owner>/<repo>"}` を使用して GitHub リポジトリカードを作成します。

```markdown
::github{repo="Yuhanawa/astro-charm"}
```

## 警告 (Admonitions)

次のタイプの警告がサポートされています: `note` `tip` `question` `warning` `notice` `important` `caution` `danger`

:::note
ユーザーがざっと目を通すときでも考慮すべき情報を強調表示します。
:::

:::tip
ユーザーがより成功するのに役立つオプション情報。
:::

:::question
ユーザーが自問すべき質問。
:::

:::warning
潜在的なリスクのためにユーザーの即時注意を要する重要なコンテンツ。
:::

:::notice
ユーザーが認識すべき情報に注意してください。
:::

:::important
ユーザーが成功するために必要な重要な情報。
:::

:::caution
行動の潜在的な負の結果。
:::

:::danger
スタイルは `caution` と似ていますが、アイコンとタイトルが異なります。
:::

```markdown
:::note
ユーザーがざっと目を通すときでも考慮すべき情報を強調表示します。
:::

:::tip
ユーザーがより成功するのに役立つオプション情報。
:::
```

警告のタイトルはカスタマイズできます。

:::note[カスタムタイトル]
これはカスタムタイトル付きのメモです。
:::

```markdown
:::note[カスタムタイトル]
これはカスタムタイトル付きのメモです。
:::
```

> [!TIP]
> [GitHub 構文の警告 (Admonitions)](https://github.com/orgs/community/discussions/16925)もサポートされています。

```
> [!TIP]
> GitHub 構文の警告 (Admonitions)もサポートされています。
```

## ビデオ埋め込み

YouTube や他のプラットフォームから埋め込みコードをコピーして、Markdown ファイルに貼り付けることができます。
または、YouTube や Bilibili のリンクを貼り付けてビデオを埋め込みます。

:::note
`https://www.youtube.com/watch?v=id` と `https://youtu.be/id` の 2 つの YouTube リンク形式をサポートしています。
Bilibili については、`リンク` と `【タイトル】 リンク` の両方の形式を受け入れます。
ビデオ ID 以外の URL パラメータ（トラッキングパラメータなど）は無視されます。
:::

```markdown
https://www.youtube.com/watch?v=oZpYEEcvu5I

【【乐正绫AI】《世末歌者》——“我仍然在无人问津的阴雨霉湿之地”【原创PV付】】 https://www.bilibili.com/video/BV1jG4y1C7uv/?share_source=copy_web
```

https://www.youtube.com/watch?v=oZpYEEcvu5I

【【乐正绫AI】《世末歌者》——“我仍然在无人问津的阴雨霉湿之地”【原创PV付】】 https://www.bilibili.com/video/BV1jG4y1C7uv/?share_source=copy_web

## コードブロック

次の機能をサポートしています。

- 構文のハイライト
- コピーボタン
- 色付き括弧
  - デフォルトで有効
- 差分表記
  - `!code ++` と `!code --` を使用して、追加および削除された行をマークします。
- ハイライト表記
  - コード内で `!code highlight` 表記を使用して、ハイライトされた行をマークできます。
- 単語ハイライト表記
  - コードスニペットで提供されるメタ文字列に基づいて単語をハイライトします。
- フォーカス表記
  - コード内で `!code focus` 表記を使用して、フォーカスされた行をマークできます。
- エラーレベル表記
  - コード内で `!code error` `!code warning` 表記を使用して、ハイライトされた行をマークできます。
- メタデータハイライト
  - コードスニペットのメタデータで `{1,3-5}` を使用して、ハイライトされた行をマークできます。
- メタデータ単語ハイライト
  - コードスニペットのメタデータで `/word/` を使用して、ハイライトされた単語をマークできます。
- 表記エスケープの削除
  - 表記エスケープを削除します。Markdown で `// [!code]` と書きたい場合に便利です。`// [\!code ...]` 式を処理すると、出力に `// [!code ...]` が表示されます。
- TypeScript Twoslash
  - 明示的なトリガーが必要

参考になるかもしれない情報：[shiki transformers](https://shiki.style/packages/transformers)

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

カスタム twoslash メッセージ
```ts twoslash
const log = "custom message"
// @log: `// @log message` を使用してカスタムメッセージを作成できます
type type = "log" | "error" | "warn" | "annotate"
// @annotate: `@error` `@warn` `@annotate` もサポートされています
const cat_touch_water = "cat" + "water"
// @warn: 猫は水に触れられません
const perpetual_motion_machine = "cat" + "butter"
// @error: これは不可能です
const twoslash = "https://www.typescriptlang.org/dev/twoslash/"
```
