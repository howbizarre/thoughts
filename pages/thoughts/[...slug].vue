<script lang="ts" setup>
const localePath = useLocalePath();
const route = useRoute();
const { slug } = route.params;
</script>

<template>
  <main class="bg-white dark:bg-black rounded-2xl mb-4">
    <article>
      <ContentDoc :path="localePath(`${slug}`)" v-slot="{ doc }">
        <div class="mt-4 content">
          <header>
            <div class="text-center p-5">
              <h1 class="text-4xl font-bold lg:w-2/3 mx-auto">{{ doc.title }}</h1>
              <p class="text-gray-500 text-sm mt-2">{{ doc.date }}</p>

              <div v-if="doc.tags" class="mt-2 text-xs">
                <NuxtLink v-for="tag in doc.tags" :to="localePath(`/tag/${tag}`)" class="p-1 rounded bg-gray-100 dark:bg-gray-900 text-gray-500 mr-2">
                  {{ tag }}
                </NuxtLink>
              </div>
            </div>

            <img v-if="doc.thumbnail"
                 :src="doc.thumbnail"
                 :alt="doc.title"
                 class="w-full" />
          </header>

          <div class="mt-4 content p-5">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </ContentDoc>
    </article>
  </main>
</template>