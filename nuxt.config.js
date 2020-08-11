
const axios = require('axios')

export default {
  mode: 'universal',
  srcDir: 'app/',
  /*
  ** Headers of the page
  */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      { src: '/script/ptengine.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'reset.css',
    'node_modules/slick-carousel/slick/slick.css',
    'node_modules/slick-carousel/slick/slick-theme.css',
    '~/assets/scss/style.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-scrollto',
    { src: '~/plugins/slick', mode: 'client' },
    '~/plugins/vee-validate'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-154422922-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/dotenv',
    ['@nuxtjs/moment', ['ja']]
  ],

  /*
  ** PWA settings
  */
  workbox: {
    dev: true
  },

  manifest: {
    name: 'オートルビーズ',
    short_name: 'オートルビーズ',
    title: 'オートルビーズ',
    'og:title': 'オートルビーズ',
    description: '株式会社オートルビーズはスズキ　ジムニーのカスタムパーツを開発、販売を行っています。また、鳥取県を中心に自動車販売、修理、メンテナンスを行っています。',
    'og:description': '株式会社オートルビーズはスズキ　ジムニーのカスタムパーツを開発、販売を行っています。また、鳥取県を中心に自動車販売、修理、メンテナンスを行っています。',
    lang: 'ja',
    display: "standalone",
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },

  env: {
    WP_REST_API_BASE_URL: process.env.WP_REST_API_BASE_URL,
    WPUSER: process.env.WPUSER,
    APPLICATION_PASSWORD: process.env.APPLICATION_PASSWORD
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://www.autorubys.com',
    // generate: true,
    exclude: [
      '/wp-admin'
    ]
  },

  webfontloader: {
    google: {
      families: ['M+PLUS+Rounded+1c:400,700&display=swap']
    }
  },

  styleResources: {
    scss: [
     '~/assets/scss/style.scss'
     ]
   },

  generate: {
    interval: 1000,
    routes () {
      return Promise.all([axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts?per_page=100`)]).then((data) => {
        const posts = data[0]
        return posts.data.map((post) => {
          return {
            route: '/news/post/' + post.id,
            payload: post
          }
        })
      })
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    transpile: [
      "vee-validate/dist/rules"
    ],
    extend (config, ctx) {
    }
  }
}
