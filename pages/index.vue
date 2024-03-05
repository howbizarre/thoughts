<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/types';

const localePath = useLocalePath();
const { locale, t } = useI18n();

const { data: articles } = await useAsyncData('[home-page]', () => queryContent(localePath('/articles')).where({ draft: false }).limit(3).sort({ date: -1 }).find());

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
    <div v-for="article in articles" :key="article._path" class="excerpt-card">
      <ContentRenderer :value="article">
        <div class="text-sm text-gray-500 -mb-1 block">
          {{ (new Date(article.date)).toLocaleDateString(locale) }}
        </div>

        <h3 class="text-2xl font-bold">
          <NuxtLink :to="localePath(`/articles/${article.slug}`)">
            {{ article.title }}
            <span class="sr-only">Link to the article</span>
          </NuxtLink>
        </h3>

        <div v-if="article?.excerpt" class="pr-4 my-3">
          <ContentRendererMarkdown :value="article.excerpt" />
        </div>

        <hr class="h-line" />

        <div class="grid grid-col-1 sm:flex sm:justify-start sm:items-center gap-2 sm:gap-5">
          <div v-if="article.competence">
            {{ t("LBL_COMPETENCE") }}:
            <Competence :competence="article.competence" class="mx-1" />
          </div>

          <div v-if="article.tags">
            {{ t("LBL_TAGS") }}:
            <template v-for="tag in article.tags">
              <Tag :tag="tag" class="mx-1" />
            </template>
          </div>
        </div>
      </ContentRenderer>
    </div>
  </div>
</template>