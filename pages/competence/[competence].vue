<script setup lang="ts">
import type { ParsedContent, QueryBuilderParams } from '@nuxt/content/types';

const { locale, t } = useI18n();
const localePath = useLocalePath();
const path = computed(() => localePath('/articles'));
const route = useRoute();
const { competence } = route.params;

const pageCompetence = t((`COMPETENCE_${(competence)}`).toUpperCase());
const pageTitle = `${t('LBL_COMPETENCE')} - ${pageCompetence}`;

const query: QueryBuilderParams = { path: path.value, where: [{ competence: competence }], limit: 5, sort: [{ date: -1 }] };

const description = {
  "bg": `Компетентността '${pageCompetence}' е показател, колко технически насочена е статията. От простичка, без технически детайли, до много професионална.`,
  "en": `Competence '${pageCompetence}' is an indicator of how technically oriented an article is. From simple, without technical details, to very professional.`
};

useHead({
  title: pageTitle,
  meta: [{ name: 'description', content: description[(locale.value as 'bg' | 'en')] }]
});

function uniqCompetence(arr: ParsedContent[]): ParsedContent[] {
  return arr.filter((value, index, self) => self.findIndex(obj => (obj.competence === value.competence)) === index);
}
</script>

<template>
  <div v-if="competence" class="grid grid-cols-1 gap-10">
    <h1 class="text-3xl font-bold text-center">
      {{ pageTitle }}
    </h1>

    <div class="excerpt-card text-center">
      <ContentList :path="path" v-slot="{ list }">
        <div class="absolute inline-flex items-center justify-center text-xs px-2 py-1 bg-white text-black dark:bg-black dark:text-white mr-0.5 rounded-full -top-2 -end-2">
          {{ t("LBL_COMPETENCIES") }}
        </div>

        <template v-for="doc in uniqCompetence(list)" :key="doc._path">
          <ArticleCompetence :competence="doc.competence" :active="competence === doc.competence" />
        </template>
      </ContentList>
    </div>

    <ContentList :query="query" v-slot="{ list }">
      <template v-for="doc in list" :key="doc._path">
        <ArticleExcerpt :doc="doc" />
      </template>
    </ContentList>
  </div>
</template>