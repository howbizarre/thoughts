<template>
  <main>
    <article class="bg-white dark:bg-black rounded-2xl">
      <ContentDoc v-slot="{ doc }">
        <div class="mt-4 content">
          <header>
            <div class="text-center p-5">
              <h1 class="text-4xl font-bold lg:w-2/3 mx-auto">{{ doc.title }}</h1>
            </div>
          </header>

          <div class="mt-4 content p-5">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </ContentDoc>
    </article>
  </main>
</template>