<script setup lang="ts">
const props = defineProps({
  tag: { type: String, required: true },
  active: Boolean
});
const { tag, active } = toRefs(props);

const { t } = useI18n();
const localePath = useLocalePath();
const path = computed(() => localePath(`/tag/${tag.value}`));
</script>

<template>
  <NuxtLink :to="path"
            :class="active ? 'bg-white text-black dark:bg-black dark:text-white' : 'bg-gray-500 !text-white'"
            class="py-1 px-2 m-1 sm:mx-1 rounded-xl text-xs inline-block">
    {{ t((`TAG_${tag}`).toUpperCase()) }}
  </NuxtLink>
</template>