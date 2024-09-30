<script lang="ts" setup>
const localePath = useLocalePath();

const path = computed(() => localePath('/'));
const search = ref("");
const miniSearchOptions = defineMiniSearchOptions({ fields: ["title", "content"] });

const results = await searchContent(search, { miniSearch: miniSearchOptions });
const filteredResults = computed(() => results.value.filter(res => res.id.startsWith(`${path.value}/`) && !res.titles.length));
</script>

<template>
  <main>
    <input v-model="search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    
    <template v-if="filteredResults.length">
      <div v-for="result in filteredResults" :key="result.id">
        <h2>{{ result.title }}</h2>
        <p>{{ result.content }}</p>
      </div>
    </template>
    <template v-else>
      <p>No results found</p>
    </template>
  </main>
</template>
