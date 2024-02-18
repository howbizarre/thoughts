<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/types';

const localePath = useLocalePath();
const { locale, t } = useI18n();
const thoughtsPath = localePath('/thoughts');
const query: QueryBuilderParams = { path: thoughtsPath, where: [{ draft: false }], sort: [{ date: -1 }] };

const localeKey = ref(locale.value as 'bg' | 'en');
const description = {
  "bg": "Статии, предимно за Vue, Nuxt, TailwindCSS, TypeScript, но не само. Повече за front-end и по-малко за back-end.",
  "en": "Articles mostly about Vue, Nuxt, TailwindCSS, and TypeScript, but not limited to—more on the front-end and less on the back-end."
};

useHead({
  title: "",
  meta: [{ name: 'description', content: description[localeKey.value] }]
});
</script>

<template>
  <div class="grid grid-cols-1 gap-5">
    <ContentList :query="query">
      <template #default="{ list }">
        <div v-for="doc in list" :key="doc._path" class="excerpt-card">
          <div class="text-xs text-gray-500 -mb-1 block">
            {{ (new Date(doc.date)).toLocaleDateString(locale) }}
          </div>

          <div class="hN text-2xl font-bold">
            <NuxtLink :to="localePath(`/thoughts/${doc.slug}`)">{{ doc.title }}</NuxtLink>
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
  </div>
</template>