<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/types';

const localePath = useLocalePath();
const { locale, t } = useI18n();
const thoughtsPath = localePath('/thoughts');
const query: QueryBuilderParams = { path: thoughtsPath, where: [{ draft: false }], sort: [{ date: -1 }] };

useHead({
  title: "",
});
</script>

<template>
  <div class="grid grid-cols-1 gap-2">
    <ContentList :query="query">
      <template #default="{ list }">
        <div v-for="doc in list" :key="doc._path" class="rounded-2xl p-5 border border-gray-50 dark:border-gray-950 outline outline-offset-[-2px] outline-1 outline-gray-300 dark:outline-gray-700">
          <div class="text-xs text-gray-500 -mb-1 block">
            {{ (new Date(doc.date)).toLocaleDateString(locale) }}
          </div>

          <div class="hN text-2xl font-bold">
            <NuxtLink :to="localePath(`/thoughts/${doc.slug}`)">{{ doc.title }}</NuxtLink>
          </div>

          <div v-if="doc?.excerpt" class="my-3">
            <ContentRendererMarkdown :value="doc.excerpt" />
          </div>

          <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700" />

          <div class="flex justify-start items-center gap-2 sm:gap-5">
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