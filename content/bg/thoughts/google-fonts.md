---
title: "Google Fonts в Nuxt с TailwindCSS"
date: "2024-02-15T16:21:00.293Z"
draft: false
tags: ["Nuxt", "TailwindCSS", "Fonts"]
slug: "google-fonts"
navigation: false
competence: Elementary
---

Услугата на [Google за шрифтовете](https://fonts.google.com/) е страшно удобна и много лесна за използване/интегриране. Има доста голям избор и много добър начин да филтрираш спрямо нуждите ти. В екосистемата на Nuxt има много добър [модул за интегриране на Google шрифтове](https://google-fonts.nuxtjs.org/) в приложението Ви, но аз ще Ви покажа малко по-различен подход.

<!--more-->

В [конфигурацията](https://nuxt.com/docs/api/nuxt-config#head) си Nuxt позволява да обработваме Head парчето от HTML-а. Има и други места на които може да го правите, но за целта ще използвам `nuxt.config.ts`. След като получите кода за вграждане от Google, го разпределяте в `link` масива на конфигурацията.

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" }
      ]
    }
  }
```

Изключително просто и елегантно решение. При билдването горния код се инжектира в Head-а на приложението Ви и шрифтовете се зареждат от Google. Това работи прекрасно, но понякога не е достатъчно - например, ако генерирате приложението си статично с `npx nuxt generate`. Тогава е добре да помислите как да оптимизирате зареждането на шрифтовете, защото може да достигнат доста големи обеми. Ето как да промените конфигурацията в `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        { rel: "preload", as: "style", onload: "this.onload = null; this.rel = 'stylesheet';", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" }
      ]
    }
  }
```

След като шрифта е зареден трябва да го популяризираме в приложението. В моя случай използвам TailwindCSS, а лесен начин да конфигурираме нашия шрифт. В `tailwind.config.js` добавяме следния код:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      "sans": ["Roboto", "sans-serif"]
    }
  }
}
```