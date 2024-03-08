<script lang="ts" setup>
const localePath = useLocalePath();
const { locale } = useI18n();

const { data: getArticles } = await useAsyncData(() => queryContent(localePath('/articles')).where({ draft: false }).limit(3).sort({ date: -1 }).find());

const description = {
  "bg": "Статии, предимно за Vue, Nuxt, TailwindCSS, TypeScript, но не само. Повече за front-end и по-малко за back-end.",
  "en": "Articles mostly about Vue, Nuxt, TailwindCSS, and TypeScript, but not limited to — more on the front-end and less on the back-end."
};

useHead({
  title: "",
  meta: [{ name: 'description', content: description[(locale.value as 'bg' | 'en')] }]
});
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <template v-for="doc in getArticles" :key="doc._path">
      <ContentRenderer :value="doc">
        <Excerpt :doc="doc" />
      </ContentRenderer>
    </template>
  </div>
</template>