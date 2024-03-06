<script setup lang="ts">
defineProps({
  tag: String,
  active: Boolean
});

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath(`/tag/${tag}`)"
            :class="active ? 'bg-white text-black dark:bg-black dark:text-white' : 'bg-gray-500 !text-white'"
            class="py-1 px-2 m-1 rounded-xl text-xs inline-block">
    {{ t((`TAG_${tag}`).toUpperCase()) }}
  </NuxtLink>
</template>