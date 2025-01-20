<script setup lang="ts">
import { LanguageIcon } from '@heroicons/vue/24/solid';

const { locale, locales } = useI18n();
const availableLocales = computed(() => (locales.value).filter(i => i.code !== locale.value));

const switchLocalePath = useSwitchLocalePath();
const changeHtmlLang = (lang: string) => document.documentElement.lang = lang;

watch(locale, () => changeHtmlLang(locale.value));
onBeforeMount(() => changeHtmlLang(locale.value));
</script>

<template>
  <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)" class="btn btn-default">
    <LanguageIcon class="btn--icon-left" /> {{ locale.name }}
  </NuxtLink>
</template>