<script setup lang="ts">
const { locale } = useI18n();
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
const localeNavigation = computed(() => navigation.value ? navigation.value.filter((item) => item._path === `/${locale.value}`) : []);
const localePath = useLocalePath();
</script>

<template>
  <nav>
    <ContentNavigation v-slot="{ navigation }">
      <ul>
        <li>
          <NuxtLink :to="localePath('/')">{{ $t('hi') }}</NuxtLink>
        </li>
        <li v-for="link of localeNavigation[0].children" :key="link._path">
          <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
        </li>
      </ul>
    </ContentNavigation>
  </nav>
</template>