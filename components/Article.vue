<script setup lang="ts">
const props = defineProps({
  path: { type: String, required: true }
});

const path = toRef(props, "path");
const { locale, t } = useI18n();
</script>

<template>
  <ContentDoc :path="path">
    <template #default="{ doc }">
      <div class="px-5 pt-5" :data-article-pat="path">
        <header class="text-left mb-10">
          <p class="text-gray-500 text-sm !-mb-1 block">{{ (new Date(doc.date)).toLocaleDateString(locale) }}</p>
          <h1 class="text-4xl font-bold">{{ doc.title }}</h1>
        </header>

        <ContentRenderer :value="doc" class="prose dark:prose-invert max-w-full" />

        <hr class="h-line" />

        <div class="grid grid-col-1 sm:flex sm:justify-start sm:items-center gap-2 sm:gap-5">
          <div v-if="doc.competence">
            {{ t("LBL_COMPETENCE") }}:
            <ArticleCompetence :competence="doc.competence" :active="false" />
          </div>

          <div v-if="doc.tags">
            {{ t("LBL_TAGS") }}:
            <template v-for="tag in doc.tags">
              <ArticleTag :tag="tag" :active="false" />
            </template>
          </div>
        </div>
      </div>
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
  </ContentDoc>
</template>