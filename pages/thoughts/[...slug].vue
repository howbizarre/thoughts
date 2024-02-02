<script lang="ts" setup>
const localePath = useLocalePath();
const route = useRoute();

const { slug } = route.params;
const isMonted = ref(false);

onMounted(() => isMonted.value = true);
</script>

<template>
  <main>
    <template v-if="isMonted">
      <ClientOnly>
        <Teleport to="#header">
          <Back />
        </Teleport>
      </ClientOnly>
    </template>

    <article class="bg-white dark:bg-black rounded-2xl">
      <ContentDoc :path="localePath(`${slug}`)" v-slot="{ doc }">
        <div class="mt-4 content">
          <header>
            <div class="text-center p-5">
              <h1 class="text-4xl font-bold lg:w-2/3 mx-auto">{{ doc.title }}</h1>
              <p class="text-gray-500 text-sm mt-2">{{ doc.date }}</p>
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