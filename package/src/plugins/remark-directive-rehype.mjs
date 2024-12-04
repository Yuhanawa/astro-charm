import { h } from "hastscript";
import { visit } from "unist-util-visit";

export default function parseDirectiveNode() {
  return (tree, {}) => {
    visit(tree, (node) => {
      if (
        node.type === "containerDirective" ||
        node.type === "leafDirective" ||
        node.type === "textDirective"
      ) {
        const data = node.data || (node.data = {});
        const hast = h(node.name, node.attributes || {});

        node.children[0]?.data?.directiveLabel &&
          (hast.properties["has-directive-label"] = true);

        data.hName = hast.tagName;
        data.hProperties = hast.properties;
      }
    });
  };
}
