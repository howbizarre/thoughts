export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', as: 'style', onload: "this.onload = null; this.rel = 'stylesheet';", href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  modules: ['nitro-cloudflare-dev', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', '@nuxtjs/i18n', '@nuxt/devtools', '@nuxt/image'],

  content: {
    highlight: {
      theme: 'github-dark'
    },
    experimental: {
      documentDriven: true,
      advancedSearch: true
    }
  },

  i18n: {
    baseUrl: 'https://thoughts.bizarre.how',
    locales: [
      {
        code: 'en',
        name: 'EN',
        language: 'en',
        file: 'en-US.json'
      },
      {
        code: 'bg',
        name: 'БГ',
        language: 'bg',
        file: 'bg-BG.json'
      }
    ],
    lazy: true,
    langDir: './',
    defaultLocale: 'bg',
    vueI18n: './i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    strategy: 'prefix',
    bundle: {
      optimizeTranslationDirective: false
    }
  },

  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    viewer: false
  },

  colorMode: { classSuffix: '' },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/sitemap.xml']
    }
  },

  router: {
    options: {
      sensitive: true
    }
  },

  devtools: { enabled: false },
  compatibilityDate: '2024-07-03'
});
