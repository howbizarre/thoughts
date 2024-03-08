<script lang="ts" setup>
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid';

const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { slug } = route.params;

const path = computed(() => localePath(`/articles/${slug}`));
const [prev, next] = await queryContent().where({ draft: false }).only(['slug', 'title', 'excerpt', '_path']).findSurround(path.value, { before: 1, after: 1 });
</script>

<template>
  <article class="rounded-2xl mb-4">
    <ContentDoc :path="localePath(`/articles/${slug}`)" v-slot="{ doc }">
      <div class="px-5 pt-5">
        <header class="text-left mb-10">
          <p class="text-gray-500 text-sm !-mb-1 block">{{ (new Date(doc.date)).toLocaleDateString(locale) }}</p>
          <h1 class="text-4xl font-bold">{{ doc.title }}</h1>
        </header>

        <ContentRenderer :value="doc" class="prose dark:prose-invert max-w-full" />

        <hr class="h-line" />

        <div class="grid grid-col-1 sm:flex sm:justify-start sm:items-center gap-2 sm:gap-5">
          <div v-if="doc.competence">
            {{ t("LBL_COMPETENCE") }}:
            <Competence :competence="doc.competence" :active="false" />
          </div>

          <div v-if="doc.tags">
            {{ t("LBL_TAGS") }}:
            <template v-for="tag in doc.tags">
              <Tag :tag="tag" :active="false" />
            </template>
          </div>
        </div>
      </div>
    </ContentDoc>

    <div class="px-5">
      <hr class="h-line" />

      <div class="grid gap-8 sm:grid-cols-2">
        <NuxtLink v-if="prev && (`${prev._path}`).includes(`/${locale}/`)" :to="localePath(`/articles/${prev.slug}`)" class="block px-6 py-8 border rounded-lg !border-gray-50 dark:!border-gray-950 hover:bg-gray-50/50 dark:hover:bg-gray-950/50 group transition-colors duration-300">
          <div class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 mb-4">
            <ArrowLeftIcon class="w-5 h-5 text-gray-900 dark:text-white group-hover:text-green-500 transition-colors duration-300" />
          </div>

          <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">{{ prev.title }}</p>
          <ContentRendererMarkdown v-if="prev.excerpt" :value="prev.excerpt" class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-3" />
        </NuxtLink>

        <div v-else class="block px-6 py-8">&nbsp;</div>

        <NuxtLink v-if="next && (`${next._path}`).includes(`/${locale}/`)" :to="localePath(`/articles/${next.slug}`)" class="block px-6 py-8 border rounded-lg !border-gray-50 dark:!border-gray-950 hover:bg-gray-50/50 dark:hover:bg-gray-950/50 group transition-colors duration-300 text-right">
          <div class="inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700 mb-4">
            <ArrowRightIcon class="w-5 h-5 text-gray-900 dark:text-white group-hover:text-green-500 transition-colors duration-300" />
          </div>

          <p class="font-medium text-gray-900 dark:text-white text-[15px] mb-1">{{ next.title }}</p>
          <ContentRendererMarkdown v-if="next.excerpt" :value="next.excerpt" class="text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-3" />
        </NuxtLink>
      </div>


      <hr class="h-line" />
    </div>
  </article>
</template>