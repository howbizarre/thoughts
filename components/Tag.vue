<script setup lang="ts">
defineProps({ tag: String });
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath(`/tag/${tag}`)" class="p-1 rounded bg-gray-500 !text-white mr-0.5 text-xs">
    {{ tag }}
  </NuxtLink>
</template>