import type { AstroIntegration } from "astro";
import defineTheme from "astro-theme-provider";
import { z } from "astro/zod";
import licenses from "spdx-license-list/simple";
import icon from "./src/integrations/astro-icon/src/index";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

// shiki transformers
import { transformerColorizedBrackets } from "@shikijs/colorized-brackets";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
  transformerNotationFocus,
  transformerNotationErrorLevel,
  transformerMetaHighlight,
  transformerMetaWordHighlight,
  transformerRemoveNotationEscape,
} from "@shikijs/transformers";
import { transformerTwoslash } from "@shikijs/twoslash";
import transformerCopyButton from "./src/plugins/shiki-transformer-code-block.mjs";

// remark plugins
import remarkToc from "remark-toc";
import remarkMath from "remark-math";
import remarkReadingTime from "remark-reading-time";
import remarkGithubAdmonitionsToDirectives from "remark-github-admonitions-to-directives";
import remarkDirective from "remark-directive";
import parseDirectiveNode from "./src/plugins/remark-directive-rehype.mjs";

// rehype plugins
import rehypeKatex from "rehype-katex";
import rehypeExternalLinks from "rehype-external-links";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeComponents from "rehype-components";
import rehypeSlug from "rehype-slug";
import AdmonitionComponent from "./src/plugins/rehype-component-admonition.mjs";
import GithubCardComponent from "./src/plugins/rehype-component-github-card.mjs";
import remarkComponentEmbed from "./src/plugins/remark-component-embed.mjs";
import { existsSync } from "node:fs";

// The Charm theme uses `astro-icon`. For usage details, see: https://github.com/natemoo-re/astro-icon?tab=readme-ov-file#iconify-icons
// By default, the Charm theme uses `@iconify-json/simple-icons` and `@iconify-json/solar`. You need to install these two packages.
export const iconStringOrLightDark = z.string().or(
  z.object({
    light: z.string(),
    dark: z.string(),
  }),
);
export const iconWithStates = z.object({
  default: iconStringOrLightDark,
  hover: iconStringOrLightDark,
  active: iconStringOrLightDark,
});
export const iconStringOrLightDarkOrWithStates =
  iconStringOrLightDark.or(iconWithStates);

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
    navMenuIconHoverCursor: z.enum(["pointer", "none"]).default("none"),
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

const theme = defineTheme({
  name: "charm",
  schema: configSchema,
  integrations: [icon(), pagefind(), sitemap()],
  imports: {
    userCustomStyle: "./__no_match__",
    custom: {
      exports: {
        CustomScriptComponent: "./src/components/Empty.astro",
        CustomPostHeaderTop: "./src/components/Empty.astro",
        CustomPostHeaderBottom: "./src/components/Empty.astro",
        CustomPostFooterTop: "./src/components/Empty.astro",
        CustomPostFooterBottom: "./src/components/Empty.astro",
      },
    },
  },
});

