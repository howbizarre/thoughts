<script lang="ts" setup>
const localePath = useLocalePath();
const logo = ref<HTMLElement | null>(null);

function doRound() {
  logo.value?.addEventListener('mouseover', function rotateImage(event: MouseEvent) {
    const target = event.target as HTMLElement;

    target?.classList.add('rotate');
    target?.removeEventListener('mouseover', rotateImage);
  });
}

onMounted(() => doRound());
</script>

<template>
  <div class="my-4 px-1 flex justify-start items-center leading-5 z-0">
    <NuxtLink :to="localePath('/')" title="HB's Thoughts">
      <img ref="logo" src="/images/thoughtful/logo.svg" alt="HB's Thoughts" class="w-12 h-12 rounded-full bg-white dark:bg-gray-500 scale-95" />
    </NuxtLink>

    <div class="ml-3">
      <h1 class="text-2xl font-semibold">HB's Thoughts</h1>
      <p class="text-gray-500">I try to think really hard.</p>
    </div>
  </div>
</template>

<style scoped>
.rotate {
  @apply rotate-[360deg] transition-transform	duration-500;
}

.rotate:hover {
  @apply scale-100;
}
</style>