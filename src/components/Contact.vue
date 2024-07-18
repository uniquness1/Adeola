<template>
  <section class="w-full">
    <div class="max-w-6xl mx-auto px-4 py-5 sm:py-10 overflow-hidden border-b">
      <h2
        class="font-bold text-3xl md:text-6xl uppercase dark:text-slate-300 text-slate-800"
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
      >
        Let's Talk
      </h2>
      <div
        class="flex flex-col gap-4 md:flex-row justify-between md:items-center"
      >
        <div class="flex flex-col gap-2 mt-2">
          <p
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            class="text-sm sm:text-base"
          >
            For Inquires and business conversation reach out to me on
          </p>
          <a
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            href="mailto:aajijola3@gmail.com"
            >aajijola3@gmail.com</a
          >
          <a
            data-aos="fade-zoom-in"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            href="tel:+2349152931633"
            >+2349152931633</a
          >
        </div>
        <router-link
          class="text-base font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block max-w-max button"
          to="/contact"
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
          >Contact Me</router-link
        >
      </div>
    </div>
  </section>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
</script>
