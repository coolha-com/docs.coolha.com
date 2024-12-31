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
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: '/logo.png',
      },
      items: [
        
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        /* {to: '/blog', label: 'Blog', position: 'left'}, */
        {type: 'localeDropdown', position:'right' },
      ],
      
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'link',
          items: [
            {
              label: 'Coolha',
              href: 'https://coolha.com',
            },
            {
              label:'About',
              href:'https://about.coolha.com',
            },
            {
              label:'Link3.to',
              href:'https://Link3.to/coolha',
            },
          ],
        },
        {
          title: 'Community',
          items: [

            {
              label: 'Lens',
              href: 'https://hey.xyz/u/coolha',
            },
            {
              label: 'X',
              href: 'https://x.com/coolha_com',
            },
            {
              label: 'Github',
              href: 'https://github.com/coolha-com',
            },
          ],
        },
        {
          title: 'More',
          items: [

            {
              label: 'Mirror Blog',
              href: 'https://mirror.xyz/0xF3D7De68985AB5e92841CE7bC335cFe0c04CAb4A',
            },
            {
              label: 'Guild',
              href: 'https://guild.xyz/coolha',
            },
            {
              label:'Snapshot DAO',
              href:'https://snapshot.box/#/matic:0xD9d88a0e2E3a5f0A58859CEE46Ce8c3C514Ec9A1',
            },
            {
              label:'Zora.co',
              href:'https://zora.co/@coolha',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Coolha`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
