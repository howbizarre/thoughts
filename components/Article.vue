<script setup lang="ts">
const props = defineProps({
  path: { type: String, required: true }
});

const path = toRef(props, "path");
const { locale, t } = useI18n();
</script>

<template>
  <ContentDoc :path="path" v-slot="{ doc }">
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
  </ContentDoc>
</template>