<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/types';

const { locale, t } = useI18n();
const localePath = useLocalePath();
const path = computed(() => localePath('/articles'));

const route = useRoute();
const { tag } = route.params;

const { data: allArticles } = await useAsyncData(`[tag-${tag}]`, () => {
  return queryContent(path.value)
    .sort({ date: -1 })
    .find();
}, { default: () => [] });
const tags = allArticles.value ? [...new Set(allArticles.value.flatMap(article => article.tags))] : [];

const query: QueryBuilderParams = { path: path.value, where: [{ tags: { $contains: tag } }], limit: 5, sort: [{ date: -1 }] };

const pageTag = t((`TAG_${(tag)}`).toUpperCase());
const pageTitle = `${t('LBL_TAG')} - ${pageTag}`;
const description = {
  "bg": `Тагът '${pageTag}' е ключова дума за лесно филтриране на статиите по тематики.`,
  "en": `The tag '${pageTag}' is a keyword for easy filtering of articles by topics.`
};

useHead({
  title: pageTitle,
  meta: [{ name: 'description', content: description[(locale.value as 'bg' | 'en')] }]
});
</script>

<template>
  <div v-if="tag" class="grid grid-cols-1 gap-10">
    <h1 class="text-3xl font-bold text-center">
      {{ pageTitle }}
    </h1>

    <div class="excerpt-card text-center">
      <div class="absolute inline-flex items-center justify-center text-xs px-2 py-1 bg-white text-black dark:bg-black dark:text-white mr-0.5 rounded-full -top-2 -end-2">
        {{ t("LBL_TAGS") }}
      </div>

      <template v-for="_tag in tags">
        <ArticleTag :tag="_tag" :active="_tag === tag" />
      </template>
    </div>

    <ContentList :query="query" v-slot="{ list }">
      <template v-for="doc in list" :key="doc._path">
        <ArticleExcerpt :doc="doc" />
      </template>
    </ContentList>
  </div>
</template>