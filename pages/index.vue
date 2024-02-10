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
      <div v-for="blog in list" :key="blog._path" class="rounded-2xl overflow-hidden mb-4">
        <div class="h-[300px] sm:h-[200px] relative">
          <img v-if="blog.thumbnail"
               :src="blog.thumbnail"
               :alt="blog.title"
               class="absolute w-full h-full object-cover" />
        </div>

        <div class="my-4 ml-4">
          <div class="text-xs text-gray-500 -mb-1 block">
            {{ (new Date(blog.date)).toLocaleDateString(locale) }}
          </div>

          <h3 class="text-2xl font-bold">
            <NuxtLink :to="localePath(`/thoughts/${blog.slug}`)">{{ blog.title }}</NuxtLink>
          </h3>

          <div v-if="blog?.excerpt" class="pr-4 my-3">
            <ContentRendererMarkdown :value="blog.excerpt" />
          </div>

          <div v-if="blog.tags">
            <template v-for="tag in blog.tags">
              <Tag :tag="tag" />
            </template>
          </div>
        </div>
      </div>
    </ContentList>
  </div>
</template>