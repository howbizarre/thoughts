<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/types';

const localePath = useLocalePath();
const { locale, t } = useI18n();

//const { data: articles } = await useAsyncData('[home-page]', () => queryContent(localePath('/articles')).where({ draft: false }).limit(3).sort({ date: -1 }).find());
const query: QueryBuilderParams = { path: localePath('/articles'), where: [{ draft: false }], limit: 5, sort: [{ date: -1 }] };

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
        <ContentRenderer :value="doc">
          <div class="excerpt-card">
            <div class="text-sm text-gray-500 -mb-1 block">
              {{ (new Date(doc.date)).toLocaleDateString(locale) }}
            </div>

            <h3 class="text-2xl font-bold">
              <NuxtLink :to="localePath(`/articles/${doc.slug}`)">
                {{ doc.title }}
                <span class="sr-only">Link to the blog post</span>
              </NuxtLink>
            </h3>

            <div v-if="doc?.excerpt" class="pr-4 my-3">
              <ContentRendererMarkdown :value="doc.excerpt" />
            </div>

            <hr class="h-line" />

            <div class="grid grid-col-1 sm:flex sm:justify-start sm:items-center gap-2 sm:gap-5">
              <div v-if="doc.competence">
                {{ t("LBL_COMPETENCE") }}:
                <Competence :competence="doc.competence" :active="false" />
              </div>

              <div v-if="doc.tags">
                {{ t("LBL_TAGS") }}:
                <template v-for="tag in doc.tags">
                  <Tag :tag="tag" :active="false" />
                </template>
              </div>
            </div>
          </div>
        </ContentRenderer>
      </template>
    </ContentList>
  </div>
</template>