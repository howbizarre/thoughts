<script setup lang="ts">
import { InformationCircleIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="p-3 text-sm leading-relaxed bg-blue-200/50 border border-blue-500/25 text-black dark:bg-blue-800/50 dark:text-white rounded-lg relative">
    <InformationCircleIcon class="size-6 inline-block text-blue-500 absolute bottom-2 right-2" />
    <ContentSlot unwrap="p" />
  </div>
</template>