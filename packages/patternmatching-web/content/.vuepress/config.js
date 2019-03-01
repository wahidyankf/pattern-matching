module.exports = {
  head: [
    [
      'link',
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        href: `/favicon-v5.ico`,
      },
    ],
    ['meta', {name: 'theme-color', content: '#000'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: `/icons/apple-icon-152x152.png`}],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/favicon-v5.ico',
        color: '#000',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/ms-icon-144x144.png',
      },
    ],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
  ],
  markdown: {
    lineNumbers: true,
    toc: {includeLevel: [1, 2, 3]},
  },
  locales: {
    '/': {
      lang: 'en',
      title: 'PatternMatching!',
      description: 'Because it rocks!',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'en',
        selectText: 'Languages',
        serviceWorker: {
          updatePopup: {
            message: 'New content available',
            buttonText: 'refresh',
          },
        },
        nav: [
          {text: 'OCaml', link: '/en/ocaml/'},
          {text: 'ReasonML', link: '/en/reasonml/'},
        ],
        sidebar: {
          '/en/ocaml/': [
            ['/en/ocaml/01-introduction/', '01 - Introduction'],
            ['/en/ocaml/02-basic-ocaml-fu/', '02 - Basic OCaml-fu'],
            {
              title: 'Appendix',
              collapsable: true,
              children: [
                [
                  '/en/ocaml/appendix/up-and-running',
                  'Appendix A - Up and Running',
                ],
                [
                  '/en/ocaml/appendix/text-editor-integration',
                  'Appendix B - Text Editor Integration',
                ],
                ['/en/ocaml/appendix/resources', 'Appendix C - OResources'],
              ],
            },
          ],
          '/en/reasonml/': [
            ['/en/reasonml/01-introduction/', '01 - Introduction'],
            ['/en/reasonml/02-basic-re-fu/', '02 - Basic Re-fu'],
            {
              title: 'Appendix',
              collapsable: true,
              children: [
                [
                  '/en/reasonml/appendix/up-and-running',
                  'Appendix A - Up and Running',
                ],
                [
                  '/en/reasonml/appendix/text-editor-integration',
                  'Appendix B - Up and Running',
                ],
                ['/en/reasonml/appendix/resources', 'Appendix C - OResources'],
              ],
            },
          ],
        },
      },
    },
  },
  plugins: {
    tabs: true,
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: 'Konten baru tersedia',
        buttonText: 'Muat ulang',
      },
    },
    '@vuepress/back-to-top': true,
    '@vuepress/plugin-medium-zoom': true,
    '@vuepress/notification': true,
    flowchart: true,
  },
};
