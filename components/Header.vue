<script lang="ts" setup>
const header = ref<HTMLElement | null>(null);
const sticky = header.value ? header.value.offsetTop : 16;

const stickIt = () => {
  if (header.value) {
    if (window.scrollY >= sticky) {
      header.value.classList.add('sticky-active');
    } else {
      header.value.classList.remove('sticky-active')
    }
  }
};

onMounted(() => window.addEventListener('scroll', stickIt));
onBeforeUnmount(() => window.removeEventListener('scroll', stickIt));
</script>

<template>
  <header ref="header" id="header" class="flex transition-colors duration-300 justify-between bg-white dark:bg-black rounded-2xl shadow-lg p-3 mb-4 sticky top-0 z-50">
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