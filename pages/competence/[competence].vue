<script lang="ts" setup>
import type { ParsedContent, QueryBuilderParams } from '@nuxt/content/types';

const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { competence } = route.params;
const pageTitle = `${t('LBL_COMPETENCE')} - ${t((`COMPETENCE_${(competence)}`).toUpperCase())}`;

const query: QueryBuilderParams = { path: localePath('/articles'), where: [{ competence: competence }], limit: 5, sort: [{ date: -1 }] };

useHead({ title: pageTitle });

function uniqCompetence(arr: ParsedContent[]): ParsedContent[] {
  return arr.filter((value, index, self) => self.findIndex(obj => (obj.competence === value.competence)) === index);
}
</script>

<template>
  <div v-if="competence" class="grid grid-cols-1 gap-10">
    <h1 class="text-3xl font-bold text-center">
      {{ pageTitle }}
    </h1>

    <div class="excerpt-card">
      <ContentList :path="localePath('/articles')" v-slot="{ list }">
        <div class="absolute inline-flex items-center justify-center text-xs px-2 py-1 bg-white text-black dark:bg-black dark:text-white mr-0.5 rounded-full -top-2 -end-2">
          <NuxtLink :to="localePath(`/competence`) ">{{ t("LBL_COMPETENCIES") }}</NuxtLink>
        </div>

        <template v-for="doc in uniqCompetence(list)" :key="doc._path">
          <Competence v-if="doc.competence !== competence" :competence="doc.competence" class="mx-1" />
        </template>
      </ContentList>
    </div>

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
        </ContentRenderer>
      </template>
    </ContentList>
  </div>
</template>