// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";
const lightTheme = themes.github;
const darkTheme = themes.dracula;

module.exports = {
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        hashed: true,
        indexBlog: false,
      }),
    ],
  ],
  title: "entree",
  tagline: "Beginner's guide to freedom",
  url: "https://beyond9thousand.github.io",
  baseUrl: "/entree/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/b9klogo.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "beyond9thousand", // Usually your GitHub org/user name.
  projectName: "entree", // Usually your repo name.
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
        googleAnalytics: {
          trackingID: "G-GJSVJ5ZB61",
          // anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
      },
      navbar: {
        title: "beyond9thousand",
        logo: {
          alt: "My Site Logo",
          src: "img/b9klogo_dark.svg",
          srcDark: "img/b9klogo.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "about",
          //   position: "left",
          //   label: "Introduction",
          // },
          {
            type: "doc",
            docId: "start",
            position: "left",
            label: "Resources",
          },
          {
            href: "https://github.com/beyond9thousand/entree",
            label: "Source",
            position: "right",
          },
        ],
      },
      image: "img/preview.png",
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting started",
                to: "/docs/start",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/wtNzY6U7GK",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/beyond9thousand",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Contact",
                href: "mailto:beyond9thousand@gmail.com",
              },
              {
                label: "Website",
                href: "https://beyond9thousand.vercel.app/",
              },
              {
                label: "GitHub",
                href: "https://github.com/beyond9thousand/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} beyond9thousand | Built with <a target="_blank" href="https://docusaurus.io/">Docusaurus</a>`,
      },
      prism: {
        additionalLanguages: ["bash", "diff", "json"],
        theme: lightTheme,
        darkTheme: darkTheme,
      },
    }),
};
