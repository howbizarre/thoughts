<script setup lang="ts">
import type { ParsedContent, QueryBuilderParams } from '@nuxt/content';

const { locale, t } = useI18n();
const localePath = useLocalePath();
const path = computed(() => localePath('/articles'));
const route = useRoute();
const { competence } = route.params

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
    <h1 class="text-3xl font-medium text-center">
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