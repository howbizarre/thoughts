<script lang="ts" setup>
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

onMounted(() => {
  sticky.value = header.value?.offsetTop || 104;
  window.addEventListener('scroll', stickIt);
});
onBeforeUnmount(() => window.removeEventListener('scroll', stickIt));
</script>

<template>
  <header ref="header" class="flex transition-colors duration-300 justify-between bg-white dark:bg-black rounded-2xl shadow-lg p-3 mb-10 sticky top-0 z-50">
    <Navbar />

    <div class="grid grid-flow-col auto-cols-max gap-2">
      <LangSwitcher />
      <ColorMode />
    </div>
  </header>
</template>

<style scoped>
.sticky-active {
  @apply rounded-tl-none rounded-tr-none bg-slate-500 dark:bg-slate-700;
}
</style>