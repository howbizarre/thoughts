<script lang="ts" setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { slug } = route.params;
</script>

<template>
  <main class="rounded-2xl mb-4">
    <article>
      <ContentDoc :path="localePath(`${slug}`)" v-slot="{ doc }">
        <div class="mt-4">
          <header>
            <div class="text-left p-5">
              <p class="text-gray-500 text-sm !-mb-1 block">{{ (new Date(doc.date)).toLocaleDateString(locale) }}</p>
              <h1 class="text-4xl font-bold lg:w-2/3">{{ doc.title }}</h1>
            </div>
          </header>

          <div class="px-5">
            <ContentRenderer :value="doc" />
          </div>

          <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700" />

          <div class="px-5 pb-5">
            <div v-if="doc.tags">
              {{ t("LBL_TAGS") }}:
              <template v-for="tag in doc.tags">
                <Tag :tag="tag" />
              </template>
            </div>
            
            <div v-if="doc.competence" class="mt-2">
              {{ t("LBL_COMPETENCE") }}:
              <Competence :competence="doc.competence" />
            </div>
          </div>
        </div>
      </ContentDoc>
    </article>
  </main>
</template>