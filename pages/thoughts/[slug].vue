<script lang="ts" setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { slug } = route.params;
</script>

<template>
  <article class="rounded-2xl mb-4">
    <ContentDoc :path="localePath(`/thoughts/${slug}`)" v-slot="{ doc }">
      <div class="mt-4 p-5">
        <header class="text-left mb-5">          
          <p class="text-gray-500 text-sm !-mb-1 block">{{ (new Date(doc.date)).toLocaleDateString(locale) }}</p>
          <h1 class="text-4xl font-bold lg:w-2/3">{{ doc.title }}</h1>
        </header>
        
        <ContentRenderer :value="doc" />

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
    </ContentDoc>
  </article>
</template>