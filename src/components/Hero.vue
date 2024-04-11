<template>
  <section class="w-full border-b">
    <div class="max-w-7xl mx-auto px-4 pt-5 sm:pt-10 overflow-hidden">
      <div class="flex flex-col w-full">
        <h1
          class="font-bold max-w-lg sm:max-w-7xl w-full text-6xl sm:text-7xl md:text-8xl xl:text-9xl uppercase dark:text-slate-300 text-slate-800"
        >
          Fr<span class="animated-letter">o</span>nt-End
        </h1>
        <h1
          class="font-bold max-w-lg sm:max-w-7xl w-full text-6xl sm:text-7xl md:text-8xl xl:text-9xl uppercase dark:text-slate-300 text-slate-800 text-right"
        >
          Devel<span class="animated-letter">o</span>per
        </h1>
      </div>
      <div class="grid lg:grid-cols-2 gap-10 justify-end w-full my-5 md:my-10">
        <div class="hidden lg:block"></div>
        <div>
          <p
            class="lg:text-left dark:text-slate-300 text-slate-800 text-base sm:text-xl max-w-2xl w-full mb-4"
          >
            I'm a Developer with a handful of experience developing beautiful
            and easy-to-use websites and apps. I'm great with HTML, CSS,
            JavaScript and using modern tools like React, VueJs as well as
            content management systems(CMS) like Wordpress and Drupal to make
            things run smoothly and work on any device. I enjoy and thrive
            working with others to create the best possible experiences, and I'm
            always learning new things to make me even better and excited to use
            my skills and creativity to build something amazing!
          </p>
          <router-link
            class="text-base font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block max-w-max button"
            to="/about"
            >About Me</router-link
          >
        </div>
      </div>
    </div>
    <Test />
  </section>
</template>

<script setup>
import Test from "./Test.vue";
</script>

<style scoped>
@media (max-width: 450px) {
  h1 {
    font-size: 45px;
  }
}
@media (max-width: 350px) {
  h1 {
    font-size: 34.5px;
  }
}
</style>
