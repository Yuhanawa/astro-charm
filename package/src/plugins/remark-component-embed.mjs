import { visit } from "unist-util-visit";

const YOUTUBE_PATTERN =
  /^https:\/\/(?:youtu\.be\/|www\.youtube\.com\/watch\?v=)([0-9A-Za-z_-]+)(?:\?\S*|)\s*$/;
const BILIBILI_PATTERN =
  /^(【.*?】\s*)?https:\/\/www\.bilibili\.com\/video\/(?:av(\d+)|BV(\w+))(?:\/\?\S*|\/|)\s*$/;

export default function remarkComponentEmbed() {
  return function transformer(tree) {
    visit(tree, "paragraph", (node) => {
      if (!node || !node.children) return;
      let content = "";
      // prettier-ignore
      if (
        !((node.children.length === 1 &&
            ((node.children[0].type === "link" && node.children[0].title === null && (content = node.children[0].url)) || 
             (node.children[0].type === "text"                                    && (content = node.children[0].value))))
        || (node.children.length === 2 &&
            node.children[0].type === "text" && node.children[1].type === "link" && node.children[1].title === null &&
            (content = node.children[0].value + node.children[1].url)))
      ) return;

      let match = null;
      if ((match = content.match(YOUTUBE_PATTERN))) {
        node.type = "html";
        node.children = undefined;
        node.value = `<iframe class="video-embed" width="100%" height="518" src="https://www.youtube.com/embed/${match[1]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
      } else {
        if ((match = content.match(BILIBILI_PATTERN))) {
          node.type = "html";
          node.children = undefined;
          // prettier-ignore
          node.value = `<iframe class="video-embed" width="100%" height="518" title="${match[1] || "Bilibili video player"}" src="//player.bilibili.com/player.html?isOutside=true${
            match[2] ? `&aid=${match[2]}`
          : match[3] ? `&bvid=${match[3]}`: ""
          }" scrolling="no" border="0" frameborder="0" framespacing="0" allowfullscreen></iframe>`;
        }
      }
    });
  };
}
