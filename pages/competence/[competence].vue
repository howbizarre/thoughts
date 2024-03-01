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
    <h1 class="text-4xl font-bold">{{ pageTitle }}</h1>

    <div class="excerpt-card">
      <ContentList :path="localePath('/articles')" v-slot="{ list }">
        {{ t('LBL_MORE') }}:
        <template v-for="doc in uniqCompetence(list)" :key="doc.slug">
          <Competence v-if="doc.competence !== competence" :competence="doc.competence" class="ml-2" />
        </template>
      </ContentList>
    </div>

    <ContentList :query="query" v-slot="{ list }">
      <div v-for="doc in list"
           :key="doc.slug"
           class="excerpt-card">
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
    </ContentList>
  </div>
</template>