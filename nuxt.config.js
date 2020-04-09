
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
    { src: '~/plugins/slick', mode: 'client' }
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
    ['@nuxtjs/moment', ['ja']]
  ],

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

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
