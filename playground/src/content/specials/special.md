---
title: Special
icon:
  {
    default: "solar:star-fall-broken",
    hover: "solar:star-fall-outline",
    active: "solar:star-fall-bold-duotone",
  }
published: 2024-11-30
updated: 2024-11-30
disabled: true
index: 9
---

## Special Page

This is a special page.

you can add special page by adding `special.md` to the `src/content/specials` directory.

example:

if you add `about.md` to the `src/content/specials` directory, you can access the special page by going to `/about`.

special page allows `title` `icon` `published` `updated` and `disabled` fields in frontmatter.

`title` and `icon` fields are required, only used to display the title and icon of the sidebar item, not displayed in page.

`published` and `updated` fields are optional, if not provided, they will not be displayed.

`disabled` field is optional, if not provided, it will be `false`. if `disabled` field is `true`, the special page will not be displayed on production (it will still be displayed in development)

this is the frontmatter for the this (`special.md`) file:

```yaml
---
published: 2024-11-30
updated: 2024-11-30
disabled: true
---
```
