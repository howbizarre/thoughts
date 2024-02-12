<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div class="rounded-2xl">
    <ContentList :path="localePath('/thoughts')"
                 fields="competence"
                 v-slot="{ list }">
      <div v-for="blog in list" :key="blog.slug" class="p-3">
        <Competence :competence="blog.competence" />
      </div>
    </ContentList>
  </div>
</template>