<script setup lang="ts">
const header = ref<HTMLElement | null>(null);
const sticky = ref(104);

const stickIt = () => {
  if (header.value) {
    if (window.scrollY >= sticky.value) {
      header.value.classList.add('sticky-active');
    } else {
      header.value.classList.remove('sticky-active')
    }
  }
};

onBeforeMount(() => window.addEventListener('scroll', stickIt));
onMounted(() => sticky.value = header.value?.offsetTop || 104);
onBeforeUnmount(() => window.removeEventListener('scroll', stickIt));
</script>

<template>
  <header ref="header" class="max-w-3xl mx-auto flex transition-all duration-300 justify-between bg-white dark:bg-black rounded-2xl shadow-lg p-3 mb-10 sticky top-0 z-50">
    <NavigationTopBar />

    <div class="grid grid-flow-col auto-cols-max gap-2">
      <NavigationLangSwitcher />
      <ClientColorMode />
    </div>
  </header>
</template>

<style scoped>
.sticky-active {
  @apply rounded-tl-none rounded-tr-none !max-w-[50rem];
}
</style>