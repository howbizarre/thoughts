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
      <div v-for="doc in list" :key="doc.slug" class="p-3">
        <Competence :competence="doc.competence" />
      </div>
    </ContentList>
  </div>
</template>