<template>
  <div class="rounded-2xl">
    <ContentDoc v-slot="{ doc }">
      <div class="mt-4">
        <header class="p-5">
          <h1 class="text-4xl font-medium text-left">{{ doc.title }}</h1>
        </header>

        <div class="p-5">
          <ContentRenderer :value="doc" class="prose dark:prose-invert max-w-full prose-blockquote:border-gray-500/50" />
        </div>
      </div>
    </ContentDoc>
  </div>
</template>
