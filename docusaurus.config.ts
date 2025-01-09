import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Coolha Docs',
  tagline: 'Cool',
  favicon: '/logo.png',

  // Set the production url of your site here
  url: 'https://docs.coolha.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coolha-com', // Usually your GitHub org/user name.
  projectName: 'docs.coolha.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','zh-Hans','fr'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs:  {
            sidebarPath: './sidebars.ts',
            editUrl:'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            path: "docs",
            routeBasePath: "/",
            showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],

  ],

  themeConfig: {
/*     docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    }, */
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: '/logo.png',
      },
      items: [
        
        { type: 'doc',docId: 'intro', label: 'Docs',position: 'left',},
        { type: "doc",docId: 'intro',docsPluginId:'coolha', label: 'Coolha', position: 'left'},
        { type: "doc",docId: 'intro',docsPluginId:'shop', label: 'Shop', position: 'left'},
        { type: "doc",docId: 'intro',docsPluginId:'community', label: 'Community', position: 'left'},
        {to: 'showcase', label: 'Showcase', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        
        
       /*  { type: 'docsVersionDropdown',  }, */
        {href: 'https://link3.to/coolha', label: 'Connect', position: 'right'},
        {type: 'localeDropdown', position:'right' },
      ],
      
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./1community.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'coolha',
        path: 'coolha',
        routeBasePath: 'coolha',
        sidebarPath: require.resolve('./2coolha.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'shop',
        path: 'shop',
        routeBasePath: 'shop',
        sidebarPath: require.resolve('./3shop.js'),
      },
    ],
  ],
};

export default config;
