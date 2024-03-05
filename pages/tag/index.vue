<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();
const pageTitle = t("LBL_TAGS");

useHead({
  title: pageTitle
});
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <h1 class="text-3xl font-bold text-center">
      {{ pageTitle }}
    </h1>

    <div class="rounded-2xl p-3 excerpt-card">
      <ContentList :path="localePath('/articles')" v-slot="{ list }">
        <div v-for="doc in list" :key="doc._path" class="inline-block">
          <template v-for="tag in doc.tags">
            <Tag :tag="tag" class="mx-1" />
          </template>
        </div>
      </ContentList>
    </div>
  </div>
</template>