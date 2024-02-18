<script lang="ts" setup>
const i18nHead = useLocaleHead({
  addSeoAttributes: {}
});

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])]
});
</script>

<template>
  <main id="default-layout" class="max-w-3xl mx-auto p-4 md:px-0">
    <Logos />
    <Header />

    <div id="default-page" class="content">
      <slot />
    </div>

    <Footer />
  </main>
</template>