export default function (
  themeOptions: Parameters<typeof theme>[0],
): AstroIntegration {
  if (!themeOptions || !themeOptions.config) {
    console.error("No Charm Config Found");
    console.info(
      "Please add config to your astro.config.{ts,mts,js,mjs}, you can find the example in `https://github.com/Yuhanawa/astro-charm/blob/main/package/theme-example/astro-charm.theme.ts`",
    );
    console.info("Here is an example:");
    console.info(
      `
    export default defineConfig({
      integrations: [
        charm({
          config: {
            lang: "en",
            title: "Charm Theme",
            description: "A beautiful blog theme for Astro",
            side: {
              title: "Charm Theme",
              sub: "A blog theme for Astro",
              bio: "Cupidatat ex id eiusmod aute do labore ea minim eu fugiat Lorem fugiat adipisicing.",
            },
            // other config
          },
        })
      ]
    });`,
    );
    throw new Error("No Charm Config Found");
  }

  // if ./src/styles/custom-charm.{css,scss,less,styl} exists, add it to userCustomStyle
  const customStylePath = "./src/styles/custom-charm.css";
  if (existsSync(customStylePath))
    (themeOptions.overrides ??= {}).userCustomStyle ??= [customStylePath];

  const integration = theme(themeOptions);
  const rawConfig = themeOptions.config;
  const config = configSchema.parse(rawConfig);

  const initHook =
    (integration: AstroIntegration) =>
    <K extends keyof AstroIntegration["hooks"]>(
      name: K,
      callback: NonNullable<AstroIntegration["hooks"][K]>,
    ) => {
      const oldHook = integration.hooks[name];
      const newHook: typeof oldHook = (options: any) => {
        if (callback && typeof callback === "function") callback(options);
        return (
          (oldHook && typeof oldHook === "function" && oldHook(options)) ||
          oldHook
        );
      };
      integration.hooks[name] = newHook;
    };
  const hook = initHook(integration);

  hook("astro:config:setup", (options) => {
    options.updateConfig({
      build: {
        //   format: "file",
        inlineStylesheets: "always",
      },
      vite: {
        build: {
          assetsInlineLimit: 50 * 1024,
        },
      },
      markdown: {
        shikiConfig: {
          themes: {
            light: "vitesse-light", // "vitesse-light" "rose-pine-dawn" "everforest-light"
            dark: "catppuccin-frappe", // "andromeeda" "catppuccin-frappe" "nord" "one-dark-pro" "dracula"
          },
          // wrap: false,
          transformers: [
            transformerColorizedBrackets({
              explicitTrigger:
                config.markdown?.colorizedBrackets?.explicitTrigger,
            }),
            // https://shiki.style/packages/transformers
            transformerNotationDiff({
              matchAlgorithm: "v3",
            }),
            transformerNotationHighlight({
              matchAlgorithm: "v3",
            }),
            transformerNotationWordHighlight({
              matchAlgorithm: "v3",
            }),
            transformerNotationFocus({
              matchAlgorithm: "v3",
            }),
            transformerNotationErrorLevel({
              matchAlgorithm: "v3",
            }),
            transformerMetaHighlight(),
            transformerMetaWordHighlight(),
            transformerRemoveNotationEscape(),
            transformerTwoslash({
              explicitTrigger: config.markdown?.twoslash?.explicitTrigger,
            }),
            transformerCopyButton(),
          ],
        },
        remarkPlugins: [
          remarkComponentEmbed,
          remarkToc,
          remarkMath,
          remarkReadingTime,
          remarkGithubAdmonitionsToDirectives,
          remarkDirective,
          parseDirectiveNode,
        ],
        rehypePlugins: [
          [
            rehypeExternalLinks,
            {
              rel: ["nofollow", "noopener", "noreferrer"],
              properties: { "data-external": true },
              target: "_blank",
            },
          ],
          rehypeKatex,
          rehypeSlug,
          [
            rehypeComponents,
            {
              components: {
                github: GithubCardComponent,
                note: (x: any, y: any) => AdmonitionComponent(x, y, "note"),
                notice: (x: any, y: any) => AdmonitionComponent(x, y, "notice"),
                tip: (x: any, y: any) => AdmonitionComponent(x, y, "tip"),
                question: (x: any, y: any) =>
                  AdmonitionComponent(x, y, "question"),
                important: (x: any, y: any) =>
                  AdmonitionComponent(x, y, "important"),
                warning: (x: any, y: any) =>
                  AdmonitionComponent(x, y, "warning"),
                caution: (x: any, y: any) =>
                  AdmonitionComponent(x, y, "caution"),
                danger: (x: any, y: any) => AdmonitionComponent(x, y, "danger"),
              },
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className: ["anchor"],
              },
              content: {
                type: "element",
                tagName: "span",
                properties: {
                  className: ["anchor-icon"],
                  "data-pagefind-ignore": true,
                },
                children: [
                  {
                    type: "text",
                    value: config.markdown.headingAnchor,
                  },
                ],
              },
            },
          ],
        ],
      },
    });
  });
  hook("astro:config:done", (options) => {
    if (!options.config.site)
      options.logger.warn("the `site` astro.config option is missing");
  });

  return integration;
}
