const axios = require('axios')

export default {
  srcDir: 'app/',
  target: 'static',
  /*
  ** Headers o fthe page
  */
  head: {
    title: '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'google-site-verification', content: 'aX5q3GcphotqPppDU2UWgMNsKiRiAfdptHX57wxgOSw' }
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
    '~/plugins/vee-validate',
    '~/plugins/filter.js'
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@nuxtjs/google-gtag"
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
    dev: false
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

  "google-gtag": {
    id: "G-TD6B8Y44BQ",
    debug: false
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
      families: [
        'Teko',
        'Yellowtail',
        'Bebas Neue'
      ]
    }
  },

  styleResources: {
    scss: [
     '~/assets/scss/_settings.scss',
     '~/assets/scss/_mixins.scss'
     ]
   },

  generate: {
    fallback : true,
    interval: 100,
    routes () {
      return Promise.all([
        axios.get(`${process.env.WP_REST_API_BASE_URL}wp-json/wp/v2/posts?per_page=100`)
      ])
      .then((data) => {
        const posts = data[0]
        return posts.data.map((post) => {
          return {
            route: `/news/post/${post.id}`,
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
