<script lang="ts" setup>
const { locale, t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();
const { tag } = route.params;
const pageTitle = `${t('LBL_TAG')} - ${t((`TAG_${(tag)}`).toUpperCase())}`;

const { data } = await useAsyncData('[tag]', () => queryContent(localePath('/articles')).find());
const tags = data.value ? [...new Set(data.value.flatMap(article => article.tags))] : [];
const articles = data.value ? data.value.filter(doc => doc.tags.includes(tag)) : [];

useHead({ title: pageTitle });
</script>

<template>
  <div v-if="tag" class="grid grid-cols-1 gap-10">
    <h1 class="text-3xl font-bold text-center">
      {{ pageTitle }}
    </h1>

    <div class="excerpt-card">
      {{ t('LBL_MORE') }}:
      <template v-for="tag in tags">
        <Tag :tag="tag" class="ml-2" />
      </template>
    </div>

    <div v-for="doc in articles" :key="doc._path" class="excerpt-card">
      <ContentRenderer :value="doc">
        <div class="text-sm text-gray-500 -mb-1 block">
          {{ (new Date(doc.date)).toLocaleDateString(locale) }}
        </div>

        <h3 class="text-2xl font-bold">
          <NuxtLink :to="localePath(`/articles/${doc.slug}`)">
            {{ doc.title }}
            <span class="sr-only">Link to the blog post</span>
          </NuxtLink>
        </h3>

        <div v-if="doc?.excerpt" class="pr-4 my-3">
          <ContentRendererMarkdown :value="doc.excerpt" />
        </div>

        <hr class="h-line" />

        <div class="grid grid-col-1 sm:flex sm:justify-start sm:items-center gap-2 sm:gap-5">
          <div v-if="doc.competence">
            {{ t("LBL_COMPETENCE") }}:
            <Competence :competence="doc.competence" />
          </div>

          <div v-if="doc.tags">
            {{ t("LBL_TAGS") }}:
            <template v-for="tag in doc.tags">
              <Tag :tag="tag" />
            </template>
          </div>
        </div>
      </ContentRenderer>
    </div>

    <!-- <ContentList :query="query" v-slot="{ list }">
      <div v-for="doc in list"
           :key="doc.slug"
           class="excerpt-card">
        <div class="text-sm text-gray-500 -mb-1 block">
          {{ (new Date(doc.date)).toLocaleDateString(locale) }}
        </div>

        <h3 class="text-2xl font-bold">
          <NuxtLink :to="localePath(`/articles/${doc.slug}`)">
            {{ doc.title }}
            <span class="sr-only">Link to the blog post</span>
          </NuxtLink>
        </h3>

        <div v-if="doc?.excerpt" class="pr-4 my-3">
          <ContentRendererMarkdown :value="doc.excerpt" />
        </div>

        <hr class="h-line" />

        <div class="grid grid-col-1 sm:flex sm:justify-start sm:items-center gap-2 sm:gap-5">
          <div v-if="doc.competence">
            {{ t("LBL_COMPETENCE") }}:
            <Competence :competence="doc.competence" />
          </div>

          <div v-if="doc.tags">
            {{ t("LBL_TAGS") }}:
            <template v-for="tag in doc.tags">
              <Tag :tag="tag" />
            </template>
          </div>
        </div>
      </div>
    </ContentList> -->
  </div>
</template>