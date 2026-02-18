// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenRefill',
  tagline: 'Open Source Refill Station Documentation',
  favicon: 'img/favicon.ico',

  future: {
    v4: true, 
  },

  url: 'https://openrefill.github.io',
  baseUrl: '/',

  organizationName: 'OpenRefill', 
  projectName: 'OpenRefill.github.io', 

  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // This makes docs the homepage
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // "Edit this page" links removed
        },
        blog: false, // Disabled for a clean documentation-only site
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en"],
        indexBlog: false,
        docsRouteBasePath: "/", 
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: '', 
        logo: {
          alt: 'OpenRefill Logo',
          src: 'img/logo.svg', 
        },
        items: [], // Search bar auto-injects here
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
