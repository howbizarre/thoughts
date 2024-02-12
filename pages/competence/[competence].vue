<script lang="ts" setup>
import type { QueryBuilderWhere } from '@nuxt/content/types';

const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { competence } = route.params;
</script>

<template>
  <div v-if="competence" class="grid grid-cols-1 gap-2 content">
    <ContentList :path="localePath('/thoughts')"
                 fields="competence,title,date,thumbnail"
                 :query="({ where: { competence: competence } } as QueryBuilderWhere)"
                 v-slot="{ list }">
      <div v-for="blog in list"
           :key="blog.slug"
           class="rounded-2xl overflow-hidden mb-4">
        <div v-if="blog.thumbnail" class="h-[200px] relative">
          <img :src="blog.thumbnail"
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

          <div v-if="blog?.excerpt" class="pr-4 my-3">
            <ContentRendererMarkdown :value="blog.excerpt" />
          </div>

          <hr class="h-px my-4 bg-gray-300 border-0 dark:bg-gray-700" />

          <div v-if="blog.tags">
            {{ t("LBL_TAGS") }}:
            <template v-for="tag in blog.tags">
              <Tag :tag="tag" />
            </template>
          </div>

          <div v-if="blog.competence" class="mt-2">
            {{ t("LBL_COMPETENCE") }}: <Competence :competence="blog.competence" />
          </div>
        </div>
      </div>
    </ContentList>
  </div>
</template>