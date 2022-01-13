// @ts-check

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const title = "ViPro's Blog";

/** @type {import('@docusaurus/preset-classic').ThemeConfig["footer"]["links"]} */
const links = [
  {
    title: "Links",
    items: [
      {
        label: "About Me",
        href: "//vdustr.github.io",
      },
      {
        label: "GitHub",
        href: "//github.com/VdustR",
      },
      {
        label: "Repositories",
        href: "//github.com/VdustR?tab=repositories&q=archived%3Afalse+fork%3Afalse",
      },
      {
        label: "Pocket",
        href: "//vdustr.github.io/pocket",
      },
    ],
  },
  {
    title: "Community",
    items: [
      {
        label: "Facebook",
        href: "//fb.me/vdustr",
      },
      {
        label: "Discord",
        href: "//ganhuaking.tw",
      },
    ],
  },
];

/** @type {import('@docusaurus/preset-classic').ThemeConfig["navbar"]["items"]} */
const navbarItems = [];

links.forEach(({ items }) => {
  items.forEach(({ label, href }) => {
    navbarItems.push({
      label,
      href,
      position: "right",
    });
  });
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: "我隨便寫寫, 客官就隨意看看",
  url: "https://vdustr.github.io/",
  baseUrl: "/blog/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://vdustr.github.io/brand/2022-01/favicon.ico",
  i18n: {
    locales: ["zh-Hant"],
    defaultLocale: "zh-Hant",
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          routeBasePath: "/",
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        pages: false,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "https://vdustr.github.io/brand/2022-01/ogimage.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title,
        logo: {
          alt: "ViPro's Blog",
          src: "https://vdustr.github.io/brand/2022-01/logo.svg",
        },
        items: navbarItems,
      },
      footer: {
        style: "dark",
        links,
        logo: {
          alt: "ViPro's Blog",
          src: "https://vdustr.github.io/brand/2022-01/logo.svg",
          height: 32,
          width: 32,
        },
        copyright: `Copyright © 2022-${new Date().getFullYear()} VdustR, Inc. Built with Docusaurus.`,
      },
      prism: {
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve("docusaurus-lunr-search"),
      {
        languages: ["zh"],
      },
    ],
  ],
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: true,
    },
    {
      href: "https://fonts.googleapis.com/css?family=Noto+Sans+TC:400,700&display=swap&subset=chinese-traditional",
    },
    {
      href: "https://cdn.jsdelivr.net/npm/victormono@latest/dist/index.min.css",
    },
  ],
};

module.exports = config;
