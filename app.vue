<script setup lang="ts">
const siteHomeTitle = "How Bizarre's Thoughts";
const sitePageTitle = "HB's Thoughts";

useHead({ titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | ${sitePageTitle}` : siteHomeTitle });
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body, html { @apply flex flex-col; }
html { @apply h-full w-full; }
body { @apply min-h-full min-w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 relative font-sans; }

h1, h2, h3, h4, h5, h6, .hN { @apply font-serif text-gray-900 dark:text-gray-100; }

.page-enter-active,
.page-leave-active { @apply transition-all duration-200; }
.page-leave-to { @apply opacity-0 -translate-y-1.5; }
.page-enter-from { @apply opacity-0 translate-y-1.5; }
</style>