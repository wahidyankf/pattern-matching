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
      lang: 'id',
      title: 'AyoKoding!',
      description: 'Karena semua orang bisa jadi jagoan koding.',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        label: 'Bahasa (ID)',
        selectText: 'Languages',
        serviceWorker: {
          updatePopup: {
            message: 'Konten baru tersedia.',
            buttonText: 'Muat ulang',
          },
        },
        nav: [
          {text: 'Teka-Teki Koding', link: '/id/puzzles/coding/'},
          // {text: 'Tentang', link: '/id/about/'},
        ],
        sidebar: {
          '/id/puzzles/coding/': [
            ['/id/puzzles/coding/', 'Intro'],
            ['/id/puzzles/coding/toc', 'Daftar Isi'],
            {
              title: '⭐',
              collapsable: false,
              children: [
                ['/id/puzzles/coding/1-star/reverse-string', 'Reverse String'],
                ['/id/puzzles/coding/1-star/palindrome', 'Palindrome'],
                [
                  '/id/puzzles/coding/1-star/reverse-integer',
                  'Reverse Integer',
                ],
                [
                  '/id/puzzles/coding/1-star/maximum-character',
                  'Maximum Character',
                ],
                ['/id/puzzles/coding/1-star/fizzbuzz', 'fizzbuzz'],
              ],
            },
            {
              title: '⭐⭐',
              collapsable: false,
              children: [
                ['/id/puzzles/coding/2-star/array-chunking', 'Array Chunking'],
                [
                  '/id/puzzles/coding/2-star/sentence-capitalization',
                  'Sentence Capitalization',
                ],
                ['/id/puzzles/coding/2-star/steps', 'Steps'],
              ],
            },
            {
              title: '⭐⭐⭐',
              collapsable: false,
              children: [['/id/puzzles/coding/3-star/anagram', 'Anagram']],
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
