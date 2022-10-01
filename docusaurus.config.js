// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mohan Muthukumar',
  tagline: 'Random tech thoughts',
  url: 'https://extrasalt.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'extrasalt', // Usually your GitHub org/user name.
  projectName: 'extrasalt.github.io', // Usually your repo name.
  deploymentBranch: 'master',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'extrasalt',
          src: 'img/diamondsvg.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'resume',
          //   position: 'right',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'right'},
          // {to: '/resume/', label: 'Resume', position: 'right'}, 
          {
            href: 'http://extrasalt.org/resume/',
            position: 'right',
            label: "Resume"
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Resume',
                to: '/resume',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/extrasalt',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/extrasalt',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mohanarangan Muthukumar`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
