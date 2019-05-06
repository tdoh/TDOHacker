module.exports = {
  title: 'TDOHacker',
  description: '培育台灣資安人才、促進團體交流，扶持各資安社團與讀書會永續發展。數年來舉辦數十場講座，協助多個社團與教育單位舉辦各項活動，完成多個資安教育平台專案。2016 年開始舉辦 TDOH ­PIPE、Conf等大型活動，致力打造更完善的資安學習環境。',
  themeConfig: {
    logo: '/assets/img/logo/TDOHacker-alphabet-only.svg',
    noSiteTitle: true,
    nav: [{
      text: '關於我們',
      link: '/'
    }, {
      text: '部落格',
      link: '/blog/'
    }, {
      text: '活動資訊',
      link: '/activity/'
    }, {
      text: 'Facebook',
      icon: '/assets/img/icon/facebook.svg',
      link: 'https://facebook.com/'
    }]
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@assets': 'public/assets'
      }
    }
  }
}
