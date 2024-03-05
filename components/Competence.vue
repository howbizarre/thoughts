<script setup lang="ts">
defineProps({ competence: String });

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <NuxtLink :to="localePath(`/competence/${competence}`)" class="py-1 px-2 rounded-xl bg-gray-500 !text-white text-xs inline-block">
    {{ t((`COMPETENCE_${competence}`).toUpperCase()) }}
  </NuxtLink>
</template>