<template>
  <div class="rounded-2xl">
    <ContentDoc v-slot="{ doc }">
      <div class="mt-4">
        <header class="p-5">
          <h1 class="text-4xl font-bold lg:w-2/3 text-left">{{ doc.title }}</h1>
        </header>

        <div class="p-5">
          <ContentRenderer :value="doc" />
        </div>
      </div>
    </ContentDoc>
  </div>
</template>