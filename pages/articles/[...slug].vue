<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';

const { locale } = useI18n();
const route = useRoute();
const slug = ref(route.params.slug);
const localePath = useLocalePath();
const path = computed(() => localePath(`/articles/${slug.value}`));

const { data: surround } = await useAsyncData(`[slug-${slug.value}]`, () => {
  return import.meta.dev
    ? queryContent()
      .only(['slug', 'title', 'excerpt', '_path'])
      .findSurround(path.value, { before: 1, after: 1 })
    : queryContent()
      .where({ draft: false })
      .only(['slug', 'title', 'excerpt', '_path'])
      .findSurround(path.value, { before: 1, after: 1 })
}, { default: () => [] });

const [prev, next] = surround.value || [];
</script>

<template>
  <article class="rounded-2xl mb-4" :data-path="path">
    <Article :path="path" />

    <div class="px-5">
      <hr class="h-line" />

      <div class="grid gap-8 sm:grid-cols-2">
        <ContentRenderer v-if="prev && (`${prev._path}`).includes(`/${locale}/`)" :value="prev">
          <NuxtLink :to="localePath(`/articles/${prev.slug}`)" class="block px-6 py-8 border rounded-lg !border-gray-50 dark:!border-gray-950 hover:bg-gray-50/50 dark:hover:bg-gray-950/50 group transition-colors duration-300">
            <div class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 mb-4">
              <ArrowLeftIcon class="size-5 text-gray-900 dark:text-white group-hover:text-green-500 transition-colors duration-300" />
            </div>

            <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1 line-clamp-1 md:line-clamp-none">{{ prev.title }}</p>
            <ContentRendererMarkdown v-if="prev.excerpt" :value="prev.excerpt" class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 md:line-clamp-3" />
          </NuxtLink>
        </ContentRenderer>

        <div v-else class="hidden sm:block px-6 py-8">&nbsp;</div>

        <ContentRenderer v-if="next && (`${next._path}`).includes(`/${locale}/`)" :value="next">
          <NuxtLink :to="localePath(`/articles/${next.slug}`)" class="block px-6 py-8 border rounded-lg !border-gray-50 dark:!border-gray-950 hover:bg-gray-50/50 dark:hover:bg-gray-950/50 group transition-colors duration-300 text-right">
            <div class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 mb-4">
              <ArrowRightIcon class="size-5 text-gray-900 dark:text-white group-hover:text-green-500 transition-colors duration-300" />
            </div>

            <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1 line-clamp-1 md:line-clamp-none">{{ next.title }}</p>
            <ContentRendererMarkdown v-if="next.excerpt" :value="next.excerpt" class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 md:line-clamp-3" />
          </NuxtLink>
        </ContentRenderer>
      </div>

      <hr class="h-line" />
    </div>
  </article>
</template>