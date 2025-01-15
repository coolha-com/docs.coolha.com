import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Coolha Docs',
  tagline: '为创作者、品牌、社区赋能，连接数字增长新动力，Web3世界的营销服务。',
  favicon: '/logo.png',

  // Set the production url of your site here
  url: 'https://docs.coolha.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false, 
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'coolha-com', // Usually your GitHub org/user name.
  projectName: 'docs.coolha.com', // Usually your repo name.
  deploymentBranch:'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','zh-Hant','en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs:  {
            sidebarPath: './sidebars.ts',
            editUrl:'https://github.com/coolha-com/docs.coolha.com//edit/main/',
            path: "docs",
            routeBasePath: "/",
            showLastUpdateTime: true,
        },
        blog:false,
/*         blog: {
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
        }, */
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
        alt: 'Coolha Docs Logo',
        src: '/logo.png',
      },
      items: [
        
        { type: 'doc',docId: 'intro', label: '文档',position: 'left',},
        { type: "doc",docId: 'intro',docsPluginId:'apps', label: '应用', position: 'left'},
        { type: "doc",docId: 'intro',docsPluginId:'community', label: '社区', position: 'left'},
        /* {to: 'showcase', label: 'Showcase', position: 'left'}, */
        /* {to: 'blog', label: 'Blog', position: 'left'}, */
        {href: 'https://mirror.xyz/0xF3D7De68985AB5e92841CE7bC335cFe0c04CAb4A', label: '博客', position: 'left'},
        
        
       /*  { type: 'docsVersionDropdown',  }, */ //添加版本下拉列表
        {href: 'https://link3.to/coolha', label: '联系', position: 'right'},
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
        id: 'apps',
        path: 'apps',
        routeBasePath: 'apps',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebars.ts'),
      },
    ],
  ],
};

export default config;
