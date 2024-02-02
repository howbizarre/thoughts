<script lang="ts" setup>
const localePath = useLocalePath();
const route = useRoute();
const { tag } = route.params;
</script>

<template>
  <div v-if="tag">
    <ContentList :path="localePath('/thoughts')"
                 fields="tags,title,date,thumbnail"
                 :query="{ where: { tags: { $contains: tag } } } as any"
                 v-slot="{ list }">
      <div v-for="blog in list"
           :key="blog.slug"
           class="blog-card bg-white rounded-2xl overflow-hidden mb-4 hover:shadow-md transition-shadow duration-200">
        <div class="h-[300px] relative">
          <img v-if="blog.thumbnail"
               :src="blog.thumbnail"
               :alt="blog.title"
               class="absolute w-full h-full object-cover" />
        </div>

        <div class="blog-card--meta my-4 ml-4">
          <h3 class="text-2xl font-bold">
            <NuxtLink :to="localePath(`/thoughts/${blog.slug}`)">
              {{ blog.title }}
              <span class="sr-only">Link to the blog post</span>
            </NuxtLink>
          </h3>

          <div class="text-sm text-gray-500 mt-px block">{{ `${((`${blog.date}`).split('T'))[0]}` }}</div>

          <template v-if="blog.tags">
            <div class="mt-2 text-xs">
              <template v-for="tag in blog.tags">
                <NuxtLink :to="localePath(`/tag/${tag}`)" class="px-1 pb-1 rounded bg-gray-100 border border-gray-400/25 mr-2 shadow-sm capitalize cursor-pointer">
                  {{ tag }}
                </NuxtLink>
              </template>
            </div>
          </template>
        </div>
      </div>
    </ContentList>
  </div>
</template>