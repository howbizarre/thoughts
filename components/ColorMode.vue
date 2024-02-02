<script lang="ts" setup>
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid';

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
      <button @click="isDark = !isDark" class="btn btn-default inline">
        <template v-if="isDark">
          <SunIcon class="h-4 w-4" />
        </template>
        <template v-else>
          <MoonIcon class="h-4 w-4" />
        </template>
      </button>
    </ClientOnly>
  </div>
</template>