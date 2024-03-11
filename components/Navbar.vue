<script setup lang="ts">
import { HomeIcon } from '@heroicons/vue/24/outline';
const { t } = useI18n();

const { locale } = useI18n();
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
const localeNavigation = computed(() => navigation.value ? navigation.value.filter((item) => item._path === `/${locale.value}`) : []);
const localePath = useLocalePath();
const path = computed(() => localePath('/'));
</script>

<template>
  <ContentNavigation v-slot="{ navigation }">
    <nav class="grid grid-flow-col auto-cols-max gap-2">
      <NuxtLink :to="path" class="btn btn-default btn-icon" role="button" :aria-label="t('LBL_LOAD_HOME_PAGE')">
        <HomeIcon class="h-5 w-5" />
      </NuxtLink>

      <template v-for="nav of localeNavigation" :key="nav._path">
        <template v-for="link of nav.children" :key="link._path">
          <NuxtLink :to="link._path" class="btn btn-default">
            {{ link.title }}
          </NuxtLink>
        </template>
      </template>
    </nav>
  </ContentNavigation>
</template>