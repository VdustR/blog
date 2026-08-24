import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://vdustr.github.io",
  base: "/blog",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "VDUSTR",
      description: "寫給仍在動手的人。技術筆記、實驗與程式碼。",
      favicon: "/blog/favicon.svg",
      logo: {
        src: "./src/assets/logo.svg",
        alt: "VDUSTR",
        replacesTitle: true,
      },
      customCss: ["./src/styles/global.css"],
      locales: { root: { label: "繁體中文", lang: "zh-TW" } },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/VdustR" },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@vp-tw/cjk-web-fonts-jigmo@0.0.1/dist/index.css",
          },
        },
        {
          tag: "link",
          attrs: { rel: "preconnect", href: "https://fonts.googleapis.com" },
        },
        {
          tag: "link",
          attrs: {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossorigin: "anonymous",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,400..700;1,400..700&display=swap",
          },
        },
        { tag: "meta", attrs: { property: "og:site_name", content: "VDUSTR" } },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://vdustr.github.io/blog/og-image.png",
          },
        },
        {
          tag: "meta",
          attrs: { name: "twitter:card", content: "summary_large_image" },
        },
        {
          tag: "link",
          attrs: {
            rel: "alternate",
            type: "application/rss+xml",
            title: "VDUSTR RSS",
            href: "/blog/rss.xml",
          },
        },
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://www.googletagmanager.com/gtag/js?id=G-K9RL25J2B9",
          },
        },
        {
          tag: "script",
          content:
            "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-K9RL25J2B9',{anonymize_ip:true});",
        },
      ],
      sidebar: [
        { label: "首頁", link: "/" },
        { label: "2023", items: [{ autogenerate: { directory: "2023" } }] },
        {
          label: "2022",
          collapsed: true,
          items: [{ autogenerate: { directory: "2022" } }],
        },
        {
          label: "2021",
          collapsed: true,
          items: [{ autogenerate: { directory: "2021" } }],
        },
      ],
      components: {
        Header: "./src/components/Header.astro",
        PageTitle: "./src/components/PageTitle.astro",
        Footer: "./src/components/Footer.astro",
        ThemeSelect: "./src/components/ThemeSelect.astro",
      },
      lastUpdated: false,
      pagination: true,
    }),
  ],
  markdown: { shikiConfig: { theme: "github-light", wrap: true } },
});
