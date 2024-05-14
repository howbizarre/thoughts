<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/types';
import { BarsArrowDownIcon } from '@heroicons/vue/24/outline';

const localePath = useLocalePath();
const { t, locale } = useI18n();
const path = computed(() => localePath(`/articles`));

const paginatedContent = ref([] as ParsedContent[]);
const countContent = await queryContent(path.value).count();
const hasLoad = computed(() => countContent > paginatedContent.value.length);
const showLoad = ref(false);

const description = {
  "bg": "Статии, предимно за Vue, Nuxt, TailwindCSS, TypeScript, но не само. Повече за front-end и по-малко за back-end.",
  "en": "Articles mostly about Vue, Nuxt, TailwindCSS, and TypeScript, but not limited to — more on the front-end and less on the back-end."
};

const paginateData = async (limit: number = 3, skip: number = 0) => {
  if (import.meta.dev) return await queryContent(path.value)
    .sort({ date: -1 })
    .limit(limit)
    .skip(skip)
    .find();

  return await queryContent(path.value)
    .where({ draft: false })
    .sort({ date: -1 })
    .limit(limit)
    .skip(skip)
    .find();
};

const paginate = async () => {
  const skip = paginatedContent.value.length;
  const data = await paginateData(3, skip);

  paginatedContent.value = [...paginatedContent.value, ...data];
};

onMounted(async () => {
  paginatedContent.value = await paginateData(3, 0);
  showLoad.value = true;
});

useHead({
  title: "",
  meta: [{ name: 'description', content: description[(locale.value as 'bg' | 'en')] }]
});
</script>

<template>
  <div class="grid grid-cols-1 gap-10">
    <template v-for="doc in paginatedContent" :key="doc._path">
      <ArticleExcerpt :doc="doc" />
    </template>

    <template v-if="showLoad && hasLoad">
      <button @click="paginate" class="flex justify-between items-center w-full excerpt-card">
        <span>{{ t('LBL_LOAD_MORE_ARTICLES') }}</span>
        <BarsArrowDownIcon class="size-5" />
      </button>
    </template>
  </div>
</template>