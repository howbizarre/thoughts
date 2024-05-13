export default defineNuxtConfig({
  app: {
    baseURL: "/",
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "preload", as: "style", onload: "this.onload = null; this.rel = 'stylesheet';", href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: ["nitro-cloudflare-dev", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/content", "@nuxtjs/i18n", "@nuxt/devtools"],

  content: {
    highlight: {
      theme: "github-dark",
    },
  },

  i18n: {
    baseUrl: "https://thoughts.bizarre.how",
    locales: [
      {
        code: "en",
        name: "EN",
        iso: "en",
        file: "en-US.json",
      },
      {
        code: "bg",
        name: "БГ",
        iso: "bg",
        file: "bg-BG.json",
      },
    ],
    lazy: true,
    langDir: "i18n/",
    defaultLocale: "bg",
    vueI18n: "./i18n.config.ts",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    strategy: "prefix",
  },

  tailwindcss: {
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    viewer: false,
  },

  colorMode: { classSuffix: "" },

  nitro: {
    preset: "cloudflare-pages",
    prerender: {
      crawlLinks: true,
      routes: ["/sitemap.xml"],
    },
  },

  routeRules: {
    "/en/competence/None": { redirect: { to: "/en/competence/none", statusCode: 301 } },
    "/bg/competence/None": { redirect: { to: "/bg/competence/none", statusCode: 301 } },

    "/en/competence/Thoughts": { redirect: { to: "/en/competence/thoughts", statusCode: 301 } },
    "/bg/competence/Thoughts": { redirect: { to: "/bg/competence/thoughts", statusCode: 301 } },

    "/en/competence/Elementary": { redirect: { to: "/en/competence/elementary", statusCode: 301 } },
    "/bg/competence/Elementary": { redirect: { to: "/bg/competence/elementary", statusCode: 301 } },

    "/en/competence/TailwindCSS": { redirect: { to: "/en/competence/tailwind", statusCode: 301 } },
    "/bg/competence/TailwindCSS": { redirect: { to: "/bg/competence/tailwind", statusCode: 301 } },

    "/en/competence/Fonts": { redirect: { to: "/en/competence/fonts", statusCode: 301 } },
    "/bg/competence/Fonts": { redirect: { to: "/bg/competence/fonts", statusCode: 301 } },
  },

  devtools: { enabled: false },
});