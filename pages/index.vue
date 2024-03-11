<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/types';

const localePath = useLocalePath();
const { locale } = useI18n();
const path = computed(() => localePath(`/articles`));

const query: QueryBuilderParams = { path: path.value, where: [{ draft: false }], limit: 3, sort: [{ date: -1 }] };

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
    <ContentList :query="query" v-slot="{ list }">
      <template v-for="doc in list" :key="doc._path">
        <Excerpt :doc="doc" />
      </template>
    </ContentList>
  </div>
</template>