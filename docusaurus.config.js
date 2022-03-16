// @ts-check

const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const title = "ViPro's Blog";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title,
  tagline: "我隨便寫寫, 客官就隨意看看",
  url: "https://vdustr.dev",
  baseUrl: "/blog/",
  trailingSlash: true,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://vdustr.dev/brand/2022-01/favicon.ico",
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
      image: "https://vdustr.dev/brand/2022-01/ogimage.png",
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title,
        logo: {
          alt: "ViPro's Blog",
          src: "https://vdustr.dev/brand/2022-01/logo.svg",
        },
        items:
          /** @type {import('@docusaurus/preset-classic').ThemeConfig["navbar"]["items"]} */
          [
            {
              label: "ViPro Land",
              href: "https://vdustr.dev",
              position: "right",
            },
          ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links:
          /** @type {import('@docusaurus/preset-classic').ThemeConfig["footer"]["links"]} */
          [
            {
              title: "Links",
              items: [
                {
                  label: "About Me",
                  href: "//vdustr.dev",
                },
                {
                  label: "GitHub",
                  href: "//github.com/VdustR",
                },
                {
                  label: "Links",
                  href: "//vdustr.dev/links",
                },
                {
                  label: "Projects",
                  href: "//vdustr.dev/projects",
                },
              ],
            },
            {
              title: "Community",
              items: [
                {
                  label: "Facebook",
                  href: "//fb.vdustr.dev",
                },
                {
                  label: "Twitter",
                  href: "//t.vdustr.dev",
                },
                {
                  label: "Discord",
                  href: "//dc.vdustr.dev",
                },
              ],
            },
          ],
        logo: {
          alt: "ViPro's Blog",
          src: "https://vdustr.dev/brand/2022-01/logo.svg",
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
