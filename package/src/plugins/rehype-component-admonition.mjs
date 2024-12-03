// source: https://github.com/saicaca/fuwari/blob/main/src/plugins/rehype-component-admonition.mjs

/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates an admonition component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} [properties.title] - An optional title.
 * @param {('tip'|'note'|'notice'|'question'|'important'|'warning'|'caution'|'danger')} type - The admonition type.
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created admonition component.
 */
export default function AdmonitionComponent(properties, children, type) {
  if (!Array.isArray(children) || children.length === 0)
    return h(
      "div",
      { class: "hidden" },
      'Invalid admonition directive. (Admonition directives must be of block type ":::note{name="name"} <content> :::")',
    );

  let title = h("span", { class: "title" }, type.toUpperCase());
  // get custom title from `:::note[custom title] <content> :::`
  if (properties && properties["has-directive-label"]) {
    title = children[0];
    title.tagName = "span";
    title.class = "title";
    children = children.slice(1);
  }

  // remove first and last <br> from children and first <br> from first child
  children = children.filter(
    (e, i) => !(e.tagName === "br" && (i === 0 || i === children.length - 1)),
  );
  if (children?.[0]?.children?.[0]?.tagName === "br")
    children[0].children = children[0].children.slice(1);

  return h("div", { class: `admonition ${type}` }, [title, ...children]);
}
