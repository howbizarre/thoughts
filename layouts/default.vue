<template>
  <main id="default-layout" class="max-w-3xl mx-auto p-4 md:px-0">
    <Logos />
    <Header />

    <div id="default-page" class="content">
      <slot />
    </div>

    <Footer />
  </main>
</template>
