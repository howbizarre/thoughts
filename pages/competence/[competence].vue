<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/types';

const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { competence } = route.params;

const query: QueryBuilderParams = { path: localePath('/thoughts'), where: [{ competence: competence }], limit: 5, sort: [{ date: -1 }] };

useHead({
  title: t("LBL_COMPETENCE"),
});
</script>

<template>
  <div v-if="competence" class="grid grid-cols-1 gap-2">
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="doc in list"
           :key="doc.slug"
           class="rounded-2xl overflow-hidden mb-4">
        <div class="my-4 ml-4">
          <div class="text-sm text-gray-500 -mb-1 block">
            {{ (new Date(doc.date)).toLocaleDateString(locale) }}
          </div>

          <h3 class="text-2xl font-bold">
            <NuxtLink :to="localePath(`/thoughts/${doc.slug}`)">
              {{ doc.title }}
              <span class="sr-only">Link to the blog post</span>
            </NuxtLink>
          </h3>

          <div v-if="doc?.excerpt" class="pr-4 my-3">
            <ContentRendererMarkdown :value="doc.excerpt" />
          </div>

          <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700" />

          <div v-if="doc.tags">
            {{ t("LBL_TAGS") }}:
            <template v-for="tag in doc.tags">
              <Tag :tag="tag" />
            </template>
          </div>

          <div v-if="doc.competence" class="mt-2">
            {{ t("LBL_COMPETENCE") }}: <Competence :competence="doc.competence" />
          </div>
        </div>
      </div>
    </ContentList>
  </div>
</template>