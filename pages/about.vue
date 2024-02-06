<template>
  <main>
    <article class="bg-white dark:bg-black rounded-2xl">
      <ContentDoc v-slot="{ doc }">
        <div class="mt-4 content">
          <header class="p-5">
            <h1 class="text-4xl font-bold lg:w-2/3 text-left">{{ doc.title }}</h1>
          </header>

          <div class="content p-5">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </ContentDoc>
    </article>
  </main>
</template>