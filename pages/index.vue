<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/types';

const localePath = useLocalePath();
const { locale, t } = useI18n();
const articlesPath = localePath('/articles');

const firstPage: QueryBuilderParams = { path: articlesPath, where: [{ draft: false }], sort: [{ date: -1 }], limit: 3 };

const description = {
  "bg": "Статии, предимно за Vue, Nuxt, TailwindCSS, TypeScript, но не само. Повече за front-end и по-малко за back-end.",
  "en": "Articles mostly about Vue, Nuxt, TailwindCSS, and TypeScript, but not limited to—more on the front-end and less on the back-end."
};

useHead({
  title: "",
  meta: [{ name: 'description', content: description[(locale.value as 'bg' | 'en')] }]
});
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <ContentList :query="firstPage">
      <template #default="{ list }">
        <div v-for="article in list" :key="article._path" class="excerpt-card">
          <div class="text-xs text-gray-500 -mb-1 block">
            {{ (new Date(article.date)).toLocaleDateString(locale) }}
          </div>

          <div class="hN text-2xl font-bold">
            <NuxtLink :to="localePath(`/articles/${article.slug}`)">{{ article.title }}</NuxtLink>
          </div>

          <div v-if="article?.excerpt" class="my-3">
            <ContentRendererMarkdown :value="article.excerpt" />
          </div>

          <hr class="h-line" />

          <div class="grid grid-col-1 sm:flex sm:justify-start sm:items-center gap-2 sm:gap-5">
            <div v-if="article.competence">
              {{ t("LBL_COMPETENCE") }}:
              <Competence :competence="article.competence" />
            </div>

            <div v-if="article.tags">
              {{ t("LBL_TAGS") }}:
              <template v-for="tag in article.tags">
                <Tag :tag="tag" />
              </template>
            </div>
          </div>
        </div>
      </template>

      <template #not-found>
        <p>The content is not added!</p>
      </template>
    </ContentList>
  </div>
</template>