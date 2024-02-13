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
  <div class="my-4 px-1 sm:flex sm:justify-between leading-5 z-0">
    <div class="flex justify-center sm:justify-start">
      <NuxtLink :to="localePath('/')" title="HB's Thoughts">
        <img ref="logo" src="/images/logo.svg" alt="HB's Thoughts" class="w-12 h-12 rounded-full bg-white dark:bg-gray-500 scale-95" />
      </NuxtLink>

      <div class="ml-3">
        <h1 class="text-2xl font-semibold">
          <NuxtLink :to="localePath('/')" title="HB's Thoughts">
            HB's Thoughts
          </NuxtLink>
        </h1>
        
        <p class="text-gray-500">I try to think really hard.</p>
      </div>
    </div>

    <div class="flex justify-center mt-3 sm:mt-0 sm:justify-between items-end gap-1">
      <NuxtLink to="https://nuxt.com/" target="_blank" external><img src="/images/svgs/nuxt.svg" alt="Nuxt" class="w-8 h-8 rounded-full bg-white/50 dark:bg-black/50 p-1" /></NuxtLink>
      <NuxtLink to="https://vuejs.org/" target="_blank" external><img src="/images/svgs/vue.svg" alt="Vue" class="w-8 h-8 rounded-full bg-white/50 dark:bg-black/50 p-1" /></NuxtLink>
      <NuxtLink to="https://tailwindcss.com/" target="_blank" external><img src="/images/svgs/tailwindcss.svg" alt="Tailwind CSS" class="w-8 h-8 rounded-full bg-white/50 dark:bg-black/50 p-1" /></NuxtLink>
      <NuxtLink to="https://www.typescriptlang.org/" target="_blank" external><img src="/images/svgs/ts.svg" alt="TypeScript" class="w-8 h-8 rounded-full bg-white/50 dark:bg-black/50 p-1" /></NuxtLink>
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