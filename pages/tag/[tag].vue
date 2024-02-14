<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/types';

const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { tag } = route.params;

const query: QueryBuilderParams = { path: localePath('/thoughts'), where: [{ tags: { $contains: tag } }], limit: 5, sort: [{ date: -1 }] };

useHead({
  title: t("LBL_TAG") + ' - ' + t((`TAG_${tag}`).toUpperCase())
});
</script>

<template>
  <div v-if="tag" class="grid grid-cols-1 gap-2">
    <ContentList :query="query" v-slot="{ list }">
      <div v-for="doc in list"
           :key="doc.slug"
           class="excerpt-card">
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

        <hr class="h-line" />

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
    </ContentList>
  </div>
</template>