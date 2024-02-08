<script lang="ts" setup>
const localePath = useLocalePath();
const { locale } = useI18n();

useHead({
  title: "How Bizarre's Thoughts",
});
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <ContentList :path="localePath('/thoughts')"
                 fields="title,date,thumbnail"
                 :query="{ draft: false, sort: [{ date: -1 }] }"
                 v-slot="{ list }">
      <div v-for="blog in list" :key="blog._path" class="bg-white dark:bg-black rounded-2xl overflow-hidden mb-4">
        <div class="h-[300px] sm:h-[200px] relative">
          <img v-if="blog.thumbnail"
               :src="blog.thumbnail"
               :alt="blog.title"
               class="absolute w-full h-full object-cover" />
        </div>

        <div class="my-4 ml-4">
          <h3 class="text-2xl font-bold">
            <NuxtLink :to="localePath(`/thoughts/${blog.slug}`)">{{ blog.title }}</NuxtLink>
          </h3>

          <div class="text-sm text-gray-500 mt-xs block">{{ (new Date(blog.date)).toLocaleDateString(locale) }}</div>

          <div v-if="blog.tags" class="mt-2 text-xs">
            <NuxtLink v-for="tag in blog.tags" :to="localePath(`/tag/${tag}`)" class="p-1 rounded bg-gray-100 dark:bg-gray-900 text-gray-500 mr-2">
              {{ tag }}
            </NuxtLink>
          </div>

          <div v-if="blog?.excerpt" class="pr-2 mt-3">
            <ContentRendererMarkdown :value="blog.excerpt" />
          </div>
        </div>
      </div>
    </ContentList>
  </div>
</template>