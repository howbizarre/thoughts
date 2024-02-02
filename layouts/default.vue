<script lang="ts" setup>
const localePath = useLocalePath();
</script>

<template>
  <main id="default-layout" class="max-w-3xl p-4 mx-auto">
    <Header />

    <div id="default-page">
      <slot />
    </div>
  </main>
</template>
