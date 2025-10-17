# Astro Theme: Charm

[English](./README.md) | [日本語](./README-ja.md) | [中文](./README-zh-cn.md)


漂亮, 简洁且易用的博客主题

![Preview of Live Demo](docs/Charm-Theme-Preview-20250211.png "Charm-Theme-Preview-20250211")

[Github](https://github.com/yuhanawa/astro-charm) | [Live Demo](https://astro-charm.vercel.app/) | [PageSpeed](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fastro-charm.vercel.app%2F)

注意: `Live Demo` 中右侧的图片不是 Charm 主题的一部分

## 特性

- 基于 Astro v5 构建
- 支持桌面端和移动端
- PageSpeed 性能优秀
  - 满分100分！[2024年12月29日的测试报告](https://pagespeed.web.dev/analysis/https-astro-charm-vercel-app/g1cxq98foh)
  - 查看最新的[PageSpeed测试结果](https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fastro-charm.vercel.app%2F)
- 支持分类和标签页面
- 深色模式
- 代码块
- 搜索功能
- 评论系统支持（giscus）
- Google Analytics 支持
- Sitemap
- RSS
- 自定义功能
  - [如何自定义主题(英文)](https://astro-charm.vercel.app/posts/custom)

## 使用方法

1. 运行以下命令, 使用 `astro-charm` 主题创建新项目

```bash
pnpm create astro-theme@latest use astro-charm
```

2. 添加 `src/content.config.ts` 到你的项目

```ts
import { collections as charmCollections } from "astro-charm/content";
export const collections = {
  // your other collections
  ...charmCollections,
};
```

3. 修改配置并开始使用！

你需要在 `astro.config.ts `文件中添加 `site`, 因为 `charm` 主题的 `sitemap` 和 `RSS` 需要它

更多配置信息请查看: [Config](#config)

<details>
  <summary>在现有项目中安装</summary>

1. 在你的项目中安装 `astro-charm`:

```bash
pnpm astro add astro-charm
```

2. 修改 `src/content.config.ts` 文件:

```ts
import { collections as charmCollections } from "astro-charm/content";
export const collections = {
  // your other collections
  ...charmCollections,
};
```

3. 修改 `astro.config.ts` 文件:


```ts
import { defineConfig } from "astro/config";
import charm from "astro-charm";

export default defineConfig({
  prefetch: true,
  site: "<你的网站URL>",

  integrations: [
    charm({
      config: {
        lang: "zh", // 用于 HTML 的 lang 属性和 RSS
        title: "首页标题", // 用于首页 SEO
        description: "首页描述", // 用于首页 SEO
        side: {
          title: "标题",
          sub: "副标题",
          bio: "你的简介, 建议50~90字符, 会自动换行",
        },
        // more config
      },
    }),
  ],
});
```

</details>

## Config

你需要在 `astro.config.ts `文件中添加 `site`, 因为 `charm` 主题的 `sitemap` 和 `RSS` 需要它

### 最小配置

```ts
import { defineConfig } from "astro/config";
import charm from "astro-charm";

export default defineConfig({
  prefetch: true,
  site: "<你的网站URL>",

  integrations: [
    charm({
      config: {
        lang: "zh", // 用于 HTML 的 lang 属性和 RSS
        title: "首页标题", // 用于首页 SEO
        description: "首页描述", // 用于首页 SEO
        side: {
          title: "标题",
          sub: "副标题",
          bio: "你的简介, 建议50~90字符, 会自动换行",
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

## 常见问题

### [CouldNotTransformImage] Could not transform image

请手动在项目中安装Sharp（`sharp`）

```bash
pnpm add sharp
```


### ResponseSentError: The response has already been sent to the browser and cannot be altered.

请在 `src\content` 文件夹中创建 `posts` 文件夹，并在其中创建一篇文章（`.md` 文件）。
最小 md 文件：

```
---
title: title
published: 2025-04-10
---

```


## 问题与建议

如果您有任何问题或建议，欢迎提出 Issue。也欢迎所有的 Pull Request！
