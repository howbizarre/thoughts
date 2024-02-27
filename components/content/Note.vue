<script lang="ts" setup>
import { InformationCircleIcon } from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="p-3 text-sm leading-relaxed bg-blue-200/50 text-black dark:bg-blue-800/50 dark:text-white rounded-lg relative">
    <InformationCircleIcon class="h-6 w-6 inline-block text-gray-500 absolute bottom-1 right-1" />
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>