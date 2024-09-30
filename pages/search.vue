<script lang="ts" setup>
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline';

const localePath = useLocalePath();
const { t } = useI18n();

const path = computed(() => localePath('/'));
const search = ref("");
const miniSearchOptions = defineMiniSearchOptions({ fields: ["title", "content"] });

const results = await searchContent(search, { miniSearch: miniSearchOptions });
const filteredResults = computed(() => results.value.filter(res => res.id.startsWith(`${path.value}/`) && !res.titles.length));
</script>

<template>
  <main class="grid grid-cols-1 gap-10">
    <input v-model="search" :placeholder="t('LBL_TYPE_SOMETHING')" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

    <template v-if="filteredResults.length">
      <div v-for="result in filteredResults" :key="result.id" class="excerpt-card">
        <h2 class="text-2xl font-bold">
          <NuxtLink :to="result.id">
            {{ result.title }}
          </NuxtLink>
        </h2>

        <div class="pr-4 my-3">
          <p>{{ result.content }}</p>

          <NuxtLink :to="result.id">
            <p class="flex items-center justify-end">{{ t("LBL_READ_MORE") }} <ArrowRightEndOnRectangleIcon class="size-5 ml-1" /></p>
          </NuxtLink>
        </div>
      </div>
    </template>
  </main>
</template>
