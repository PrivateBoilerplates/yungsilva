import redirectSSL from 'redirect-ssl'

export default {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  css: [
    'normalize.css',
    '@/assets/scss/common/base.scss',
    '@/assets/scss/common/main.scss'
  ],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      '@/assets/scss/abstracts/colors.scss',
      '@/assets/scss/abstracts/breakpoints.scss'
    ]
  },
  modules: [],
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production'
    })
  ],
  build: {
    extractCSS: process.env.NODE_ENV === 'production'
  }
}
