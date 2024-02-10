<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div class="rounded-2xl">
    <ContentList :path="localePath('/thoughts')"
                 fields="tags"
                 v-slot="{ list }">
      <div v-for="blog in list" :key="blog.slug" class="p-3">
        <template v-for="tag in blog.tags">
          <Tag :tag="tag" />
        </template>
      </div>
    </ContentList>
  </div>
</template>