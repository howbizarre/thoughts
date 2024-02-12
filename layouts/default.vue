<template>
  <main id="default-layout" class="max-w-3xl p-4 mx-auto content">
    <Logos />
    <Header />

    <div id="default-page">
      <slot />
    </div>

    <Footer />
  </main>
</template>
