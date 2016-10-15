const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || '3000',
  apiBaseUrl: process.env.API_URL || 'https://api.github.com',
  app: {
    googleAnalytics: {
      appId: process.env.GOOGLE_ANALYTIC_ID || 'UA-XXXXXXXX-X'
    },
    title: 'React Universal Saga',
    description: 'Universal React Starter Kit ft. Redux Saga',
    head: {
      titleTemplate: 'React Universal Saga',
      meta: [
        { name: 'description', content: 'Universal React Starter Kit ft. Redux Saga' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'React Universal Saga' },
        { property: 'og:image', content: 'https://facebook.github.io/react/img/logo_og.png' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'React Universal Saga' },
        { property: 'og:description', content: 'Universal React Starter Kit ft. Redux Saga' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@xkawi' },
        { property: 'og:creator', content: '@xkawi' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' }
      ]
    }
  },

}, environment);
