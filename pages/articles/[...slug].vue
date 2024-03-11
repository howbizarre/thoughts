<script setup lang="ts">
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';
import type { ParsedContent } from '@nuxt/content/types';

const { locale } = useI18n();
const route = useRoute();
const { slug } = route.params;
const localePath = useLocalePath();
const path = computed(() => localePath(`/articles/${slug}`));

const { data: surround } = await useAsyncData(`[slug-${slug}]`, () => {
  return queryContent()
    .where({ draft: false })
    .only(['slug', 'title', 'excerpt', '_path'])
    .findSurround(path.value, { before: 1, after: 1 })
}, { default: () => [] });

const shake = reactive({
  prev: null as Pick<ParsedContent, "slug" | "_path" | "title" | "excerpt"> | null,
  next: null as Pick<ParsedContent, "slug" | "_path" | "title" | "excerpt"> | null
});

if (surround.value && surround.value.length > 0) {
  shake.prev = surround.value[0];
  shake.next = surround.value[1];
}
</script>

<template>
  <article class="rounded-2xl mb-4">
    <Article :path="path" />

    <div class="px-5">
      <hr class="h-line" />

      <div class="grid gap-8 sm:grid-cols-2">
        <ContentRenderer v-if="shake.prev && (`${(shake.prev)._path}`).includes(`/${locale}/`)" :value="shake.prev">
          <NuxtLink :to="localePath(`/articles/${(shake.prev).slug}`)" class="block px-6 py-8 border rounded-lg !border-gray-50 dark:!border-gray-950 hover:bg-gray-50/50 dark:hover:bg-gray-950/50 group transition-colors duration-300">
            <div class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 mb-4">
              <ArrowLeftIcon class="w-5 h-5 text-gray-900 dark:text-white group-hover:text-green-500 transition-colors duration-300" />
            </div>

            <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1 line-clamp-1 md:line-clamp-none">{{ (shake.prev).title }}</p>
            <ContentRendererMarkdown v-if="(shake.prev).excerpt" :value="(shake.prev).excerpt" class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 md:line-clamp-3" />
          </NuxtLink>
        </ContentRenderer>

        <div v-else class="block px-6 py-8">&nbsp;</div>

        <ContentRenderer v-if="shake.next && (`${(shake.next)._path}`).includes(`/${locale}/`)" :value="shake.next">
          <NuxtLink :to="localePath(`/articles/${(shake.next).slug}`)" class="block px-6 py-8 border rounded-lg !border-gray-50 dark:!border-gray-950 hover:bg-gray-50/50 dark:hover:bg-gray-950/50 group transition-colors duration-300 text-right">
            <div class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 mb-4">
              <ArrowRightIcon class="w-5 h-5 text-gray-900 dark:text-white group-hover:text-green-500 transition-colors duration-300" />
            </div>

            <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1 line-clamp-1 md:line-clamp-none">{{ (shake.next).title }}</p>
            <ContentRendererMarkdown v-if="(shake.next).excerpt" :value="(shake.next).excerpt" class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2 md:line-clamp-3" />
          </NuxtLink>
        </ContentRenderer>
      </div>

      <hr class="h-line" />
    </div>
  </article>
</template>