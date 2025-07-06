<template>
  <div class="flex flex-col justify-between">
    <img data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine" :src="project.imageUrl"
      class="h-[180px] w-full rounded-md" :alt="project.alt" />
    <h2 data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine"
      class="font-bold text-2xl uppercase text-[#dac5a7] my-2">
      <a :href="project.websiteUrl" target="_blank">{{ project.name }}</a>
    </h2>
    <p data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine" class="text-base text-[#dac5a7]">
      {{ project.description }}
    </p>
    <div class="mt-2 flex flex-wrap items-center justify-start gap-2">
      <p data-aos="fade-zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-sine"
        v-for="(tag, index) in project.tag" :key="index"
        class="text-xs max-w-max font-semibold uppercase px-4 py-1 text-[#dac5a7] border-2 border-[#dac5a7] border-solid rounded-full md:block mb-5">
        {{ tag }}
      </p>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const props = defineProps({
  project: Object,
});
</script>
