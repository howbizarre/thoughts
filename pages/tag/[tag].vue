<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content';

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
    <h1 class="text-3xl font-medium text-center">
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

    <ContentList :query="query">
      <template #default="{ list }">
        <template v-for="doc in list" :key="doc._path">
          <ArticleExcerpt :doc="doc" />
        </template>
      </template>

      <template #not-found>
        <div class="excerpt-card">
          <div class="text-sm text-gray-500 -mb-1 block">
            {{ t('TXT_ERROR_WEB_ADDRESS') }}
          </div>

          <h2 class="text-2xl font-bold">
            {{ t('TXT_NO_ARTICLES_FOUND') }}
          </h2>

          <div class="pr-4 my-3">
            <p v-if="locale === 'bg'">
              Опа, заредили сте страница, която не съществува или е премахната, но няма нищо страшно. Понякога и <strong>Гугъл</strong> бърка.
              Винаги може да се върнете в <NuxtLink to="/">началото на сайта</NuxtLink> или да се опитате да поправите уеб адреса.
            </p>

            <p v-else>
              Oops, you've loaded a page that doesn't exist or has been removed, but that's okay. Sometimes even <strong>Google</strong> makes mistakes.
              You can always go back to the <NuxtLink to="/">home page</NuxtLink> or try to fix the web address.
            </p>

            <hr class="h-line" />
          </div>
        </div>
      </template>
    </ContentList>
  </div>
</template>