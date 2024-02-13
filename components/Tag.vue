<script setup lang="ts">
defineProps({ tag: String });
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath(`/tag/${tag}`)" class="py-1 px-2 rounded-xl bg-gray-500 !text-white mr-1 text-xs">
    {{ tag }}
  </NuxtLink>
</template>