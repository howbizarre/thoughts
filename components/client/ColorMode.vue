<script setup lang="ts">
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';
const { t } = useI18n();

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
</script>

<template>
  <div>
    <ClientOnly>
      <button @click="isDark = !isDark" class="btn btn-default btn-icon" :aria-label="t('BTN_THEME_SWITCH')">
        <template v-if="isDark">
          <SunIcon class="size-5" />
        </template>
        <template v-else>
          <MoonIcon class="size-5" />
        </template>
      </button>
    </ClientOnly>
  </div>
</template>