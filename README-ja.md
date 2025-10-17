# Astro Theme: Charm

[English](./README.md) | [日本語](./README-ja.md) | [中文](./README-zh-cn.md)


美しく、シンプルで使いやすいブログテーマ

![Preview of Live Demo](docs/Charm-Theme-Preview-20250211.png "Charm-Theme-Preview-20250211")

[Github](https://github.com/yuhanawa/astro-charm) | [ライブデモ](https://astro-charm.vercel.app/) | [PageSpeed](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fastro-charm.vercel.app%2F)

注意：`ライブデモ`の右側の画像はCharmテーマの一部ではありません

## 特徴

- Astro v5で構築
- デスクトップとモバイルに対応
- PageSpeedスコアが優秀
  - 満点の100点！[2024年12月29日のレポート](https://pagespeed.web.dev/analysis/https-astro-charm-vercel-app/g1cxq98foh)
  - 最新の[PageSpeedスコア](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fastro-charm.vercel.app%2F)を確認
- カテゴリーとタグページ
- ダークモード
- コードブロック
- 検索機能
- コメント機能対応（giscus）
- Google Analytics対応
- サイトマップ
- RSS
- カスタマイズ
  - [テーマのカスタマイズ方法](https://astro-charm.vercel.app/posts/custom)

## 使用方法

1. 以下のコマンドを実行して、`astro-charm`テーマで新しいプロジェクトを作成します。

```bash
pnpm create astro-theme@latest use astro-charm
```

2. `src/content.config.ts` をプロジェクトに追加します。

```ts
import { collections as charmCollections } from "astro-charm/content";
export const collections = {
  // your other collections
  ...charmCollections,
};
```

3. 設定を変更して使用開始！

注意：`astro.config.ts`ファイルに`site`を追加する必要があります。`charm`は`sitemap`と`RSS`にこれを使用します。

詳細な設定については：[Config](#config)をご覧ください。

<details>
  <summary>既存のプロジェクトにインストール</summary>

1. プロジェクトに`astro-charm`をインストールします。

```bash
pnpm astro add astro-charm
```

2. `src/content.config.ts` ファイルを変更します。

```ts
import { collections as charmCollections } from "astro-charm/content";
export const collections = {
  // your other collections
  ...charmCollections,
};
```

3. `astro.config.ts`ファイルを修正します：


```ts
import { defineConfig } from "astro/config";
import charm from "astro-charm";

export default defineConfig({
  prefetch: true,
  site: "<あなたのサイトURL>",

  integrations: [
    charm({
      config: {
        lang: "ja", // HTMLのlang属性とRSS用
        title: "ホームページのタイトル", // ホームページのSEO用
        description: "ホームページの説明", // ホームページのSEO用
        side: {
          title: "タイトル",
          sub: "サブタイトル",
          bio: "あなたの自己紹介文（50〜90文字程度推奨、自動的に改行されます）",
        },
        // その他の設定
      },
    }),
  ],
});
```

</details>

## Config

`astro.config.ts`ファイルに`site`を追加する必要があります。`charm`は`sitemap`と`RSS`にこれを使用します。

### 最小限の設定

```ts
import { defineConfig } from "astro/config";
import charm from "astro-charm";

export default defineConfig({
  prefetch: true,
  site: "<あなたのサイトURL>",

  integrations: [
    charm({
      config: {
        lang: "ja", // HTMLのlang属性とRSS用
        title: "ホームページのタイトル", // ホームページのSEO用
        description: "ホームページの説明", // ホームページのSEO用
        side: {
          title: "タイトル",
          sub: "サブタイトル",
          bio: "あなたの自己紹介文（50〜90文字程度推奨、自動的に改行されます）",
        },
      },
    }),
  ],
});
```

### [Config schema](https://github.com/Yuhanawa/astro-charm/blob/main/package/index.ts#L59-L161)

```ts
const configSchema = z.object({
  lang: z.string(),
  title: z.string(),
  titleSuffix: z.string().or(z.boolean()).default(true),
  description: z.string().optional(),
  author: z.string().optional(),
  placeholderImage: z.string().min(1).optional(),
  licenseId: z.enum([...licenses] as [string, ...string[]]).optional(),
  rss: z.boolean().default(true),
  googleAnalyticsId: z.string().optional(),
  font: z
    .enum(["auto", "full", "only-en", "disabled", "dynamic"])
    .default("auto"),
  shootingStar: z.boolean().default(true),
  side: z.object({
    title: z.string(),
    sub: z.string(),
    bio: z.string(),
    navHome: z
      .object({
        title: z.string().default("Home"),
        link: z.string().default("/"),
        icon: iconStringOrLightDarkOrWithStates.default({
          default: "solar:file-text-broken",
          hover: "solar:file-smile-outline",
          active: "solar:file-smile-bold-duotone",
        }),
      })
      .default({}),
    footer: z
      .array(
        z.object({
          title: z.string(),
          link: z.string(),
          icon: iconStringOrLightDarkOrWithStates,
        }),
      )
      .min(1)
      .default([
        {
          title: "Twitter",
          link: "https://x.com/",
          icon: "simple-icons:twitter",
        },
        {
          title: "GitHub",
          link: "https://github.com/yuhanawa/astro-charm",
          icon: "simple-icons:github",
        },
      ]),
    navStyle: z.enum(["default", "only-icon", "only-title"]).default("default"),
    footerStyle: z
      .enum(["default", "only-icon", "only-title"])
      .default("default"),
    toc: z
      .object({
        enabled: z.boolean().optional().default(true),
        title: z.string().optional().default("Table of contents"),
        minLength: z.number().min(1).max(3).optional(),
        maxDepth: z.number().min(1).max(6).optional(),
      })
      .default({}),
  }),
  markdown: z
    .object({
      colorizedBrackets: z
        .object({
          explicitTrigger: z.boolean().default(false), // if true, ```ts colorize-brackets
        })
        .default({}),
      twoslash: z
        .object({
          explicitTrigger: z.boolean().default(true), // if true, ```ts twoslash
        })
        .default({}),
      headingAnchor: z.string().default("#"),
    })
    .default({}),
  giscus: z
    .object({
      repo: z.string(),
      repoId: z.string(),
      category: z.string(),
      categoryId: z.string(),
      mapping: z
        .enum(["pathname", "url", "title", "og:title"])
        .default("pathname"),
      strict: z.boolean().default(false),
      reactions: z.boolean().default(true),
      emitMetadata: z.boolean().default(false),
      inputPosition: z.enum(["top", "bottom"]).default("top"),
      theme: z
        .object({
          light: z.string(),
          dark: z.string(),
        })
        .default({
          light: "light",
          dark: "dark",
        }),
    })
    .optional(),
});
```

## トラブルシューティング

### [CouldNotTransformImage] Could not transform image

プロジェクトに手動でSharp（`sharp`）をインストールしてください。

```bash
pnpm add sharp
```

### ResponseSentError: The response has already been sent to the browser and cannot be altered.

`src\content` フォルダ内に `posts` フォルダを作成し、その中に投稿（`.md` ファイル）を作成してください。
最小限の md ファイル：

```
---
title: title
published: 2025-04-10
---

```


## 質問と提案

質問や提案がありましたら、Issueを開いてお気軽にご連絡ください。すべてのPull Requestを歓迎します！
