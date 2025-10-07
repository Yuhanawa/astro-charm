---
title: Markdown Example
published: 2024-12-02
updated: 2024-12-02
description: A simple example of a Markdown blog post.
tags: [Markdown, Demo]
category: Examples
---

[GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

Markdown is a plain text format for writing structured documents, based on conventions for indicating formatting in email and usenet posts.[^what-is-markdown]

## toc

## Emphasis

*italic: use `*` or `_`*

**bold: use `**` or `__`**

~~Strikethrough: use `~~`~~

## Lists

1. First item
2. Second item
3. Third item

- starting with `+`

* starting with `-`

- starting with `*`

## Task lists

- [x] Build a dream
- [x] Work hard and persevere
- [ ] Make the dream come true

## Code

```javascript
function life() {
  try {
    while (true) {
      this.eat();
      this.work();
      this.sleep();
    }
  } catch (e) {
    this.go("hell");
  }
}
```

## Blockquotes

> Blockquotes
>
> > Nested blockquotes

---

## Videos

You can copy the embed code from YouTube or other platforms, and paste it in the markdown file.
We also provide a convenient method in [markdown-extended#video-embed](/posts/markdown-extended#video-embed)

<iframe width="560" height="315" src="https://www.youtube.com/embed/oZpYEEcvu5I?si=y7J4aWD-zKxI8ugx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

[^what-is-markdown]: <https://github.github.com/gfm/#what-is-markdown->
