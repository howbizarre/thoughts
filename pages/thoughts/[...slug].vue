<script lang="ts" setup>
const { locale } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { slug } = route.params;
</script>

<template>
  <main class="rounded-2xl mb-4">
    <article>
      <ContentDoc :path="localePath(`${slug}`)" v-slot="{ doc }">
        <div class="mt-4 content">
          <header>
            <div class="text-center p-5">
              <h1 class="text-4xl font-bold lg:w-2/3 mx-auto">{{ doc.title }}</h1>
              <p class="text-gray-500 text-sm mt-2">{{ (new Date(doc.date)).toLocaleDateString(locale) }}</p>

              <div v-if="doc.tags" class="mt-2">
                <template v-for="tag in doc.tags">
                  <Tag :tag="tag" />
                </template>
              </div>
            </div>

            <img v-if="doc.thumbnail"
                 :src="doc.thumbnail"
                 :alt="doc.title"
                 class="w-full rounded-2xl" />
          </header>

          <div class="mt-4 content p-5">
            <ContentRenderer :value="doc" />
          </div>
        </div>
      </ContentDoc>
    </article>
  </main>
</template>