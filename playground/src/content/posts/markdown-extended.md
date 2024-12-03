---
title: Markdown Extended Features
published: 2024-05-01
description: "Read more about Markdown features"
image: ""
tags: [Demo, Example, Markdown]
category: "Examples"
draft: false
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

Following types of admonitions are supported: `note` `tip` `important` `warning` `caution` `danger`

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
