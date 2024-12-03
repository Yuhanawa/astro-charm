// source: https://github.com/saicaca/fuwari/blob/main/src/plugins/rehype-component-github-card.mjs

/// <reference types="mdast" />
import { h } from "hastscript";

/**
 * Creates a GitHub Card component.
 *
 * @param {Object} properties - The properties of the component.
 * @param {string} properties.repo - The GitHub repository in the format "owner/repo".
 * @param {import('mdast').RootContent[]} children - The children elements of the component.
 * @returns {import('mdast').Parent} The created GitHub Card component.
 */
export default function GithubCardComponent(properties, children) {
  if (Array.isArray(children) && children.length !== 0)
    return h("div", { class: "hidden" }, [
      'Invalid directive. ("github" directive must be leaf type "::github{repo="owner/repo"}")',
    ]);

  if (!properties.repo || !properties.repo.includes("/"))
    return h(
      "div",
      { class: "hidden" },
      'Invalid repository. ("repo" attributte must be in the format "owner/repo")',
    );

  const repo = properties.repo;
  const cardId = `gc-id-${Math.random().toString(36).slice(-6)}`; // Collisions are not important

  const nTitle = h(`div`, { class: "gc-titlebar" }, [
    h("div", { class: "gc-titlebar-left" }, [
      h("div", { class: "gc-owner" }, [
        h(`div#${cardId}-avatar`, { class: "gc-avatar" }),
        h("div", { class: "gc-user" }, repo.split("/")[0]),
      ]),
      h("div", { class: "gc-divider" }, "/"),
      h("div", { class: "gc-repo" }, repo.split("/")[1]),
    ]),
    h("div", { class: "github-logo" }),
  ]);

  const nDescription = h(
    `div#${cardId}-description`,
    { class: "gc-description" },
    "Description not set.",
  );

  // info bar
  const nStars = h(`div#${cardId}-stars`, { class: "gc-stars" }, "Loading");
  const nForks = h(`div#${cardId}-forks`, { class: "gc-forks" }, "Loading");
  const nLicense = h(
    `div#${cardId}-license`,
    { class: "gc-license" },
    "Loading",
  );
  const nLanguage = h(
    `span#${cardId}-language`,
    { class: "gc-language" },
    "Loading",
  );

  const nScript = h(
    `script#${cardId}-script`,
    { type: "text/javascript", defer: true },
    /*js*/ `
      fetch('https://api.github.com/repos/${repo}', { referrerPolicy: "no-referrer" }).then(response => response.json()).then(data => {
        if (data.description) document.getElementById('${cardId}-description').innerText = data.description.replace(/:[a-zA-Z0-9_]+:/g, '');
        document.getElementById('${cardId}-language').innerText = data.language || 'unknown';
        document.getElementById('${cardId}-forks').innerText = Intl.NumberFormat('en-us', { notation: "compact", maximumFractionDigits: 1 }).format(data.forks).replaceAll("\u202f", '');
        document.getElementById('${cardId}-stars').innerText = Intl.NumberFormat('en-us', { notation: "compact", maximumFractionDigits: 1 }).format(data.stargazers_count).replaceAll("\u202f", '');
        const avatarEl = document.getElementById('${cardId}-avatar');
        avatarEl.style.backgroundImage = 'url(' + data.owner.avatar_url + ')';
        avatarEl.style.backgroundColor = 'transparent';
        document.getElementById('${cardId}-license').innerText = data.license?.spdx_id || 'unknown';
        document.getElementById('${cardId}-card').classList.remove("fetch-waiting");
      }).catch(err => {
        document.getElementById('${cardId}-card').classList.add("fetch-error");
        console.warn("[GITHUB-CARD] (Error) Loading card for ${repo} | ${cardId}.", err);
      })
    `,
  );

  return h(
    `a#${cardId}-card`,
    {
      class: "card-github fetch-waiting",
      href: `https://github.com/${repo}`,
      target: "_blank",
      repo,
    },
    [
      nTitle,
      nDescription,
      h("div", { class: "gc-infobar" }, [nStars, nForks, nLicense, nLanguage]),
      nScript,
    ],
  );
}
