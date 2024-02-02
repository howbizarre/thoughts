<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div>
    <NuxtLink :to="switchLocalePath('en')" class="btn btn-default inline mx-1">EN</NuxtLink>
    <NuxtLink :to="switchLocalePath('bg')" class="btn btn-default inline mx-1">БГ</NuxtLink>
  </div>
</template>

<style scoped>
.router-link-active.router-link-exact-active {
  @apply bg-black text-white dark:bg-white dark:text-black;
}
</style>