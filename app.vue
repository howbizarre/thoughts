<script setup lang="ts">
const i18nHead = useLocaleHead({
  addSeoAttributes: true
});

useHead({
  titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | HB's Thoughts` : "How Bizarre's Thoughts",
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
});
</script>

<template>
  <main id="default-layout" class="max-w-3xl mx-auto p-2 md:px-0">
    <Logos />
    <Header />

    <div id="default-page" class="content">
      <NuxtPage />
    </div>

    <Footer />
  </main>
</template>

<style>
body, html { @apply flex flex-col; }
html { @apply size-full; }
body { @apply min-h-full min-w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 relative font-sans; }

h1, h2, h3, h4, h5, h6, .hN { @apply font-serif text-gray-900 dark:text-gray-100; }

.page-enter-active,
.page-leave-active { @apply transition-all duration-200; }
.page-leave-to { @apply opacity-0 -translate-y-1.5; }
.page-enter-from { @apply opacity-0 translate-y-1.5; }
</style>