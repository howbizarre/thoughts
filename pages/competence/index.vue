<script lang="ts" setup>
const { t } = useI18n();
const localePath = useLocalePath();

useHead({
  title: t("LBL_COMPETENCIES"),
});
</script>

<template>
  <div class="rounded-2xl">
    <ContentList :path="localePath('/thoughts')" v-slot="{ list }">
      <div v-for="blog in list" :key="blog.slug" class="p-3">
        <Competence :competence="blog.competence" />
      </div>
    </ContentList>
  </div>
</template>