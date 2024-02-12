<script setup lang="ts">
defineProps({ competence: String });
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath(`/competence/${competence}`)" class="p-1 rounded bg-gray-500 !text-white mr-0.5 text-xs">
    {{ competence }}
  </NuxtLink>
</template>