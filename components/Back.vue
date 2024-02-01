<template>
  <div class="relative inline-block">
    <ClientOnly>
      <button @click="goBack" class="btn btn-default">
        <ChevronLeftIcon class="h-6 w-6 btn--icon-left" /> <slot>Back</slot>
      </button>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
import { ChevronLeftIcon } from '@heroicons/vue/24/solid';

const router = useRouter();
const goBack = () => router.go(-1);
</script>