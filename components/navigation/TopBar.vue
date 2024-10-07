<script setup lang="ts">
import { HomeIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

const { t, locale } = useI18n();
const localePath = useLocalePath();
const { data: navigation } = await useAsyncData(`[navigation-${locale.value}]`, () => fetchContentNavigation());
const localeNavigation = computed(() => navigation.value ? navigation.value.filter((item) => item._path === `/${locale.value}`) : []);
const path = computed(() => localePath('/'));
const isSearchPath = (path: string) => path.endsWith('/search');
</script>

<template>
  <ContentNavigation v-slot="{ navigation }">
    <nav class="grid grid-flow-col auto-cols-max gap-2">
      <NuxtLink :to="path" class="btn btn-default btn-icon" role="button" :aria-label="t('LBL_LOAD_HOME_PAGE')">
        <HomeIcon class="size-5" />
      </NuxtLink>

      <template v-for="navigationItem of localeNavigation" :key="navigationItem._path">
        <template v-for="link of navigationItem.children" :key="link._path">
          <NuxtLink :to="link._path" class="btn btn-default" :class="{ 'btn-icon': isSearchPath(link._path) }">
            <template v-if="isSearchPath(link._path)">
              <MagnifyingGlassIcon class="size-5" />
            </template>
            <template v-else>{{ link.title }}</template>
          </NuxtLink>
        </template>
      </template>
    </nav>
  </ContentNavigation>
</template>