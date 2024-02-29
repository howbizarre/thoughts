<script lang="ts" setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
import type { QueryBuilderParams } from '@nuxt/content/types';

const localePath = useLocalePath();
const articlesPath = localePath('/articles');

const { locale, t } = useI18n();

const maxArticlesPerPage = 3;
const currentPage = ref(1);
const haveReachedEnd = ref(false);
const countArticles = await queryContent(articlesPath).count();
const { data: articles } = await useAsyncData('home-page-articles', () => queryContent(articlesPath).sort({ date: -1 }).limit(maxArticlesPerPage).where({ draft: false }).find());

const loadMore = async () => {
  currentPage.value += 1;

  const moreArticles = await queryContent(articlesPath).sort({ date: -1 }).skip(maxArticlesPerPage * (currentPage.value - 1)).limit(maxArticlesPerPage).where({ draft: false }).find();
  articles.value = articles.value && moreArticles ? [...articles.value, ...moreArticles] : [];

  if (articles.value.length >= countArticles) haveReachedEnd.value = true;
};

const query: QueryBuilderParams = import.meta.dev
  ? { path: articlesPath, sort: [{ date: -1 }] }
  : { path: articlesPath, where: [{ draft: false }], sort: [{ date: -1 }] };

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
    <ContentList :query="query">
      <template #default="{ list }">
        <div v-for="doc in list" :key="doc._path" class="excerpt-card">
          <div class="text-xs text-gray-500 -mb-1 block">
            {{ (new Date(doc.date)).toLocaleDateString(locale) }}
          </div>

          <div class="hN text-2xl font-bold">
            <NuxtLink :to="localePath(`/articles/${doc.slug}`)">{{ doc.title }}</NuxtLink>
          </div>

          <div v-if="doc?.excerpt" class="my-3">
            <ContentRendererMarkdown :value="doc.excerpt" />
          </div>

          <hr class="h-line" />

          <div class="grid grid-col-1 sm:flex sm:justify-start sm:items-center gap-2 sm:gap-5">
            <div v-if="doc.competence">
              {{ t("LBL_COMPETENCE") }}:
              <Competence :competence="doc.competence" />
            </div>

            <div v-if="doc.tags">
              {{ t("LBL_TAGS") }}:
              <template v-for="tag in doc.tags">
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

    <hr />

    <div v-for="article in articles" class="excerpt-card">
      <ContentRenderer :value="article">
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
      </ContentRenderer>
    </div>

    <div v-if="!haveReachedEnd" class="excerpt-card">
      <ClientOnly>
        <button @click="loadMore" class="btn flex justify-between">
          <span>{{ t("LBL_LOAD_MORE") }}...</span>

          <ChevronDownIcon class="h-5 w-5" />
        </button>
      </ClientOnly>
    </div>
  </div>
</template>