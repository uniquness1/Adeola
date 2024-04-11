<template>
  <section class="w-full border-b">
    <div class="max-w-7xl mx-auto px-4 py-5 sm:pt-10 overflow-hidden">
      <h2
        class="font-bold text-3xl md:text-8xl uppercase dark:text-slate-300 text-slate-800"
      >
        Let's Talk
      </h2>
      <div
        class="flex flex-col gap-4 md:flex-row justify-between md:items-center"
      >
        <div class="flex flex-col gap-2 mt-2">
          <p class="text-sm sm:text-base">
            For Inquires and business conversation reach out to me on
          </p>
          <a href="mailto:aajijola3@gmail.com">aajijola3@gmail.com</a>
          <a href="tel:+2349152931633">+2349152931633</a>
        </div>
        <router-link
          class="text-base font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block max-w-max button"
          to="/contact"
          >Contact Me</router-link
        >
      </div>
    </div>
  </section>
</template>
