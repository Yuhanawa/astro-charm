import { h } from "hastscript";
// prettier-ignore
export default () => ({
  name: "transformer-code-block",
  pre(node) {
    const title = [...(this.options.meta?.__raw?.matchAll(/([^=\s]+)=(?:"([^"]*)"|([^"\s]*))/g) ?? [])].map(([, k, v1, v2]) => ["title", "filename", "file", "name"].includes(k)&&(v1??v2)).find(Boolean);

    return h("div", { class: "code-block" }, [
      h("div", { class: `code-header ${title?"has-title":""}` }, [
        h("span", { class: `code-title ${title?"":"hidden"}` }, title),
        h("span", { class: "code-language"}, this.options.lang),
        h("button", { class: "code-copy", "data-code": this.source, onclick: 
          /*js*/ `navigator.clipboard.writeText(this.dataset.code ?? "Copy failed");
                  this.classList.add("copied"); setTimeout(() => this.classList.remove("copied"), 1000);`},
          " ")]),
      node,
    ]);
  },
});
