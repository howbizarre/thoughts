<script lang="ts" setup>
import { ArrowRightEndOnRectangleIcon } from '@heroicons/vue/24/outline';

const localePath = useLocalePath();
const { t, locale } = useI18n();

const path = computed(() => localePath('/'));
const search = ref("");
const miniSearchOptions = defineMiniSearchOptions({ fields: ["title", "content"] });

const results = await searchContent(search, { miniSearch: miniSearchOptions });
const filteredResults = computed(() => results.value.filter(res => res.id.startsWith(`${path.value}/`) && !res.titles.length));

const description = {
  "bg": "Попълвате в полето думата, която Ви интересува, и веднага получавате като резултат статии, които съдържат тази дума.",
  "en": "You fill in the field the word you are interested in and you immediately get as a result articles that contain that word."
};

useHead({
  title: t('LBL_SEARCH'),
  meta: [{ name: 'description', content: description[(locale.value as 'bg' | 'en')] }]
});
</script>

<template>
  <main class="grid grid-cols-1 gap-10">
    <ContentDoc v-slot="{ doc }">
      <div class="mt-4">
        <header class="p-5">
          <h1 class="text-4xl font-bold text-left">{{ doc.title }}</h1>
        </header>

        <input v-model="search" :placeholder="t('LBL_TYPE_SOMETHING')" class="border w-[97.5%] mx-auto text-sm rounded-lg block p-2.5 bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        <div class="p-5">
          <ContentRenderer :value="doc" class="text-sm prose dark:prose-invert max-w-full prose-blockquote:border-gray-500/50" />
        </div>
      </div>
    </ContentDoc>

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
            <p class="flex items-center justify-end">{{ t("LBL_READ_MORE") }}
              <ArrowRightEndOnRectangleIcon class="size-5 ml-1" />
            </p>
          </NuxtLink>
        </div>
      </div>
    </template>
  </main>
</template>
