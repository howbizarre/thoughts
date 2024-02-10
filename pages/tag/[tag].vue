<script lang="ts" setup>
const { locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { tag } = route.params;
</script>

<template>
  <div v-if="tag" class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <ContentList :path="localePath('/thoughts')"
                 fields="tags,title,date,thumbnail"
                 :query="{ where: { tags: { $contains: tag } } } as any"
                 v-slot="{ list }">
      <div v-for="blog in list"
           :key="blog.slug"
           class="rounded-2xl overflow-hidden mb-4">
        <div class="h-[200px] relative">
          <img v-if="blog.thumbnail"
               :src="blog.thumbnail"
               :alt="blog.title"
               class="absolute w-full h-full object-cover" />
        </div>

        <div class="my-4 ml-4">
          <div class="text-sm text-gray-500 -mb-1 block">
            {{ (new Date(blog.date)).toLocaleDateString(locale) }}
          </div>

          <h3 class="text-2xl font-bold">
            <NuxtLink :to="localePath(`/thoughts/${blog.slug}`)">
              {{ blog.title }}
              <span class="sr-only">Link to the blog post</span>
            </NuxtLink>
          </h3>

          <div v-if="blog?.excerpt" class="pr-4 my-3 text-justify">
            <ContentRendererMarkdown :value="blog.excerpt" />
          </div>

          <div v-if="blog.tags" class="mt-2">
            <template v-for="tag in blog.tags">
              <Tag :tag="tag" />
            </template>
          </div>
        </div>
      </div>
    </ContentList>
  </div>
</template>