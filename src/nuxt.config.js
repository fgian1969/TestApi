const bodyParser = require('body-parser')
const session = require('express-session')
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'firebasetestapi',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ServerMiddleware on Firebase Hosting' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 
 modules: [
  '@nuxtjs/axios'
],
router: { base: '/TestApi/' },
axios: {
  debug: true,
  proxy: true
  // baseURL: 'https://webaffitto.firebaseapp.com',
  // browserBaseURL: '/api',
  // timeout: 10000
},
serverMiddleware: [
  bodyParser.json(),
  session({
    secret: 'amdskfmdlkfdklfndfmdfndsmfndfnejnjheheuewytwgssa',
    resave: true,
    saveUninitialized: false,
    cookie: { maxAge: (20 * 60 * 1000), secure: false }  //Setto il cookie a 20 minuti
  }),
  //{ path: '/api', handler: '~/api/index.js' }
  '~/api'
],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

