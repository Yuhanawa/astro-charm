import charm from "astro-charm";

export default charm({
  config: {
    lang: "en",
    title: "Title",
    description: "A beautiful blog theme for Astro",
    licenseId: "CC-BY-4.0",
    author: "Your Name",
    side: {
      title: "title",
      sub: "sub title",
      bio: "Your bio, about 50~90 characters, line wrap",
      navHome: {
        title: "Home",
      },
      footer: [
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
      ],
    },
  },
  pages: {},
  overrides: {
    components: {
      // override components
      // ShootingStar: "./src/components/ShootingStar.astro",
    },
    custom: {
      // it will be added to the end of `<head>`.
      CustomScriptComponent: "./src/components/CustomScriptComponent.astro",
      CustomPostHeaderBottom: "./src/components/CustomPostHeaderBottom.astro",
    },
  },
});
