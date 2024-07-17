<template>
  <div class="md:h-[400px] flex flex-col justify-between">
    <img
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      :src="project.imageUrl"
      class="h-[200px] sm:h-[200px] w-full rounded-md"
      :alt="project.alt"
    />
    <h2
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      class="font-bold text-3xl uppercase dark:text-slate-300 text-slate-800 my-4"
    >
      <a :href="project.websiteUrl" target="_blank">{{ project.name }}</a>
    </h2>
    <p
      data-aos="fade-zoom-in"
      data-aos-duration="1500"
      data-aos-easing="ease-in-sine"
      class="text-sm sm:text-base"
    >
      {{ project.description }}
    </p>
    <div
      class="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-2"
    >
      <p
        data-aos="fade-zoom-in"
        data-aos-duration="1500"
        data-aos-easing="ease-in-sine"
        v-for="(tag, index) in project.tag"
        :key="index"
        class="text-xs max-w-max font-semibold uppercase px-4 py-1 text-black dark:text-white border-2 border-black dark:border-white border-solid rounded-full md:block mb-5"
      >
        {{ tag }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const props = defineProps({
  project: Object,
});
</script>
