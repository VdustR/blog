import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://vdustr.github.io",
  base: "/blog",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "VDUSTR",
      description: "一些雜七雜八的隨手筆記。",
      favicon: "/assets-2026/vdustr/brand/favicon-32.png",
      customCss: ["./src/styles/global.css"],
      locales: { root: { label: "繁體中文", lang: "zh-TW" } },
      social: [
        { icon: "github", label: "GitHub", href: "https://github.com/VdustR" },
      ],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/blog/assets-2026/vdustr/brand/app-icon-180.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@vp-tw/cjk-web-fonts-hanamin@0.0.1/dist/index.css",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@vp-tw/cjk-web-fonts-glow-sans-tc-condensed@0.0.1/dist/Regular/Glow-Sans-TC.css",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "stylesheet",
            href: "https://cdn.jsdelivr.net/npm/@vp-tw/cjk-web-fonts-glow-sans-tc-condensed@0.0.1/dist/Bold/Glow-Sans-TC.css",
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
            content:
              "https://vdustr.github.io/blog/assets-2026/vdustr/site/og-image.png",
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
      expressiveCode: {
        themes: ["github-light"],
        useStarlightUiThemeColors: false,
      },
      lastUpdated: false,
      pagination: true,
    }),
  ],
  markdown: { shikiConfig: { theme: "github-light", wrap: true } },
});
