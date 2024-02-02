<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline';

const { locale } = useI18n();
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
const localeNavigation = computed(() => navigation.value ? navigation.value.filter((item) => item._path === `/${locale.value}`) : []);
const localePath = useLocalePath();
</script>

<template>
  <ContentNavigation v-slot="{ navigation }">
    <nav class="grid grid-flow-col auto-cols-max gap-2">
      <NuxtLink :to="localePath('/')" class="btn btn-default">
        <HomeIcon class="h-5 w-5" />
      </NuxtLink>

      <NuxtLink v-for="link of localeNavigation[0].children" :key="link._path" :to="link._path" class="btn btn-default">
        {{ link.title }}
      </NuxtLink>
    </nav>
  </ContentNavigation>
</template>