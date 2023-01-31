module.exports = {
  base: '/vuepress-template',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'vuepress 模板',
      description: 'VuePress template, theme, and plugin Demo. The purpose is that users can directly clone this repository as a startup project for initializing a VuePress website, and then add custom configurations and functions based on this project.'
    },
    '/en/': {
      lang: 'en-US',
      title: 'vuepress Tmplate',
      description: 'VuePress模板, 主题, 插件演示。展示了一个简单的VuePress案例模板，用户可以直接clone这个仓库，作为初始化一个VuePress网站启动项目，在这个项目的基础上新增自定义配置和功能。'
    }
  },
  plugins: [
    '@vuepress/back-to-top',
    ['qrcode',{
      // "/" and "/zh/" correspond to the path set by locales
        labelText: {
          "/": "二维码", 
          "/en/": "QrCode",
        },
        size:'small',
        channel:true
    }]
  ],
  themeConfig: {

    locales: {
      '/': {
       // 多语言下拉菜单的标题
       selectText: '选择语言',
       // 该语言在下拉菜单中的标签
       label: '简体中文',
       // 编辑链接文字
       editLinkText: '在 GitHub 上编辑此页',
       // Service Worker 的配置
       serviceWorker: {
         updatePopup: {
           message: "发现新内容可用.",
           buttonText: "刷新"
         }
       },
       // 当前 locale 的 algolia docsearch 选项
       algolia: {},
       nav: [
         { text: '指南1', link: '/guide1/', ariaLabel: '指南' },
         { text: '指南2', link: '/guide2/', ariaLabel: '指南' },
         { text: 'Github', link: 'https://github.com/jaronnie/vuepress-template' }
       ],
       sidebar: {
         '/guide1/': [
           '',
           'theme',
           'plugin'
         ],
         '/guide2/': [
           '',
         ],
         '/resource/': [],
       }
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Guide', link: '/en/guide1/', ariaLabel: 'Guide' },
					{ text: 'Github', link: 'https://github.com/jaronnie/vuepress-template' }
        ],
        sidebar: {
          '/en/guide1/': [
            '',
            'theme',
            'plugin'
          ],
          '/en/resource/': [],
        }
      }
    }
  },
  
}