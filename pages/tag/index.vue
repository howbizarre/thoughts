<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t("LBL_TAGS"),
});
</script>

<template>
  <div class="rounded-2xl">
    <ContentList :path="localePath('/articles')" v-slot="{ list }">
      <div v-for="doc in list" :key="doc.slug" class="p-3">
        <template v-for="tag in doc.tags">
          <Tag :tag="tag" />
        </template>
      </div>
    </ContentList>
  </div>
</template>