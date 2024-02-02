<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value);
});
</script>

<template>
  <div>
    <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="btn btn-default">
      {{ locale.name }}
    </NuxtLink>
  </div>
</template>