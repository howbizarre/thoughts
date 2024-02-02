<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <div>
    <ContentList :path="localePath('/thoughts')"
                 fields="tags"
                 v-slot="{ list }">
      <div v-for="blog in list" :key="blog.slug">
        <div class="mt-2 text-xs">
          <template v-for="tag in blog.tags">
            <NuxtLink :to="`/tag/${tag}`" class="px-1 pb-1 rounded bg-gray-100 border border-gray-400/25 mr-2 shadow-sm capitalize cursor-pointer">
              {{ tag }}
            </NuxtLink>
          </template>
        </div>
      </div>
    </ContentList>
  </div>
</template>