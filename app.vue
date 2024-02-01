<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body, html { @apply flex flex-col; }
html { @apply h-full w-full; }
body { @apply min-h-full min-w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 relative; }

.page-enter-active,
.page-leave-active { @apply transition-all duration-200; }
.page-leave-to { @apply opacity-0 -translate-y-1.5; }
.page-enter-from { @apply opacity-0 translate-y-1.5; }

.layout-enter-active,
.layout-leave-active { @apply transition-all duration-200; }
.layout-leave-to { @apply opacity-0 -translate-y-1.5; }
.layout-enter-from { @apply opacity-0 translate-y-1.5; }
</style>